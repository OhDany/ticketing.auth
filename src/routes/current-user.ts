import expres from 'express';
import jwt from 'jsonwebtoken';

const router = expres.Router();

router.get('/api/users/currentuser', (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentuser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    res.send({ currentuser: payload });
  } catch (err) {
    res.send({ currentuser: null });
  }
});

export { router as currentUserRouter };
