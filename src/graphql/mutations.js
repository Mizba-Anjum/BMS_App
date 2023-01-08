/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItems = /* GraphQL */ `
  mutation CreateItems(
    $input: CreateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    createItems(input: $input, condition: $condition) {
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
export const updateItems = /* GraphQL */ `
  mutation UpdateItems(
    $input: UpdateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    updateItems(input: $input, condition: $condition) {
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
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems(
    $input: DeleteItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    deleteItems(input: $input, condition: $condition) {
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
export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
