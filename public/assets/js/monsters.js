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
    resultLocation.textContent = result.body[0]
  } catch (error) {
    console.log(error);
  }
}
getData();