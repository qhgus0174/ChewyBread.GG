import { AxiosResponse } from 'axios';
import express, { Request, Response } from 'express';
import reqSender from '../../../utils/reqSender';

import { ISummonerLeague } from 'riot-api-dto-types/dist/league';
import { ISummonerInfo } from 'riot-api-dto-types/dist/info';

const router = express.Router();

const getSummonerInfoByName = async (name: string): Promise<string> => {
    const { data: summonerInfo }: AxiosResponse<ISummonerInfo> = await reqSender({
        url: `/lol/summoner/v4/summoners/by-name/${encodeURIComponent(name)}`,
        method: 'GET',
    });

    return summonerInfo.id;
};

router.get('/getSummonerId/:name', async (req: Request, res: Response) => {
    getSummonerInfoByName(req.params.name).then(async (id: string) => {
        const { data: leagues }: AxiosResponse<ISummonerLeague> = await reqSender({
            url: `/lol/league/v4/entries/by-summoner/${id}`,
            method: 'GET',
        });

        res.send(leagues);
    });
});

export = router;
