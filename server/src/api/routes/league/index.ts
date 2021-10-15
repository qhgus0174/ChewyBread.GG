import { AxiosResponse } from 'axios';
import express, { Request, Response } from 'express';
import reqSender from '../../../utils/reqSender';

import { ISummonerLeague } from 'riot-api-types';
import { getSummonerInfoByName } from '../../../common/summonerInfo';

const router = express.Router();

const getSummonerLeague = async (id: string) => {
    const { data: leagues }: AxiosResponse<ISummonerLeague[]> = await reqSender.get(`/lol/league/v4/entries/by-summoner/${id}`);

    return leagues;
};

router.get('/getLeague/:name', async (req: Request, res: Response) => {
    const summonerInfo = await getSummonerInfoByName(req.params.name);
    const leagues = await getSummonerLeague(summonerInfo.id);

    res.send(leagues);
});

export = router;
