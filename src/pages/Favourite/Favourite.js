import React from 'react';
import { useSelector } from 'react-redux'
import { getFavouritePsychologists } from '../../store';

import { Header } from '../../components/Header';
import { PsychologistsList } from '../../components/PsychologistsList';
import { Footer } from '../../components/Footer';
import './Favourite.scss';

export const Favourite = () => {
  const favouritePsychologists = useSelector(getFavouritePsychologists);

  return (
    <div className="Page">
      <Header />

      <main className="Page-Main">
      <h1 className="Favourite-Header">List of Favourite psychologists</h1>
      <PsychologistsList psychologists={favouritePsychologists} />
      </main>

      <Footer />
    </div>

  );
}