
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Button, Container, Paper, Typography} from '@mui/material';
import styles from './FinalyPage.module.css';
import confetti from 'canvas-confetti';

export const FinalyPage = () => {
    const correct = useSelector((state: RootState) => state.quiz.correct);
    const navigate = useNavigate();
    const isPassed = correct >= 3;

    useEffect(() => {
        if (isPassed) {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: {y: 0.6}
            });
        }
    }, [isPassed]);

    return (
        <div className={styles.wrapper}>
            <Container maxWidth="md">
                <Paper elevation={4} className={styles.card}>
                    <Typography variant="h4" gutterBottom>
                        {isPassed ? '🎉 Тест пройден !' : '😕 Тест не пройден'}
                    </Typography>

                    <Typography className={styles.resultText}>
                        Правильных ответов: <strong>{correct}</strong>
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => navigate('/main-page')}
                        className={styles.button}
                    >
                        Вернуться на главную
                    </Button>
                </Paper>
            </Container>
        </div>
    );
};
