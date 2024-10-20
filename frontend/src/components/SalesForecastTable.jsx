import React, { useState } from 'react';
import axios from 'axios';

const SalesForecastTable = () => {
    const [forecastData, setForecastData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const fetchForecastData = async () => {
        if (!startDate || !endDate) return; // Prevent fetching if dates are empty

        const jsonInput = {
            start_date: startDate,
            end_date: endDate,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/dashboard/forecastSales/', jsonInput);
            const fetchedData = response.data.forecast;

            setForecastData(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Sales Forecast</h1>
            <div className="mb-4">
                <label className="block mb-2">Start Date:</label>
                <input
                    type="date"
                    className="border rounded p-2 w-full"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">End Date:</label>
                <input
                    type="date"
                    className="border rounded p-2 w-full"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <button 
                onClick={fetchForecastData} 
                className="bg-blue-500 text-white rounded p-2">
                Get Forecast
            </button>

            {forecastData.length > 0 && ( // Only show table if data is fetched
                <table className="mt-4 border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="border p-2">Date (ds)</th>
                            <th className="border p-2">Trend</th>
                            <th className="border p-2">Prediction (yhat)</th>
                            <th className="border p-2">Lower Bound (yhat_lower)</th>
                            <th className="border p-2">Upper Bound (yhat_upper)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecastData.map((row, index) => (
                            <tr key={index}>
                                <td className="border p-2">{new Date(row.ds).toLocaleDateString()}</td> {/* Format the date */}
                                <td className="border p-2">{row.trend}</td>
                                <td className="border p-2">{row.yhat}</td>
                                <td className="border p-2">{row.yhat_lower}</td>
                                <td className="border p-2">{row.yhat_upper}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SalesForecastTable;
