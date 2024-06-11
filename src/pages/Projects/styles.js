import styled from 'styled-components';

export const Cards = styled.section`
    width: 90vw;
    margin: 32px auto;
    display: grid;
    justify-content: space-between;
    grid-template-areas: 'a';
    gap: 32px;

    @media (min-width: 683px) {
        grid-template-areas: 'a a';
    }

    @media (min-width: 1024px) {
        grid-template-areas: 'a a a';
    }
`;

export const Card = styled.section`
    margin: 0 auto;
    border-radius: 0px 0px 12px 12px;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    flex: 1;
    max-width: 320px;

    display: flex;
    flex-direction: column;

    img {
        object-fit: cover;
        width: 100%;
        height: 350px;
    }

    > div {
        padding: 18px;
        border-radius: 0 0 12px 12px;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;

        h6 {
            font-size: 1.2rem;
        }
    }
`;
