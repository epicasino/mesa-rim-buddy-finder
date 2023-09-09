import { gql } from "@apollo/client";

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

export const QUERY_ALL_USERS = gql`
  query Users($cursor: Int) {
    users(cursor: $cursor) {
      cursor
      users {
        _id
        username
        name
        pronouns
        email
        phone
        topRope
        leadClimb
        locations {
          miraMesa
          missionValley
          northCity
          reno
          austin
        }
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
  }
`;

export const QUERY_USER = gql`
  query User($username: String!) {
  user(username: $username) {
    username
  }
}
`