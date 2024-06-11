import { Container } from './styles';

export function Input({ text, ...rest }) {
    return (
        <Container>
            <label>{text}</label>
            <input {...rest} />
        </Container>
    );
}
