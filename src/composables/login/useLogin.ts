import {getCurrentInstance, onMounted, ref} from "vue";
import {getCapture, login} from "@/api/login";
import {useStore} from "@/store"
import {useRouter} from "vue-router"

interface loginType {
    username: string,
    password: string,
    code: string
}

export default function (loginModel: loginType) {
    const {proxy} = getCurrentInstance() as any;

    const store = useStore()
    const router = useRouter()

    // 定义保存验证码的变量
    const imgUrl = ref('')


    // page init load
    onMounted(() => {
        handleGetCapture()
    })

    // 获取验证码
    const handleGetCapture = async () => {
        const response = await getCapture()
        const url = 'data:image/png;base64,' + btoa(new Uint8Array(response as any).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        imgUrl.value = url
    }

    // 点击提交按钮
    const handleSubmit = () => {
        proxy.$refs.loginFormRef.validate((valid: boolean) => {
            if (valid) {
                handleLogin()
            }
        })
    }

    // 调用登录接口
    const handleLogin = async () => {
        const response = await login(loginModel)
        console.log('login response', response)
        store.commit("setToken", response.token)
        router.push("/")
    }

    return {
        handleSubmit,
        handleGetCapture,
        imgUrl
    }
}
