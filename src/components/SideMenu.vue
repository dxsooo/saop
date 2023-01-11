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
                <el-icon>
                    <Shop />
                </el-icon>
                供应商管理
            </el-menu-item>
            <el-menu-item v-if="isAllowProjectManage()" index="/project">
                <el-icon>
                    <Notebook />
                </el-icon>
                项目管理
            </el-menu-item>
            <el-menu-item v-if="isAllowTaskManage()" index="/task">
                <el-icon>
                    <Document />
                </el-icon>
                任务管理
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const store = useUserStore()

const isAllowUserManage = () => {
    return store.is_admin || Number(store.role_id) < 4
}

const isAllowSupplierManage = () => {
    return !store.is_admin && Number(store.role_id) < 4
}

const isAllowProjectManage = () => {
    return !store.is_admin && Number(store.role_id) < 4
}

const isAllowTaskManage = () => {
    return !store.is_admin
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
