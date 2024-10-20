import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommodityTable = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState(''); // State for the input item
    const startDate = new Date('2024-06-17'); // Start date

    const fetchData = async () => {
        if (!item) return; // Prevent fetching if item is empty

        try {
            const response = await axios.post('http://127.0.0.1:8000/dashboard/forecast/', {
                data: item, // Use the input item for the request
            });
            const fetchedData = response.data;

            // Map the fetched data to include dates
            const tableData = fetchedData.map((items, index) => {
                return {
                    commodity: items[item],
                    date: new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000) // Increment by day
                };
            });

            setData(tableData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Commodity Forecast Table</h1>
            <input
                type="text"
                placeholder="Enter item (e.g., sugar)"
                value={item}
                onChange={(e) => setItem(e.target.value)} // Update item state on input change
                className="border border-gray-300 rounded-md p-2 mb-2 w-full"
            />
            <button
                onClick={fetchData}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Get Forecast
            </button>
            {data.length > 0 && ( // Only show table if data is fetched
                <table className="min-w-full border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Sales</th>
                            <th className="border px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="border px-4 py-2">{row.commodity}</td>
                                <td className="border px-4 py-2">{row.date.toLocaleDateString()}</td> {/* Format the date */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CommodityTable;
