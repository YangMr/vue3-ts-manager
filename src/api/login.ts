import http from "@/utils/request"

// import qs from "qs"

interface loginType {
    username: string,
    password: string,
    code: string
}

// getCapture api
export const getCapture = () => {
    // return http.request("/sysUser/image", {}, {
    //     responseType: "arraybuffer"
    // })
    return http.request({
        url: '/sysUser/image',
        method: 'POST',
        responseType: "arraybuffer"
    })
}

// login api
export const login = (data: loginType) => {
    return http.request({
        url: '/user/login',
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
