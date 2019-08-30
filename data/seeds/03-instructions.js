
exports.seed = function(knex) {

  return knex('instructions').insert([
    {recipe_id: 1, instruction: 'Set a medium sized pan to medium-high heat on the stove.'},
    {recipe_id: 1, instruction: 'Whisk eggs in a separate mixing bowl.'},
    {recipe_id: 1, instruction: 'Add butter to the pan and let it melt.'},
    {recipe_id: 1, instruction: 'Stir in black pepper, sage, and cheese into the eggs.'},
    {recipe_id: 1, instruction: 'Poor egg mixture into pan and stir every 30 seconds or so until eggs are fully cooked.'},
    {recipe_id: 1, instruction: 'Serve with bacon and/or toast... Enjoy!'},
    {recipe_id: 2, instruction: 'Brown sausage in a large pan on medium-high heat, breaking it into small chunks as it cooks.'},
    {recipe_id: 2, instruction: 'Once sausage is no longer pink, add black pepper and red pepper flakes and stir it all together.'},
    {recipe_id: 2, instruction: 'Poor in the heavy whipping cream and milk.'},
    {recipe_id: 2, instruction: 'Add baking powder and baking soda. Stir and let simmer for 20min.'},
    {recipe_id: 2, instruction: 'Preheat the oven to 350 degrees and add biscuits. Set timer for 11-13 minutes.'},
    {recipe_id: 2, instruction: 'While biscuits are baking, start stirring in flour to your gravy until you get your desired consistency, and then remove from heat. Keep in mind that the gravy will thicken further once it cools.'},
    {recipe_id: 2, instruction: 'Remove biscuits and let them cool for a few minutes.'},
    {recipe_id: 2, instruction: 'Serve with a fried egg on top, if you are feeling exceptionally bold this morning :)'}
  ]);
};
