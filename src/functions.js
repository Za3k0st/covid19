export const isDateBetween = (startDate, date, endDate) =>
  ((startDate && startDate.getTime()) < new Date(date).getTime()) && (new Date(date).getTime() < endDate && endDate.getTime());

export const dataFiltered = (data) => data.reduce((uniq, item) => {
  return uniq.find(objet => objet.name === item.type) ? uniq : [...uniq, { name: item.type }]
}, []);

export const categoriesFiltered = (data) => {
  const categories = data.reduce((uniq, item) => {
  return uniq.find(objet => objet.name === (item.source && item.source.nom)) ? uniq : [...uniq, { id: (item.source && item.source.nom), name: (item.source && item.source.nom) }]
}, []);

  return categories;
};