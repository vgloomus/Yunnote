<script setup lang="ts">
import { isLogin } from '@/utils/helper'
import useArticle from '@/composables/useArticle'
import { useRoute } from 'vue-router'
const { article, find } = useArticle()
const route = useRoute()
await find(+route.params.id)
</script>
<template>
  <HdAnimateList tag="ul" :duration="2" :delay="0.1">
  <div class="main">
    <h1>{{ article?.title }}</h1>
    <el-button
      type="danger"
      size="small"
      @click="$router.push({ name: 'update', params: { id: article?.id } })"
      >编辑</el-button>
    <time>
      创建时间:{{ article?.createdAt }}&nbsp;&nbsp;&nbsp;&nbsp; 更新时间:{{
        article?.updatedAt
      }}&nbsp;&nbsp;&nbsp;&nbsp;
    </time>
    <p>
      {{ article?.content }}
    </p>
  </div>
  </HdAnimateList>
</template>

<style lang="scss" scoped>
main {
  border: 1px solid #1da921;
  border-radius: 5px;
  margin-top: 13px;
  display: block;
  h1 {
    @apply mt-4 border-b border-gray-500 pb-3 text-2xl text-gray-600 flex justify-between;
  }
  time {
    @apply text-xs font-bold text-slate-600 mb-2 mt-2 block;
  }
  p {
    @apply text-gray-600;
  }
}
</style>