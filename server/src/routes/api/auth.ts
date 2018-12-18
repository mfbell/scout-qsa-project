import { Router } from 'express';
import { authenticate } from 'passport';

const router: Router = Router();

// Local
router.post('', authenticate('local', {
  successRedirect: '/', // Change to previous location
  failureRedirect: '/sign-in',
  failureFlash: true
}));
// Facebook
router.get('/facebook', authenticate('facebook'));
router.get('/facebook/callback', authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/sign-in'
}));
// Twitter
router.get('/twitter', authenticate('twitter'));
router.get('/twitter/callback', authenticate('twitter', { 
  successRedirect: '/',
  failureRedirect: '/sign-in'
}));

export default router;