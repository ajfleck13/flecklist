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

  app.get('/api/profile/:user', function(req, res) {
    let user = req.params.user;

    db.User.findAll({
      where: {
        username: user
      },
    }).then(function(dbPost) {
      let profile = dbPost[0];
      if(!profile)
      {
        return res.json({error: "User not found"});
      }

      let datatosend = {
        username: profile.username,
        picture: profile.picture,
        about: profile.about,
        email: profile.email,
        phone: profile.phone
      }

      res.json(datatosend);
    }).catch(function(error) {
      res.json({ error: error });
    });  
  });

  app.post('/api/newpost', function(req, res) {
    let newpost = req.body;
    let user = newpost.user;
    let information = newpost.listing

    db.User.findAll({
      username: user.username,
      password: user.password,
    }).then(function(response) {
      if(response.length)
      {
        let newlisting = {
          title: information.title,
          body: information.body,
          username: information.username,
          picture: information.picture
        }
        db.Listing.create(newlisting)
        .then(function(response) {
          res.json(response);
          return;
        }).catch(function(error) {
          res.json({error : "Create Entry Database Error"})
          return;
        })
      }
      else
      {
        res.json({error: "Unknown user error"});
      }
    }).catch(function(error) {
      res.json({error : "Create Entry Database Error"})
      return;
    })
  });

  app.post('/api/login', function(req, res) {
    let authentication = req.body;

    if(authentication && authentication.username && authentication.password)
    {
      authentication.username = authentication.username.toLowerCase();

      db.User.findAll({
        where: {
          username: authentication.username,
          password: authentication.password
        }
      }).then(function(dbPost) {
        if(dbPost.length)
        {
          res.json({success: true});
          return;
        }
      }).catch(function(error) {
        res.json({error : error });
        return;
      });  
    }
    else
    {
      res.json({success: false});
    }
  });

  app.post('/api/signup', function(req, res) {
    let information = req.body;

    if(information && information.username && information.password && information.email)
    {
      information.username = information.username.toLowerCase();
      information.email = information.email.toLowerCase();

      db.User.findAll({
        where: {
          username: information.username,
        }
      }).then(function(dbPost) {
        if(dbPost.length)
        {
          res.json({error : "Username already taken"});
          return;
        }
        else
        {
          db.User.create({
            username: information.username,
            password: information.password,
            email: information.email
          }).then(function(response) {
            res.json({success : true});
            return;
          }).catch(function(error) {
            res.json({error : "Create Entry Database Error"})
            return;
          })
        }
      }).catch(function(error) {
        res.json({error : "Database Access Error" });
        return;
      });  
    }
    else
    {
      res.json({error : "You must fill out all fields"});
    }
  });
};