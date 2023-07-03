  const delButtonHandler = async (event) => {

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


window.onload=function(){
    document
    .querySelector('.equipment-list')
    .addEventListener('click', delButtonHandler);
  }
