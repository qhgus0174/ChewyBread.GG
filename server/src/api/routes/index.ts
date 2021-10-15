import express from 'express';

const router = express.Router();

const league = require('./league');
const mastery = require('./mastery');

router.use('/league', league);
router.use('/championMastery', mastery);

export = router;
