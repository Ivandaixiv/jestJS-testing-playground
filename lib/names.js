const names = (names, char) => {
  if (!names || !char) throw new Error();
  let nameCount = 0;
  const newNames = [];
  let index = 0;
  names.forEach(name => {
    newNames[index] = name[0];
    newNames[index] = newNames[index] + name[1];
    newNames[index] = newNames[index] + name[2];
    index++;
  });
  for (let i = 0; i < names.length; i++) {
    if (newNames[i]) {
      nameCount++;
    }
  }
  return nameCount;
  //   let nameCount = 0;
  //   if (!names || !char) return new Error();
  //   for (let i = 0; i < names.length; i++) {
  //     if (names[i].substring(0, 4).match(char)) {
  //       nameCount++;
  //     }
  //   }
  //   return nameCount;
};
module.exports = names;
