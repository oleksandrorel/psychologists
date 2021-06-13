import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../index';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PsychologistsList } from '../../components/PsychologistsList';
import './Psychologists.scss';

export const Psychologists = () => {
  const { docRef } = useContext(Context);
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    docRef.get()
      .then(result => (setPsychologists(result.data().psychologists)));
  }, [docRef]);

  return (
    <div className="Psychologists-Page">
      <Header />

      <main className="Psychologists-Main">
        <h1 className="Psychologists-Header">List of Psychologists</h1>
        <PsychologistsList psychologists={psychologists} />
      </main>

      <Footer />
    </div>
  );
}