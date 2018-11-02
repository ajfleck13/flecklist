const db = require('../models');

module.exports = function(app) {
  app.get('/api/listing/:offset', function(req, res) {
    db.Listing.findAll({
      where: {},
      limit: 8,
      offset: parseInt(req.params.offset),
      //include: [db.User]
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    }).catch(function(error) {
      res.json({ error: error });
    });  
  });
};