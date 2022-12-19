
const swiper = new Swiper('.swiper',{
  autoplay: {
  delay:2000,
  disableOnInteraction: false,
  },
loop: true,
    
  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
   clickable:true,
  },
    
  // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

let cartdata=JSON.parse(localStorage.getItem('cart')) || []

document.querySelector('#cartsection').addEventListener('click', fun)
function fun(){
  if(cartdata.length>=1){
    window.location='cart.html'
  }else{
    window.location='emptyCart.html'
  }
}


// Entertainment fest  api append here 


    
let data=JSON.parse(localStorage.getItem('cart')) || []
let url='https://63996f3916b0fdad773c979e.mockapi.io/products'
async function getdata(){
  try{
    let res= await fetch(url)
    let out = await res.json()
    // console.log(out)
    data=out
    display(data)
  }
  catch(err){
    alert(err)
  }
}
getdata()

function display(data){
  document.querySelector('#tv-container').textContent=null;

  data.forEach((el) => {
    if(el.category=='Tv'){


    let div =document.createElement('div')
    div.setAttribute('class','tv-div')

    let img=document.createElement('img')
    img.setAttribute('class','imgdiv')
    img.setAttribute('src',el.avatar)

    let title=document.createElement('h4')
    title.setAttribute('class','title')
    title.textContent=el.title;
    
    let price=document.createElement('h4')
    price.setAttribute('class','price')
    price.textContent='₹ '+el.price

    let ofr=document.createElement('p')
    ofr.setAttribute('class','ofrprice')
    ofr.textContent='Offer Price'

    let btn=document.createElement('button')
    btn.textContent="Add to Cart"

    btn.addEventListener('click', function(){
        // addcart(el,ind)

        let cartdata = JSON.parse(localStorage.getItem('cart')) || []

        let temp=[]
        temp.push(el)
        temp.push(1)

        cartdata.push(temp)
        localStorage.setItem('cart',JSON.stringify(cartdata))
      })

    div.append(img,title,ofr,price,btn)
    document.querySelector('#tv-container').append(div)
  }
  });
}