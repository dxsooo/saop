<script setup lang="ts">
</script>

<template>
    <div class="menu">
        <el-scrollbar>
            <el-menu>
                <el-menu-item index="user">用户管理</el-menu-item>
                <el-menu-item index="supplier">供应商管理</el-menu-item>
                <el-menu-item index="project">项目管理</el-menu-item>
                <el-menu-item index="task">任务管理</el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<style lang="scss">
.menu {
    border-right: none;
}
</style>
