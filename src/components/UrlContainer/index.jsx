import { FaTrashAlt } from 'react-icons/fa';

import * as S from './style.js';

const UrlContainer = () => {
    return (
        <S.UrlContainer>
            <S.Infos>
                <span>url</span>
                <span>short url</span>
                <span>
                    Quantidade de visitantes:{' '}
                    {(Math.random() * 100000).toFixed(0)}
                </span>
            </S.Infos>
            <S.Trash>
                <FaTrashAlt fill="#ea4f4f" size="25" />
            </S.Trash>
        </S.UrlContainer>
    );
};

export default UrlContainer;
