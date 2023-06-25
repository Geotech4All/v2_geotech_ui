import { gql } from "urql";

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password1: String!, $password2: String!) {
    register(email: $email, password1: $password1, password2: $password2) {
      errors
      success
    }
  }
`

export const ADMIN_SIGN_IN = gql`
  mutation AdminSignIn($password: String!, $email: String) {
    tokenAuth(password: $password, email: $email) {
      errors
      refreshToken
      success
      token
      user {
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
      }
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      errors
      payload
      refreshToken
      success
      token
    }
  }
`

export const  VERIFY_TOKEN = gql`
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      success
      errors
      payload
    }
  }
`
