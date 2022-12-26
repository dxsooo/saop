<template>
    <div class="operationBar">
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
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { get_user_list } from '@/api/user'

const tableData = ref(null)

async function fetchData() {
    const res = await get_user_list(null)
    tableData.value = res.data.data.items
}

fetchData()
</script>
  
<style scoped>
.operationBar {
    display: flex;
    justify-content: right;
}
</style>
  