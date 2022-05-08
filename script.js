const elBtnRating = document.querySelectorAll('circle--rating');

console.log('hi')

for (const btn of elBtnRating) {
    btn.addEventListener('click', () => {
        let selected_rating = btn.innerText;

        console.log('hi')
    })
}
