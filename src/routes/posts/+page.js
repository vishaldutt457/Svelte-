export const load = ({ fetch,id }) => {

    const fetchPosts = async () => {
      const res = await fetch('/api/posts')
      const data = await res.json()
      return data.posts
    }
  
    return {
      posts: fetchPosts()
    }
  
  }