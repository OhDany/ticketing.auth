import expres from 'express';

const router = expres.Router();

router.post('/api/users/sigup', (req, res) => {
  res.send('Hi there !');
});

export { router as signupRouter };