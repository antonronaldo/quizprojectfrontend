import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './home';
import QuizQuestionOne from './quizquestion1';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import QuizQuestionTwo from './quizquestion2';
import QuizQuestionThree from './quizquestion3';
import QuizQuestionFour from './quizquestion4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="QuizQuestionOne" element={<QuizQuestionOne/>}/>
    <Route path="QuizQuestionTwo" element={<QuizQuestionTwo/>}/>
    <Route path="QuizQuestionThree" element={<QuizQuestionThree />}/>
    <Route path="QuizQuestionFour" element={<QuizQuestionFour />}/>
  </Routes>
  </BrowserRouter>
);

