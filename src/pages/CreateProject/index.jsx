import universities from "../../assets/listaUniversidadesBrasil.json";
import 'react-select-search/style.css';

import { Alert } from "../../components/Alert";
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { useState } from "react";
import { api } from "../../service/api";
import { Form, Select } from "./styles";

export function CreateProject() {
        const [successMessage, setSuccessMessage] = useState('')
        const [errorMessage, setErrorMessage] = useState('')

        const [titulo, setTitulo] = useState('');
        const [descricao, setDescricao] = useState('');
        const [teacher, setTeacher] = useState('');
        const [course, setCourse] = useState('');
        const [colleagues, setColleagues] = useState('');
        const [subject, setSubject] = useState('');
        const [semester, setSemester] = useState('');
        const [image, setImage] = useState();
        const [selectUniversity, setSelectUniversity] = useState('');

        const refac = universities
                .map(item => ({
                        value: item.NOME_DA_IES,
                        label: String(item.NOME_DA_IES).toUpperCase(),
                }))
                .sort((a, b) => a.label.localeCompare(b.label));

        function handleSubmit(e) {
                e.preventDefault();

                const formData = new FormData();

                formData.append('title', titulo);
                formData.append('description', descricao);
                formData.append('teacher', teacher);
                formData.append('course', course);
                formData.append('colleagues', colleagues);
                formData.append('subject', subject);
                formData.append('semester', semester);
                formData.append('university', selectUniversity);
                formData.append('image', image);

                api.post('/v1/project', formData, {
                        headers: {
                                'Content-Type': 'multipart/form-data'
                        }
                }).then((response) => {
                        setSuccessMessage("Projeto Criado com sucesso!")
                }).catch((error) => {
                        setErrorMessage("Erro ao criar projeto")
                        console.log(error);
                });
        }

        return (
                <>
			<Header />
                        <Form>
                                {successMessage && <Alert level={1} message={successMessage} />}
                                {errorMessage && <Alert level={3} message={errorMessage} />}
                                <h1>Conecta UNI</h1>
                                <p>Envie o Seu Projeto</p>
                                <div>
                                        <Select onChange={(e) => setSelectUniversity(e.target.value)}>
                                                {refac.map((item, index) => {
                                                        return (
                                                                < option value={item.value} key={index}> {item.label}</option>
                                                        )
                                                })}
                                        </Select >
                                </div>
                                <div>
                                        <Input
                                                text={'Título Projeto'}
                                                type={'text'}
                                                placeholder={'Título do Projeto'}
                                                required={true}
                                                onChange={(e) => setTitulo(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Descrição'}
                                                type={'text'}
                                                placeholder={'Descrição'}
                                                required={true}
                                                onChange={(e) => setDescricao(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Professor'}
                                                type={'text'}
                                                placeholder={'Professor'}
                                                required={true}
                                                onChange={(e) => setTeacher(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Curso'}
                                                type={'text'}
                                                placeholder={'Curso'}
                                                required={true}
                                                onChange={(e) => setCourse(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Equipe'}
                                                type={'text'}
                                                placeholder={'João, Mariana... '}
                                                required={true}
                                                onChange={(e) => setColleagues(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Matéria'}
                                                type={'text'}
                                                placeholder={'Matéria'}
                                                required={true}
                                                onChange={(e) => setSubject(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Semestre'}
                                                type={'text'}
                                                placeholder={'Semestre'}
                                                required={true}
                                                onChange={(e) => setSemester(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Imagem do Projeto'}
                                                type={'file'}
                                                required={true}
                                                onChange={(e) => setImage(e.target.files[0])}
                                        />
                                </div>
                                <div>
                                        <Button text={'Criar Projeto'} onClick={(e) => handleSubmit(e)} />
                                </div>
                        </Form>

                </>
        )
}
