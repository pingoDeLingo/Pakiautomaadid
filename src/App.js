import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [pakiautomaadid, setPakiautomaadid] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/parcelmachines')
            .then((res) => res.json())
            .then((json) => setPakiautomaadid(json))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="App">
            <select>
                {pakiautomaadid.map((automaat) => (
                    <option key={automaat.id}>{automaat.NAME}</option>
                ))}
            </select>
        </div>
    );
}

export default App;
