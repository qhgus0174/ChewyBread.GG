import { AxiosResponse } from 'axios';
import express, { Request, Response } from 'express';
import reqSender from '../../../utils/reqSender';

import { IChampionMastery } from 'riot-api-types';
import { getSummonerInfoByName } from '../../../common/summonerInfo';

const router = express.Router();

const getChampionMastery = async (id: string) => {
    const { data: leagues }: AxiosResponse<IChampionMastery[]> = await reqSender.get(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`);

    return leagues;
};

router.get('/getChampionMastery/:name', async (req: Request, res: Response) => {
    const summonerInfo = await getSummonerInfoByName(req.params.name);
    const championMastery = await getChampionMastery(summonerInfo.id);

    res.send(championMastery);
});

export = router;
