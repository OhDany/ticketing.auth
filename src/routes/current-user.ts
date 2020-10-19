import expres from 'express';
import jwt from 'jsonwebtoken';

import { currentUser } from '../middlewares/current-user';

const router = expres.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentuser: req.currentUser || null });
});

export { router as currentUserRouter };
