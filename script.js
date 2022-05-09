const elBtnRating = document.querySelectorAll('.circle--rating');
const elBtnSubmit = document.querySelector('.btn--submit');
const elContRating = document.querySelector('.selected-rating-container');
const sectionDefault = document.querySelector('.section-default');
const sectionTriggered = document.querySelector('.section-triggered');

console.log(elContRating);

let selected_rating = 0

sectionTriggered.style.display = 'none';
sectionDefault.style.display = 'block';

for (let btn_rating of elBtnRating) {
  btn_rating.addEventListener('click', function() {
    selected_rating = Number(btn_rating.innerHTML);
    return selected_rating
  })
}


  elBtnSubmit.addEventListener('click', function() {
      elContRating.innerHTML = `You selected ${selected_rating} out of 5`
      
      sectionDefault.style.display = 'none';
      sectionTriggered.style.display = 'flex';
  })




