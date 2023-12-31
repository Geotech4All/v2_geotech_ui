import { gql } from "urql";

export const CREATE_UPDATE_TAG = gql`
  mutation TagCreateUpdate($category: String, $description: String, $tagId: ID, $title: String) {
    createUpdateTag (category: $category, description: $description, tagId: $tagId, title: $title) {
      errors {
        field
        messages
      }
      success
      tag {
        tagId
        title
        description
      }
    }
  }
`;

export const CREATE_UPDATE_ORGANIZATION = gql`
  mutation CreateUpdateOrganization($description: String, $logoId: ID, $name: String, $organizationId: ID) {
    createUpdateOrganization(description: $description, logoId: $logoId, name: $name, organizationId: $organizationId) {
      success
      errors {
        field
        messages
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

export const CREATE_UPDATE_IMAGE = gql`
  mutation CreateUpdateImage($description: String, $image: Upload, $folder: ImageFoldersEnum, $imageId: ID) {
    createUpdateImage(description: $description, image: $image, folder: $folder, imageId: $imageId) {
      errors {
        field
        messages
      }
      success
      image {
        description
        imageId
        url
      }
    }
  }
`;

export const CREATE_UPDATE_OPPORTUNITY = gql`
  mutation CreateUpdateOpportunity($title: String!, $content: String, $tagIds: [ID], $opportunityId: ID, $organizationId: ID, $locationId: ID, $description: String) {
    createUpdateOpportunity(title: $title, content: $content, tagIds: $tagIds, opportunityId: $opportunityId, organizationId: $organizationId, locationId: $locationId, description: $description) {
      success
      errors {
        field
        messages
      }
    }
  }
`;

export const CREATE_UPDATE_POST = gql`
  mutation CreateUpdatePost($body: String!, $title: String!, $abstract: String, $coverPhotoId: ID, $postId: ID) {
    createUpdatePost(body: $body, title: $title, abstract: $abstract, coverPhotoId: $coverPhotoId, postId: $postId) {
      errors {
        field
        messages
      }
      success
      post {
        postId
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId) {
      success
      errors {
        field
        messages
      }
    }
  }
`;
