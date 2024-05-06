import './containerThree.css'
import React, { useState } from 'react';

function ContainerThree({ onImageUpload }) {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        if (image) {
            onImageUpload(image);
            setImage(null);
            alert("Imagem enviada com sucesso!");
        } else {
            alert("Por favor, selecione uma imagem.");
        }
    };

    return (
        <div className='conatainer-3'>
            <div className='input-edit'>
                <input className='input' type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div>
                <button className='button' onClick={handleUpload}>Enviar</button>
            </div>
        </div>
    );
}

export default ContainerThree;
