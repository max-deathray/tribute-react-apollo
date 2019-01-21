module.exports = {
        typeDefs: /* GraphQL */ `type AggregateHeart {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVibe {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Heart {
  id: ID!
  vibe: Vibe!
  user: User!
}

type HeartConnection {
  pageInfo: PageInfo!
  edges: [HeartEdge]!
  aggregate: AggregateHeart!
}

input HeartCreateInput {
  vibe: VibeCreateOneWithoutHeartsInput!
  user: UserCreateOneWithoutHeartsInput!
}

input HeartCreateManyWithoutUserInput {
  create: [HeartCreateWithoutUserInput!]
  connect: [HeartWhereUniqueInput!]
}

input HeartCreateManyWithoutVibeInput {
  create: [HeartCreateWithoutVibeInput!]
  connect: [HeartWhereUniqueInput!]
}

input HeartCreateWithoutUserInput {
  vibe: VibeCreateOneWithoutHeartsInput!
}

input HeartCreateWithoutVibeInput {
  user: UserCreateOneWithoutHeartsInput!
}

type HeartEdge {
  node: Heart!
  cursor: String!
}

enum HeartOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HeartPreviousValues {
  id: ID!
}

input HeartScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [HeartScalarWhereInput!]
  OR: [HeartScalarWhereInput!]
  NOT: [HeartScalarWhereInput!]
}

type HeartSubscriptionPayload {
  mutation: MutationType!
  node: Heart
  updatedFields: [String!]
  previousValues: HeartPreviousValues
}

input HeartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HeartWhereInput
  AND: [HeartSubscriptionWhereInput!]
  OR: [HeartSubscriptionWhereInput!]
  NOT: [HeartSubscriptionWhereInput!]
}

input HeartUpdateInput {
  vibe: VibeUpdateOneRequiredWithoutHeartsInput
  user: UserUpdateOneRequiredWithoutHeartsInput
}

input HeartUpdateManyWithoutUserInput {
  create: [HeartCreateWithoutUserInput!]
  delete: [HeartWhereUniqueInput!]
  connect: [HeartWhereUniqueInput!]
  disconnect: [HeartWhereUniqueInput!]
  update: [HeartUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [HeartUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [HeartScalarWhereInput!]
}

input HeartUpdateManyWithoutVibeInput {
  create: [HeartCreateWithoutVibeInput!]
  delete: [HeartWhereUniqueInput!]
  connect: [HeartWhereUniqueInput!]
  disconnect: [HeartWhereUniqueInput!]
  update: [HeartUpdateWithWhereUniqueWithoutVibeInput!]
  upsert: [HeartUpsertWithWhereUniqueWithoutVibeInput!]
  deleteMany: [HeartScalarWhereInput!]
}

input HeartUpdateWithoutUserDataInput {
  vibe: VibeUpdateOneRequiredWithoutHeartsInput
}

input HeartUpdateWithoutVibeDataInput {
  user: UserUpdateOneRequiredWithoutHeartsInput
}

input HeartUpdateWithWhereUniqueWithoutUserInput {
  where: HeartWhereUniqueInput!
  data: HeartUpdateWithoutUserDataInput!
}

input HeartUpdateWithWhereUniqueWithoutVibeInput {
  where: HeartWhereUniqueInput!
  data: HeartUpdateWithoutVibeDataInput!
}

input HeartUpsertWithWhereUniqueWithoutUserInput {
  where: HeartWhereUniqueInput!
  update: HeartUpdateWithoutUserDataInput!
  create: HeartCreateWithoutUserInput!
}

input HeartUpsertWithWhereUniqueWithoutVibeInput {
  where: HeartWhereUniqueInput!
  update: HeartUpdateWithoutVibeDataInput!
  create: HeartCreateWithoutVibeInput!
}

input HeartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  vibe: VibeWhereInput
  user: UserWhereInput
  AND: [HeartWhereInput!]
  OR: [HeartWhereInput!]
  NOT: [HeartWhereInput!]
}

input HeartWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createHeart(data: HeartCreateInput!): Heart!
  updateHeart(data: HeartUpdateInput!, where: HeartWhereUniqueInput!): Heart
  upsertHeart(where: HeartWhereUniqueInput!, create: HeartCreateInput!, update: HeartUpdateInput!): Heart!
  deleteHeart(where: HeartWhereUniqueInput!): Heart
  deleteManyHearts(where: HeartWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVibe(data: VibeCreateInput!): Vibe!
  updateVibe(data: VibeUpdateInput!, where: VibeWhereUniqueInput!): Vibe
  updateManyVibes(data: VibeUpdateManyMutationInput!, where: VibeWhereInput): BatchPayload!
  upsertVibe(where: VibeWhereUniqueInput!, create: VibeCreateInput!, update: VibeUpdateInput!): Vibe!
  deleteVibe(where: VibeWhereUniqueInput!): Vibe
  deleteManyVibes(where: VibeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  heart(where: HeartWhereUniqueInput!): Heart
  hearts(where: HeartWhereInput, orderBy: HeartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Heart]!
  heartsConnection(where: HeartWhereInput, orderBy: HeartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HeartConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vibe(where: VibeWhereUniqueInput!): Vibe
  vibes(where: VibeWhereInput, orderBy: VibeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vibe]!
  vibesConnection(where: VibeWhereInput, orderBy: VibeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VibeConnection!
  node(id: ID!): Node
}

type Subscription {
  heart(where: HeartSubscriptionWhereInput): HeartSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vibe(where: VibeSubscriptionWhereInput): VibeSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  vibes(where: VibeWhereInput, orderBy: VibeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vibe!]
  hearts(where: HeartWhereInput, orderBy: HeartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Heart!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  vibes: VibeCreateManyWithoutPostedByInput
  hearts: HeartCreateManyWithoutUserInput
}

input UserCreateOneWithoutHeartsInput {
  create: UserCreateWithoutHeartsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVibesInput {
  create: UserCreateWithoutVibesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutHeartsInput {
  name: String!
  email: String!
  password: String!
  vibes: VibeCreateManyWithoutPostedByInput
}

input UserCreateWithoutVibesInput {
  name: String!
  email: String!
  password: String!
  hearts: HeartCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  vibes: VibeUpdateManyWithoutPostedByInput
  hearts: HeartUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutHeartsInput {
  create: UserCreateWithoutHeartsInput
  update: UserUpdateWithoutHeartsDataInput
  upsert: UserUpsertWithoutHeartsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutVibesInput {
  create: UserCreateWithoutVibesInput
  update: UserUpdateWithoutVibesDataInput
  upsert: UserUpsertWithoutVibesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutHeartsDataInput {
  name: String
  email: String
  password: String
  vibes: VibeUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutVibesDataInput {
  name: String
  email: String
  password: String
  hearts: HeartUpdateManyWithoutUserInput
}

input UserUpsertWithoutHeartsInput {
  update: UserUpdateWithoutHeartsDataInput!
  create: UserCreateWithoutHeartsInput!
}

input UserUpsertWithoutVibesInput {
  update: UserUpdateWithoutVibesDataInput!
  create: UserCreateWithoutVibesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  vibes_every: VibeWhereInput
  vibes_some: VibeWhereInput
  vibes_none: VibeWhereInput
  hearts_every: HeartWhereInput
  hearts_some: HeartWhereInput
  hearts_none: HeartWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vibe {
  id: ID!
  createdAt: DateTime!
  description: String!
  img: String!
  postedBy: User
  hearts(where: HeartWhereInput, orderBy: HeartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Heart!]
}

type VibeConnection {
  pageInfo: PageInfo!
  edges: [VibeEdge]!
  aggregate: AggregateVibe!
}

input VibeCreateInput {
  description: String!
  img: String!
  postedBy: UserCreateOneWithoutVibesInput
  hearts: HeartCreateManyWithoutVibeInput
}

input VibeCreateManyWithoutPostedByInput {
  create: [VibeCreateWithoutPostedByInput!]
  connect: [VibeWhereUniqueInput!]
}

input VibeCreateOneWithoutHeartsInput {
  create: VibeCreateWithoutHeartsInput
  connect: VibeWhereUniqueInput
}

input VibeCreateWithoutHeartsInput {
  description: String!
  img: String!
  postedBy: UserCreateOneWithoutVibesInput
}

input VibeCreateWithoutPostedByInput {
  description: String!
  img: String!
  hearts: HeartCreateManyWithoutVibeInput
}

type VibeEdge {
  node: Vibe!
  cursor: String!
}

enum VibeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  img_ASC
  img_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VibePreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  img: String!
}

input VibeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  AND: [VibeScalarWhereInput!]
  OR: [VibeScalarWhereInput!]
  NOT: [VibeScalarWhereInput!]
}

type VibeSubscriptionPayload {
  mutation: MutationType!
  node: Vibe
  updatedFields: [String!]
  previousValues: VibePreviousValues
}

input VibeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VibeWhereInput
  AND: [VibeSubscriptionWhereInput!]
  OR: [VibeSubscriptionWhereInput!]
  NOT: [VibeSubscriptionWhereInput!]
}

input VibeUpdateInput {
  description: String
  img: String
  postedBy: UserUpdateOneWithoutVibesInput
  hearts: HeartUpdateManyWithoutVibeInput
}

input VibeUpdateManyDataInput {
  description: String
  img: String
}

input VibeUpdateManyMutationInput {
  description: String
  img: String
}

input VibeUpdateManyWithoutPostedByInput {
  create: [VibeCreateWithoutPostedByInput!]
  delete: [VibeWhereUniqueInput!]
  connect: [VibeWhereUniqueInput!]
  disconnect: [VibeWhereUniqueInput!]
  update: [VibeUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [VibeUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [VibeScalarWhereInput!]
  updateMany: [VibeUpdateManyWithWhereNestedInput!]
}

input VibeUpdateManyWithWhereNestedInput {
  where: VibeScalarWhereInput!
  data: VibeUpdateManyDataInput!
}

input VibeUpdateOneRequiredWithoutHeartsInput {
  create: VibeCreateWithoutHeartsInput
  update: VibeUpdateWithoutHeartsDataInput
  upsert: VibeUpsertWithoutHeartsInput
  connect: VibeWhereUniqueInput
}

input VibeUpdateWithoutHeartsDataInput {
  description: String
  img: String
  postedBy: UserUpdateOneWithoutVibesInput
}

input VibeUpdateWithoutPostedByDataInput {
  description: String
  img: String
  hearts: HeartUpdateManyWithoutVibeInput
}

input VibeUpdateWithWhereUniqueWithoutPostedByInput {
  where: VibeWhereUniqueInput!
  data: VibeUpdateWithoutPostedByDataInput!
}

input VibeUpsertWithoutHeartsInput {
  update: VibeUpdateWithoutHeartsDataInput!
  create: VibeCreateWithoutHeartsInput!
}

input VibeUpsertWithWhereUniqueWithoutPostedByInput {
  where: VibeWhereUniqueInput!
  update: VibeUpdateWithoutPostedByDataInput!
  create: VibeCreateWithoutPostedByInput!
}

input VibeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  postedBy: UserWhereInput
  hearts_every: HeartWhereInput
  hearts_some: HeartWhereInput
  hearts_none: HeartWhereInput
  AND: [VibeWhereInput!]
  OR: [VibeWhereInput!]
  NOT: [VibeWhereInput!]
}

input VibeWhereUniqueInput {
  id: ID
}
`
      }
    