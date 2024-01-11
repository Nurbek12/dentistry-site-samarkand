import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

export default new ApolloClient({
    link: createHttpLink({
        uri: 'http://localhost:4000/graphql',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {}
})

// <div class="flex bg-slate-800 h-[100vh]">
  
//     <!-- <app-nav-drawer />
//     <main class="pl-[57px] md:pl-0 flex-auto">
//       <div class="p-2">
        
//         <div class="w-full">
          
//         </div>

//       </div>
//     </main> -->
//   </div>

// import { reactive, watchEffect, ref } from 'vue'
// import { Post, posts, create } from './services/post.service'

// const post = reactive<Post>({
//   title: "",
//   content: "",
//   authorId: 1,
// })

// const vPosts = ref<Post[]>([])

// watchEffect(() => {
//   vPosts.value = [...posts.value]
// })

// const createPost = () => {
//   create(post, (newPost: Post) => {
//     vPosts.value.push(newPost)
//   })
// }