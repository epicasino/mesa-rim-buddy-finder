import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        name
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Login($username: String!, $password: String!, $name: String!) {
    register(username: $username, password: $password, name: $name) {
      token
      user {
        _id
        username
        name
      }
    }
  }
`;
export const ADD_INFO = gql`
  mutation AddInfo($userInfo: UserInput) {
    addInfo(userInfo: $userInfo) {
      _id
      username
      name
      pronouns
      email
      phone
      password
      locations {
        miraMesa
        missionValley
        northCity
        reno
        austin
      }
      topRope
      leadClimb
      bouldering
      availability {
        sunday {
          from
          to
          unavailable
        }
        monday {
          from
          to
          unavailable
        }
        tuesday {
          from
          to
          unavailable
        }
        wednesday {
          from
          to
          unavailable
        }
        thursday {
          from
          to
          unavailable
        }
        friday {
          from
          to
          unavailable
        }
        saturday {
          from
          to
          unavailable
        }
      }
    }
  }
`;
