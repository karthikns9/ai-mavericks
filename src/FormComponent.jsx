import React, { useState } from 'react';

const FormComponent = () => {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        try {
            const apiUrl = 'https://localhost:7207/WeatherForecast/processText'; // Replace with your API endpoint
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputText),
            });

            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="tex"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <div>{response}</div>
        </div>
    );
};

export default FormComponent;
