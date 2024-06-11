import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Section } from './styles';
import { Alert } from '../../components/Alert';
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if (!name || !email || !password) {
            setErrorMessage('Todos os campos são necessarios');
            setClear();
        }

        api.post('/v1/user', {
            name,
            email,
            password,
        })
            .then((response) => {
                setSuccessMessage(response.data.message);
                setClear().then(() => {
                    navigate('/login');
                });
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
                setClear();
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
                    <p>Plataforma ideal para compartilhar seus projetos universitários</p>
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
                            text={'Insira seu Nome'}
                            placeholder={'Nome'}
                            required={true}
                            onChange={(e) => setName(e.target.value)}
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
                        <Button text={'Cadastrar'} onClick={(e) => handleSubmit(e)} />
                        <label>
                            Já possui uma conta? Faça o <a>Login</a>
                        </label>
                    </div>
                </form>
            </Section>
        </div>
    );
}
