import {Navigate, RouteObject} from 'react-router-dom';
import {MainPage} from "../pages/mainPage/MainPage";

import {Error404} from "../pages/errorPage/Error404";
import {QuestionPage} from "../pages/questionPage/QuestionPage";
import {FinalyPage} from "../pages/finalyPage/FinalyPage";
import Container from '@mui/material/Container';


const withContainer = (element: React.ReactNode) => (
    <Container
        maxWidth="md"
        sx={{
            padding: '20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}
    >
        {element}
    </Container>
);

const PATH = {
    MAIN_PAGE: '/main-page',
    FIRST_PAGE: '/first-page',
    SECOND_PAGE: '/second-page',
    ERROR_PAGE: '/error',
    QUESTION_PAGE: '/question/:id',
    FINISH_PAGE: '/finished',
}

export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to={PATH.MAIN_PAGE}/>
    },
    {
        path: PATH.MAIN_PAGE,
        element: withContainer(<MainPage/>)
    },


    {
        path: PATH.QUESTION_PAGE,
        element: withContainer(<QuestionPage/>)
    },
    {
        path: PATH.FINISH_PAGE,
        element: withContainer(<FinalyPage/>)
    },
    {
        path: PATH.ERROR_PAGE,
        element: withContainer(<Error404/>)
    },
    {
        path: '*',
        element: <Navigate to={PATH.ERROR_PAGE}/>
    },

];
