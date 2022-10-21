<script setup lang="ts">
import useArticle from '@/composables/useArticle'
const { cid } = defineProps<{ cid?: any }>()
const { all, pageResult } = useArticle()

await all(1, cid)
</script>

<template>
  <HdAnimateList tag="ul" :duration="2" :delay="0.1">
    <!-- <div class="main">
      <section class="item" v-for="(article, index) in pageResult?.data.articles" :key="article.id" :data-index="index">
        <div class="item-header" @click="$router.push({ name: 'show', params: { id: article.id } })">
          {{ article.title }}
        </div>
        <div class="item-main">{{ article.content.substring(0, 15) }}</div>
        <router-link class="item-header" :to="{ name: 'show', params: { id: article.id } }">
          {{ article.title }}
        </router-link>
        <aside @click="$router.push({ name: 'category', params: { cid: article.categoryId } })">
          {{ article.category.title }}
        </aside>
      </section>
    </div> -->
  </HdAnimateList>
  <!-- <div class="mt-5 border-t border-gray-100 pt-2">
    <el-pagination
      @current-change="all"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="pageResult?.meta.page_row"
      :total="pageResult?.meta.total"
      background>
    </el-pagination>
  </div> -->
</template>

<style lang="scss" scoped>
.main {
  width: 200px;
  height: auto;
  padding: 10px;
  box-shadow: 0 0 5px 0 #b3b3b3;
  background: #fff;
}
.item {
  border: 1px solid #1da921;
  width: 180px;
  height: 80px;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 5px;
}
.item.active {
  border-style: dashed;
}
.item-header {
  font-size: 12px;
  color: #9e9e9e;
}
.item-main {
  font-size: 14px;
  color: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.item-header-point {
  background: #ccc;
  float: right;
  padding: 0 4px;
  min-width: 10px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
}
</style>