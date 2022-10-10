import { http } from "@/plugins/axios";
export async function getArticleList(page = 1, cid?: any) {

    const url = `article?page=${page}&` + (cid ? `category=${cid}` : '')
    return await http.request<ArticleModel[], ApiPage<ArticleModel>>({
        url,
    })
}

export async function getArticle(id: number) {
    return await http.request<ArticleModel[]>({
        url: `article/${id}`
    }).then((r) => r.data)
}

export async function addArticle(data: any) {
    return http.request({
        url: 'article',
        method: 'POST',
        data
    })
}

export async function updateArticle(data: any) {
    return http.request({
        url: `article/${data.id}`,
        method: 'PATCH',
        data
    })
}