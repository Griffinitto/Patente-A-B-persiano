
import React from 'react';

function LanguageSwitcher({ language, setLanguage }) {
    return (
        <div>
            <button onClick={() => setLanguage('it')}>🇮🇹 Italiano</button>
            <button onClick={() => setLanguage('fa')}>🇮🇷 فارسی</button>
        </div>
    );
}

export default LanguageSwitcher;
