import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../index';

import { Header } from '../../components/Header';
import { Analysis } from '../../components/Analysis';
import { Footer } from '../../components/Footer';
import './Analytics.scss';

export const Analytics = () => {
  const { docRef } = useContext(Context);
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    docRef.get()
      .then(result => (setPsychologists(result.data().psychologists)));
  }, [docRef]);

  return (
    <div className="Page">
      <Header />

      <main className="Page-Main">
        <h1 className="Analytics-Header">Analytics</h1>
        <Analysis psychologists={psychologists} />
      </main>

      <Footer />
    </div>
  );
}