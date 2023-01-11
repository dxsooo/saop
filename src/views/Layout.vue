<script setup lang="ts">
import SideMenu from '../components/SideMenu.vue'
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const store = useUserStore()
const { username, role_name } = storeToRefs(store);

</script>

<template>
  <el-container class="layout" style="height: 100%">
    <el-aside width="200px">
      <SideMenu />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <span>{{ username }} ({{ role_name }})</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>登出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }

  .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }

  .el-main {
    padding: 0;
  }

  .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
}
</style>
