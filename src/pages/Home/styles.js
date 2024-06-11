import styled from 'styled-components';

export const Banner = styled.div`
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 120px 20px;

    > div.explorer {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 12px;
        > h4 {
            font-size: 36px;
            width: 50%;
            color: #fff;
        }

        > button {
            padding: 10px 20px;
            background: #fff;
            border: none;
            cursor: pointer;
            border-radius: 8px;
            transition: all ease 0.2s;

            &:hover {
                transform: scale(1.05);
            }
        }
        > label {
            color: #fff;
            > a {
                color: #fff;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        > img {
            width: 100%;
            max-width: 320px;
        }

        > div.explorer {
            align-items: center;

            > h4 {
                width: 100%;
            }
        }
    }
`;

export const Section = styled.div`
    margin: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h4 {
        margin: 48px 0;
        font-size: 2rem;
        text-align: center;
    }
`;

export const Cards = styled.div`
    width: 90vw;
    display: grid;
    justify-items: center;
    grid-template-areas: 'a';
    gap: 32px;

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
