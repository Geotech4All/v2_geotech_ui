import { gql } from "urql";

export const UPDATE_POST_VIEWS = gql`
  mutation IncreasePostViewCount($postId: ID!) {
    increasePostViewCount(postId: $postId) {
      success
    }
  }
`;
