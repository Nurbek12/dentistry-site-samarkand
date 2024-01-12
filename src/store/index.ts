import { defineStore } from 'pinia'
import cookie from 'js-cookie'

export default defineStore('app', {
    state: () => ({
        token: cookie.get('admin-token')||null
    }),
    getters: {
        isLogged: state => !!state.token
    },
    actions: {
        set_token(token: string | null){
            if(token)
                cookie.set('admin-token', token, { expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000) })
            else
                cookie.remove('admin-token')
            
            this.$patch({ token })
        },

    }
})