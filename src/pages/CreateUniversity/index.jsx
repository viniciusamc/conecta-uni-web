import universities from "../../assets/listaUniversidadesBrasil.json";
import 'react-select-search/style.css';

import { Alert } from "../../components/Alert";
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { useState } from "react";
import { api } from "../../service/api";
import { Form, Select } from "./styles";

export function CreateUniversity() {
        const [successMessage, setSuccessMessage] = useState('')
        const [errorMessage, setErrorMessage] = useState('')

        const [mec, setMec] = useState();
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

                formData.append('mec', mec);
                formData.append('universityName', selectUniversity);
                formData.append('image', image);

                if (!selectUniversity){
                        setErrorMessage("Selecione a Universidade")
                        return
                }

                if(!image){
                        setErrorMessage("Imagem é obrigatória")
                        return
                }

                api.post('/v1/university', formData, {
                        headers: {
                                'Content-Type': 'multipart/form-data'
                        }
                }).then((response) => {
                        setSuccessMessage("Universidade Atualizada com Sucesso")
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
                                <p>Cadastre a sua Universidade</p>
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
                                                text={'Nota do MEC'}
                                                type={'number'}
                                                placeholder={'MEC'}
                                                required={true}
                                                onChange={(e) => setMec(e.target.value)}
                                        />
                                </div>
                                <div>
                                        <Input
                                                text={'Imagem da Universidade'}
                                                type={'file'}
                                                accept="image/png, image/gif, image/jpeg"
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
