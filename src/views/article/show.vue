<script setup lang="ts">
import { isLogin } from '@/utils/helper'
import useArticle from '@/composables/useArticle'
import { useRoute } from 'vue-router'
const { article, find } = useArticle()
const route = useRoute()
await find(+route.params.id)
</script>
<template>
  <main>
    <h1>{{ article?.title }}</h1>
    <el-button
      type="danger"
      size="small"
      @click="$router.push({ name: 'update', params: { id: article?.id } })"
      >编辑</el-button
    >
    <time>
      创建时间:{{ article?.createdAt }}&nbsp;&nbsp;&nbsp;&nbsp; 更新时间:{{
        article?.updatedAt
      }}&nbsp;&nbsp;&nbsp;&nbsp;
    </time>
    <p>
      {{ article?.content }}
    </p>
  </main>
</template>

<style lang="scss">
main {
  h1 {
    @apply mb-4 border-b border-gray-500 pb-3 mt-8 text-2xl text-gray-600 flex justify-between;
  }
  time {
    @apply text-xs font-bold text-slate-600 mb-5 block;
  }
  p {
    @apply text-gray-600;
  }
}
</style>