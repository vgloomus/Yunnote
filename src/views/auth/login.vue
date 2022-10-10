<script setup lang="ts">
import useUtil from '@/composables/system/useUtil'
import useAuth from '@/composables/useAuth'
import { Wechat } from '@icon-park/vue-next'
import { reactive } from 'vue'
import Footer from './components/footer.vue'
const { login } = useAuth()
const { request } = useUtil()
const form = reactive({ name: 'cxd', password: 'admin888' })

const onSubmit = request(async () => {
  await login(form)
})
</script>

<template>
  <form class @submit.prevent="onSubmit">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
          <div class="mt-8">
            <FormInputComponent v-model="form.name" placeholder="请输入用户名" />
            <HdError name="mobile" />

            <FormInputComponent
              v-model="form.password"
              class="mt-3"
              type="password"
              placeholder="请输入登录密码"
              v-clearError="'password'" />
            <HdError name="password" />
          </div>

          <FormButtonComponent class="w-full mt-3 primary">登录</FormButtonComponent>
        </div>
        <Footer />
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>
