import { gql } from "graphql-tag";

export const TAGS = gql`query Tags {
  tags {
    edges {
      cursor
      node {
        title
        description
        category
        tagId
      }
    }
  }
}`

export const POPULAR_POSTS = gql`
  query PopularPosts($after: String, $first: Int) {
    posts: popularPosts(after: $after, first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          abstract
          author {
            fullName
            profile {
              image {
                url
                description
              }
            }
            id
          }
          coverPhoto {
            description
            url
          }
          title
          views
          postId
          readLength
          likes
          lastUpdated
        }
      }
    }
  }
`

export const ALL_POSTS = gql`
  query PopularPosts($after: String, $first: Int) {
    posts: popularPosts(after: $after, first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          abstract
          author {
            fullName
            profile {
              image {
                url
                description
              }
            }
            id
          }
          coverPhoto {
            description
            url
          }
          title
          views
          postId
          readLength
          likes
          lastUpdated
        }
      }
    }
  }
`

export const POST_DETAIL = gql`
  query PostDetail ($postId: ID!) {
    post: getPostById(postId: $postId) {
      author {
        fullName
        profile {
          image {
            imageId
            description
            url
          }
        }
      }
      title
      body
      coverPhoto {
        imageId
        description
        url
      }
      readLength
      lastUpdated
      postId
    }
  }
`

export const IMAGES = gql`
  query Images($after: String, $first: Int, $descriptionIstartswith: String, $description: String, $descriptionIcontains: String) {
    images(after: $after, first: $first, description_Istartswith: $descriptionIstartswith, description: $description, description_Icontains: $descriptionIcontains) {
      edges {
        cursor
        node {
          description
          url
          imageId
        }
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
    }
  }
`
