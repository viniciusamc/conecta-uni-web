import styled from 'styled-components';

export const Container = styled.header`
    max-width: 100vw;
    padding: 10px 30px;
    border-bottom: 1px solid black;

    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const MainMenu = styled.ul`
    display: flex;
    gap: 12px;
    list-style-type: none;

    > li {
        padding: 10px;
        a {
            cursor: pointer;
            color: #000;
            text-decoration: none;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const AuthButtons = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const HamburgerMenu = styled.ul`
    display: none;
    flex-direction: column;
    width: 100vw;
    list-style-type: none;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    background: #fff;

    > li {
        padding: 10px;
        text-align: center;

        a {
            display: block;
            width: 100%;
            text-decoration: none;
            color: #000;
        }
    }

    @media (max-width: 768px) {
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #000;
        margin: 4px 0;
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;
