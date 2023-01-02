<template>
    <div class="operationBar">
        <el-button type="primary" style="width:100px;" @click="createNewUser()">
            新建
        </el-button>
        <el-button type="primary" style="width:100px;">
            批量创建
        </el-button>
    </div>
    <el-table :data="tableData">
        <el-table-column prop="id" label="id" width="140" />
        <el-table-column prop="account" label="帐号" width="240" />
        <el-table-column prop="username" label="用户名" width="240" />
        <el-table-column prop="role_name" label="角色" />
        <el-table-column label="状态">
            <template #default="scope">
                {{ transStatus(scope.row.enable) }}
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button size="small" @click="goEdit(scope.row)">编辑</el-button>
                <el-button size="small" @click="resetPassword(scope.row)">重置密码</el-button>
                <el-button v-if="scope.row.enable" size="small" type="danger"
                    @click="setEnable(scope.row, false)">禁用</el-button>
                <el-button v-else size="small" @click="setEnable(scope.row, true)">启用</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { get_user_list, reset_password, disable_user, enable_user } from '@/api/user'
import { useRouter } from 'vue-router'


const tableData = ref(null)
const router = useRouter()

async function fetchData() {
    const res = await get_user_list(null)
    tableData.value = res.data.data.items
}

fetchData()

const createNewUser = () => {
    router.push('/userManage/create');
}

const transStatus = (data: Boolean) => {
    if (data === true) {
        return '已启用'
    }
    return '已禁用'
}

const goEdit = (data: any) => {
    router.push('/userManage/edit/' + data.id);
}

const resetPassword = async (data: any) => {
    await reset_password(data.id)
}

const setEnable = async (data: any, value: Boolean) => {
    if (value === true) {
        await enable_user(data.id)
    } else {
        await disable_user(data.id)
    }
}
</script>
  
<style scoped>
.operationBar {
    display: flex;
    justify-content: right;
}
</style>
  