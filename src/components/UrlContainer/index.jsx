import { FaTrashAlt } from 'react-icons/fa';
import { AiFillCopy } from 'react-icons/ai';

import * as S from './style.js';

const UrlContainer = ({ shortenedUrl, deleteShortenedUrl, copyShortUrl }) => {
    return (
        <S.UrlContainer>
            <S.Infos onClick={() => copyShortUrl(shortenedUrl.shortUrl)}>
                <div className="originalUrl">{shortenedUrl.url}</div>
                <span>{shortenedUrl.shortUrl}</span>
                <span>Quantidade de visitantes: {shortenedUrl.visitCount}</span>
                <AiFillCopy size={20} color="#fff" className="copyIcon" />
            </S.Infos>
            <S.Trash onClick={() => deleteShortenedUrl(shortenedUrl.id)}>
                <FaTrashAlt fill="#ea4f4f" size="25" />
            </S.Trash>
        </S.UrlContainer>
    );
};

export default UrlContainer;
