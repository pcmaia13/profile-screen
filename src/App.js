import React, { useState } from 'react';
import './App.css';
import ContainerOne from './components/containerOne/containerOne';
import ContainerTwo from './components/containerTwo/containerTwo';
import ContainerThree from './components/containerThree/containerThree';

function App() {

  const [nome, setNome] = useState("João Victor Coelho Maia De Araujo");
  const [bio, setBio] = useState("Passionate individual with a love for creativity and innovation. Thrives on challenges and constantly seeks to expand knowledge and skills. Enjoys [Your Hobbies/Interests]. Committed to making a positive impact through work and volunteering.");
  
  const atualizarNome = (novoNome) => {
    setNome(novoNome);
  };

  const atualizarBio = (novaBio) => {
    setBio(novaBio);
  };

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
      setUploadedImage(image);
  };

  return (
    <div className="App">
        <ContainerOne nome={nome}></ContainerOne>
        <ContainerTwo  bio={bio} atualizarNome={atualizarNome} atualizarBio={atualizarBio}></ContainerTwo>
        <ContainerThree  onImageUpload={handleImageUpload}></ContainerThree>
        {uploadedImage && (
                <div>
                    <h2 className='h2-edit'>Imagem Carregada:</h2>
                    <img className='img-edit' src={uploadedImage} alt="Imagem carregada"/>
                </div>
            )}
    </div>
  );
}

export default App;
