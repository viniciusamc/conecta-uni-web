import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { useAuth } from '../service/auth';

export function Routes() {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <AppRoutes user={user} />
        </BrowserRouter>
    );
}
