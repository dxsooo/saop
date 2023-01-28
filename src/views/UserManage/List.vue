<template>
  <div class="operationBar">
    <el-button type="primary" style="width: 100px" @click="createNewUser()">
      新建
    </el-button>
    <!-- <el-button type="primary" style="width:100px;">
            批量创建
        </el-button> -->
  </div>
  <el-table :data="tableData">
    <el-table-column prop="id" label="id" width="120" />
    <el-table-column prop="account" label="帐号" width="200" />
    <el-table-column prop="username" label="用户名" />
    <el-table-column prop="role_name" label="角色" width="120" />
    <el-table-column label="状态" width="120">
      <template #default="scope">
        {{ transStatus(scope.row.enabled) }}
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="240">
      <template #default="scope">
        <el-button size="small" @click="goEdit(scope.row)">编辑</el-button>
        <el-button size="small" @click="resetPwd(scope.row)"
          >重置密码</el-button
        >
        <el-button
          v-if="scope.row.enabled"
          size="small"
          type="danger"
          @click="setEnable(scope.row, false)"
          >禁用</el-button
        >
        <el-button v-else size="small" @click="setEnable(scope.row, true)"
          >启用</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getUsers, resetPassword, disableUser, enableUser } from '@/api/user'
import type { UserBaseInfo } from '@/api/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const tableData = ref<UserBaseInfo[]>()
const router = useRouter()

async function fetchData() {
  const res = await getUsers(null)
  if (res.data) {
    tableData.value = res.data.items
  }
}

onMounted(() => {
  fetchData()
})

const createNewUser = () => {
  router.push({ name: 'CreateUser' })
}

const transStatus = (data: boolean) => {
  if (data === true) {
    return '已启用'
  }
  return '已禁用'
}

const goEdit = (data: UserBaseInfo) => {
  router.push('/userManage/edit/' + data.id)
}

const resetPwd = async (data: UserBaseInfo) => {
  const res = await resetPassword(data.id)
  // console.log(resp.data)
  if (res.code == 0) {
    ElNotification({
      title: '成功',
      message: '已重置',
      type: 'success',
    })
  }
}

const setEnable = async (data: UserBaseInfo, value: boolean) => {
  if (value === true) {
    const res = await enableUser(data.id)
    if (res.code == 0) {
      ElNotification({
        title: '成功',
        message: '已启用',
        type: 'success',
      })
    }
  } else {
    const res = await disableUser(data.id)
    if (res.code == 0) {
      ElNotification({
        title: '成功',
        message: '已启用',
        type: 'success',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.operationBar {
  display: flex;
  justify-content: right;
}
</style>
