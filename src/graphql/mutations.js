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
export const updateItems = /* GraphQL */ `
  mutation UpdateItems(
    $input: UpdateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    updateItems(input: $input, condition: $condition) {
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
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems(
    $input: DeleteItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    deleteItems(input: $input, condition: $condition) {
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
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
