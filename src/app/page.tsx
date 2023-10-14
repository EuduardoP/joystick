'use client';
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Display from './components/Display';
import { useState, useEffect } from 'react'



export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    
    const checkOrientation = () => {
      if (
        window.screen.orientation &&
        window.screen.orientation.type &&
        window.screen.orientation.type.startsWith('portrait')
      ) {
        setIsLandscape(false);
      } else {
        setIsLandscape(true);
      }
    };

    
    checkOrientation();

    
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <div>
      {!isLandscape && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black text-d-wh flex items-center justify-center z-50'>
          <p>Vire o celular para acessar o Joysitck.</p>
        </div>
      )}

      <Navbar setOpenModal={setOpenModal} />
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      <Display />
    </div>
  );
}