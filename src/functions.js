export const isDateBetween = (startDate, date, endDate) =>
  ((startDate && startDate.getTime()) < new Date(date).getTime()) && (new Date(date).getTime() < endDate && endDate.getTime());

export const dataFiltered = (data) => data && data.map((item) => Number.isInteger(item.hospitalises) ? ({ x: (item && item.date), y: (item && item.hospitalises) }) : null);

export const dataFiltered2 = (data) => data && data.map((item) => Number.isInteger(item.nouvellesHospitalisations) ? ({ x: (item && item.date), y: (item && item.nouvellesHospitalisations) }) : null);

export const sourcesFiltered = (data) => {
  const categories = data.reduce((uniq, item) => {
    return uniq.find(objet => objet.name === (item.sourceType)) ? uniq : [...uniq, { id: (item.sourceType), name: (item.sourceType) }]
  }, []);

  return categories;
};

export const namesFiltered = (data, source) => {
  const categories = data.reduce((uniq, item) => {
    return uniq.find(objet => objet.name === (item.nom)) || source.name !== item.sourceType ? uniq : [...uniq, { id: (item.nom), name: (item.nom) }]
  }, []);

  return categories;
};

export const getTotalHospitalisations = (data) => data.reduce((number, item) => {
  return item && Number.isInteger(item.nouvellesHospitalisations) ? (number + item.nouvellesHospitalisations) : number
}, 0);

export const getTotalReanimations = (data) => data.reduce((number, item) => {
  return item && Number.isInteger(item.nouvellesReanimations) ? (number + item.nouvellesReanimations) : number
}, 0);