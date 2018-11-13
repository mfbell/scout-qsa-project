import { Request, Response } from 'express';
import User from '../models/user';
import { controller } from './controller';

const get: controller = function get(req, res) {
  User.findOne({ publicId: req.params.publicId })
    .then((user) => res.status(200).json(user))
    .catch((err: Error) => {
      res.status(404).end();
      console.error(err)
    });
}
  
function create(req: Request, res: Response) {
  const user = new User({
    email: req.body.email
  });
  user.setPassword(req.body.password);
  user.save()
    .then((user) => {
      res.location(`/api/users/${user.publicId}`);
      res.status(200).json({token: user.toAuthJSON().token});
    })
    .catch((err: Error) => {
      res.status(400).end()
      console.error(err)
    });
}

function update(req: Request, res: Response) {
  User.findOneAndUpdate(
    { publicID: req.params.publicID }, 
    req.body, 
    { runValidators: true }
  ).then((user) => res.status(204).end())
  .catch((err: Error) => {
    res.status(400).end();
    console.error(err)
  });
}

function remove(req: Request, res: Response) {
  User.findByIdAndDelete({ publicID: req.params.publicID })
  .then(() => res.status(204).end())
  .catch((err: Error) => {
    res.status(400).end();
    console.error(err)
  })
}

function search(req: Request, res: Response) {
  res.status(501).end()
}

export { get, create, update, remove, search };