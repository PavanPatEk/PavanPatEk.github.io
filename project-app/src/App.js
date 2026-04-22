import React from 'react';
import ProjectRow from './ProjectRow';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Projects</h1>
      <ProjectRow projectName="Pavan's Website" users="colors, interactiveness, text readability " />
      <ProjectRow projectName="Pavan's Resume" users=" links, logos" />
      <ProjectRow projectName="Pavan's Nimbus" users="photos" />
    </div>
  );
}

export default App;