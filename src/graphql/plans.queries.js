import { gql } from '@apollo/client';

const GET_PLANS = gql`
  query {
    listPlans(filters: { active: true }) {
      id
      price
      weeklyRecipes
      numberOfPeople
    }
  }
`;

export { GET_PLANS };
