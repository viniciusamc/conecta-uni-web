import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Bottom, Card, Cards, Section, Top } from './styles';
import { api } from '../../service/api';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../components/Banner';

export function Universities() {
    const navigate = useNavigate();
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        api.get('/v1/university').then((response) => {
            setUniversities(response.data.universities);
        });
    }, []);
    return (
        <>
            <Header />
            <Banner text={'Faculdades'} total={universities.length + ' Faculdades'} />

            <Cards>
                {universities &&
                    universities.map((item, key) => {
                        return (
                            <Card key={item.id}>
                                <Top>
                                    <h5>{item.university}</h5>
                                    <img src={`${api.defaults.baseURL}images/${item.image}`} alt={item.university} />
                                </Top>
                                <Bottom>
                                    <Button text={'Ver Projetos'} onClick={() => navigate(`/university/${item.id}`)} />
                                </Bottom>
                            </Card>
                        );
                    })}
            </Cards>
        </>
    );
}
