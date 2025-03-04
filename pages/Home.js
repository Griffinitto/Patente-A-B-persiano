
import React from 'react';
import { Link } from 'react-router-dom';

function Home({ language }) {
    const text = {
        it: { welcome: "Benvenuto all'App Patente" },
        fa: { welcome: "به برنامه گواهینامه خوش آمدید" }
    };

    return (
        <div>
            <h1>{text[language].welcome}</h1>
            <nav>
                <Link to="/theory">Teoria</Link>
                <Link to="/test">Test</Link>
                <Link to="/exam">Simulazione Esame</Link>
            </nav>
        </div>
    );
}

export default Home;
