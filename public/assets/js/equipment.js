const newEquipmentHandler = async (event) => {
    event.preventDefault();
  
    
    const item = document.querySelector('#equipment-desc').value.trim();
    const character_id = document.querySelector('#character-id').value;
  
    if (item) {
      const response = await fetch(`/api/equipment`, {
        method: 'POST',
        body: JSON.stringify({ item, character_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
     
      if (response.ok) {
        console.log(item, character_id);
        document.location.replace(`/characters/${character_id}`);
      } else {
        alert('Failed to add equipment');
      }
    }
  };


window.onload=function(){
  document
    .querySelector('.new-equipment-form')
    .addEventListener('submit', newEquipmentHandler);
}
  