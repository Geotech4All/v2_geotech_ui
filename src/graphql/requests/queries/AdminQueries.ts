import { gql } from "urql";

export const ORGANIZATIONS = gql`
  query Organizations {
    organizations {
      edges {
        cursor
        node {
          description
          organizationId
          name
          logo {
            description
            imageId
            publicId
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`
