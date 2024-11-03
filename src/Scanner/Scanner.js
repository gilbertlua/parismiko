import React, { useState } from 'react';
import QrReader from 'react-qr-barcode-scanner';
import { ScannerModal } from './ScannerModal';

export const Scanner = () =>{
    const [data, setData] = useState('No result');
    return(
        <>
            <div className="bg-dark jumbotron p-1 rounded"><p className="h3 text-light text-center">SCANNER SYSTEM</p></div>
            <div>
                <h1>Barcode Scanner</h1>
                <QrReader
                    style={{ width: '100%' }}
                    onUpdate={(err, result) => {
                        if (result) setData(result.text);
                        else setData("Not Found");
                    }}
                />
                <p>Scanned Barcode: {data}</p>       
                <ScannerModal data={data} />                      
            </div>
        </>
    )
}