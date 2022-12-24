/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems($filter: ModelSubscriptionItemsFilterInput) {
    onCreateItems(filter: $filter) {
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
export const onUpdateItems = /* GraphQL */ `
  subscription OnUpdateItems($filter: ModelSubscriptionItemsFilterInput) {
    onUpdateItems(filter: $filter) {
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
export const onDeleteItems = /* GraphQL */ `
  subscription OnDeleteItems($filter: ModelSubscriptionItemsFilterInput) {
    onDeleteItems(filter: $filter) {
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
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
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
export const onCreateAttributes = /* GraphQL */ `
  subscription OnCreateAttributes(
    $filter: ModelSubscriptionAttributesFilterInput
  ) {
    onCreateAttributes(filter: $filter) {
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
export const onUpdateAttributes = /* GraphQL */ `
  subscription OnUpdateAttributes(
    $filter: ModelSubscriptionAttributesFilterInput
  ) {
    onUpdateAttributes(filter: $filter) {
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
export const onDeleteAttributes = /* GraphQL */ `
  subscription OnDeleteAttributes(
    $filter: ModelSubscriptionAttributesFilterInput
  ) {
    onDeleteAttributes(filter: $filter) {
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
