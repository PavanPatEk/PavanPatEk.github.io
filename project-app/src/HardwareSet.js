import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function HardwareSet({ name, totalCapacity }) {
  const [available, setAvailable] = useState(totalCapacity);
  const [quantity, setQuantity] = useState(0);

  const handleCheckIn = () => {
    setAvailable(prev => Math.min(totalCapacity, prev + Number(quantity)));
  };

  const handleCheckOut = () => {
    setAvailable(prev => Math.max(0, prev - Number(quantity)));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
      <p>{name}: {available}/{totalCapacity}</p>
      <TextField 
        label="Enter qty" 
        variant="outlined" 
        size="small" 
        type="number" 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <Button variant="contained" onClick={handleCheckIn}>Check In</Button>
      <Button variant="contained" onClick={handleCheckOut}>Check Out</Button>
    </div>
  );
}

export default HardwareSet;