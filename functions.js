// functions.js

function list(clients) {
  return clients
    .map((c, i) => 
      `<li class="list-group-item d-flex 
justify-content-between" data-index="${i}">
        ${c.name} <strong>$${c.balance}</strong>
      </li>`
    )
    .join('');
}


function order(clients, prop) {
  return clients
    .slice()
    .sort((a,b)=>(a[prop]> b[prop]?1:a[prop]<b[prop]?-1:0));
}

function total(clients) {
  return clients.reduce((sum, c)=> sum +c.balance, 0);
}


//    (assumes there is a global `clients` array in scope)
function info(index) {
  return clients.find((_, i) => i === index);
}


//    (assumes there is a global `clients` array in scope)
function search(query) {
  const lower = query.toLowerCase();
  return clients.filter(c => c.name.toLowerCase().includes(lower));
}
