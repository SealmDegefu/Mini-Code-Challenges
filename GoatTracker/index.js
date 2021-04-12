const toph = {
  name: "Toph",
  age: 1,
  brushesToday: 0,
  image:
    "https://st4.depositphotos.com/14435026/20983/i/600/depositphotos_209833190-stock-photo-single-black-white-tan-bearded.jpg",
  badGoat: "BAD GOAT",
};


document.addEventListener("DOMContentLoaded", ()=> {
  document.querySelector(".goat-name").innerText = toph.name
  document.querySelector(".goat-age").innerText = toph.age
  document.querySelector('.goat-image').innerText = toph.image
  document.querySelector('.goat-status').innerText = toph.badGoat
  document.querySelector('.goat-brushes').innerText= toph.brushesToday

  document.querySelector('.brush-button').addEventListener ('click', () =>{
  let count = document.querySelector('.goat-brushes').innerText
  ++count 
   document.querySelector('.goat-brushes').innerText = count
    })
  document.querySelector('.goat-toggle').addEventListener('click', () =>{
    let toggleGoatValue = document.querySelector('.goat-status').innerText

      toggleGoatValue === "BAD GOAT" ? toggleGoatValue = "Good goat": toggleGoatValue = "BAD GOAT"
      document.querySelector('.goat-status').innerText = toggleGoatValue
    })
    // document.querySelector('.goat-toggle').addEventListener('click', () =>{
    //   let changeWords = document.querySelector('#goat-redeemed').innerText

    //   if (document.querySelector('.goat-status').innerText === true){
    //     changeWords = "Have you been a good goat?"
    //   }
    //     else if (document.querySelector('.goat-status').innerText === false){
    //           changeWords = "Have you been a bag goat?"
    //     }
    //     document.querySelector('#goat-redeemed').innerText = changeWords
    // })
})

