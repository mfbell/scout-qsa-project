const express = require('express');
const passport = require('passport');


const router = express.Router();
// Local
router.post('', passport.authenticate('local', {
  successRedirect: '/', // Change to previous location
  failureRedirect: '/sign-in',
  failureFlash: true
}));
// Facebook
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/sign-in'
}));
// Twitter
router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter', { 
  successRedirect: '/',
  failureRedirect: '/sign-in'
}));

module.exports = router