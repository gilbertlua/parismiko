import {TextField,   Box, Button, Typography } from "@mui/material";
import InputBarcode from "./InputBarcode";
import { useState } from "react";
import { AddData } from "../Query/DataQuery";

export default function Mobile(){
    const [displayField, setDisplayField] = useState(false)
    const [barcode, setBarcode] = useState(null) 
    const [name, setName] = useState('')
    const [merk, setMerk] = useState('')
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()


    const handleSubmit = async () => {
        const data = {
            barcode,
            name,
            merk,
            price,
            stock
        }
        try{
            await AddData(data)
            window.location.reload()
        }
        catch{
            alert('error while adding the file')
            window.location.reload()
        }
        
    }

    
    console.log(barcode)
    return( 
        <Box sx={{backgroundColor:'background.paper'}}>
            {barcode == null ? <InputBarcode setBarcode={setBarcode} setDisplayField={setDisplayField}/> : ''}
            {displayField ? <>
            
            <div style={{marginTop:'10px', padding:'10px'}}>
                <Typography sx={{marginBottom:'20px', fontWeight:'bold', textAlign:'center'}} variant="p" component='p'>
                    INPUT DATA BARANG
                </Typography>

                <TextField
                sx={{ width: '100%' , marginBottom:'5px'}}
                required
                id="outlined-required"
                label="Nama barang"
                onChange={(e) => setName(e.target.value)}
                />

                <TextField
                sx={{ width: '100%' , marginBottom:'5px'}}
                required
                id="outlined-required"
                label="Merk"
                onChange={(e) => setMerk(e.target.value)}
                />

                <TextField
                sx={{ width: '100%' , marginBottom:'5px'}}
                required
                id="outlined-required"
                type="number"
                label="Harga"
                onChange={(e) => setPrice(e.target.value)}
                />

                <TextField
                sx={{ width: '100%' , marginBottom:'10px'}}
                required
                id="outlined-required"
                label="Stok"
                type="number"
                onChange={(e) => setStock(e.target.value)}
                />

                <Button variant='contained' color='primary' onClick={()=>handleSubmit()}>
                    Submit
                </Button>
            </div>
            
            </> : ''}
        </Box>
    )
}