import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    //border: solid;
    margin-bottom: 27px;
`

export const BoxImg = styled.figure`
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: solid rgba(0,0,0,0.1);

    img {
        width: 85%;
    }
`

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left:  12px;
`  

export const Name = styled.h3`
    margin-bottom: 12px;
`

export const Price = styled.p``