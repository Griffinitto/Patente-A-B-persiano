
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function Theory({ language, db }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "theory"));
            setContent(querySnapshot.docs.map(doc => doc.data()));
        }
        fetchData();
    }, [db]);

    return (
        <div>
            <h1>{language === 'it' ? "Teoria della Patente" : "تئوری گواهینامه"}</h1>
            {content.map((item, index) => (
                <p key={index}>{item[language]}</p>
            ))}
        </div>
    );
}

export default Theory;
