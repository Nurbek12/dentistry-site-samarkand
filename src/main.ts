import './style.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import i18n from './language'
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .mount('#app')






// import apolloClient from './apollo'
// import '@mdi/font/css/materialdesignicons.min.css'
// import { DefaultApolloClient } from '@vue/apollo-composable'

// const app = createApp({
//     setup(){
//         provide(DefaultApolloClient, apolloClient)
//     },
//     render: () => h(App)
// })