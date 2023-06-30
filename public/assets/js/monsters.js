const resultLocation = document.querySelector("#resultLocation");
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