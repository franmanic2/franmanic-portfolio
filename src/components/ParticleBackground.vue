<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx = null
let animationFrameId = null
let particles = []
let mouse = { x: 0, y: 0 }

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.baseX = x
    this.baseY = y
    this.density = (Math.random() * 30) + 1
    this.size = 2
    this.opacity = Math.random() * 0.5 + 0.2
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  update() {
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const forceDirectionX = dx / distance
    const forceDirectionY = dy / distance
    const maxDistance = 150
    const force = (maxDistance - distance) / maxDistance
    const directionX = forceDirectionX * force * this.density
    const directionY = forceDirectionY * force * this.density

    if (distance < maxDistance) {
      this.x -= directionX
      this.y -= directionY
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX
        this.x -= dx / 10
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY
        this.y -= dy / 10
      }
    }
  }
}

const init = () => {
  if (!canvas.value) return
  
  ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight

  particles = []
  const numberOfParticles = Math.floor((canvas.value.width * canvas.value.height) / 9000)
  
  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * canvas.value.width
    const y = Math.random() * canvas.value.height
    particles.push(new Particle(x, y))
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw()
    particles[i].update()
  }
  
  connect()
  animationFrameId = requestAnimationFrame(animate)
}

const connect = () => {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x
      const dy = particles[a].y - particles[b].y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 100) {
        const opacity = 1 - (distance / 100)
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particles[a].x, particles[a].y)
        ctx.lineTo(particles[b].x, particles[b].y)
        ctx.stroke()
      }
    }
  }
}

const handleMouseMove = (event) => {
  mouse.x = event.x
  mouse.y = event.y
}

const handleResize = () => {
  init()
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-particles);
  pointer-events: none;
}
</style>
