import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ISummoner } from 'riot-api-dto-types';

const Summoner = () => {
    interface RouteParams {
        name: string;
    }

    const params = useParams<RouteParams>();

    const [leagues, setLeagues] = useState();

    useEffect(() => {
        const getLeagueInfo = async () => {
            try {
                const { data } = await axios.get(`/userInfo/getSummonerId/${params.name}`);
                console.log(data);
            } catch (e) {
                console.log((e as Error).message);
            }
        };
        getLeagueInfo();
    }, []);

    return <>안녕{params.name}</>;
};

export default Summoner;
