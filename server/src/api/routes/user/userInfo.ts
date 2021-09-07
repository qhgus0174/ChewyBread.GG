import axios from 'axios';
import express, { Request, Response, NextFunction } from 'express';
import reqSender from '../../../utils/reqSender';

const router = express.Router();

router.get('/getSummonerId/:name', async (req: Request, res: Response, next: NextFunction) => {
    const abd = await reqSender({
        url: `/lol/summoner/v4/summoners/by-name/${req.params.name}`,
        method: 'GET',
    });
    res.send(abd);
});

export = router;
