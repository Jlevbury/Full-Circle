document.getElementById('lookup-button').addEventListener('click', function() {
    const rule = document.getElementById('rule-search').value;
    const url = `https://www.dnd5eapi.co/api/rule-sections/${rule}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let ruleInfoDiv = document.getElementById('rule-info');
            ruleInfoDiv.innerHTML = `<h2>${data.name}</h2>`;
            ruleInfoDiv.innerHTML += `<p>${data.desc}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
