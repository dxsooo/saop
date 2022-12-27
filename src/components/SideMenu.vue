<template>
    <div class="menu">
        <h2>数据标注运营平台</h2>
        <el-menu router v-if="loaded">
            <el-menu-item v-if="isAllowUserManage()" index="/userManage">
                用户管理
            </el-menu-item>
            <el-menu-item v-if="isAllowSupplierManage()" index="/supplier">
                供应商管理
            </el-menu-item>
            <el-menu-item v-if="isAllowProjectManage()" index="/project">
                项目管理
            </el-menu-item>
            <el-menu-item v-if="isAllowTaskManage()" index="/task">
                任务管理
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { get_current_user_info } from '@/api/user';

const role = ref(null)
const is_admin = ref(false)
const loaded = ref(false)

onMounted(() => {
    get_current_user_info().then(res => {
        role.value = res.data.data.role_id
        is_admin.value = res.data.data.is_admin
        loaded.value = true
    })
})


const isAllowUserManage = () => {
    return is_admin.value || Number(role.value) < 4
}

const isAllowSupplierManage = () => {
    return !is_admin.value && Number(role.value) < 3
}

const isAllowProjectManage = () => {
    return !is_admin.value && Number(role.value) < 3
}

const isAllowTaskManage = () => {
    return !is_admin.value
}

</script>

<style lang="scss">
.menu {
    border-right: none;
}
</style>
