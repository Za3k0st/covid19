import React, { useEffect, useState } from 'react';
import { BarChart, Headline } from '@liquid-design/liquid-design-react';

import { getTotalHospitalisations, getTotalReanimations } from "./functions";
import logo from './logo.svg';
import chiffres from "./chiffres-cles.json";

function Statistic() {
  const [donnees, setDonnees] = useState();

  useEffect(() => {
    setDonnees(chiffres);
  });

  const totalHospitalisations = donnees && getTotalHospitalisations(donnees);
  const totalReanimations = donnees && getTotalReanimations(donnees);

  return (
    <div>
      <Headline type="BH3">
        Covid19 Stats in France
      </Headline>
      <br /><br />
      <Headline type="BH6">
        Total hospitalisations {donnees && totalHospitalisations}<br /><br />
      Total reanimations {donnees && totalReanimations}<br /><br />
      </Headline>

      {totalHospitalisations &&
        <BarChart
          data={[
            {
              values: [
                {
                  value: totalHospitalisations,
                  label: {
                    name: "Total hospitalisations"
                  }
                },
                {
                  value: totalReanimations,
                  label: {
                    name: "Total reanimations"
                  }
                },
              ],
              x: "2020"
            },
          ]
          }
        />}
    </div>
  );
}

export default Statistic;
