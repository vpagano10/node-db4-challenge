
exports.seed = function(knex) {
  return knex('instructions')
    .truncate()
    .then(function () {
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step: 1, instructions: 'boil water'},
        {id: 2, recipe_id: 1, step: 2, instructions: 'put pasta in water'},
        {id: 3, recipe_id: 1, step: 3, instructions: 'cook 10 min or until desired texture'}
      ]);
    });
};
