import {reactive, ref} from 'vue'
import {ElForm, FormRules} from "element-plus"

export default function useBaseLogin() {
    // 定义表单大小
    const formSize = ref('large')

    // 定义表单名称
    const loginFormRef = ref<InstanceType<typeof ElForm>>();

    // 定义表单v-model绑定的数据
    const loginModel = reactive({
        username: '',
        password: '',
        code: ''
    })

    // 定义校验规则
    const rules = reactive<FormRules>({
        username: [
            {required: true, message: '请填写登录账户', trigger: 'blur'},
        ],
        password: [
            {required: true, message: '请填写登录密码', trigger: 'blur'},
        ],
        code: [
            {required: true, message: '请填写验证码', trigger: 'blur'},
        ]
    })

    return {
        formSize,
        loginFormRef,
        loginModel,
        rules
    }
}



