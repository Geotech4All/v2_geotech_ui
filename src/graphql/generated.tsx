import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  ExpectedErrorType: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Handles create operarion for comments */
export type CommentCreateMutation = {
  __typename?: 'CommentCreateMutation';
  comment?: Maybe<CommentType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CommentType = {
  __typename?: 'CommentType';
  author?: Maybe<UserType>;
  dateAdded: Scalars['DateTime']['output'];
  post: PostType;
};

export type CreateUpdateTagMutation = {
  __typename?: 'CreateUpdateTagMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
  tag?: Maybe<TagType>;
};

/** An enumeration. */
export enum CustomUserCategory {
  /** Lecturer */
  Le = 'LE',
  /** Student */
  St = 'ST'
}

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String']['output'];
  messages: Array<Scalars['String']['output']>;
};

export type FileCreateUpdateMutation = {
  __typename?: 'FileCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  file?: Maybe<FileType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FileDeleteMutation = {
  __typename?: 'FileDeleteMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum FileFoldersEnum {
  Podcast = 'PODCAST'
}

export type FileType = Node & {
  __typename?: 'FileType';
  description?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publicId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FileTypeConnection = {
  __typename?: 'FileTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FileTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FileType` and its cursor. */
export type FileTypeEdge = {
  __typename?: 'FileTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FileType>;
};

/**
 * Performs create and update actions on a `Guest` object.
 * To perform an update all you need to do is pass in the guest `id`.
 */
export type GuestCreateUpdateMutation = {
  __typename?: 'GuestCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  guest?: Maybe<GuestType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Guest graphql object type */
export type GuestType = Node & {
  __typename?: 'GuestType';
  /** more information about this guest */
  description: Scalars['String']['output'];
  guestId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** The full name of the guest */
  name: Scalars['String']['output'];
  organization?: Maybe<OrganizationType>;
};

export type GuestTypeConnection = {
  __typename?: 'GuestTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GuestTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `GuestType` and its cursor. */
export type GuestTypeEdge = {
  __typename?: 'GuestTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<GuestType>;
};

export type HostType = Node & {
  __typename?: 'HostType';
  dateAdded: Scalars['DateTime']['output'];
  hostId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  podcast: PodcastType;
  user?: Maybe<UserType>;
};

export type HostTypeConnection = {
  __typename?: 'HostTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HostTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HostType` and its cursor. */
export type HostTypeEdge = {
  __typename?: 'HostTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<HostType>;
};

export type ImageCreateUpdateMutation = {
  __typename?: 'ImageCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  image?: Maybe<ImageType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ImageDeleteMutation = {
  __typename?: 'ImageDeleteMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum ImageFoldersEnum {
  Blog = 'BLOG',
  Opportunity = 'OPPORTUNITY',
  Podcast = 'PODCAST',
  Profile = 'PROFILE'
}

export type ImageType = Node & {
  __typename?: 'ImageType';
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  imageId?: Maybe<Scalars['ID']['output']>;
  publicId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ImageTypeConnection = {
  __typename?: 'ImageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ImageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ImageType` and its cursor. */
export type ImageTypeEdge = {
  __typename?: 'ImageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ImageType>;
};

export type IncreasePodcastListens = {
  __typename?: 'IncreasePodcastListens';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  podcast?: Maybe<PodcastType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LocationCreateUpdateMutation = {
  __typename?: 'LocationCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  location?: Maybe<LocationType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LocationType = Node & {
  __typename?: 'LocationType';
  address?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  dateAdded?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['DateTime']['output']>;
  locationId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type LocationTypeConnection = {
  __typename?: 'LocationTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LocationTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LocationType` and its cursor. */
export type LocationTypeEdge = {
  __typename?: 'LocationTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LocationType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /** Handles create operarion for comments */
  createComment?: Maybe<CommentCreateMutation>;
  /** Promote existing user to staff with certan permisions */
  createStaff?: Maybe<StaffCreateMutation>;
  /** Classified */
  createSuperUser?: Maybe<SuperUserCreateMutation>;
  createUpdateFile?: Maybe<FileCreateUpdateMutation>;
  /**
   * Performs create and update actions on a `Guest` object.
   * To perform an update all you need to do is pass in the guest `id`.
   */
  createUpdateGuest?: Maybe<GuestCreateUpdateMutation>;
  createUpdateImage?: Maybe<ImageCreateUpdateMutation>;
  createUpdateLocation?: Maybe<LocationCreateUpdateMutation>;
  /** Create new or update existing opportunity */
  createUpdateOpportunity?: Maybe<OpportunityCreateUpdateMutation>;
  createUpdateOrganization?: Maybe<OrganizationCreateUpdateMutation>;
  /**
   * Performs create and update activity on `Podcast` object.
   * To perform an update, all you need to do is pass the podcast `id`.
   */
  createUpdatePodcast?: Maybe<PodcastCreateUpdateMutation>;
  /**
   * Performs create and update functionality on a blog postself.
   * To perform an update, you just need to pass in the blog `id`.
   */
  createUpdatePost?: Maybe<PostCreateUpdateMutation>;
  createUpdateTag?: Maybe<CreateUpdateTagMutation>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  deleteFile?: Maybe<FileDeleteMutation>;
  deleteImage?: Maybe<ImageDeleteMutation>;
  /** Deletes a post with the specified id. */
  deletePost?: Maybe<PostDeleteMutation>;
  increasePodcastListens?: Maybe<IncreasePodcastListens>;
  /** Increases the view count on a post */
  increasePostViewCount?: Maybe<PostViewsIncreaseMutation>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /** Prefroms all update operations of a users Profile */
  updateProfile?: Maybe<ProfileUpdateMutation>;
  /**
   * Perfoms update operations on a staff
   * Mostly staff permisions
   */
  updateStaff?: Maybe<StaffUpdateMutation>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String']['input'];
};


export type MutationCreateCommentArgs = {
  body: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationCreateStaffArgs = {
  canAlterPodcast?: InputMaybe<Scalars['Boolean']['input']>;
  canAlterPost?: InputMaybe<Scalars['Boolean']['input']>;
  canAlterUser?: InputMaybe<Scalars['Boolean']['input']>;
  canCreateOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  canCreatePodcast?: InputMaybe<Scalars['Boolean']['input']>;
  canCreatePost?: InputMaybe<Scalars['Boolean']['input']>;
  canCreateUser?: InputMaybe<Scalars['Boolean']['input']>;
  canDeleteOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  canDeletePodcast?: InputMaybe<Scalars['Boolean']['input']>;
  canDeletePost?: InputMaybe<Scalars['Boolean']['input']>;
  canDeleteUser?: InputMaybe<Scalars['Boolean']['input']>;
  canUpdateOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  userEmail: Scalars['String']['input'];
};


export type MutationCreateSuperUserArgs = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
  secretCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUpdateFileArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  fileId?: InputMaybe<Scalars['ID']['input']>;
  folder?: InputMaybe<FileFoldersEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUpdateGuestArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  guestId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateUpdateImageArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<ImageFoldersEnum>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateUpdateLocationArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUpdateOpportunityArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  opportunityId?: InputMaybe<Scalars['ID']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title: Scalars['String']['input'];
};


export type MutationCreateUpdateOrganizationArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  logoId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateUpdatePodcastArgs = {
  audioId?: InputMaybe<Scalars['ID']['input']>;
  coverPhotoId?: InputMaybe<Scalars['ID']['input']>;
  description: Scalars['String']['input'];
  guestIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hostIds: Array<InputMaybe<Scalars['ID']['input']>>;
  podcastId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateUpdatePostArgs = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  body: Scalars['String']['input'];
  coverPhotoId?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateUpdateTagArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String']['input'];
};


export type MutationDeleteFileArgs = {
  fileId: Scalars['ID']['input'];
};


export type MutationDeleteImageArgs = {
  imageId: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationIncreasePodcastListensArgs = {
  podcastId: Scalars['ID']['input'];
};


export type MutationIncreasePostViewCountArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendSecondaryEmailActivationArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSwapEmailsArgs = {
  password: Scalars['String']['input'];
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProfileArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profileId: Scalars['ID']['input'];
};


export type MutationUpdateStaffArgs = {
  canAlterPodcast?: InputMaybe<Scalars['Boolean']['input']>;
  canAlterPost?: InputMaybe<Scalars['Boolean']['input']>;
  canAlterUser?: InputMaybe<Scalars['Boolean']['input']>;
  canCreateOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  canCreatePodcast?: InputMaybe<Scalars['Boolean']['input']>;
  canCreatePost?: InputMaybe<Scalars['Boolean']['input']>;
  canCreateUser?: InputMaybe<Scalars['Boolean']['input']>;
  canDeleteOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  canDeletePodcast?: InputMaybe<Scalars['Boolean']['input']>;
  canDeletePost?: InputMaybe<Scalars['Boolean']['input']>;
  canDeleteUser?: InputMaybe<Scalars['Boolean']['input']>;
  canUpdateOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  userEmail: Scalars['String']['input'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifySecondaryEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String']['input'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  unarchiving?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserNode>;
};

/** Create new or update existing opportunity */
export type OpportunityCreateUpdateMutation = {
  __typename?: 'OpportunityCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  opportunity?: Maybe<OpportunityType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum OpportunityDates {
  AnyTime = 'AnyTime',
  ThisMonth = 'ThisMonth',
  ThisWeek = 'ThisWeek',
  ThisYear = 'ThisYear',
  Today = 'Today'
}

export type OpportunityType = Node & {
  __typename?: 'OpportunityType';
  content?: Maybe<Scalars['String']['output']>;
  dateAdded: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['DateTime']['output'];
  location?: Maybe<LocationType>;
  opportunityId?: Maybe<Scalars['ID']['output']>;
  organization?: Maybe<OrganizationType>;
  tags?: Maybe<Array<Maybe<TagType>>>;
  title: Scalars['String']['output'];
};

export type OpportunityTypeConnection = {
  __typename?: 'OpportunityTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OpportunityTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OpportunityType` and its cursor. */
export type OpportunityTypeEdge = {
  __typename?: 'OpportunityTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OpportunityType>;
};

export type OrganizationCreateUpdateMutation = {
  __typename?: 'OrganizationCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  organization?: Maybe<OrganizationType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type OrganizationType = Node & {
  __typename?: 'OrganizationType';
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  logo?: Maybe<ImageType>;
  name: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['ID']['output']>;
};

export type OrganizationTypeConnection = {
  __typename?: 'OrganizationTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrganizationTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OrganizationType` and its cursor. */
export type OrganizationTypeEdge = {
  __typename?: 'OrganizationTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OrganizationType>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Performs create and update activity on `Podcast` object.
 * To perform an update, all you need to do is pass the podcast `id`.
 */
export type PodcastCreateUpdateMutation = {
  __typename?: 'PodcastCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  podcast?: Maybe<PodcastType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Podcast graphql object type */
export type PodcastType = Node & {
  __typename?: 'PodcastType';
  audio?: Maybe<FileType>;
  coverPhoto?: Maybe<ImageType>;
  dateAdded: Scalars['DateTime']['output'];
  /** short summary of this podcast */
  description: Scalars['String']['output'];
  guests?: Maybe<Array<Maybe<GuestType>>>;
  hosts?: Maybe<Array<Maybe<HostType>>>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['DateTime']['output'];
  listens: Scalars['Int']['output'];
  podcastId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
};

export type PodcastTypeConnection = {
  __typename?: 'PodcastTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PodcastTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PodcastType` and its cursor. */
export type PodcastTypeEdge = {
  __typename?: 'PodcastTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PodcastType>;
};

/**
 * Performs create and update functionality on a blog postself.
 * To perform an update, you just need to pass in the blog `id`.
 */
export type PostCreateUpdateMutation = {
  __typename?: 'PostCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  post?: Maybe<PostType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Deletes a post with the specified id. */
export type PostDeleteMutation = {
  __typename?: 'PostDeleteMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PostType = Node & {
  __typename?: 'PostType';
  abstract?: Maybe<Scalars['String']['output']>;
  author: UserType;
  body: Scalars['String']['output'];
  comments?: Maybe<Array<Maybe<CommentType>>>;
  coverPhoto?: Maybe<ImageType>;
  dateAdded: Scalars['DateTime']['output'];
  dislikes: Scalars['Int']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['DateTime']['output'];
  likes: Scalars['Int']['output'];
  postId?: Maybe<Scalars['ID']['output']>;
  readLength?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type PostTypeConnection = {
  __typename?: 'PostTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PostType` and its cursor. */
export type PostTypeEdge = {
  __typename?: 'PostTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PostType>;
};

/** Increases the view count on a post */
export type PostViewsIncreaseMutation = {
  __typename?: 'PostViewsIncreaseMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  post?: Maybe<PostType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  about?: Maybe<Scalars['String']['output']>;
  image?: Maybe<ImageType>;
  profileId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<UserType>;
};

/** Prefroms all update operations of a users Profile */
export type ProfileUpdateMutation = {
  __typename?: 'ProfileUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  profile?: Maybe<ProfileType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allPodcasts?: Maybe<PodcastTypeConnection>;
  allPosts?: Maybe<PostTypeConnection>;
  file?: Maybe<FileType>;
  files?: Maybe<FileTypeConnection>;
  getGuestById?: Maybe<GuestType>;
  getPodcastById?: Maybe<PodcastType>;
  getPostById?: Maybe<PostType>;
  image?: Maybe<ImageType>;
  images?: Maybe<ImageTypeConnection>;
  location?: Maybe<LocationType>;
  locations?: Maybe<LocationTypeConnection>;
  me?: Maybe<UserNode>;
  mostListenedToPodcasts?: Maybe<PodcastTypeConnection>;
  opportunities?: Maybe<OpportunityTypeConnection>;
  opportunity?: Maybe<OpportunityType>;
  organization?: Maybe<OrganizationType>;
  organizations?: Maybe<OrganizationTypeConnection>;
  popularPosts?: Maybe<PostTypeConnection>;
  previousGuests?: Maybe<GuestTypeConnection>;
  recentHosts?: Maybe<Array<Maybe<UserType>>>;
  staffDetail?: Maybe<StaffType>;
  staffList?: Maybe<Array<StaffType>>;
  tags?: Maybe<TagTypeConnection>;
  user?: Maybe<UserNode>;
  userProfile?: Maybe<ProfileType>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryAllPodcastsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  body_Icontains?: InputMaybe<Scalars['String']['input']>;
  body_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  dislikes?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  readLength?: InputMaybe<Scalars['Float']['input']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']['input']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFileArgs = {
  fileId: Scalars['ID']['input'];
};


export type QueryFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  folder_Iexact?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGuestByIdArgs = {
  guestId: Scalars['ID']['input'];
};


export type QueryGetPodcastByIdArgs = {
  podcastId: Scalars['ID']['input'];
};


export type QueryGetPostByIdArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryImageArgs = {
  imageId: Scalars['ID']['input'];
};


export type QueryImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  description_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  folder_Iexact?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationArgs = {
  locationId: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  country_Iexact?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMostListenedToPodcastsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOpportunitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  datePosted?: InputMaybe<OpportunityDates>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location_Id?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tags_Id_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOpportunityArgs = {
  opportunityId: Scalars['ID']['input'];
};


export type QueryOrganizationArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Iexact?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPopularPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  body_Icontains?: InputMaybe<Scalars['String']['input']>;
  body_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  dislikes?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  readLength?: InputMaybe<Scalars['Float']['input']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']['input']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPreviousGuestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStaffDetailArgs = {
  staffId: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_Iexact?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserProfileArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status_Archived?: InputMaybe<Scalars['Boolean']['input']>;
  status_SecondaryEmail?: InputMaybe<Scalars['String']['input']>;
  status_Verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  revoked?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Promote existing user to staff with certan permisions */
export type StaffCreateMutation = {
  __typename?: 'StaffCreateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  staff?: Maybe<StaffType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type StaffType = Node & {
  __typename?: 'StaffType';
  canAlterPodcast: Scalars['Boolean']['output'];
  canAlterPost: Scalars['Boolean']['output'];
  canAlterUser: Scalars['Boolean']['output'];
  canCreateOpportunities: Scalars['Boolean']['output'];
  canCreatePodcast: Scalars['Boolean']['output'];
  canCreatePost: Scalars['Boolean']['output'];
  canCreateUser: Scalars['Boolean']['output'];
  canDeleteOpportunities: Scalars['Boolean']['output'];
  canDeletePodcast: Scalars['Boolean']['output'];
  canDeletePost: Scalars['Boolean']['output'];
  canDeleteUser: Scalars['Boolean']['output'];
  canUpdateOpportunities: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  staffId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<UserType>;
};

/**
 * Perfoms update operations on a staff
 * Mostly staff permisions
 */
export type StaffUpdateMutation = {
  __typename?: 'StaffUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  staff?: Maybe<StaffType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Classified */
export type SuperUserCreateMutation = {
  __typename?: 'SuperUserCreateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserType>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type TagType = Node & {
  __typename?: 'TagType';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  tagId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
};

export type TagTypeConnection = {
  __typename?: 'TagTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TagTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TagType` and its cursor. */
export type TagTypeEdge = {
  __typename?: 'TagTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TagType>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']['output']>;
  category: CustomUserCategory;
  commentSet: Array<CommentType>;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  hostSet: HostTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['Int']['output']>;
  postSet: PostTypeConnection;
  profile?: Maybe<ProfileType>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<StaffType>;
  username?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};


export type UserNodeHostSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodePostSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  body_Icontains?: InputMaybe<Scalars['String']['input']>;
  body_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  dislikes?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  readLength?: InputMaybe<Scalars['Float']['input']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']['input']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  category: CustomUserCategory;
  commentSet: Array<CommentType>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  hostSet: HostTypeConnection;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  postSet: PostTypeConnection;
  profile?: Maybe<ProfileType>;
  staff?: Maybe<StaffType>;
};


export type UserTypeHostSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTypePostSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  body_Icontains?: InputMaybe<Scalars['String']['input']>;
  body_Istartswith?: InputMaybe<Scalars['String']['input']>;
  dateAdded?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']['input']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  dislikes?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  readLength?: InputMaybe<Scalars['Float']['input']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']['input']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type TagCreateUpdateMutationVariables = Exact<{
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type TagCreateUpdateMutation = { __typename?: 'Mutation', createUpdateTag?: { __typename?: 'CreateUpdateTagMutation', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorType', field: string, messages: Array<string> } | null> | null, tag?: { __typename?: 'TagType', tagId?: string | null, title: string, description?: string | null } | null } | null };

export type CreateUpdateOrganizationMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']['input']>;
  logoId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateUpdateOrganizationMutation = { __typename?: 'Mutation', createUpdateOrganization?: { __typename?: 'OrganizationCreateUpdateMutation', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorType', field: string, messages: Array<string> } | null> | null, organization?: { __typename?: 'OrganizationType', organizationId?: string | null, name: string, description?: string | null, logo?: { __typename?: 'ImageType', url: string, imageId?: string | null, description?: string | null } | null } | null } | null };

export type CreateUpdateImageMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  folder?: InputMaybe<ImageFoldersEnum>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateUpdateImageMutation = { __typename?: 'Mutation', createUpdateImage?: { __typename?: 'ImageCreateUpdateMutation', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorType', field: string, messages: Array<string> } | null> | null, image?: { __typename?: 'ImageType', description?: string | null, imageId?: string | null, url: string } | null } | null };

export type CreateUpdateOpportunityMutationVariables = Exact<{
  title: Scalars['String']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
  opportunityId?: InputMaybe<Scalars['ID']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUpdateOpportunityMutation = { __typename?: 'Mutation', createUpdateOpportunity?: { __typename?: 'OpportunityCreateUpdateMutation', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorType', field: string, messages: Array<string> } | null> | null } | null };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', register?: { __typename?: 'Register', errors?: any | null, success?: boolean | null } | null };

export type AdminSignInMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminSignInMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', errors?: any | null, refreshToken?: string | null, success?: boolean | null, token?: string | null, user?: { __typename?: 'UserNode', fullName?: string | null, email: string, staff?: { __typename?: 'StaffType', canCreatePost: boolean, canAlterPost: boolean, canDeletePost: boolean, canCreateUser: boolean, canAlterUser: boolean, canDeleteUser: boolean, canCreatePodcast: boolean, canAlterPodcast: boolean, canDeletePodcast: boolean, canCreateOpportunities: boolean, canUpdateOpportunities: boolean, canDeleteOpportunities: boolean, staffId?: string | null } | null, profile?: { __typename?: 'ProfileType', about?: string | null, profileId?: string | null, image?: { __typename?: 'ImageType', description?: string | null, imageId?: string | null, url: string } | null } | null } | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'RefreshToken', errors?: any | null, payload?: any | null, refreshToken?: string | null, success?: boolean | null, token?: string | null } | null };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken?: { __typename?: 'VerifyToken', success?: boolean | null, errors?: any | null, payload?: any | null } | null };

export type OrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationsQuery = { __typename?: 'Query', organizations?: { __typename?: 'OrganizationTypeConnection', edges: Array<{ __typename?: 'OrganizationTypeEdge', cursor: string, node?: { __typename?: 'OrganizationType', description?: string | null, organizationId?: string | null, name: string, logo?: { __typename?: 'ImageType', description?: string | null, imageId?: string | null, publicId: string, url: string } | null } | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagTypeConnection', edges: Array<{ __typename?: 'TagTypeEdge', cursor: string, node?: { __typename?: 'TagType', title: string, description?: string | null, category?: string | null, tagId?: string | null } | null } | null> } | null };

export type PopularPostsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PopularPostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostTypeConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'PostTypeEdge', cursor: string, node?: { __typename?: 'PostType', abstract?: string | null, title: string, views: number, postId?: string | null, readLength?: number | null, likes: number, lastUpdated: any, author: { __typename?: 'UserType', fullName?: string | null, id: string, profile?: { __typename?: 'ProfileType', image?: { __typename?: 'ImageType', url: string, description?: string | null } | null } | null }, coverPhoto?: { __typename?: 'ImageType', description?: string | null, url: string } | null } | null } | null> } | null };

export type PostDetailQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type PostDetailQuery = { __typename?: 'Query', post?: { __typename?: 'PostType', title: string, body: string, readLength?: number | null, lastUpdated: any, postId?: string | null, author: { __typename?: 'UserType', fullName?: string | null, profile?: { __typename?: 'ProfileType', image?: { __typename?: 'ImageType', imageId?: string | null, description?: string | null, url: string } | null } | null }, coverPhoto?: { __typename?: 'ImageType', imageId?: string | null, description?: string | null, url: string } | null } | null };

export type ImagesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  descriptionIstartswith?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionIcontains?: InputMaybe<Scalars['String']['input']>;
}>;


export type ImagesQuery = { __typename?: 'Query', images?: { __typename?: 'ImageTypeConnection', edges: Array<{ __typename?: 'ImageTypeEdge', cursor: string, node?: { __typename?: 'ImageType', description?: string | null, url: string, imageId?: string | null } | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean } } | null };

export type OpportunitiesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  tagsIdIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
  datePosted?: InputMaybe<OpportunityDates>;
  titleIcontains?: InputMaybe<Scalars['String']['input']>;
}>;


export type OpportunitiesQuery = { __typename?: 'Query', opportunities?: { __typename?: 'OpportunityTypeConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'OpportunityTypeEdge', cursor: string, node?: { __typename?: 'OpportunityType', content?: string | null, description?: string | null, lastUpdated: any, opportunityId?: string | null, title: string, location?: { __typename?: 'LocationType', address?: string | null, country?: string | null, lastUpdated?: any | null, locationId?: string | null, state?: string | null, zipCode?: string | null } | null, tags?: Array<{ __typename?: 'TagType', title: string, description?: string | null, category?: string | null, tagId?: string | null } | null> | null, organization?: { __typename?: 'OrganizationType', description?: string | null, organizationId?: string | null, name: string, logo?: { __typename?: 'ImageType', description?: string | null, url: string, imageId?: string | null } | null } | null } | null } | null> } | null };


export const TagCreateUpdateDocument = gql`
    mutation TagCreateUpdate($category: String, $description: String, $tagId: ID, $title: String) {
  createUpdateTag(
    category: $category
    description: $description
    tagId: $tagId
    title: $title
  ) {
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

export function useTagCreateUpdateMutation() {
  return Urql.useMutation<TagCreateUpdateMutation, TagCreateUpdateMutationVariables>(TagCreateUpdateDocument);
};
export const CreateUpdateOrganizationDocument = gql`
    mutation CreateUpdateOrganization($description: String, $logoId: ID, $name: String, $organizationId: ID) {
  createUpdateOrganization(
    description: $description
    logoId: $logoId
    name: $name
    organizationId: $organizationId
  ) {
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

export function useCreateUpdateOrganizationMutation() {
  return Urql.useMutation<CreateUpdateOrganizationMutation, CreateUpdateOrganizationMutationVariables>(CreateUpdateOrganizationDocument);
};
export const CreateUpdateImageDocument = gql`
    mutation CreateUpdateImage($description: String, $image: Upload, $folder: ImageFoldersEnum, $imageId: ID) {
  createUpdateImage(
    description: $description
    image: $image
    folder: $folder
    imageId: $imageId
  ) {
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

export function useCreateUpdateImageMutation() {
  return Urql.useMutation<CreateUpdateImageMutation, CreateUpdateImageMutationVariables>(CreateUpdateImageDocument);
};
export const CreateUpdateOpportunityDocument = gql`
    mutation CreateUpdateOpportunity($title: String!, $content: String, $tagIds: [ID], $opportunityId: ID, $organizationId: ID, $locationId: ID, $description: String) {
  createUpdateOpportunity(
    title: $title
    content: $content
    tagIds: $tagIds
    opportunityId: $opportunityId
    organizationId: $organizationId
    locationId: $locationId
    description: $description
  ) {
    success
    errors {
      field
      messages
    }
  }
}
    `;

export function useCreateUpdateOpportunityMutation() {
  return Urql.useMutation<CreateUpdateOpportunityMutation, CreateUpdateOpportunityMutationVariables>(CreateUpdateOpportunityDocument);
};
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password1: String!, $password2: String!) {
  register(email: $email, password1: $password1, password2: $password2) {
    errors
    success
  }
}
    `;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument);
};
export const AdminSignInDocument = gql`
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
    `;

export function useAdminSignInMutation() {
  return Urql.useMutation<AdminSignInMutation, AdminSignInMutationVariables>(AdminSignInDocument);
};
export const RefreshTokenDocument = gql`
    mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    errors
    payload
    refreshToken
    success
    token
  }
}
    `;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument);
};
export const VerifyTokenDocument = gql`
    mutation VerifyToken($token: String!) {
  verifyToken(token: $token) {
    success
    errors
    payload
  }
}
    `;

export function useVerifyTokenMutation() {
  return Urql.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument);
};
export const OrganizationsDocument = gql`
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
    `;

export function useOrganizationsQuery(options?: Omit<Urql.UseQueryArgs<OrganizationsQueryVariables>, 'query'>) {
  return Urql.useQuery<OrganizationsQuery, OrganizationsQueryVariables>({ query: OrganizationsDocument, ...options });
};
export const TagsDocument = gql`
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

export function useTagsQuery(options?: Omit<Urql.UseQueryArgs<TagsQueryVariables>, 'query'>) {
  return Urql.useQuery<TagsQuery, TagsQueryVariables>({ query: TagsDocument, ...options });
};
export const PopularPostsDocument = gql`
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

export function usePopularPostsQuery(options?: Omit<Urql.UseQueryArgs<PopularPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PopularPostsQuery, PopularPostsQueryVariables>({ query: PopularPostsDocument, ...options });
};
export const PostDetailDocument = gql`
    query PostDetail($postId: ID!) {
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
    `;

export function usePostDetailQuery(options: Omit<Urql.UseQueryArgs<PostDetailQueryVariables>, 'query'>) {
  return Urql.useQuery<PostDetailQuery, PostDetailQueryVariables>({ query: PostDetailDocument, ...options });
};
export const ImagesDocument = gql`
    query Images($after: String, $first: Int, $descriptionIstartswith: String, $description: String, $descriptionIcontains: String) {
  images(
    after: $after
    first: $first
    description_Istartswith: $descriptionIstartswith
    description: $description
    description_Icontains: $descriptionIcontains
  ) {
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

export function useImagesQuery(options?: Omit<Urql.UseQueryArgs<ImagesQueryVariables>, 'query'>) {
  return Urql.useQuery<ImagesQuery, ImagesQueryVariables>({ query: ImagesDocument, ...options });
};
export const OpportunitiesDocument = gql`
    query Opportunities($after: String, $first: Int, $tagsIdIn: [String], $locationId: Float, $datePosted: OpportunityDates, $titleIcontains: String) {
  opportunities(
    after: $after
    first: $first
    tags_Id_In: $tagsIdIn
    location_Id: $locationId
    datePosted: $datePosted
    title_Icontains: $titleIcontains
  ) {
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

export function useOpportunitiesQuery(options?: Omit<Urql.UseQueryArgs<OpportunitiesQueryVariables>, 'query'>) {
  return Urql.useQuery<OpportunitiesQuery, OpportunitiesQueryVariables>({ query: OpportunitiesDocument, ...options });
};