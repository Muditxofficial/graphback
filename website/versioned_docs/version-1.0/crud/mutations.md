---
id: mutations
title: Mutations
sidebar_label: Mutations
---

Graphback provides three mutation types for every model.

- [`create<Type>`](#create): create a new item in the database of and return the created object in the response.
- [`update<Type>`](#update): update an existing item in the database and return the updated object in the response.
- [`delete<Type>`](#delete): delete a single item in the database and return the deleted object in the response.

## Create

The `create` mutation allows the client to insert a new item in the database.

The mutation follows the naming format `create<Type>`:

```graphql
type Mutation {
  createNote(input: CreateNoteInput!): Note
}
```

**Arguments:**

- `input`: input type created by Graphback for creating a new `Note` object.

Graphback creates a `Create<Type>Input` input type for each of the data models you define, where the `create` configuration is enabled. Relationship object fields in models map to the foreign key field in the database. 

Each input field in `Create<Type>Input` directly maps to the fields in the model. With the exception of the primary field, each field added to the input type preserves field nullability from the original model.

:::note
Primary fields will be nullable in the input type as they are often auto-generated by the database.
:::

Take the following `Note` model as an example.

```graphql
""" @model """
type Note {
  id: ID!
  title: String!
  description: String
  """
  @manyToOne(field: 'notes', key: 'authorId')
  """
  author: User
}

// highlight-start
input CreateNoteInput {
  id: ID
  title: String!
  description: String
  authorId: ID
}
// highlight-end
```

The `CreateNoteInput` input type is created from the `Note` model.

Example of a typical create mutation on `Note`:

```graphql
mutation {
  createNote(input: {
    title: "Do shopping",
    description: "Get groceries for party",
    authorId: 19
  }) {
    id
    title
    description
    author {
      id
      name
    }
  }
}
```

You can also perform `create` mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):

```graphql
""" @model """
type Note {
  id: ID!
  title: String!
  description: String
  metadata: NoteMetadata
}

"""Regular non-model GraphQL type"""
type NoteMetadata {
  createdAt: String
  updatedAt: String
}

// highlight-start
input CreateNoteInput {
  id: ID
  title: String!
  description: String
  metadata: CreateNoteMetadataInput
}

input CreateNoteMetadataInput {
  createdAt: String
  updatedAt: String
}
// highlight-end
```

Graphback generates the appropriate input types for regular types that do not map to any database table/collection but are used as a field in a model.

You can create a new `Note` with `NoteMetadata` in a single mutation:

```graphql
mutation {
  createNote(input: {
    title: "Do shopping",
    description: "Get groceries for party",
    metadata: {
      createdAt: "2340324024",
      updatedAt: "2340324024"
    }
  }) {
    id
    title
    description
    metadata {
      createdAt
      updatedAt
    }
  }
}
```

## Update

The `update` mutation allows the client to update an existing item in the database.

The mutation follows the naming format `update<Type>`:

```graphql
type Mutation {
  updateNote(input: MutateNoteInput!): Note
}
```

**Arguments:**

- `input`: input type created by Graphback for updating an existing `Note` object.

Graphback creates a `Mutate<Type>Input` input type for each of the data models you define, where either the `update` or `delete` configuration is enabled. Relationship object fields in models map to the foreign key field in the database. 

With the exception of the primary field, all input fields are set to nullable to allow for partial updates. Graphback uses the primary field to ensure the correct item is being updated.

Take the following `Note` model as an example.

```graphql
""" @model """
type Note {
  id: ID!
  title: String!
  description: String
  """
  @manyToOne(field: 'notes', key: 'authorId')
  """
  author: User
}

// highlight-start
input MutateNoteInput {
  id: ID!
  title: String
  description: String
  authorId: ID
}
// highlight-end
```

The `MutateNoteInput` input type is created from the `Note` model.

Example of a typical update mutation on `Note`:

```graphql
mutation {
  updateNote(input: {
    id: 10,
    description: "Get remainder of groceries"
  }) {
    id
    title
    description
    author {
      id
      name
    }
  }
}
```

You can also perform `update` mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):

```graphql
""" @model """
type Note {
  id: ID!
  title: String!
  description: String
  metadata: NoteMetadata
}

"""Regular non-model GraphQL type"""
type NoteMetadata {
  createdAt: String
  updatedAt: String
}

// highlight-start
input MutateNoteInput {
  id: ID!
  title: String
  description: String
  metadata: MutateNoteMetadataInput
}

input MutateNoteMetadataInput {
  createdAt: String
  updatedAt: String
}
// highlight-end
```

Graphback generates the appropriate input types for regular GraphQL types that do not map to any database table/collection but are used as a field in a model.

You can update an existing `Note` with `NoteMetadata` in a single mutation:

```graphql
mutation {
  updateNote(input: {
    id: 10,
    description: "Get prosecco for party",
    metadata: {
      createdAt: "2340349036",
      updatedAt: "2340349036"
    }
  }) {
    id
    title
    description
    metadata {
      createdAt
      updatedAt
    }
  }
}
```

## Delete

The `delete` mutation allows the client to delete an existing item from the database.

The mutation follows the naming format `delete<Type>`:

```graphql
type Mutation {
  deleteNote(input: MutateNoteInput!): Note
}
```

**Arguments:**

- `input`: input type created by Graphback for updating an existing `Note` object.

Graphback creates a `Mutate<Type>Input` input type for each of the data models you define, when either the the `delete` or `update` CRUD configuration is enabled.

With the exception of the primary field, all input fields are set to nullable. Graphback uses the value from the primary field to ensure the correct is being deleted.

Take the following `Note` model as an example.

```graphql
""" @model """
type Note {
  id: ID!
  title: String!
  description: String
}

// highlight-start
input MutateNoteInput {
  id: ID!
  title: String
  description: String
}
// highlight-end
```

The `MutateNoteInput` input type is created from the `Note` model. Each input field in `MutateNoteInput` maps to the fields defined in `Note`.

Example of a typical `delete` mutation on `Note`:

```graphql
mutation {
  deleteNote(input: {
    id: 10
  }) {
    id
  }
}
```