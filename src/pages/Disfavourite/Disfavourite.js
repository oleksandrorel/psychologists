import React from 'react';
import { useSelector } from 'react-redux'
import { getDisfavouritePsychologists } from '../../store';

import { Header } from '../../components/Header';
import { PsychologistsList } from '../../components/PsychologistsList';
import { Footer } from '../../components/Footer';
import './Disfavourite.scss';

export const Disfavourite = () => {
  const disfavouritePsychologists = useSelector(getDisfavouritePsychologists);

  return (
    <div className="Page">
      <Header />

      <main className="Page-Main">
      <h1 className="Disfavourite-Header">List of Disfavourite psychologists</h1>
      <PsychologistsList psychologists={disfavouritePsychologists} />
      </main>

      <Footer />
    </div>
  );
}