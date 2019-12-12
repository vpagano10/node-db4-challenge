
exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'spaghetti'},
        {id: 2, name: 'bread crumbs'},
        {id: 3, name: 'olive oil'}
      ]);
    });
};
