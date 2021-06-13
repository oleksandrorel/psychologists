const initialPsychologists = require('../api/initialData.json').psycologists;

export function getArrayFromJSON () {
  const arr = [];

  for (const userName in initialPsychologists) {

    const user = {
      name: userName,
      ...initialPsychologists[userName],
    };

    arr.push(user);
  }

  return arr;
}