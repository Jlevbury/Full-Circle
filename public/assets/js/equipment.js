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

  // Features Code

  const newFeaturesHandler = async (event) => {
    event.preventDefault();

    const ideals = document.querySelector('#ideals-desc').value.trim();
    const personality_traits = document.querySelector('#traits-desc').value.trim();
    const bonds = document.querySelector('#bonds-desc').value.trim();
    const flaws = document.querySelector('#flaws-desc').value.trim();
    const features = document.querySelector('#features-desc').value.trim();
    const proficiencies = document.querySelector('#proficiencies-desc').value.trim();
    const languages = document.querySelector('#languages-desc').value.trim();
    const character_id = document.querySelector('#character-id-repeat').value;

    console.log( ideals, personality_traits, bonds, flaws, features, proficiencies, languages);

    if (ideals || personality_traits || bonds || flaws || features || proficiencies || languages) {
        const response = await fetch(`/api/features`, {
        method: 'POST',
        body: JSON.stringify({ ideals, personality_traits, bonds, flaws, features, proficiencies, languages, character_id }),
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

  const delFeaturesHandler = async (event) => {

    const character_id = document.querySelector('#features-character-id').value;

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/features/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace(`/characters/${character_id}`);
      } else {
        alert('Failed to delete features');
      }
    }
  };

// Journal Code

const newEntryHandler = async (event) => {
  event.preventDefault();

  const entry = document.querySelector('#entry-desc').value.trim();
  const character_id = document.querySelector('#journal-character-id').value;

  if (entry) {
      const response = await fetch(`/api/journal`, {
      method: 'POST',
      body: JSON.stringify({ entry, character_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
   
    if (response.ok) {
      document.location.replace(`/characters/${character_id}`);
    } else {
      alert('Failed to add entry');
    }
  }
  
};

const delEntryHandler = async (event) => {

  const character_id = document.querySelector('#character-id').value;

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/journal/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace(`/characters/${character_id}`);
    } else {
      alert('Failed to delete spell');
    }
  }
};

// This code adds the proficiency bonus

function addProficiency(event) {
  event.preventDefault();
  // Get the parent <li> element
  var listItem = event.target.closest('li');

  // Find the adjacent <span> element
  var spanElement = listItem.querySelector('span');
  // Get the current value from the <span>
  var value = parseInt(spanElement.textContent, 10);
  // Add 2 to the value
  if (event.target.checked) {
    // Add 2 to the value
    value += 2;
  } else {
    // Subtract 2 from the value
    value -= 2;
  }
  // Update the <span> with the new value
  spanElement.textContent = value;
}


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

    document
    .querySelector('.new-features-form')
    .addEventListener('submit', newFeaturesHandler);

    document
    .querySelector('.feature-list')
    .addEventListener('click', delFeaturesHandler)

    document
    .querySelector('.new-journal-form')
    .addEventListener('submit', newEntryHandler);

    document
    .querySelector('.journal-list')
    .addEventListener('click', delEntryHandler)
    
    var checkboxes = document.querySelectorAll(' input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', addProficiency);
});
  };

