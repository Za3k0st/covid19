import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import  {Filter, Headline, Calendar, Card, Button, Theme, Dropdown, StepProgressBar } from '@liquid-design/liquid-design-react';

import logo from './logo.svg';
import { authContext } from "./contexts/AuthContext";
import Login from "./Login";
import TopBar from "./TopBar";
import { categoriesFiltered, isDateBetween } from "./functions";
import chiffres from "./chiffres-cles.json";

function Home() {
  const [donnee, setDonnee] = useState();
  const [category, setCategory] = useState();
  const [sources, setSources] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [step, setStep] = useState();

  useEffect(() => {
    const promesse = new Promise((resolve, reject) => {
      resolve(
        fetch('https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json')
          .then(res => res.json()))
    });
    promesse.then((res) => {
      setSources(categoriesFiltered(res));
      setDonnee(res);
      setStep(1);
    });
  }, []);

  const { auth } = useContext(authContext);
  console.log(donnee)
  console.log(category)
  console.log(sources)

  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <Headline type="XH4">
          Our pursuit is progress for people.
        </Headline>
        <Filter
          label='Filter label'
          options={[
            { name: 'Option 1', id: '1' },
            { name: 'Option 2', id: '2' },
          ]}
        />
        <Dropdown
          label='Dropdown label'
          onOptionSelect={(e) => setCategory(e)}
          options={sources}
        />
        <Calendar
          selectedStartDate={startDate}
          startDateSelect={(date) => setStartDate(date)}
          selectedEndDate={endDate}
          rangeMode
          endDateSelect={(date) => setEndDate(date)}
        />
      </header>
      <StepProgressBar
        current={step}
        steps={[
          { name: 'Loading' },
          { name: 'Done' },
        ]}
      />
      {donnee && donnee.map((stats, index) => {
        return isDateBetween(startDate, stats.date, endDate) &&
          stats.source.nom === (category && category.name) &&
          (<Card img key={index} active>
            {console.log(((startDate && startDate.getTime()) < (new Date(stats.date).getTime()) < (endDate && endDate.getTime())))}
            {stats.date}
          </Card>)
      })}
    </div>
  );
}

export default Home;
