let lsdata = localStorage.getItem('data') || []

document.querySelector('#mob').value = lsdata;

document.querySelector('form').addEventListener('submit', myfun1)

function myfun1(event) {
   event.preventDefault();
   alert("You have Successfully Registerd ! ✅")
   window.location = 'index.html'
}