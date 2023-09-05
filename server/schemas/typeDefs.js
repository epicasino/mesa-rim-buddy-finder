const typeDefs = `
  type User {
    _id: ID
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
  input UserInput {
    userId: String
    pronouns: String
    email: String
    phone: String
    locations: [String]
    topRope: Boolean
    leadClimb: Boolean
    availability: AvailabilityInput
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
  input AvailabilityInput {
    sunday: DailyAvailableInput
    monday: DailyAvailableInput
    tuesday: DailyAvailableInput
    wednesday: DailyAvailableInput
    thursday: DailyAvailableInput
    friday: DailyAvailableInput
    saturday: DailyAvailableInput
  }
  type DailyAvailable {
    from: String
    to: String
    unavailable: Boolean
  }
  input DailyAvailableInput {
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
    user(username: String!): User
    me: User
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    register(username: String!, password: String!, name: String!): Auth
    removeUser(userId: String!): User
    addInfo(userInfo: UserInput): User
  }
`;

module.exports = typeDefs;
