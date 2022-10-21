<script setup lang="ts">
import useArticle from '@/composables/useArticle'
import useCategory from '@/composables/useCategory'
const { all, categories } = useCategory()
const { all: getArticleList, pageResult, remove, article } = useArticle()
await all()

const removeArticle = async (id:number) => {
  try {
    await remove(id)
  } catch (error) {
    return '当前文章id获取失败'
  }
}

const { cid } = defineProps<{ cid?: any }>()
await getArticleList(1, cid)
</script>

<template>
  <main class="front">
    <div class="log cursor-pointer" @click="$router.push('/')">
      <img src="/images/logo.png" class="w-[500px]" />
    </div>
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
    <section>
      <el-button type="primary" size="default" @click="$router.push({ name: 'create' })">发表文章</el-button>
      <el-button type="success" size="default">登录</el-button>
    </section>
    <div class="app">
      <div class="layout-left">
        <HdAnimateList tag="ul" :duration="2" :delay="0.1">
          <section
            class="item"
            v-for="(article, index) in pageResult?.data.articles"
            :key="article.id"
            :data-index="index">
            <div>
              <div class="item-header" @click="$router.push({ name: 'show', params: { id: article.id } })">
                {{ article.title }}
              </div>
              <span class="iconstyle" @click="removeArticle(article.id)"></span>
              <div class="item-main">{{ article.content.substring(0, 15) }}</div>
            </div>
          </section>
          <div>
            <el-pagination
              class="page"
              @current-change="getArticleList"
              :page-sizes="[20, 40, 80, 100]"
              :page-size="pageResult?.meta.page_row"
              :total="pageResult?.meta.total"
              background>
            </el-pagination>
          </div>
        </HdAnimateList>
      </div>
      <div class="layout-right">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
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
}
.app {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  .layout-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 600px;
  }
}
.layout-left {
  width: 200px;
  height: 600px;
  margin-top: 2px;
}

.item {
  border: 1px solid #1da921;
  width: 180px;
  height: 80px;
  border-radius: 5px;
  margin: 10px auto;
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

.page {
  ::v-deep {
    width: 200px;
    display: block;
    margin-top: 30px;
  }

  .page.el-pagination__jump {
    margin-left: -70px;
    background: #424242;
  }
}
@font-face {
  /* 1.注意font-family:icomoon */
  font-family: 'icomoon';
  /* 2.注意路径! */
  src: url('fonts/icomoon.eot?7kkyc2');
  src: url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?7kkyc2') format('truetype'), url('fonts/icomoon.woff?7kkyc2') format('woff'),
    url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

.iconstyle {
  font-family: 'icomoon';
  color: orange;
  font-size: 16px;
  position: absolute;
  margin: 32px 160px;
}
</style>