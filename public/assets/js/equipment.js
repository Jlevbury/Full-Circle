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

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog');
      }
    }
  };


window.onload=function(){
  document
    .querySelector('.new-equipment-form')
    .addEventListener('submit', newEquipmentHandler);
}
  