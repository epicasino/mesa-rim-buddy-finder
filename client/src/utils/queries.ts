import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      name
      pronouns
      email
      phone
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

export const QUERY_USERS = gql`
  query Query($page: Int) {
    users(page: $page) {
      page
      users {
        _id
        name
        pronouns
        phone
        email
        topRope
        leadClimb
        bouldering
        locations {
          miraMesa
          missionValley
          northCity
          reno
          austin
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User($userId: String, $username: String) {
    user(userId: $userId, username: $username) {
      _id
      name
      username
      pronouns
      email
      phone
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
