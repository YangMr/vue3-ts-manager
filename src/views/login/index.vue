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
            <el-input placeholder="请输入验证码"/>
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
import {reactive, ref, getCurrentInstance} from 'vue'
import type {FormInstance, FormRules, ElForm} from 'element-plus'

const {proxy} = getCurrentInstance() as any;

const loginFormRef = ref<InstanceType<typeof ElForm>>();

// 定义表单大小
const formSize = ref('large')

// do not use same name with ref
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

const handleSubmit = () => {
  proxy.$refs.loginFormRef.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!')
    }
  })
}
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
  }
}

</style>
