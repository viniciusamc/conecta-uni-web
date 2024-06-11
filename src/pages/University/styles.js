import styled from 'styled-components';

export const Section = styled.section`
    background: #062d74;

    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 20px;

    > img {
        height: 100%;
        border-radius: 12px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;

        > img {
            max-width: 320px;
            max-height: 320px;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;

    > h5 {
        font-size: 32px;
    }

    > div {
        display: flex;
        justify-content: space-around;
    }
`;

export const Projects = styled.section`
    display: grid;
    justify-items: center;
    grid-template-areas: 'a';
    margin-top: 32px;
    gap: 32px;

    @media (min-width: 683px) {
        grid-template-areas: 'a a';
    }

    @media (min-width: 1024px) {
        grid-template-areas: 'a a a';
    }
`;

export const Project = styled.section`
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
        height: 100%;
    }

    > div {
        padding: 18px;
        border-radius: 0 0 12px 12px;

        display: flex;
        flex-direction: column;
        gap: 8px;

        h6 {
            font-size: 1.2rem;
        }
    }
`;
