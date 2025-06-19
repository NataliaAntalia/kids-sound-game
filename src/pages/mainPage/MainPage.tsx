import s from './MainPage.module.css'
import {Button} from "../../components/button/Button";
import {useNavigate} from "react-router-dom";
import background from '../../images/main.jpg'

export const MainPage = () => {

    const navigate = useNavigate();


    return (
        <div className={s.backgroundContainer}>

            <img src={background} alt="background" className={s.img}/>
            <div className={s.topContent}>
                <h1 className={s.heading}>Who Says meow?</h1>
            </div>

            <div className={s.bottomContent}>
                <Button title={'НАЧАТЬ'} onClick={() => navigate('/question/1')}/>

            </div>
        </div>

    );
};

