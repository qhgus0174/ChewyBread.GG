import express from 'express';

const router = express.Router();

const userInfo = require('./user/userInfo');

router.use('/userInfo', userInfo);

export = router;
