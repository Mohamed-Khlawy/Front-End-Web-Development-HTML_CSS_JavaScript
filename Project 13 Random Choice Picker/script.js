const tagsEl = document.getElementById('tags')

const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value)

    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    //console.log(tags)

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')

        tagEl.classList.add('tag')

        tagEl.innerText = tag

        tagsEl.append(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            UnhighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')

    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function UnhighlightTag(tag) {
    tag.classList.remove('highlight')
}