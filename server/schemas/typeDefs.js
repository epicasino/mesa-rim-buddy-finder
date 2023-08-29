const typeDefs = `
  type User {
    _id: ID
    username: String!
    pronouns: String
    email: String
    phone: String
    password: String!
    locations: [String]
    topRope: Boolean
    leadClimb: Boolean
    availability: Availability
  }
  input UserInput {
    username: String!
    name: String!
    pronouns: String
    email: String
    phone: String
    password: String!
    locations: [String]
    topRope: Boolean
    leadClimb: Boolean
    availability: Availability
  }
  type Availability {
    sunday: DailyAvailable
    monday: DailyAvailable
    tuesday: DailyAvailable
    wednesday: DailyAvailable
    thursday: DailyAvailable
    friday: DailyAvailable
    saturday: DailyAvailable
  }
  type DailyAvailable {
    from: String
    to: String
    unavailable: Boolean
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    me: User
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    register(userInfo: UserInput!): Auth
    removeUser(userId: String!): User
  }
`;

module.exports = typeDefs;