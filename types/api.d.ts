//请求响应结构
interface ApiData<T> {
  data: T
}

//分页请求响应结构
interface ApiPage<T> {
  data: T[]
  articles: {
    id: number;
    title: string;
    content: string;
    categoryId: number;
  }
  meta: {
    current_page: number;
    page_row: number
    total: number;
    toal_page: number;
  }
}
