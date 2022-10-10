<script setup lang="ts">
import useArticle from '@/composables/useArticle'
const { cid } = defineProps<{cid?: any}>()
const { all, pageResult } = useArticle()

await all(1,cid)
</script>

<template>
  <HdAnimateList tag="ul" :duration="2" :delay="0.1">
    <section v-for="(article, index) in pageResult?.data.articles" :key="article.id" :data-index="index">
      <router-link :to="{ name: 'show', params: { id: article.id } }">
        {{ article.title }}
      </router-link>
      <aside @click="$router.push({ name: 'category', params: { cid: article.categoryId } })">
        {{ article.category.title }}
      </aside>
    </section>
  </HdAnimateList>
  <div class="mt-5 border-t border-gray-100 pt-2">
    <el-pagination
      @current-change="all"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="pageResult?.meta.page_row"
      :total="pageResult?.meta.total"
      background>
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
section {
  @apply mt-3 flex justify-between items-center;
  a {
    @apply bg-slate-100 text-gray-600 py-2 px-3 mb-2;
  }
  aside {
    @apply text-xs p-2 text-gray-600 font-bold cursor-pointer hidden md:flex;
  }
}
</style>