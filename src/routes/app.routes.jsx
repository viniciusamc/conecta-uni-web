import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { University } from '../pages/University';
import { Project } from '../pages/Project';
import { Universities } from '../pages/Universities';
import { Projects } from '../pages/Projects';
import { SignUp } from '../pages/SignUp';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { CreateProject } from '../pages/CreateProject';
import { CreateUniversity } from '../pages/CreateUniversity';

export function AppRoutes({ user }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/university/:id" element={<University />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/projects" element={<Projects />} />
            {!user && <Route path="/signup" element={<SignUp />} />}
            {!user && <Route path="/login" element={<Login />} />}
            {user && <Route path="/projects/create" element={<CreateProject />} />}
            {user && <Route path="/university/create" element={<CreateUniversity />} />}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
