import { provideApolloClient, useQuery, useMutation } from '@vue/apollo-composable'
import apolloClient from '../apollo'
import gql from 'graphql-tag'
import { computed } from 'vue'

export interface Post {
  id?: number
  title: string
  content: string
  authorId?: number
  __typename?: string
}

provideApolloClient(apolloClient)

const { result } = useQuery<{posts: Post[]}>(gql`
  query{
    posts{
      id
      title
      content
    }
  }
`)

export const posts = computed(()=>result.value?.posts ?? [])

export const create = async (postInput: Post, cb: any) => {
  const { mutate } = useMutation<{createPost: Post}>(gql`
    mutation createPost($postInput: CreatePostDto!) {
      createPost(postInput: $postInput) {
        id
        title
        content
      }
    }
  `, { variables: {postInput} })
  mutate().then((data) => {
    cb(data?.data?.createPost)
  }).catch(err => console.log(err))
}