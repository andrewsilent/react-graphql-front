import { gql } from '@apollo/client';

export const userChannels = gql`
  query getUserChannels($userId: ID!) {
    userChannels(userId: $userId) {
      userId
      channelId
      userRoleId
      lastStoryInteracted
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

export const userChannelWithStories = gql`
  query getUserChannelWithStories($userId: ID!, $channelId: ID!) {
    userChannelWithStories(userId: $userId, channelId: $channelId) {
      userId
      channelId
      userRoleId
      lastStoryInteracted
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
      stories {
        id
        type
        title
        status
        deleted
        created
        updated
        subtitle
        channelId
      }
    }
  }
`;

export const userChannelStoriesItems = gql`
  query getUserChannelStoriesItems($userId: ID!, $channelId: ID!) {
    userChannelStoriesItems(userId: $userId, channelId: $channelId) {
      userId
      channelId
      userRoleId
      lastStoryInteracted
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
      stories {
        id
        title
        status
        deleted
        created
        updated
        subtitle
        channelId
      }
      items {
        id
        url
        userId
        storyId
        type
        text
        title
        published
        created
        updated
        abstract
        headline
        sourceName
        subHeadline
      }
    }
  }
`;

export const userChannelStoriesWithItems = gql`
  query getUserChannelStoriesWithItems($userId: ID!, $channelId: ID!) {
    userChannelStoriesWithItems(userId: $userId, channelId: $channelId) {
      userId
      channelId
      userRoleId
      lastStoryInteracted
      user {
        id
        email
        screenName
        isStaff
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
      stories {
        id
        title
        status
        deleted
        created
        updated
        subtitle
        channelId
        items {
          id
          url
          userId
          storyId
          type
          text
          title
          published
          created
          updated
          abstract
          headline
          sourceName
          subHeadline
          imageUrl
        }
      }
    }
  }
`;

export const userChannelStoryWithItems = gql`
  query getUserChannelStoryWithItems($userId: ID!, $channelId: ID!, $storyId: ID!) {
    userChannelStoryWithItems(userId: $userId, channelId: $channelId, storyId: $storyId) {
      userId
      channelId
      userRoleId
      lastStoryInteracted
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
      stories {
        id
        title
        status
        deleted
        created
        updated
        subtitle
        channelId
      }
      items {
        id
        url
        userId
        storyId
        type
        text
        title
        published
        created
        updated
        abstract
        headline
        sourceName
        subHeadline
      }
    }
  }
`;
