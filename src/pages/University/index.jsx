import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../service/api';
import { Section, Info, Projects, Project } from './styles';
import { useState } from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function University() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);
    const [univeristy, setUniversity] = useState([]);
    const [imageURL, setImageURL] = useState('');
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        async function getUniversityInfo() {
            await api.get(`/v1/university/${id}`).then((response) => {
                setUniversity(response.data.projects[0]);
                setProjects(response.data.projects);
                setProjectImages(response.data.imageProject);
                setImageURL(response.data.image);
            });
        }

        getUniversityInfo();
    }, []);
    return (
        <>
            <Header />
            <Section>
                {projects && <img src={`${api.defaults.baseURL}images/${imageURL.image}`} />}

                <Info>
                    {univeristy && <h5>{univeristy.university}</h5>}

                    <div>
                        <p>Nota MEC</p>
                        <p>Nota dos Alunos</p>
                    </div>
                </Info>
            </Section>

            <Projects>
                {projects &&
                    projects.map((item, index) => {
                        if (!item.id) {
                            return null;
                        }

                        const getImageProject = projectImages.filter((a) => a.fk_id_project == item.id)[0].image;
                        return (
                            <Project key={index} onClick={() => navigate(`/project/${item.id}`)}>
                                <img src={`${api.defaults.baseURL}images/${getImageProject}`} />
                                <div>
                                    <h6>{item.title}</h6>
                                    <p>Curso {item.course}</p>
                                    <p>Matéria {item.subject}</p>
                                    <p>{item.semester}</p>
                                    <Button text={'Saiba Mais'} />
                                </div>
                            </Project>
                        );
                    })}
            </Projects>
        </>
    );
}
