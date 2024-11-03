import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrReader from 'react-qr-barcode-scanner';

export const Scanner = () => {
    const [data, setData] = useState('No result');
    const navigate = useNavigate();

    const handleUpdate = (err, result) => {
        if (result) {
            setData(result.text);
            navigate('/inputdata', { state: { barcode: result.text } }); // Navigate to InputData with barcode data
        } else {
            setData("Not Found");
        }
    };

    return (
        <div>
            <div className="bg-dark jumbotron p-1 rounded">
                <p className="h3 text-light text-center">SCANNER SYSTEM</p>
            </div>
            <h1>Barcode Scanner</h1>
            <QrReader
                style={{ width: '100%' }}
                onUpdate={handleUpdate}
                facingMode="environment"
            />
            <p>Scanned Barcode: {data}</p>
        </div>
    );
};
