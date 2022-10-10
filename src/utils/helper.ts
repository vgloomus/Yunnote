import {CacheKey} from '@/enum/CacheKey'
import useStorage from '@/composables/system/useStorage'
export function isLogin(): boolean {
    return !!useStorage().get(CacheKey.TOKEN_NAME)
}