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
        description
      }
    }
  }
`;

export const QUERY_ALL_SERVICES = gql`
query {
  services {
    _id
    name
    category {
      _id
      name
      image
      description
    }
    price
  }
}
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      description
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
