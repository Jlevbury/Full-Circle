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
        resultLocation.innerHTML = "<li>Please enter a monster name.</li>";
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
            resultLocation.innerHTML = "<li>Monster not found.</li>";
        } else {
            let text = `<ul><li>Name: ${result.name}</li>
                        <li>Size: ${result.size}</li>
                        <li>Type: ${result.type}</li>
                        <li>Alignment: ${result.alignment}</li>
                        <li>Hit Points: ${result.hit_points}</li>
                        <li>XP: ${result.xp}</li></ul>`;
            resultLocation.innerHTML = text;
        }
    } catch (error) {
        console.log(error);
        resultLocation.innerHTML = "<li>Error while fetching data.</li>";
    }
}
