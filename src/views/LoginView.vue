<template>
    <div class="login-container">
        <el-form class="login-form" :model="loginForm" label-width="60px" label-position="left">
            <el-form-item label="帐号">
                <el-input v-model="loginForm.account" name="account" type="text" tabindex="1" autocomplete="on" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginForm.password" name="password" type="password" tabindex="2"
                    autocomplete="off" />
            </el-form-item>

            <el-button type="primary" style="width:100%; margin-bottom:30px;">
                登录
            </el-button>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const loginForm = reactive({
    account: '',
    password: '',
})
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