import React, { useCallback, useRef } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import IconTextBox from '~components/Input/IconTextBox';
import SvgIcon from '~components/Icon/SvgIcon';
import { useInput } from '~hooks/useInput';
import { useHistory } from 'react-router-dom';

const Main = () => {
    const [name, bindName] = useInput<string>('');
    const history = useHistory();

    const onClickSearch = () => {
        history.push({ pathname: `Summoner/${name}` });
    };

    return (
        <SearchContainer>
            <IconTextBox {...bindName} icon={<SvgIcon shape="search" />} onClick={onClickSearch} type="text" placeholder="챔피언 & 소환사명 검색">
                <SearchDiv>
                    <FavoriteDiv>
                        <FavoriteHeader>즐겨찾기한 소환사</FavoriteHeader>
                        <FavoriteBody></FavoriteBody>
                    </FavoriteDiv>
                    <RecentDiv>
                        <RecentHeader>최근 검색한 소환사</RecentHeader>
                        <RecentBody></RecentBody>
                    </RecentDiv>
                </SearchDiv>
            </IconTextBox>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    diplay: flex;
    position: relative;
    flex-direction: column;
`;

const SearchDiv = styled.div`
    display: flex;
`;

const FavoriteDiv = styled.div`
    display: flex;
    flex-basis: 70%;
    flex-direction: column;
`;
const RecentDiv = styled.div`
    display: flex;
    flex-basis: 30%;
    flex-direction: column;
`;
const FavoriteHeader = styled.div`
    background: gray;
`;
const FavoriteBody = styled.div``;
const RecentHeader = styled.div`
    background: gray;
`;
const RecentBody = styled.div``;

export default Main;
