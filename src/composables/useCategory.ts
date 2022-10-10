import { getAllCategory } from "@/apis/category"
import { ref } from "vue"

export default () => {
    const categories = ref<CategoryModel[]>()
    const all = async ()=> {
        categories.value = await getAllCategory()
        
    }

    return { all,categories}
    
    
}