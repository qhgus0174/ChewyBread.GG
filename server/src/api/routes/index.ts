import express from 'express';
import league from './league';
import mastery from './mastery';

const router = express.Router();

router.use('/league', league);
router.use('/championMastery', mastery);

export = router;
