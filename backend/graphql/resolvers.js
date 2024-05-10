const Recipe = require("../model/recipe.model");

module.exports = {
  Query: {
    recipe: (_, { id }) => Recipe.findById(id),
    getRecipes: (_, { amount }) =>
      Recipe.find().sort({ createdAt: -1 }).limit(amount),
  },
  Mutation: {
    createRecipe: (_, { recipeInput: { name, description } }) => {
      const newRecipe = new Recipe({
        name,
        description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
      });
      return newRecipe.save();
    },
    // deleteRecipe: (_, { id }) => Recipe.deleteOne({ _id: id }),
  },
};
