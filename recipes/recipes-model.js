const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes')
};

// function findSteps(id) {
//     return db('steps')
//         .select('steps.id', 'schemes.scheme_name', 'step_number', 'instructions')
//         .join('schemes', 'steps.scheme_id', 'schemes.id')
//         .where('scheme_id', id)

function getShoppingList(id) {
    // should return a list of all ingredients and quantities for a given recipe
    return db('recipe_ingredients')
        .select('name', 'quantity')
        .join('ingredients', 'recipie_ingredients.ingredient_id', 'ingredients.id')
        .where('recipe_id', id)
    };
    
    function getInstructions(id) {
        // should return a list of step by step instructions for preparing a recipe
    return db('instructions')
        .select('step', 'instructions')
        .where('recipe_id', id)
};
