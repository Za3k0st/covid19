import React, { useEffect, useState } from 'react';
import { Calendar, Headline, Card } from '@liquid-design/liquid-design-react';

import { isDateBetween } from "./functions";
import chiffres from "./chiffres-cles.json";

function Dataset() {
  const [donnees, setDonnees] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    setDonnees(chiffres);
  }, []);

  return (
    <div>
      <Headline type="BH3">
        View dataset by date
        <Calendar
          selectedStartDate={startDate}
          startDateSelect={(date) => setStartDate(date)}
          selectedEndDate={endDate}
          rangeMode
          endDateSelect={(date) => setEndDate(date)}
          style={{ marginLeft: "100px" }}
        />
      </Headline>
      {donnees && donnees.map((result, index) => {
        if (startDate && isDateBetween(startDate, result.date, endDate)) {
          return (
            <Card img key={index} active>
              <Headline type="BH5">{result.nom}</Headline>
              <b>{result.date}</b><hr />
              Nouvelles hospitalisations : {result.nouvellesHospitalisations}<br />
              Nouvelles réanimations : {result.nouvellesReanimations}<br />
              Réanimations : {result.reanimation}
            </Card>)
        }
      })}
    </div>
  );
}

export default Dataset;
