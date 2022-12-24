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
export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
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
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
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
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
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
export const createAttributes = /* GraphQL */ `
  mutation CreateAttributes(
    $input: CreateAttributesInput!
    $condition: ModelAttributesConditionInput
  ) {
    createAttributes(input: $input, condition: $condition) {
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
export const updateAttributes = /* GraphQL */ `
  mutation UpdateAttributes(
    $input: UpdateAttributesInput!
    $condition: ModelAttributesConditionInput
  ) {
    updateAttributes(input: $input, condition: $condition) {
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
export const deleteAttributes = /* GraphQL */ `
  mutation DeleteAttributes(
    $input: DeleteAttributesInput!
    $condition: ModelAttributesConditionInput
  ) {
    deleteAttributes(input: $input, condition: $condition) {
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
