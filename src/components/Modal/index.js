import React from 'react'
import * as S from './styles'

const Modal = ({ children, total }) => {

    const renderMessageFrete = () => (
        <S.Message>
            <p>Parabéns, sua compra tem frete grátis !</p>
        </S.Message>
    )

    console.log(parseInt(total))
    return (
        <S.Container>
            <S.Wrap>
                <S.Header>
                    <h1>Meu carrinho</h1>
                </S.Header>
                <S.BoxList>
                    {children}
                </S.BoxList>
                <S.BoxResult>
                    <S.Total>
                        <p>Total</p>
                        <p>{total}</p>
                    </S.Total>
                    {total &&
                        total.replace(/([^\d])+/gim, '') > 1000 ? renderMessageFrete() : null}
                </S.BoxResult>
                <S.BoxBuy>
                    <button>Finalizar Compra</button>
                </S.BoxBuy>
            </S.Wrap>
        </S.Container>
    )
}

export default Modal