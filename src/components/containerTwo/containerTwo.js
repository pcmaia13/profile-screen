import React, { useState } from 'react';
import './containerTwo.css'

function ContainerTwo({ bio, atualizarNome, atualizarBio }) {
        
        const [novaBio, setNovaBio] = useState("");
        const [novoNome, setNovoNome] = useState("");

        const handleChangeBio = (e) => {
            setNovaBio(e.target.value);
        };

        const handleChangeNome = (e) => {
            setNovoNome(e.target.value);
        };

        const handleAtualizarBio = () => {
            atualizarBio(novaBio);
            setNovaBio(""); 
            alert("Biografia atualizada com sucesso!");
        };

        const handleAtualizarNome = () => {
            atualizarNome(novoNome);
            setNovoNome(""); 
            alert("Nome atualizado com sucesso!");
        };


        const [isOpen, setIsOpen] = useState(false);

        const toggleModal = () => {
            setIsOpen(!isOpen);
        }

    return(
        <div className='main-container'>
            <div className='container-2'>
                <div className='text-box'>
                    <p>
                    {bio}
                    </p>
                </div>

                <div>
                    <div className='btn-edit'>
                        <button className='btn-edit-2' onClick={toggleModal}>Editar perfil</button>
                    </div>
                    {isOpen && (
                         <div className="modal-overlay">
                         <div className="modal">
                             <button className="close-btn" onClick={toggleModal}>
                                 Fechar Modal
                             </button>
                             <h2>Editar perfil</h2>

                             <p>Novo nome</p>
                             <input id='name' value={novoNome} onChange={handleChangeNome} type='text'></input>
                             <button  onClick={handleAtualizarNome} className='btn-modal-edit'>submit</button>

                             <p>Nova bio</p>
                             <textarea value={novaBio} onChange={handleChangeBio}></textarea>
                             <button onClick={handleAtualizarBio} className='btn-modal-edit-2'>submit</button>
                         </div>
                     </div>
                )}
                </div>
            </div>

                <div className='buttons-edit'>
                    <a href='https://github.com/pcmaia13'>
                        <img src="./github.png"  alt=""></img>
                    </a>

                    <a href='https://www.instagram.com/jvma_ia/'>
                    <img src="./insta.png"  alt=""></img>
                    </a>
                </div>  
            </div>
        
    )
}

export default ContainerTwo