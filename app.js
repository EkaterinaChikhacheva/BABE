// function randomRGB() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`
// }

// // This changes the entire h1 all at once:
// // const h1 = document.querySelector('h1');
// // setInterval(function () {
// //   h1.style.color = randomRGB();
// // }, 500);


// // To change each letter independently
// const letters = document.querySelectorAll('.letter');
// const intervalId = setInterval(function () {
//   for (let letter of letters) {
//     letter.style.color = randomRGB();
//   }
// }, 1000);



function randomRGB() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
const h1 = document.querySelector('h1');
const letters = document.querySelectorAll('.letter')


h1.style.color = randomRGB();
const intervalId = setInterval(function () {
  for (let letter of letters){
    letter.style.color= randomRGB()
  };
},1000)


document.addEventListener('mousemove', function (e) {
	const g = Math.round(e.pageX * 255 / window.innerWidth)
	const b = Math.round(e.pageY * 255 / window.innerHeight)
	document.body.style.backgroundColor = `rgb(0,${g}, ${b})`
} )
