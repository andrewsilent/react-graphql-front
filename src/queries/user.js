import { gql } from '@apollo/client';

export const userById = gql`
  query getUserById($userId: ID!) {
    userById(userId: $userId) {
      id
      email
      isStaff
      screenName
    }
  }
`;

export const userWithChannels = gql`
  query getUserWithChannels($userId: ID!) {
    userWithChannels(userId: $userId) {
      userId
      channelId
      userRoleId
      lastStoryInteracted
      user {
        id
        email
        isStaff
        screenName
      }
      channel {
        id
        name
        owner
        locale
        deleted
        archived
        subdomain
        isDefault
        organisationId
        createdByUserId
      }
    }
  }
`;
