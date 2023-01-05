<template>
    <div class="login-container">
        <el-form class="login-form" :model="loginForm" :rules="rules" ref="formRef">
            <el-form-item prop="account">
                <div class="svg-container">
                    <UserFilled />
                </div>
                <el-input v-model="loginForm.account" name="account" placeholder="帐号" type="text" tabindex="1"
                    autocomplete="on" />
            </el-form-item>
            <el-form-item prop="password">
                <div class="svg-container">
                    <Key />
                </div>
                <el-input v-model="loginForm.password" name="password" placeholder="密码" type="password" tabindex="2"
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
        { required: true, message: '必须输入帐号', trigger: 'blur' },
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
        width: 95%;
        border: 0px;

        :deep(.el-input__wrapper) {
            box-shadow: 0 0 0 0px;
            background: transparent;
        }
    }

    .svg-container {
        width: 5%;
        height: 100%;
        display: flex;
        align-items: center;

        svg {
            padding-left: 2px;
        }
    }
}
</style>
