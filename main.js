const increBtn = document.querySelector('.increment');
const decreBtn = document.querySelector('.decrement');
const refressNumber = document.querySelector('.refress');
const showCount = document.querySelector('.count');


let count = 0;

increBtn.addEventListener('click',()=>{
  ++count;
  showCount.innerHTML = count;
});

decreBtn.addEventListener('click', () => {
  --count;
  showCount.innerHTML = count;
});

refressNumber.addEventListener('click',()=>{
  count = 0;
  showCount.innerHTML = count;
});
