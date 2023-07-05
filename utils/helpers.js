module.exports = {
  character_modifier: (property, proficiencyScore) => {
  
  let modifier = 0;
  switch (property) {
    case 1:
      modifier = proficiencyScore ? -3 : -5;
      break;
    case 2:
    case 3:
      modifier = proficiencyScore ? -2 : -4;
      break;
    case 4:
    case 5:
      modifier = proficiencyScore ? -1 :-3;
      break;
    case 6:
    case 7:
      modifier = proficiencyScore ? 0 : -2;
      break;
    case 8:
    case 9:
      modifier = proficiencyScore ? 1 :-1;
      break;
    case 18:
    case 19:
      modifier = proficiencyScore ? 6 : 4;
      break; 
    default:
      break;
  }
  
  return modifier;
},

getCheckboxValue: (elementId) => {
  const x = document.getElementById(elementId).value;
  console.log(elementId, x);
  return x;
}

}