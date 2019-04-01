module.exports = function(app) {
  app.dataSources.mongodb.automigrate('CoffeeMugger', function(err) {
    if (err) throw err;

    app.models.CoffeeMugger.create([{
      user: 'dli',
      timeOfRequest: '2018-03-29T17:00:44.443Z',
      caffeinated: false
    }, {
      user: 'jmarshall',
      timeOfRequest: '2018-03-29T17:01:44.443Z',
      caffeinated: false
    }, {
      user: 'showe',
      timeOfRequest: '2018-03-29T15:00:44.443Z',
      caffeinated: true
    }], function(err, coffeeMuggers) {
      if (err) throw err;

      console.log('Models created: \n', coffeeMuggers);
    });
  });
};

