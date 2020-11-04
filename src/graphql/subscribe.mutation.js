import gql from 'graphql-tag';

const CREATE_SUBSCRIBE = gql`
  mutation subscribeToPlan($id: Int!) {
    subscribeToPlan(id: $id) {
      name
      price
    }
  }
`;

export { CREATE_SUBSCRIBE };
