/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
      id
      ItemName
      ItemDescription
      CategoryAssignment {
        id
        CategoryName
        createdAt
        updatedAt
      }
      EventAssignment {
        items {
          id
          EventName
          EventDescription
          StartTime
          EndTime
          itemsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      itemsCategoryAssignmentId
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ItemName
        ItemDescription
        CategoryAssignment {
          id
          CategoryName
          createdAt
          updatedAt
        }
        EventAssignment {
          nextToken
        }
        createdAt
        updatedAt
        itemsCategoryAssignmentId
      }
      nextToken
    }
  }
`;
export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      EventName
      EventDescription
      StartTime
      EndTime
      itemsID
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        EventName
        EventDescription
        StartTime
        EndTime
        itemsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CategoryName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const eventsByItemsID = /* GraphQL */ `
  query EventsByItemsID(
    $itemsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByItemsID(
      itemsID: $itemsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        EventName
        EventDescription
        StartTime
        EndTime
        itemsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
