  const delCharacterHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace(`/characters`);
      } else {
        alert('Failed to delete character');
      }
    }
  };

  // Modifier Function

  


window.onload=function(){
    document
    .querySelector('.character-list')
    .addEventListener('click', delCharacterHandler);
  };
