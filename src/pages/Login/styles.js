import styled from 'styled-components';

export const Section = styled.section`
    width: 90vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    color: #fff;

    > form {
        background: #fff;
        color: #000;
        padding: 24px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        > div {
            label {
                a {
                    color: #000;
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
`;
