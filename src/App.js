import { useContext, useEffect } from 'react';
import { Context } from './index';
import {Route, Switch, Redirect} from 'react-router-dom';

import { getArrayFromJSON } from './utils/helpers';
import { Add } from './pages/Add/Add';
import { Psychologists } from './pages/Psychologists/Psychologists';
import { Favourite } from './pages/Favourite/Favourite';
import { Disfavourite } from './pages/Disfavourite/Disfavourite';
import { Analytics } from './pages/Analytics/Analytics';

import './App.scss';


function App() {
  const { docRef } = useContext(Context);

  useEffect(() => {
    const psychologists = getArrayFromJSON();

    docRef.set({
      psychologists
    })
  }, [docRef]);

  return (
    <Switch>
      <Route path="/add" exact component={Add} />
      <Route path="/psychologists" exact component={Psychologists} />
      <Route path="/favourite" exact component={Favourite} />
      <Route path="/disfavourite" exact component={Disfavourite} />
      <Route path="/analytics" exact component={Analytics} />

      <Redirect path="/" to="/add" />

    </Switch>
  );
}

export default App;
