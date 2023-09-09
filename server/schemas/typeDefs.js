const typeDefs = `
  type User {
    _id: ID
    username: String!
    name: String!
    pronouns: String
    email: String
    phone: String
    password: String!
    locations: Locations
    topRope: Boolean
    leadClimb: Boolean
    availability: Availability
  }
  type Locations {
    miraMesa: Boolean
    missionValley: Boolean
    northCity: Boolean
    reno: Boolean
    austin: Boolean
  }
  input LocationsInput {
    miraMesa: Boolean
    missionValley: Boolean
    northCity: Boolean
    reno: Boolean
    austin: Boolean
  }
  input UserInput {
    userId: String
    name: String
    pronouns: String
    email: String
    phone: String
    locations: LocationsInput
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
  type UserList {
    page: String
    users: [User]
  }
  type Query {
    users(page: Int): UserList
    user(username: String, userId: String): User
    me: User
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    register(username: String!, password: String!, name: String!, email: String, phone: String): Auth
    removeUser(userId: String!): User
    addInfo(userInfo: UserInput): User
  }
`;

module.exports = typeDefs;
