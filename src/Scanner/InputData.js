import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AddData} from '../Query/DataQuery';

export const InputData = (e) => {
    const location = useLocation();
    
    const barcode = location.state?.barcode || ''; 
    const [formData, setFormData] = useState({
        barcode: barcode,
        name: '',
        merk: '',
        price: ''
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            barcode: barcode
        }));
    }, [barcode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = {
            barcode: formData.barcode,
            name: formData.name,
            merk: formData.merk,
            price: formData.price,
            updated_date: new Date(),
            created_date: new Date()
        };

        try {
            await AddData(newItem);
            alert("Data added successfully!");
            setFormData({
                barcode: '',
                name: '',
                merk: '',
                price: ''
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error adding data. Please try again.");
        }
    };


    return (<div>
        <p className="h3">INPUT DATA</p>
        <hr/>
        <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    Barcode &nbsp;
                    <br/>
                    <input
                        name="barcode"
                        type="text"
                        style={{ width: '100%' }}
                        value={formData.barcode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    Nama Barang &nbsp;
                    <br/>
                    <input
                        name="name"
                        type="text"
                        style={{ width: '100%' }}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    Merk &nbsp;
                    <br/>
                    <input
                        name="merk"
                        type="text"
                        style={{ width: '100%' }}
                        value={formData.merk}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    Harga &nbsp;
                    <br/>
                    <input
                        name="price"
                        type="number"
                        style={{ width: '100%' }}
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Input</button>
            </form>
        </div>
    );
};
