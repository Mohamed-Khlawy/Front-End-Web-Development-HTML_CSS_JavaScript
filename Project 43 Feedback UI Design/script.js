const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()

        e.target.parentNode.classList.add('active')

        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>

    <strong>Thank You</strong>
    <br>

    <strong>Feedback: ${selectedRating}</strong>

    <p>We will use your feedback to improve out customer support!!</p>
    `
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}