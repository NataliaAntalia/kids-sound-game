import {useParams} from "react-router-dom";
import {questions} from "../../data/questions";
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {incrementCorrect, incrementIncorrect} from "../../store/quizSlice";
import s from './QestionPage.module.css'
import {FlipText} from '../../components/magicui/flip-text'
import {PulsatingButton} from "../../components/magicui/pulsating-button";
import {Grid} from "@mui/material";
import {motion, AnimatePresence} from 'framer-motion';


export const QuestionPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const questionId = parseInt(id || '1');
    const question = questions.find(q => q.id === questionId);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedAnswer(null);
    }, [questionId]);  // сбрасываем при изменении вопроса


    const handleAnswer = (answer: string) => {

        setSelectedAnswer(answer);
        if (answer === question?.correct) {
            dispatch(incrementCorrect());
        } else {
            dispatch(incrementIncorrect());
        }
    }

    const handleNext = () => {
        setSelectedAnswer(null);
        if (questionId < questions.length) {
            navigate(`/question/${questionId + 1}`);
        } else {
            navigate('/finished'); // или куда хочешь
        }
    };

    return (
        <div className={s.container}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={questionId}
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -30}}
                    transition={{duration: 0.4}}
                    className={s.question} // стили для всей карточки
                >
                    {selectedAnswer && (
                        <div style={{marginBottom: 20, fontSize: '1.2rem', fontWeight: 'bold'}}>
                            {selectedAnswer === question?.correct
                                ? '✅ Правильный ответ!'
                                : '❌ Неправильный ответ!'}
                        </div>
                    )}

                    <div style={{marginTop: 80, marginBottom: 30, color: 'rgb(147,92,33)', fontWeight: 'bold'}}>
                        {question ? (
                            <FlipText className="text-4xl">{question.question}</FlipText>
                        ) : (
                            <p>Вопрос не найден</p>
                        )}
                    </div>

                    {question?.img && (
                        <motion.img
                            src={question.img}
                            alt="Animal"
                            initial={{scale: 0.3, rotate: 0, opacity: 0}}
                            animate={{scale: 1, rotate: 360, opacity: 1}}
                            transition={{duration: 1, ease: "easeOut"}}
                            style={{
                                maxWidth: '400px',
                                width: '100%',
                                height: 'auto',
                                margin: '0 auto',
                                display: 'block',
                                minWidth: '80px',

                            }}
                        />

                    )}

                    <div className={s.buttonContainer}>
                        <Grid container spacing={2}>
                            {question?.answers.map(answer => {
                                const isSelected = selectedAnswer === answer;
                                const isCorrect = isSelected && answer === question.correct;
                                const isWrong = isSelected && answer !== question.correct;

                                return (
                                    <Grid item xs={6} key={answer}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={() => handleAnswer(answer)}
                                            disabled={selectedAnswer !== null && !isSelected}
                                            sx={{
                                                height: '60px',
                                                fontSize: '16px',
                                                opacity: isSelected || selectedAnswer === null ? 1 : 0.6,
                                                backgroundColor: isCorrect
                                                    ? '#4caf50' // зелёный для правильного ответа
                                                    : isWrong
                                                        ? '#f44336' // красный для ошибки
                                                        : '#edba7a', // персиковый по умолчанию
                                                color: '#fff',
                                                '&:hover': {
                                                    backgroundColor: isCorrect
                                                        ? '#43a047'
                                                        : isWrong
                                                            ? '#e53935'
                                                            : '#eac595',
                                                },
                                            }}
                                        >
                                            {answer}
                                        </Button>
                                    </Grid>

                                );
                            })}
                        </Grid>
                    </div>

                    {selectedAnswer && (
                        <PulsatingButton
                            pulseColor="rgba(105, 204, 48, 0.91)"
                            duration="2s"
                            onClick={handleNext}
                        >
                            Next ➡️
                        </PulsatingButton>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}