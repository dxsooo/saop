<template>
    <el-container class="layout-container-demo" style="height: 100%">
        <el-aside width="200px">
            <Menu />
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>

            <el-main>
                <div align="right">
                    <el-button type="primary" style="width:100px;">
                        新建
                    </el-button>
                    <el-button type="primary" style="width:100px;">
                        批量创建
                    </el-button>
                </div>
                <el-table :data="tableData">
                    <el-table-column prop="id" label="id" width="140" />
                    <el-table-column prop="username" label="用户名" width="240" />
                    <el-table-column prop="role_name" label="角色" />
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import Menu from '../components/Menu.vue'
import { get_user_list } from '@/api/user'

const tableData = ref(null)

async function fetchData() {
    const res = await get_user_list(null)
    tableData.value = res.data.data.items
}

fetchData()
</script>
  
<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
  