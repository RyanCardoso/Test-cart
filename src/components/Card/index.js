import React from "react";
import * as S from './styles'

const Card = ({
    title,
    img,
    desc,
    price
}) => (
    <S.Container>
        <S.BoxImg>
            <img src={img} />
        </S.BoxImg>
        <S.Content>
            <S.Name>{title}</S.Name>
            <S.Price>{price}</S.Price>
        </S.Content>
    </S.Container>
)

export default Card