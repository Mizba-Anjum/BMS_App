/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
      id
      ItemName
      ItemDescription
      ItemCategory {
        id
        CategoryName
        CategoryItems {
          id
          ItemName
          ItemDescription
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      ItemEvents {
        id
        EventName
        EventDescription
        StartTime
        EndTime
        EventItem {
          id
          ItemName
          ItemDescription
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      ItemAttributes {
        id
        AttributeTitle
        AttributeDesc
        AttributeItems {
          id
          ItemName
          ItemDescription
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        ItemCategory {
          id
          CategoryName
          createdAt
          updatedAt
        }
        ItemEvents {
          id
          EventName
          EventDescription
          StartTime
          EndTime
          createdAt
          updatedAt
        }
        ItemAttributes {
          id
          AttributeTitle
          AttributeDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      EventItem {
        id
        ItemName
        ItemDescription
        ItemCategory {
          id
          CategoryName
          createdAt
          updatedAt
        }
        ItemEvents {
          id
          EventName
          EventDescription
          StartTime
          EndTime
          createdAt
          updatedAt
        }
        ItemAttributes {
          id
          AttributeTitle
          AttributeDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
        EventItem {
          id
          ItemName
          ItemDescription
          createdAt
          updatedAt
        }
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
      CategoryItems {
        id
        ItemName
        ItemDescription
        ItemCategory {
          id
          CategoryName
          createdAt
          updatedAt
        }
        ItemEvents {
          id
          EventName
          EventDescription
          StartTime
          EndTime
          createdAt
          updatedAt
        }
        ItemAttributes {
          id
          AttributeTitle
          AttributeDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
        CategoryItems {
          id
          ItemName
          ItemDescription
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttributes = /* GraphQL */ `
  query GetAttributes($id: ID!) {
    getAttributes(id: $id) {
      id
      AttributeTitle
      AttributeDesc
      AttributeItems {
        id
        ItemName
        ItemDescription
        ItemCategory {
          id
          CategoryName
          createdAt
          updatedAt
        }
        ItemEvents {
          id
          EventName
          EventDescription
          StartTime
          EndTime
          createdAt
          updatedAt
        }
        ItemAttributes {
          id
          AttributeTitle
          AttributeDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAttributes = /* GraphQL */ `
  query ListAttributes(
    $filter: ModelAttributesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        AttributeTitle
        AttributeDesc
        AttributeItems {
          id
          ItemName
          ItemDescription
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
