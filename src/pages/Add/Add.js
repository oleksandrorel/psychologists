import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import './Add.scss';

export const Add = () => {
  return (
    <div className="Page">
      <Header />

      <main className="Main-Add">
        <Form />
      </main>

      <Footer />
    </div>
  );
}
