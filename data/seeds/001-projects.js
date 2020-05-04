
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'hit the gym',description:"get pumped",isCompleted:true},
        { name: 'finish work',description:"get er done",isCompleted:false},
        { name: 'cook food',description:"hit the stove",isCompleted:true}
      ]);
    });
};
