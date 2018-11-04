const User = require('../models/user')

module.exports = {
  get(req, res) {
    User.findOne({ publicID: req.params.publicID })
      .then(user => res.status(200).json(user))
      .catch(err => {
        res.status(404).end();
        console.error(err)
      });
  },
  
  create(req, res) {
    const user = new User({
      email: req.body.email
    });
    user.setPassword(req.body.password);
    user.save()
      .then(user => {
        res.location(`/api/users/${user.publicID}`);
        res.status(200).json({token: user.toAuthJSON.token});
      })
      .catch(err => {
        res.status(400).end()
        console.error(err)
      });
  },

  update(req, res) {
    User.findOneAndUpdate(
      { publicID: req.params.publicID }, 
      req.body, 
      { runValidators: true }
    ).then(user => res.status(204).end())
    .catch(err => {
      res.status(400).end();
      console.error(err)
    });
  },

  remove(req, res) {
    User.findByIdAndDelete({ publicID: req.params.publicID })
    .then(() => res.status(204).end())
    .catch(err => {
      res.status(400).end();
      console.error(err)
    })
  },

  search(req, res) {
    res.status(501).end()
  }
};