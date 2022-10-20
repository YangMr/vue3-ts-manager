<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginModel" :rules="rules" :size="formSize">
      <el-form-item>
        <div class="login-title">系统登录</div>
      </el-form-item>

      <el-form-item prop="username">
        <el-input v-model="loginModel.username" placeholder="请输入账户"/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginModel.password" placeholder="请输入密码"/>
      </el-form-item>

      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="18" class="login">
            <el-input v-model="loginModel.code" placeholder="请输入验证码"/>
          </el-col>
          <el-col :span="6" class="cancel">
            <img :src="imgUrl" alt="验证码" class="captureImage" @click="handleGetCapture">
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-row :gutter="20" class="button-group">
          <el-col :span="12" class="login">
            <el-button type="primary" @click="handleSubmit">登录</el-button>
          </el-col>
          <el-col :span="12" class="cancel">
            <el-button>取消</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import useBaseLogin from "@/composables/login/useBaseLogin"
import useLogin from "@/composables/login/useLogin"


const {formSize, loginFormRef, loginModel, rules} = useBaseLogin()
const {handleSubmit, handleGetCapture, imgUrl} = useLogin(loginModel)

</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .el-form {
    width: 400px;
    height: 320px;
    border-radius: 10px;
    box-shadow: 0 0 25px #cac6c6;
    padding: 20px 35px;

    .el-form-item {
      width: 100%;
    }

    .el-row {
      width: 100%;
    }

    .login-title {
      font-size: 24px;
      font-weight: 600;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .button-group {
      margin-top: 5px;
    }

    .el-button {
      width: 100%;
    }

    .el-row {
      margin-left: 0 !important;
    }

    .login {
      padding-left: 0 !important;
    }

    .cancel {
      padding-right: 0 !important;
    }

    .captureImage {
      width: 100%;
      position: relative;
      top: 2px;
      height: 40px;
    }
  }
}

</style>
