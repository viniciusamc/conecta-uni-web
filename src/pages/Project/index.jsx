import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../service/api';
import { useState } from 'react';
import { Aluno, Alunos, Description, Info, Section } from './styles';
import { Header } from '../../components/Header';

export function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [colleagues, setColleagues] = useState([]);

    useEffect(() => {
        api.get(`/v1/project/${id}`).then((response) => {
            console.log(response.data.getProject[1]);
            setProject(response.data.getProject[0]);
            setColleagues(response.data.getProject[1]);
        });
    }, []);
    return (
        <>
            <Header />
            <Section>
                <img src={`${api.defaults.baseURL}images/${project.image}`} />
            </Section>

            <Info>
                {project && (
                    <div>
                        <h4>{project.title}</h4>
                        <p>{project.subject}</p>
                        <p>{project.course}</p>
                        <p>{project.university}</p>
                    </div>
                )}
            </Info>

            <Description>
                <h4>Descrição do Projeto</h4>
                <p>{project.description}</p>
            </Description>

            <Alunos>
                {colleagues.length > 1 && <h4>Participantes</h4>}
                <ul>
                    {colleagues.length > 1 &&
                        colleagues.map((item, index) => {
                            return (
                                <Aluno key={index}>
                                    <h6>{item.colleague}</h6>
                                </Aluno>
                            );
                        })}
                </ul>
            </Alunos>
        </>
    );
}
