let lsdata = localStorage.getItem('data') || []
document.querySelector('form').addEventListener('submit', myfun)

function myfun(event) {
    event.preventDefault()

    let mbl = document.querySelector('#mobile').value;
    localStorage.setItem('data', mbl)
    window.location.href = './register.html'
}

