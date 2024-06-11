import React, { useState } from 'react';
import { Container, Content, MainMenu, HamburgerMenu, Hamburger, AuthButtons } from './styles';
import logo from '../../assets/logo.png';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../service/auth';

export function Header() {
        const navigate = useNavigate();
        const { user, signOut } = useAuth();
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
                setIsOpen(!isOpen);
        };

        return (
                <Container>
                        <Content>
                                <div onClick={() => navigate('/')}>
                                        <img src={logo} alt="Logo" />
                                </div>
                                <MainMenu>
                                        <li>
                                                <a onClick={() => navigate('/')}>Início</a>
                                        </li>
                                        <li>
                                                <a onClick={() => navigate('/universities')}>Faculdades</a>
                                        </li>
                                        <li>
                                                <a onClick={() => navigate('/projects')}>Projetos</a>
                                        </li>
                                </MainMenu>
                                <AuthButtons>
                                        {user ? (
                                                <>
                                                        <Button text={'Compartilhar Projeto'} onClick={() => navigate('/projects/create')} />
                                                        <Button text={'Logout'} onClick={signOut} /></>
                                        ) : (
                                                <>
                                                        <Button text={'Login'} onClick={() => navigate('/login')} />
                                                        <Button text={'Sign Up'} onClick={() => navigate('/signup')} />
                                                </>
                                        )}
                                </AuthButtons>
                                <Hamburger onClick={toggleMenu}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                </Hamburger>
                                <HamburgerMenu isOpen={isOpen}>
                                        <li>
                                                <a
                                                        onClick={() => {
                                                                navigate('/');
                                                                setIsOpen(false);
                                                        }}>
                                                        Início
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        onClick={() => {
                                                                navigate('/universities');
                                                                setIsOpen(false);
                                                        }}>
                                                        Faculdades
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        onClick={() => {
                                                                navigate('/projects');
                                                                setIsOpen(false);
                                                        }}>
                                                        Projetos
                                                </a>
                                        </li>
                                        {user ? (
                                                <li>
                                                        <a
                                                                onClick={() => {
                                                                        signOut();
                                                                        setIsOpen(false);
                                                                }}>
                                                                Logout
                                                        </a>
                                                </li>
                                        ) : (
                                                <>
                                                        <li>
                                                                <a
                                                                        onClick={() => {
                                                                                navigate('/login');
                                                                                setIsOpen(false);
                                                                        }}>
                                                                        Login
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a
                                                                        onClick={() => {
                                                                                navigate('/signup');
                                                                                setIsOpen(false);
                                                                        }}>
                                                                        Sign Up
                                                                </a>
                                                        </li>
                                                </>
                                        )}
                                </HamburgerMenu>
                        </Content>
                </Container>
        );
}
