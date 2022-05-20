import { gql } from '@apollo/client';

export const QUERY_SERVICES = gql`
  query getServices($category: ID) {
    services(category: $category) {
      _id
      name
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_SERVICES = gql`
query getServices($category: ID) {
    services(category: $category)  {
      _id
      name
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;
