import styled from 'styled-components';

export const Section = styled.section``;

export const Cards = styled.div`
    width: 90vw;
    display: grid;
    justify-items: center;
    grid-template-areas: 'a';
    gap: 32px;
    margin: 32px auto;

    @media (min-width: 683px) {
        grid-template-areas: 'a a';
    }

    @media (min-width: 1024px) {
        grid-template-areas: 'a a a';
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 12px;
    background: #2e2e3f;
    min-width: 290px;
    width: 90vw;
    max-width: 300px;

    border-radius: 12px;
`;

export const Top = styled.div`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #fff;

    display: flex;
    flex-direction: column;
    color: #fff;
    text-transform: uppercase;
    align-items: center;
    gap: 12px;

    > img {
        width: 100%;
        height: 100%;
    }
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
`;
