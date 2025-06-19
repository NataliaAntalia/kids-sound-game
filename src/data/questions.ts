import cowImg from '../images/cow.png';
import goatImg from '../images/goat.png';
import lionImg from '../images/lion.png';
import pigImg from '../images/pig.png';
import rabbitImg from '../images/rabbit.png';

export const questions = [
    {
        id: 1,
        question: 'What does a cow say??',
        answers: ['woof-woof', 'meow-meow', 'moo-moo', 'oink-oink'],
        correct: 'moo-moo',
        img: cowImg
    },

    {
        id: 2,
        question: 'What does a goat say?',
        answers: ['baa-baa', 'neigh-neigh', 'quack-quack', 'oink-oink'],
        correct: 'baa-baa',
        img: goatImg
    },
    {
        id: 3,
        question: 'What does a lion say?',
        answers: ['chirp-chirp', 'meow-meow', 'moo-moo', 'roar-roar'],
        correct: 'roar-roar',
        img: lionImg
    },
    {
        id: 4,
        question: 'What does a pig say?',
        answers: ['woof-woof', 'meow-meow', 'moo-moo', 'oink-oink'],
        correct: 'oink-oink',
        img: pigImg
    },
    {
        id: 5,
        question: 'What does a rabbit say?',
        answers: ['woof-woof', 'squeak -squeak ', 'moo-moo', 'oink-oink'],
        correct: 'squeak -squeak ',
        img: rabbitImg
    },
]