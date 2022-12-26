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
        <el-table-column prop="name" label="名称" width="240" />
        <el-table-column prop="creator.name" label="创建者" width="240" />
        <el-table-column label="负责人" width="240">
            <template #default="scope">
                {{ joinName(scope.row.ops) }}
            </template>
        </el-table-column>
        <el-table-column prop="member_cnt" label="成员数" />
    </el-table>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { get_supplier_list } from '@/api/supplier'

const tableData = ref(null)

async function fetchData() {
    const res = await get_supplier_list(null)
    tableData.value = res.data.data.items
}

fetchData()

const joinName = (items: any) => {
    let string = ''
    items.map((item: any) => {
        string += item.name + ','
    })
    if (string.length > 0) {
        string = string.substring(0, string.length - 1)
    }
    return string
}

</script>

<style scoped>
.operationBar {
    display: flex;
    justify-content: right;
}
</style>
  