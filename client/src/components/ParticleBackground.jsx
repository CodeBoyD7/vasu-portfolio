import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim version to reduce bundle size

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Black background for a galaxy effect
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repulse effect on hover
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100, // Distance for repulse effect
              duration: 0.4, // Duration of the effect
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // White color for stars
          },
          links: {
            enable: false, // Disable links between particles
          },
          move: {
            enable: true,
            speed: 10, // Slower speed for a more relaxed movement
            direction: "none",
            random: true, // Random movement for a starry effect
            straight: false,
            outModes: {
              default: "out", // Particles leave the screen rather than bounce
            },
          },
          number: {
            value: 100, // Number of particles (stars)
            density: {
              enable: true,
              area: 800, // Density of particles
            },
          },
          opacity: {
            value: { min: 0.5, max: 0.8 }, // Random opacity for particles
          },
          shape: {
            type: "circle", // Circular shape for stars
          },
          size: {
            value: { min: 1, max: 3 }, // Size range for stars
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
