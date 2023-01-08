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
        createdAt
        updatedAt
      }
      StartDate
      EndDate
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
        StartDate
        EndDate
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
