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
        document.location.replace(`/characters/${character_id}`);
      } else {
        alert('Failed to add equipment');
      }
    }
  };

  const delButtonHandler = async (event) => {

    const character_id = document.querySelector('#character-id').value;

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/equipment/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace(`/characters/${character_id}`);
      } else {
        alert('Failed to delete item');
      }
    }
  };

  // Spellbook code

  const newSpellHandler = async (event) => {
    event.preventDefault();

    const spell = document.querySelector('#spell-desc').value.trim();
    const character_id = document.querySelector('#character-id-repeat').value;

    if (spell) {
        const response = await fetch(`/api/spell`, {
        method: 'POST',
        body: JSON.stringify({ spell, character_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
     
      if (response.ok) {
        document.location.replace(`/characters/${character_id}`);
      } else {
        alert('Failed to add spell');
      }
    }
    
  };

  const delSpellHandler = async (event) => {

    const character_id = document.querySelector('#character-id').value;

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/spell/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace(`/characters/${character_id}`);
      } else {
        alert('Failed to delete spell');
      }
    }
  };

window.onload=function(){
  document
    .querySelector('.new-equipment-form')
    .addEventListener('submit', newEquipmentHandler);

    document
    .querySelector('.equipment-list')
    .addEventListener('click', delButtonHandler);

    document
    .querySelector('.new-spell-form')
    .addEventListener('submit', newSpellHandler);
    
    document
    .querySelector('.spell-list')
    .addEventListener('click', delSpellHandler);
  };

