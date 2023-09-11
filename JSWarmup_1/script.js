let rectangle = document.querySelector('#center')

rectangle.addEventListener('mousemove', (details) => {
    // console.log(rectangle.getBoundingClientRect())
    let rectangleLocation = rectangle.getBoundingClientRect();
    let insideRectangleValue = details.clientX - rectangleLocation.left

    if (insideRectangleValue < rectangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectangleValue)
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    } else {
        let blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectangleValue)
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        })
    }
})

rectangle.addEventListener('mouseout', () => {
    gsap.to(rectangle, {
        backgroundColor: '#fff'
    })
})


/**
 * 1) mapRange(inMin, inMax, outMin, outMax, valueToMap)
inMin : Number - The lower bound of the initial range to map from
inMax : Number - The upper bound of the initial range to map from
outMin : Number - The lower bound of the range to map to
outMax : Number - The upper bound of the range to map to
valueToMap : Number - The value that should be mapped (typically it's between inMin and inMax).
Returns: the mapped number

Example
//maps 0 in the -10 to 10 range to the same position in the 100 to 200 range
gsap.utils.mapRange(-10, 10, 100, 200, 0); // 150

// maps 50 in the range from 0 to 100 to the same position in the range from 0 to 500
gsap.utils.mapRange(0, 100, 0, 500, 50); // 250
 */