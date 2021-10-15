import { AxiosResponse } from 'axios';
import { ISummonerInfo } from 'riot-api-types';
import reqSender from '../../utils/reqSender';

export const getSummonerInfoByName = async (name: string): Promise<ISummonerInfo> => {
    const { data: summonerInfo }: AxiosResponse<ISummonerInfo> = await reqSender.get(`/lol/summoner/v4/summoners/by-name/${encodeURIComponent(name)}`);
    return summonerInfo;
};
