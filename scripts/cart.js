
let cartdata = JSON.parse(localStorage.getItem('cart')) || []
display(cartdata)

function display(cartdata) {
  document.querySelector('.cart-product').textContent = null;
  document.querySelector('#ttl-prdt').textContent = cartdata.length;

  cartdata.forEach((el, ind) => {

    let div = document.createElement('div')
    div.setAttribute('class', 'watch-div')

    let img = document.createElement('img')
    img.setAttribute('class', 'imgdiv')
    img.setAttribute('src', el[0].avatar)

    let title = document.createElement('h4')
    title.setAttribute('class', 'title')
    title.textContent = el[0].title;

    let price = document.createElement('h4')
    price.setAttribute('class', 'price')
    price.textContent = '₹ ' + el[0].price;

    //Qty. decreaseing button
    let dec = document.createElement('button')
    dec.textContent = '-';

    dec.addEventListener('click', function () {
      if (qt.textContent <= 1) {
        cartdata.splice(ind, 1)

        localStorage.setItem('cart', JSON.stringify(cartdata))
        window.location.reload();
      }
      else {
        el[1]--;
        total -= Number(el[0].price);

        document.querySelector('#total').textContent = total;

        localStorage.setItem('cart', JSON.stringify(cartdata))
        qt.textContent--;
      }
    })

    //Qty. initializing by 1
    let qt = document.createElement('span')
    qt.textContent = el[1];

    qt.style.border = '1px solid #ddd'
    qt.style.padding = '7px 17px'
    qt.style.marginLeft = '20px'

    //Qty. increasing button
    let inc = document.createElement('button')
    inc.textContent = '+';

    inc.addEventListener('click', function () {
      el[1]++;
      total += Number(el[0].price);
      document.querySelector('#total').textContent = total;

      qt.textContent++
      localStorage.setItem('cart', JSON.stringify(cartdata))
    })


    let ofr = document.createElement('p')
    ofr.setAttribute('class', 'ofrprice')
    ofr.textContent = 'Offer Price'

    let btn = document.createElement('button')
    btn.textContent = "Remove"
    btn.addEventListener('click', function () {
      cartdata.splice(el, 1)
      localStorage.setItem('cart', JSON.stringify(cartdata))
      window.location.reload();
    })


    div.append(img, title, ofr, price, dec, qt, inc, btn)
    document.querySelector('.cart-product').append(div)
  });
}

let total = cartdata.reduce((acc, el) => acc + Number(el[0].price), 0)
document.querySelector('#total').textContent = total;


document.querySelector('.apply-code').addEventListener('click', applied)
function applied() {
  let cpn = document.querySelector('#coupon').value
  if (cpn == 'anand50') {

    document.querySelector('#applied').textContent = "Applied 🥳"
    document.querySelector('#applied').style.color = 'rgb(36, 186, 36)'


  } else {
    document.querySelector('#applied').textContent = "Invalid"
    document.querySelector('#applied').style.color = 'red'
  }
}



function placed() {
  alert('Order Placed with ❤')
  window.location = 'orderplaced.html'
}

if (cartdata.length == 0) {
  window.location = 'emptyCart.html'
}

