import { FaTrashAlt } from 'react-icons/fa';

import * as S from './style.js';

const UrlContainer = ({ shortenedUrl }) => {
    return (
        <S.UrlContainer>
            <S.Infos>
                <span>{shortenedUrl.url}</span>
                <span>{shortenedUrl.shortUrl}</span>
                <span>Quantidade de visitantes: {shortenedUrl.visitCount}</span>
            </S.Infos>
            <S.Trash>
                <FaTrashAlt fill="#ea4f4f" size="25" />
            </S.Trash>
        </S.UrlContainer>
    );
};

export default UrlContainer;
