
<script setup lang="ts">
import useArticle from '@/composables/useArticle'
const { cid } = defineProps<{ cid?: any }>()
const { all, pageResult } = useArticle()

await all(1, cid)
</script>

<template>
  <div>
    <section class="item" v-for="(article, index) in pageResult?.data.articles" :key="article.id" :data-index="index">
      <router-link class="item-header" :to="{ name: 'show', params: { id: article.id } }">
        {{ article.title }}</router-link
      >
      <!-- <aside @click="$router.push({ name: 'category', params: { cid: article.categoryId } })">
          {{ article.category.title }}
        </aside> -->
      <div class="item-main">eee</div>
    </section>
  </div>
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
.item {
  border: 1px solid #1da921;
  width: 180px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #b3b3b3;
  margin: 5px auto;
  background: #fff;
}
.item.active {
  border-style: dashed;
}
.item-header {
  font-size: 12px;
  color: #9e9e9e;
  padding: 3px 5px;
  background: red;
}
.item-main {
  padding: 5px;
  font-size: 14px;
  color: #424242;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
// section {
//   @apply mt-3 flex justify-between items-center;
//   a {
//     @apply bg-slate-100 text-gray-600 py-2 px-3 mb-2;
//   }
//   aside {
//     @apply text-xs p-2 text-gray-600 font-bold cursor-pointer hidden md:flex;
//   }
// }
</style>