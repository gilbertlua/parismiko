import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField } from '@mui/material';
import { useState } from 'react';
import { UpdateDataById } from '../Query/DataQuery';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const parseRupiah = (formattedValue) => {
    if (!formattedValue) return 0; 
    const numericValue = formattedValue.replace(/[^0-9,-]+/g, '').replace(',', '.');
    return parseInt(numericValue) || 0;
  };

export default function EditModal({row,setShowModal}){
    const [open, setOpen] = useState(true);
    
    const handleClose = () => {
        setOpen(false) 
        setShowModal(false)
    };


    // data
    const [name , setName] = useState(row.name)
    const [merk , setMerk] = useState(row.merk)
    const [price , setPrice] = useState(parseRupiah(row.price))
    const [barcode , setBarcode] = useState(row.barcode)
    const [stock , setStock] = useState(row.stock)
    

    const handleUpdate = async (id) => {
        const updatedItem = {
            name,
            merk,
            price,
            barcode,
            stock
        };
        try{
            await UpdateDataById(id,updatedItem)
            handleClose()   
            window.location.reload();         
        }
        catch{
            alert('error')
        }
        
    }

    
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="p" component="p" sx={{marginBottom:'15px'}}>
                Edit data : {row.id}
            </Typography>
            <Box sx={{marginTop:'10px', '& .MuiTextField-root': { marginBottom:2, width: '100%'}}} component='form' noValidate autoComplete="off">
                <div>
                    <TextField
                        sx={{width:'100%'}}
                        required
                        id="outlined-required"
                        label="Nama barang"
                        defaultValue={row.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        sx={{width:'100%'}}
                        required
                        id="outlined-required"
                        label="Merk"
                        defaultValue={row.merk}
                        onChange={(e) => setMerk(e.target.value)}
                    />
                    <TextField
                        sx={{width:'100%'}}
                        required
                        id="outlined-required"
                        label="Harga Barang"
                        defaultValue={parseRupiah(row.price)}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        sx={{width:'100%'}}
                        required
                        id="outlined-required"
                        label="Barcode"
                        defaultValue={row.barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                    />
                    <TextField
                        sx={{width:'100%'}}
                        required
                        id="outlined-required"
                        label="Stok"
                        defaultValue={row.stock}
                        onChange={(e) => setStock(e.target.value)}
                    />

                    <Button variant="contained" color='primary' disableElevation onClick={()=>handleUpdate(row.id)}>Update</Button>

                </div>                
            </Box>
          </Box>
        </Modal>
      </div>
    );
}