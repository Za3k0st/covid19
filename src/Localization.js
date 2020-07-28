import React, { useEffect, useState } from 'react';

import { Button, LineGraph, Headline, Card, Dropdown, StepProgressBar } from '@liquid-design/liquid-design-react';

import { dataFiltered, dataFiltered2, sourcesFiltered, namesFiltered } from "./functions";
import chiffres from "./chiffres-cles.json";

const someOfChiffres = chiffres;

function Localization() {
  const [donnees, setDonnees] = useState();
  const [source, setSource] = useState();
  const [sources, setSources] = useState();
  const [dataName, setDataName] = useState();
  const [step, setStep] = useState(0);

  useEffect(() => {
    setSources(sourcesFiltered(someOfChiffres));
    setDonnees(someOfChiffres);
  }, []);

  const graphData = dataFiltered(donnees);
  const graphData2 = dataFiltered2(donnees);
  const series = [graphData, graphData2]

  return (
    <div>
      <Headline type="BH3">
        Focus data on localization
      </Headline>
      <br />
      <Dropdown
        id="un"
        label='Source Type'
        onOptionSelect={(e) => { setSource(e); setStep(0); setDataName(null); setDonnees(someOfChiffres.filter((data) => data.sourceType === e.name)) }}
        options={sources}
      />
      {source &&
        <Dropdown
          id="deux"
          label='Name'
          onOptionSelect={(e) => { setDataName(e.name); setStep(2); setDonnees(someOfChiffres.filter((data) => data.nom === e.name && data.sourceType === source.name)); }}
          options={namesFiltered(someOfChiffres, source)}
        />}
      <StepProgressBar
        current={step}
        steps={[
          { name: 'Source' },
          { name: 'Name' },
          { name: 'Trend line' },
        ]}
      />
      {dataName && <React.Fragment>
        <Headline type="BH5">
          Number of hospitalisations and new hospitalisations
          <br /><br />
          <Button style={{ backgroundColor: "rgb(45, 190, 205)" }}>Hospitalisations</Button>&nbsp;
          <Button style={{ marginRight: "10px", backgroundColor: "rgb(255, 200, 50)" }}>New Hospitalisations</Button>
        </Headline>
        <LineGraph data={series} />
      </React.Fragment>}
      {donnees && source && donnees.slice(0, 50).map((stats, index) =>
        (<Card img key={index} active>
          <Headline type="BH5">{stats.nom}</Headline>
          <b>{stats.date}</b><hr />
          Cas Confirmés : {stats.casConfirmes}<br />
          Hospitalises : {stats.hospitalises}<br />
          Nouvelles hospitalisations : {stats.nouvellesHospitalisations}<br />
        </Card>)
      )}
    </div>
  );
}

export default Localization;
