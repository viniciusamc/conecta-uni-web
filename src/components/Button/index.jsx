import { Container, Content } from './styles';

export function Button({ text, onClick, type }) {
    return (
        <Container onClick={onClick}>
            <Content type={type}>{text}</Content>
        </Container>
    );
}
