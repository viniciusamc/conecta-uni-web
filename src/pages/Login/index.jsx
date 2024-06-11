import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Section } from './styles';
import { Alert } from '../../components/Alert';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../service/auth';

export function Login() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if (!email || !password) {
            setErrorMessage('Todos os campos são necessarios');
            setClear();
        }

        const response = await signIn({ email, password });

        if (response.errorStatus === 400) {
            setErrorMessage(response.message);
            setClear();
            return;
        }

        setSuccessMessage(response.message);
        setClear().then(() => {
            window.location.href = '/';
        });
    }

    function setClear() {
        return new Promise((resolve) => {
            setTimeout(() => {
                setErrorMessage('');
                setSuccessMessage('');
                resolve();
            }, 2500);
        });
    }

    return (
        <div style={{ background: '#062D74', minHeight: '100vh' }}>
            <Section>
                <form>
                    {successMessage && <Alert level={1} message={successMessage} />}
                    {errorMessage && <Alert level={3} message={errorMessage} />}
                    <h1>Conecta UNI</h1>
                    <p>Faça o seu login</p>
                    <div>
                        <Input
                            text={'Insira seu Email'}
                            type={'email'}
                            placeholder={'Email'}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            text={'Insira sua senha'}
                            type={'password'}
                            placeholder={'Senha'}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button text={'Login'} onClick={(e) => handleSubmit(e)} />
                    </div>
                </form>
            </Section>
        </div>
    );
}
