import React, { useState } from 'react';
import axios from 'axios';

const SalesPredictionForm = () => {
    const [date, setDate] = useState('');
    const [predictedSales, setPredictedSales] = useState(null);
    const [error, setError] = useState(null);

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const csrfToken = getCookie('csrftoken');
            const response = await axios.post('http://127.0.0.1:8000/dashboard/', 
                { date },
                {
                    headers: {
                        'X-CSRFToken': csrfToken,
                    }
                }
            );
            console.log(response);
            setPredictedSales(response.data.predicted_sales);
        } catch (error) {
            setError('Failed to fetch the predicted sales');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="date" value={date} onChange={handleDateChange} required />
                </label>
                <button type="submit">Predict Sales</button>
            </form>
            {predictedSales !== null && <p>Predicted Sales: {predictedSales}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default SalesPredictionForm;
