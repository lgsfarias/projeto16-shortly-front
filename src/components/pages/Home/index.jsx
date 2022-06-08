import React, { useState, useContext } from 'react';

import UrlContainer from '../../UrlContainer';
// import UserContext from '../../contexts/UserContext.js';

import * as S from './style.js';

const Home = () => {
    return (
        <S.HomeWrapper>
            <S.HomeForm>
                <S.Input type="text" placeholder="Links que cabem no bolso" />
                <S.HomeButton>Encurtar link</S.HomeButton>
            </S.HomeForm>
            <UrlContainer />
        </S.HomeWrapper>
    );
};

export default Home;
