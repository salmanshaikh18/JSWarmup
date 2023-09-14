// window.querySelector('#div')

window.addEventListener('mousemove', (details) => {
    // console.log(details.clientX)

    let rectangle = document.querySelector('#rectangle')
    let xVal = gsap.utils.mapRange(0, window.innerWidth, 50 + rectangle.getBoundingClientRect().width / 2, window.innerWidth - (50 + rectangle.getBoundingClientRect().width / 2), details.clientX)
    gsap.to('#rectangle', {
        left: xVal + "px",
        // top: details.clientY + "px",
        ease: Power3
    })
})