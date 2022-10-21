import { addArticle, getArticle, getArticleList,removeArticle,updateArticle } from "@/apis/article"
import { ref } from "vue"


export default () => {
    const pageResult = ref<ApiPage<ArticleModel>>()
    let categoryId: any = null;
    const article = ref<ArticleModel>()
    const all = async (page = 1, cid?: any) => {
        if (cid) categoryId = cid
        pageResult.value = await getArticleList(page, categoryId)
    }

    const find = async (id: number) => {
        article.value = await getArticle(id)
    }

    const add = async (data: Record<string, any>) => {
        return addArticle(data)
    }

    const update = async (data: ArticleModel) => {
        return updateArticle(data)
    }

    const remove = async (id: number)=> {
        return removeArticle(id)
    }

    return { all, pageResult, article, find, add, update,remove }

}