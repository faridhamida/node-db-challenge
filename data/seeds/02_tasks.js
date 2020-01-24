
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { description: "Go to the super market" },
        { description: "Go to the bank" },
        { description: "Pick up son from school" },
        { description: "Do laundry" },
        { description: "Go to sleep" }
      ]);
    });
};