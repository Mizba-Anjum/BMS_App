/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems($filter: ModelSubscriptionItemsFilterInput) {
    onCreateItems(filter: $filter) {
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
      AttributesAssignment {
        items {
          id
          AttributeDesc
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
export const onUpdateItems = /* GraphQL */ `
  subscription OnUpdateItems($filter: ModelSubscriptionItemsFilterInput) {
    onUpdateItems(filter: $filter) {
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
      AttributesAssignment {
        items {
          id
          AttributeDesc
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
export const onDeleteItems = /* GraphQL */ `
  subscription OnDeleteItems($filter: ModelSubscriptionItemsFilterInput) {
    onDeleteItems(filter: $filter) {
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
      AttributesAssignment {
        items {
          id
          AttributeDesc
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
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
      id
      CategoryName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAttributes = /* GraphQL */ `
  subscription OnCreateAttributes(
    $filter: ModelSubscriptionAttributesFilterInput
  ) {
    onCreateAttributes(filter: $filter) {
      id
      AttributeDesc
      itemsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAttributes = /* GraphQL */ `
  subscription OnUpdateAttributes(
    $filter: ModelSubscriptionAttributesFilterInput
  ) {
    onUpdateAttributes(filter: $filter) {
      id
      AttributeDesc
      itemsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAttributes = /* GraphQL */ `
  subscription OnDeleteAttributes(
    $filter: ModelSubscriptionAttributesFilterInput
  ) {
    onDeleteAttributes(filter: $filter) {
      id
      AttributeDesc
      itemsID
      createdAt
      updatedAt
    }
  }
`;
