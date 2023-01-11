<template>
    <div class="menu">
        <h2>数据标注运营平台</h2>
        <el-menu router>
            <el-menu-item v-if="isAllowUserManage()" index="/userManage">
                <el-icon>
                    <User />
                </el-icon>
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
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const store = useUserStore()
const { role_id, is_admin } = storeToRefs(store);

const isAllowUserManage = () => {
    return is_admin || Number(role_id) < 4
}

const isAllowSupplierManage = () => {
    return !is_admin && Number(role_id) < 4
}

const isAllowProjectManage = () => {
    return !is_admin && Number(role_id) < 4
}

const isAllowTaskManage = () => {
    return !is_admin
}

</script>

<style lang="scss" scoped>
.menu {
    border-right: none;
    color: #fff;

    h2 {
        // color: #fff;
        text-align: center;
        margin: 12px auto;
    }

    .el-menu {
        background-color: #1f2d3d;

        .el-menu-item {
            color: #fff;

            &:hover {
                background-color: #001528;
            }
        }
    }

}
</style>
