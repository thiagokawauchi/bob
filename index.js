const bob = document.querySelector('.face')

let distance = 0

function moveBob() {
    distance += 50
    bob.style.transform = `translate(${distance}px)`
}

bob.addEventListener('click', moveBob)