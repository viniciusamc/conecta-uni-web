import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { api } from '../../service/api';
import { useState } from 'react';
import { Card, Cards } from './styles';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../components/Banner';

export function Projects() {
    const navigate = useNavigate();
    const [listProjects, setListProjects] = useState([]);
    useEffect(() => {
        api.get('/v1/projects').then((response) => {
            setListProjects(response.data.projects);
        });
    }, []);
    return (
        <>
            <Header />
            <Banner text={'Projetos dos Alunos'} total={listProjects.length + ' Projetos'} />
            <Cards>
                {listProjects &&
                    listProjects.map((item, index) => {
                        return (
                            <Card key={index}>
                                <img src={`${api.defaults.baseURL}images/${item.image}`} />
                                <div>
                                    <h6>{item.title}</h6>
                                    <p>Curso {item.course}</p>
                                    <p>Matéria {item.subject}</p>
                                    <p>{item.university}</p>
                                    <p>{item.semester}</p>
                                    <Button
                                        text={'Saiba Mais'}
                                        onClick={() => navigate(`/project/${item.fk_id_project}`)}
                                    />
                                </div>
                            </Card>
                        );
                    })}
            </Cards>
        </>
    );
}
