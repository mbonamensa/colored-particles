// get canvas from html

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const particlesArr = []
let hue = 0
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight  
})

const mouse = {
    x: null,
    y: null
}

canvas.addEventListener("mousemove", (event) => {
   
    mouse.x = event.x
    mouse.y = event.y
    
    particlesArr.push(new Particle())
})
// canvas.addEventListener("click", (event) => {
   
//     mouse.x = event.x
//     mouse.y = event.y
    
//     particlesArr.push(new Particle())
// })


class Particle {
    constructor() {
        // this.x = mouse.x
        // this.y = mouse.y
        this.x = canvas.width * Math.random()
        this.y = canvas.height * Math.random()
        this.size = Math.random() * 6
        this.speedX = Math.random() * 3 - 0.5
        this.speedY = Math.random() * 3 - 0.5
        this.color = `hsl(${hue}, 100%, 50%)`
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

// function initiate() {
//     for (let i = 0; i < 100; i++) {
//         particlesArr.push(new Particle())
//     }
// }

// initiate()

// console.log(particlesArr)

function handleParticles() {
    for (i = 0; i < particlesArr.length; i++) {
        const singleParticle = particlesArr[i]

        singleParticle.update()
        singleParticle.draw()
        
    }
}

// handleParticles()

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    hue+=50
    requestAnimationFrame(animateParticles)
}
animateParticles()







// function drawCircle() {
    //     ctx.beginPath()
    //     ctx.fillStyle = "grey"
    //     ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2)
    //     ctx.fill()
        
    // }