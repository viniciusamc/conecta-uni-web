import { Content, Section } from './styles';

export function Banner({ text, total }) {
    return (
        <Section>
            <Content>
                {text}
                <label>Temos um total de {total}</label>
            </Content>
        </Section>
    );
}
