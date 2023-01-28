<template>
  <div class="login-container">
    <el-form class="login-form" :model="form" :rules="rules" ref="formRef">
      <el-form-item prop="account">
        <span class="svg-container">
          <UserFilled />
        </span>
        <el-input
          v-model="form.account"
          name="account"
          placeholder="帐号"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <Key />
        </span>
        <el-input
          v-model="form.password"
          name="password"
          placeholder="密码"
          :type="passwordHide ? 'password' : ''"
          tabindex="2"
          autocomplete="off"
        />
        <span class="show-pwd" @click="showPwd">
          <Hide v-if="passwordHide" />
          <View v-else />
        </span>
      </el-form-item>
      <el-button
        type="primary"
        @click="submitForm(formRef)"
        style="width: 100%; margin-bottom: 30px"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { login } from '@/api/login'
import type { LoginParam } from '@/api/login'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { View } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const rules = reactive<FormRules>({
  account: [{ required: true, message: '必须输入帐号', trigger: 'blur' }],
  password: [{ required: true, message: '必须输入密码', trigger: 'blur' }],
})

const formRef = ref<FormInstance>()
const form = reactive<LoginParam>({ account: '', password: '' })
const router = useRouter()

const passwordHide = ref<boolean>(true)
const showPwd = () => {
  passwordHide.value = !passwordHide.value
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await login(form)
      // console.log(res)
      // console.log(res.data)
      if (res.code == 0 && res.data) {
        // 保存到本地存储: sessionStorage
        sessionStorage.setItem('token', res.data.token)
        router.push({ name: 'Home' })
      } else {
        ElMessage.error(res.message)
      }

      // success, goto different page for role
      // res = await get_current_user_info()
      // if (res.data.data.is_admin || res.data.data.role_id < 4) {
      //     router.push({ name: 'Home' });
      // }
      // else {
      //     router.push('/task')
      // }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #2d3a4b;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 200px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #fff;
    border-radius: 5px;
    color: #454545;
  }

  .el-input {
    display: flex;
    width: 85%;
    border: 0px;

    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0px;
      background: transparent;
    }
  }

  .svg-container {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;

    svg {
      padding-left: 2px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 20px;
  }
}
</style>
