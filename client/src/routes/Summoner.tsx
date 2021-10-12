import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Summoner = () => {
    interface RouteParams {
        name: string;
    }

    interface ISummoner {
        accountId: string;
        profileIconId: number;
        revisionDate: number;
        name: string;
        id: string;
        puuid: string;
        summonerLevel: number;
    }

    const params = useParams<RouteParams>();

    useEffect(() => {
        const getSummonerInfo = async () => {
            try {
                const result = await axios.get(`/userInfo/getSummonerId/${params.name}`);
                console.log(result);
            } catch (e) {
                console.log((e as Error).message);
            }
        };
        getSummonerInfo();
    }, []);

    return <>안녕{params.name}</>;
};

export default Summoner;
