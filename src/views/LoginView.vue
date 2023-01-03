<template>
    <div class="login-container">
        <el-form class="login-form" :model="loginForm" :rules="rules" ref="formRef" label-width="60px"
            label-position="left">
            <el-form-item label="帐号" prop="account">
                <el-input v-model="loginForm.account" name="account" type="text" tabindex="1" autocomplete="on" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" name="password" type="password" tabindex="2"
                    autocomplete="off" />
            </el-form-item>
            <el-button type="primary" @click="submitForm(formRef)" style="width:100%; margin-bottom:30px;">
                登录
            </el-button>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { login } from '@/api/login'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { get_current_user_info } from '@/api/user';
import { ElNotification } from 'element-plus'


const rules = reactive<FormRules>({
    account: [
        { required: true, message: '必须输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '必须输入密码', trigger: 'blur' },
    ]
})

const formRef = ref<FormInstance>()
const loginForm = reactive({
    account: '',
    password: '',
})
const router = useRouter()

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid, fields) => {
        if (valid) {
            let res = await login(loginForm)
            // todo: 使用统一拦截器检查code？
            if (res.data.code == 0) {
                // success, goto different page for role
                res = await get_current_user_info()
                if (res.data.data.is_admin || res.data.data.role_id < 4) {
                    router.push({ name: 'userManage' });
                } else {
                    router.push('/task')
                }
            } else {
                ElNotification({
                    title: '登录失败',
                    message: res.data.message,
                    type: 'error',
                })
            }

        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>

<style lang="scss">
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

    .el-form-item__label {
        color: #fff;
    }
}
</style>