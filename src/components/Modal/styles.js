import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(209,216,229);
`

export const Wrap = styled.div`
    max-width: 500px;
    width: 93%; 
    height: 86vh;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 15px;
    box-shadow: 1px 5px 25px 5px rgba(0,0,0,0.3);

    @media (max-width: 768px){
        min-height: 86vh;
        height: auto;
    }
`

export const Header = styled.div`
    border-bottom: solid rgba(0,0,0,0.1);
    padding: 15px;
    text-align: center;

`
export const BoxList = styled.div`
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
    padding: 20px;
`

export const BoxResult = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-top: solid rgba(0,0,0,0.1);;
    border-bottom: solid rgba(0,0,0,0.1);;

`
export const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    p{
        font-size: 22px;
        font-weight: bold;
    }
`

export const BoxBuy = styled.div`
    flex: 1;
    padding: 20px;


    button {
        width: 100%;
        height: 100%;
        min-height: 80px;
        border-radius: 8px;
        border: none;
        background: #3b74f2;
        color: white;
        font-size: 25px;
        cursor: pointer;
    }
`

export const Message = styled.div`
    width: 93%;
    height: 60px;
    border-radius: 25px;
    background: #c1f1a6;
    margin: 0 auto;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 22px;
        color: #487d07;
        font-weight: bold;
    }
`;