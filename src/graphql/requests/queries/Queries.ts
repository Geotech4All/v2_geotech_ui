import { gql } from "graphql-tag";

export const TAGS = gql`
  query Tags {
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
  }
`;

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
`;

export const ALL_POSTS = gql`
  query AllPosts($after: String, $first: Int) {
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
`;

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
      abstract
    }
  }
`;

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
`;

export const OPPORTUNITIES = gql`
  query Opportunities($after: String, $first: Int, $tagsIdIn: [String], $locationId: Float, $datePosted: OpportunityDates, $titleIcontains: String) {
    opportunities(after: $after, first: $first, tags_Id_In: $tagsIdIn, location_Id: $locationId, datePosted: $datePosted, title_Icontains: $titleIcontains) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          content
          description
          lastUpdated
          location {
            address
            country
            lastUpdated
            locationId
            state
            zipCode
          }
          opportunityId
          title
          tags {
            title
            description
            category
            tagId
          }
          organization {
            description
            organizationId
            name
            logo {
              description
              url
              imageId
            }
          }
        }
      }
    }
  }
`;

export const OPPORTUNITY = gql`
  query Opportunity($opportunityId: ID!) {
    opportunity(opportunityId: $opportunityId) {
      content
      lastUpdated
      location {
        address
        country
        lastUpdated
        locationId
        state
        zipCode
      }
      opportunityId
      title
      description
      tags {
        title
        tagId
        description
      }
      organization {
        organizationId
        name
        description
        logo {
          url
          imageId
          description
        }
      }
    }
  }
`;

export const POPULAR_PODCASTS = gql`
  query MostListenedToPodcasts($first: Int, $titleIcontains: String) {
    mostListenedToPodcasts(first: $first, title_Icontains: $titleIcontains) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          coverPhoto {
            url
            imageId
            description
          }
          lastUpdated
          description
          title
          podcastId
          listens
          hosts {
            user {
              profile {
                image {
                  url
                  imageId
                  description
                }
              }
            }
            hostId
          }
          guests {
            organization {
              logo {
                url
                imageId
                description
              }
              organizationId
            }
            guestId
          }
        }
      }
    }
  }
`;
