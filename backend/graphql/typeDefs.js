// 1) here the type recipe means what are the entities that a recipe can have
// 2) "!" means that it is a required field
// 3) input RecipeInput means when the user from frontend will try to to create a new recipe then these are the input fields that are required
// 4) type Query means we will be trying to fetch a recipe based on its id
// 5) type Mutation means we will be modifying the data from the database
module.exports = `
  type Recipe {
  name: String
  description: String
  createdAt: String
  thumbsUp: Int
  thumbsDown: Int
}

input RecipeInput {
  name: String!
  description: String!
}

type Query {
  recipe(id: ID!): Recipe!
  getRecipes(amount: Int): [Recipe]
}

type Mutation {
  createRecipe(recipeInput: RecipeInput!): Recipe
  deleteRecipe(id: ID!): DeleteRecipeResponse!
}

type DeleteRecipeResponse {
  success: Boolean!
  message: String
}

`;
