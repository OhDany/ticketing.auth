import expres from 'express';

const router = expres.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there !');
});

export { router as currentUserRouter };