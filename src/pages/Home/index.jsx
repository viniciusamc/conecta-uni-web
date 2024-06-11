import { Header } from '../../components/Header';
import { Banner, Bottom, Card, Cards, Section, Top } from './styles';

import banner from '../../assets/menino-celular.svg';
import { Button } from '../../components/Button';
import { useEffect } from 'react';
import { api } from '../../service/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../service/auth';

import logoUniversidade from '../../assets/universidade-logo.png'

export function Home() {
    const [university, setUniversity] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        api.get('/v1/university').then((response) => {
            setUniversity(response.data.universities);
        });
    }, []);
    return (
        <>
            <Header />
            <Banner style={{ background: '#062d74' }}>
                <img src={banner} alt="Menino usando o celular" />

                <div className="explorer">
                    <h4>Explore os projetos dos alunos da universidade.</h4>
                    <button onClick={() => navigate('/projects')}> Ver Projetos </button>
                    {!user && (
                        <label>
                            É aluno e gostaria de compartilhar o seu projeto? <a href="#">Clique aqui</a>
                        </label>
                    )}
                </div>
            </Banner>

            <Section>
                <h4>Universidades Presentes </h4>
                <Cards>
                    {university &&
                        university.map((item) => {
                            return (
                                <Card key={item.id}>
                                    <Top>
                                        <h5>{item.university}</h5>
                                        <img
                                            src={logoUniversidade}
                                            alt={item.university}
                                            style={{
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Top>
                                    <Bottom>
                                        <Button
                                            text={'Ver Projetos'}
                                            onClick={() => navigate(`/university/${item.id}`)}
                                        />
                                    </Bottom>
                                </Card>
                            );
                        })}
                </Cards>
            </Section>
        </>
    );
}
