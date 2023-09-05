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
    password
    locations
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
`

export const QUERY_ALL_USERS = gql`
  query AllUsers {
  users {
    _id
    username
    name
    pronouns
    email
    phone
    locations
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
`

export const QUERY_USER = gql`
  query User($username: String!) {
  user(username: $username) {
    username
  }
}
`