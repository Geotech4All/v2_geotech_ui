import { gql } from "graphql-tag";

export const TAGS = gql`query Tags {
  tags {
    edges {
      cursor
      node {
        title
        description
        category
        id
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
