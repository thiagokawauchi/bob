const bob = document.querySelector('.face')
let distanceVw = 0
let distanceVh = 0
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function moveBob() {
    distanceVw += 50

    if(distanceVw >= (vw - 200)){
        distanceVh +=200
        distanceVw = 0
    }

    bob.style.transform = `translateX(${distanceVw}px)  translateY(${distanceVh}px)`
}

bob.addEventListener('click', moveBob)