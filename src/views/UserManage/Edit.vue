<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="新用户名" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">修改</el-button>
      <el-button @click="returnPage">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { updateUser } from '@/api/user'
import type { UpdateUserParam } from '@/api/user'
import { ElNotification } from 'element-plus'

// do not use same name with ref
const formRef = ref<FormInstance>()
const form = reactive<UpdateUserParam>({
  username: '',
})

const rules = reactive<FormRules>({
  username: [
    { min: 3, message: '长度至少为3', trigger: 'blur', required: true },
  ],
})

const route = useRoute()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid, fields) => {
    if (valid) {
      // console.log('submit!')
      // TODO: get id from path or init
      const res = await updateUser(Number(route.params.id as string), form)
      if (res.code == 0) {
        ElNotification({
          title: '成功',
          message: '已修改',
          type: 'success',
        })
        returnPage()
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const router = useRouter()
const returnPage = () => {
  router.push({ name: 'ListUser' })
}
</script>

<style lang="scss" scoped></style>
