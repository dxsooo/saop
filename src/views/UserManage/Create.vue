<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
    <el-form-item label="帐号" prop="account">
      <el-input v-model="form.account" placeholder="帐号" />
    </el-form-item>
    <el-form-item label="用户名" prop="username">
      <el-input
        v-model="form.username"
        placeholder="用户名，留空即和帐号一致"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="form.password"
        placeholder="密码，留空即使用系统初始密码（000000）"
      />
    </el-form-item>
    <el-form-item label="确认密码" prop="re_password">
      <el-input placeholder="再输入一次密码" />
    </el-form-item>
    <el-form-item label="角色" prop="role_id">
      <el-radio-group v-model="form.role_id">
        <el-radio v-if="is_admin" label="1">系统运营</el-radio>
        <el-radio v-if="!is_admin && role_id < 2" label="2">业务运营</el-radio>
        <el-radio v-if="!is_admin && role_id < 3" label="3"
          >供应商运营</el-radio
        >
        <el-radio v-if="!is_admin" label="4">审核员</el-radio>
        <el-radio v-if="!is_admin" label="5">标注员</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">创建</el-button>
      <el-button @click="returnPage">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { create_user } from '@/api/user'
import { ElNotification } from 'element-plus'

const store = useUserStore()
const { is_admin, role_id } = storeToRefs(store)

// do not use same name with ref
const formRef = ref<FormInstance>()
const form = reactive({
  account: '',
  username: '',
  password: '',
  role_id: is_admin.value ? '1' : null,
})

const rules = reactive<FormRules>({
  account: [
    { required: true, message: '输入帐号', trigger: 'blur' },
    { min: 3, message: '长度至少为3', trigger: 'blur' },
  ],
  username: [{ min: 3, message: '长度至少为3', trigger: 'blur' }],
  password: [{ min: 6, message: '长度至少为6', trigger: 'blur' }],
  role_id: [
    {
      required: true,
      message: '指定角色',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      create_user(form)
      ElNotification({
        title: '成功',
        message: '创建成功',
        type: 'success',
      })
      returnPage()
    } else {
      console.log('error submit!', fields)
    }
  })
}

const router = useRouter()
const returnPage = () => {
  router.push('/userManage')
}
</script>
