import { gql } from "urql";

export const ME = gql`
  query Me {
    me {
      fullName
      email
      staff {
        canCreatePost
        canAlterPost
        canDeletePost
        canCreateUser
        canAlterUser
        canDeleteUser
        canCreatePodcast
        canAlterPodcast
        canDeletePodcast
        canCreateOpportunities
        canUpdateOpportunities
        canDeleteOpportunities
        staffId
      }
      profile {
        about
        profileId
        image {
          description
          imageId
          url
        }
      }
      dateJoined
    }
  }
`
