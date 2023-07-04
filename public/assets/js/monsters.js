/*const resultLocation = document.querySelector("#resultLocation");
async function getData() {
  const url = "https://www.dnd5eapi.co/api/monsters";
  const parameters = {
    val1: "name",
    val2: "size",
    val3: "type",
    val4: "alignment"
  };
  const queryString = Object.keys(parameters)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
    .join('&');
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(`${url}?${queryString}`, options);
    const result = await response.json();
    console.log(result);
    let resultLocation = document.querySelector("#monsterName");
    resultLocation.textContent = result.parameters;
    console.log([0].name)
  } catch (error) {
    console.log(error);
  }
}
getData();
*/

const searchInput = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('input[type="submit"]');


const resultLocation = document.querySelector("#resultLocation");


searchButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    const monsterName = searchInput.value;  
    if (monsterName) {
        getData(monsterName);
    } else {
        
        resultLocation.textContent = "Please enter a monster name.";
    }
});

async function getData(monsterName) {
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterName}`;
    const options = {
        method: "GET",
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.error) {
      
            resultLocation.textContent = "Monster not found.";
        } else {
            
            let text = `Name: ${result.name}, Size: ${result.size}, Type: ${result.type}, Alignment: ${result.alignment}, Hit Points: ${result.hit_points}, XP: ${result.xp}`;
            resultLocation.textContent = text;
        }
    } catch (error) {
        console.log(error);
        resultLocation.textContent = "Error while fetching data.";
    }
}
