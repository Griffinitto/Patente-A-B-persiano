
// Struttura base dell'app con React e Firebase

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Test from './pages/Test';
import ExamSimulation from './pages/ExamSimulation';
import LanguageSwitcher from './components/LanguageSwitcher';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
    const [language, setLanguage] = useState('it');

    return (
        <Router>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/theory" element={<Theory language={language} db={db} />} />
                <Route path="/test" element={<Test language={language} db={db} />} />
                <Route path="/exam" element={<ExamSimulation language={language} db={db} />} />
            </Routes>
        </Router>
    );
}

export default App;
