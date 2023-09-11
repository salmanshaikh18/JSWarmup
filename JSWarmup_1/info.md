:) sabse pahle hame ye pta kiya ki mouse rectangle ke center par aaya aur move hua ya nahi
==>
let rectangle = document.querySelector('#center')

rectangle.addEventListener('mousemove', () => {
    console.log('hey')
})


:) ab ye calculate karna hai ki hum rectangle ke center se left par hai ya rectangle ke center se right par hai
==>
rectangle.addEventListener('mousemove', (details) => {
    // console.log(rectangle.getBoundingClientRect())
    let rectangleLocation = rectangle.getBoundingClientRect();
    let insideRectangleValue = details.clientX - rectangleLocation.left

    if (insideRectangleValue < rectangleLocation.width / 2) {
        console.log("left")
    } else {
        console.log('right')
    }
})

:) ab ye calculate karna hai ki hum center se kitna left par hai, jitna left par hai utni intensity se color red lgao


:) maximum value of rgb color -> rgb(255, 255, 255)
