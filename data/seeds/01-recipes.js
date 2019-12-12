
exports.seed = function(knex) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, name: 'Chicken Parm'},
        {id: 2, name: 'Spaghetti and Meatballs'},
        {id: 3, name: 'Gnocchi'}
      ]);
    });
};
