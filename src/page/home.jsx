import React, { useState, useEffect } from 'react';
import api from '../config/api';
import herosilder from '../component/herosilder';
import { main } from 'framer-motion/client';
import HeroSlider from '../component/herosilder';
import Presentation from '../component/presentation';
import Stats from '../component/stats';
import Partener from '../component/partener';
import Cards from '../component/cards';
import Presentation2 from '../component/presentation2';
import Bloc from '../component/bloc';
import  AdditionalInfo from '../component/additionalInfo';

export default function Home() {
  const [apiConnected, setApiConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkConnection = async () => {
  //     try {
  //       await api.get('/test');
  //       setApiConnected(true);
  //     } catch (error) {
  //       setApiConnected(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkConnection();
  // }, []);

  return (
    <>
      {/* Connection Status Banner */}
      {/* <div className={`w-full py-2 text-center text-sm font-medium ${
        loading ? 'bg-yellow-500 text-white' : 
        apiConnected ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}>
        {loading ? '🔄 Vérification de la connexion...' : 
         apiConnected ? '✅ Connecté au serveur IFDCE' : '❌ Problème de connexion au serveur'}
      </div> */}

      <HeroSlider/>
      <Partener/>
      <Presentation2/>
      <Presentation/>
      <Stats/>
      <AdditionalInfo/>
    </>
  );
}