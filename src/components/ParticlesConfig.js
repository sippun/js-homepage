export const Lines = {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 1
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#777"
    },
    links: {
      color: "#777777",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 90
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 5
    }
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light"
      },
      options: {
        background: {
          color: "transparent"
        },
        particles: {
          color: {
            value: "#10f0"
          }
        }
      }
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark"
      },
      options: {
        background: {
          color: "transparent"
        },
        particles: {
          color: {
            value: "#2f0f"
          }
        }
      }
    }
  ],
  detectRetina: true
};

export const Bubbles = 
{
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800
      }
    },
    collisions: {
      enable: true
    },
    color: {
      value: "#1a202c"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1
    },
    stroke: {
      width: 2,
      color: "#A7233A"
    },
    size: {
      value: {
        min: 86,
        max: 140
      }
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: true,
      straight: false,
      outMode: "out",
      bounce: true
    }
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light"
      },
      options: {
        particles: {
          color: {
            value: "#ffffff"
          }
        }
      }
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark"
      },
      options: {
        background: {
          color: "transparent"
        },
        particles: {
          color: {
            value: "#1a202c"
          }
        }
      }
    }
  ],
  detectRetina: true
};