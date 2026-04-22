import React, { useState } from 'react';
import { Button } from '@mui/material';
import HardwareSet from './HardwareSet';

function ProjectRow({ projectName, users }) {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div style={{ 
        border: '1px solid #ccc', 
        padding: '24px', 
        margin: '15px 0', 
        borderRadius: '8px',
        backgroundColor: isLocked ? '#f5f5f5' : '#fff', // Gray out when locked
        transition: 'all 0.3s ease',
        opacity: isLocked ? 0.8 : 1
    }}>
      <h3 style={{ marginTop: 0 }}>{projectName}</h3>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{users}</p>
      
      {/* Container for the rating/grading sections */}
      <div style={{ margin: '20px 0', pointerEvents: isLocked ? 'none' : 'auto' }}>
        <HardwareSet name="Rating" totalCapacity={100} />
        <HardwareSet name="Grading" totalCapacity={100} />
      </div>

      {/* Lock/Unlock Toggle Button */}
      <Button 
        variant="contained" 
        color={isLocked ? "secondary" : "primary"}
        onClick={() => setIsLocked(!isLocked)}
        style={{ marginTop: '10px', minWidth: '150px' }}
      >
        {isLocked ? "🔓 Unlock Edition" : "🔒 Lock Grading"}
      </Button>
    </div>
  );
}

export default ProjectRow;