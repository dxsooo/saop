<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="menu">
        <el-menu>
            <h2>数据标注运营平台</h2>
            <el-menu-item index="user">
                <RouterLink to="/user">
                    用户管理
                </RouterLink>
            </el-menu-item>
            <el-menu-item index="supplier">
                <RouterLink to="/supplier">
                    供应商管理
                </RouterLink>
            </el-menu-item>
            <el-menu-item index="project">
                <RouterLink to="/project">
                    项目管理
                </RouterLink>
            </el-menu-item>
            <el-menu-item index="task">
                <RouterLink to="/task">
                    任务管理
                </RouterLink>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss">
.menu {
    border-right: none;
}
</style>
