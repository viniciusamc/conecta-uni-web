import styled from 'styled-components';

export const Section = styled.section`
    height: 40vh;

    > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export const Info = styled.section`
    background: #062d74;
    color: #fff;
    padding: 24px 0;

    display: flex;
    flex-direction: column;

    div {
        width: 90%;
        margin: 0 auto;
    }

    h4 {
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
        text-transform: capitalize;
    }
`;

export const Description = styled.section`
    width: 90vw;
    margin: 12px auto;

    h4 {
        font-size: 2rem;
    }

    p {
        font-size-adjust: 0.5;
        line-height: calc(1ex / 0.32);
        text-align: justify;
        hyphens: auto;
    }
`;

export const Alunos = styled.ul`
    width: 90vw;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    padding-left: 48px;

    h4 {
        margin-left: -48px;
    }
`;

export const Aluno = styled.li`
    list-style-type: disc;
`;
