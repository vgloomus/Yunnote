<script setup lang="ts">
import useArticle from '@/composables/useArticle'
import useCategory from '@/composables/useCategory'
const { all, categories } = useCategory()
const { all: getArticleList } = useArticle()
await all()
</script>

<template>
  <main class="front">
    <nav>
      <section>
        <div
          v-for="category of categories"
          :key="category.id"
          :class="{ active: +$route.params.cid === category.id }"
          @click="$router.push({ name: 'category', params: { cid: category.id } })">
          {{ category.title }}
        </div>
      </section>
    </nav>
    <!-- <div>
      <header className="item-header">
        <span className="item-header-username">ccc</span>
        <span className="item-header-point">eef</span>
      </header>
      <main className="item-main">我是主要内容</main>
    </div> -->
    <section>
      <el-button type="primary" size="default" @click="$router.push({ name: 'create' })">发表文章</el-button>
      <el-button type="success" size="default">登录</el-button>
    </section>
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
main.front {
  @apply bg-white md:shadow-md md:mt-5 m-auto md:w-[1000px] p-5 md:rounded-md;
  nav {
    @apply flex md:flex-row flex-col md:justify-between md:items-center mt-3;
    section {
      @apply flex gap-2 items-center flex-wrap;
      div {
        @apply bg-slate-200 text-gray-700 py-2 px-3 cursor-pointer hover:shadow-lg duration-300;
        &.active {
          @apply bg-orange-600;
        }
      }
      &:nth-of-type(2) {
        @apply flex justify-between md:mt-0 ml-0;
        button {
          @apply flex-1;
        }
      }
    }
  }
  // div {
  //     border: 1px solid #1da921;
  //     width: 180px;
  //     border-radius: 5px;
  //     box-shadow: 0 0 5px 0 #b3b3b3;
  //     margin: 5px auto;
  //     background: #fff;
  // }
}
</style>