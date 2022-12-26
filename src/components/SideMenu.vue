<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="menu">
        <el-scrollbar>
            <el-menu>
                <el-menu-item index="user">
                    <RouterLink to="/user">
                        <span>用户管理</span>
                    </RouterLink>
                </el-menu-item>
                <el-menu-item index="supplier">
                    <RouterLink to="/supplier">
                        <span>供应商管理</span>
                    </RouterLink>
                </el-menu-item>
                <el-menu-item index="project">
                    <RouterLink to="/project">
                        <span>项目管理</span>
                    </RouterLink>
                </el-menu-item>
                <el-menu-item index="task">
                    <RouterLink to="/task">
                        <span>任务管理</span>
                    </RouterLink>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<style lang="scss">
.menu {
    border-right: none;
}
</style>
