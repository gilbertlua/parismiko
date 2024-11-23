import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  marginTop: '50%',
  top: '50%',
  bgcolor: 'background.paper',
  p: 4,
};

export default function InputBarcode({ setBarcode, setDisplayField }) {
  const [name, setName] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    if (setBarcode) {
      setBarcode(name);
    }
    setDisplayField(true)
  };

  return (
    <div>
      <Box sx={style}>
        <Typography id="title" variant="p" component="p" sx={{ marginBottom: '15px' }}>
          ADD NEW BARCODE
        </Typography>

        {/* Ensure onSubmit prevents default form behavior */}
        <Box
          sx={{
            marginTop: '10px',
            '& .MuiTextField-root': { marginBottom: 2, width: '100%' },
          }}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleUpdate} // Add onSubmit handler
        >
          <div>
            <TextField
              sx={{ width: '100%' }}
              required
              id="outlined-required"
              label="Barcode"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on input
            />
          </div>
        </Box>
      </Box>
    </div>
  );
}
