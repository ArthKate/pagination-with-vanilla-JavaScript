// const item_range = function(end, start = 0) {
//   let arr = [];
//   for (let i = start; i <= end; i++){
//     // items.push(i);
//     arr.push(`item ${i}`)
//   }
//   return arr;
// }

// Define the list of items
const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30",
  "Item 31"
]

const body = document.querySelector('body');
  const h2 = document.createElement('h2');
  h2.textContent = 'List of items';
  // add h2 child element after parent body
  body.append(h2);

//function to display page items based on the current page

function displayItems(items, pageNumber) {
  //calculates items to display based on current page
  const itemsPerPage = 6
  const startIndex = itemsPerPage * (pageNumber - 1);
  const endIndex = startIndex + itemsPerPage;
  const paginated_items = items.slice( startIndex, endIndex);

  // Display the items on the page. 
  const ul = document.createElement('ul');
  ul.innerHTML = '';
  ul.classList.add('item-list');

  paginated_items.forEach(item =>{
    //let's create items list element
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
     // add ul element after sibling h2
    h2.after(ul);
  });
}

//function to handle button clicks for pagination to take effect
function handleButtonClick(event) {
  const pageNumber = parseInt(event.target.dataset.page);
  displayItems(items, pageNumber);
}

window.addEventListener('load', () => {
  displayItems(items, 1);
})