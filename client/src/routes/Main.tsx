import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextBox from '../components/Input/TextBox';
import { css } from '@emotion/react';
import { useInput } from '~hooks/useInput';

const Main = () => {
    const [name, bindName] = useInput<string>('');

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const result = await axios.get(`/userInfo/getSummonerId/${name}`);
            console.log(result);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            css={css`
                position: relative;
            `}
        >
            <TextBox {...bindName} type="text" placeholder="챔피언 & 소환사명 검색" />
            <button
                type="submit"
                css={css`
                    position: absolute;
                    top: 10px;
                    right: 10px;
                `}
            >
                앙
            </button>
        </form>
    );
};

export default Main;
