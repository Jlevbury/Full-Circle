module.exports = {
  character_modifier: (property) => {
  
  let modifier = 0;
  switch (property) {
    case 1:
      modifier = -5;
      break;
    case 2:
    case 3:
      modifier = -4;
      break;
    case 4:
    case 5:
      modifier = -3;
      break;
    case 6:
    case 7:
      modifier =  -2;
      break;
    case 8:
    case 9:
      modifier = -1;
      break;
    case 18:
    case 19:
      modifier = 4;
      break; 
    default:
      break;
  }
  
  return modifier;
},

}