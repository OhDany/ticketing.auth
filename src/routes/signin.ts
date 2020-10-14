import expres from 'express';

const router = expres.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi there !');
});

export { router as signinRouter };