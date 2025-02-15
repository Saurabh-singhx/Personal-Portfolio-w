// import React, { useRef, useEffect } from "react";

// const ParticleBackground = () => {
//   const canvasRef = useRef(null);
//   const particles = [];
//   const particleCount = 120;
//   const maxDistance = 120; // Max distance to connect cursor to particles

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let mouse = { x: null, y: null };

//     // Track mouse position
//     window.addEventListener("mousemove", (event) => {
//       mouse.x = event.clientX;
//       mouse.y = event.clientY;
//     });

//     // Remove cursor effect when mouse leaves
//     window.addEventListener("mouseleave", () => {
//       mouse.x = null;
//       mouse.y = null;
//     });

//     window.addEventListener("resize", () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     });

//     // Particle constructor
//     class Particle {
//       constructor(x, y, speedX, speedY, radius) {
//         this.x = x;
//         this.y = y;
//         this.speedX = speedX;
//         this.speedY = speedY;
//         this.radius = radius;
//       }

//       move() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         // Bounce off edges
//         if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
//         if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "white";
//         ctx.fill();
//       }
//     }

//     // Create particles
//     for (let i = 0; i < particleCount; i++) {
//       let x = Math.random() * canvas.width;
//       let y = Math.random() * canvas.height;
//       let speedX = (Math.random() - 0.5) * 2;
//       let speedY = (Math.random() - 0.5) * 2;
//       let radius = 1.5; // Decreased dot size
//       particles.push(new Particle(x, y, speedX, speedY, radius));
//     }

//     // Animation loop
//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.move();
//         particle.draw();
//       });

//       // Only draw lines between mouse and particles
//       drawMouseConnections();
//       requestAnimationFrame(animate);
//     }

//     function drawMouseConnections() {
//       if (mouse.x === null || mouse.y === null) return;

//       particles.forEach((particle) => {
//         let dx = particle.x - mouse.x;
//         let dy = particle.y - mouse.y;
//         let distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < maxDistance) {
//           ctx.beginPath();
//           ctx.moveTo(particle.x, particle.y);
//           ctx.lineTo(mouse.x, mouse.y);
//           ctx.strokeStyle = `rgba(0, 100, 255, ${1 - distance / maxDistance})`; // Blue color
//           ctx.lineWidth = 1.2;
//           ctx.stroke();
//         }
//       });
//     }

//     animate();
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full bg-black"
//     />
//   );
// };

// export default ParticleBackground;
