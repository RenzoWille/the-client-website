function filterItems() {
    // Get the value of the input field
    let input = document.getElementById('search-input');
    let filter = input.value.toLowerCase();

    // Get the list of items
    let items = document.getElementById('items-list').getElementsByTagName('li');

    // Loop through the list items and hide those that don't match the search query
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.classList.remove('hidden'); // Show item
      } else {
        item.classList.add('hidden'); // Hide item
      }
    }
  }