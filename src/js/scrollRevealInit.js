export function animateTop() {
  const items = [
    {
      name: ".animate-top",
      delay: 0,
    },
    {
      name: ".animate-top-delay-200",
      delay: 200,
    },
    {
      name: ".animate-top-delay-300",
      delay: 300,
    },
    {
      name: ".animate-top-delay-400",
      delay: 400,
    },
    {
      name: ".animate-top-delay-500",
      delay: 500,
    },
    {
      name: ".animate-top-delay-600",
      delay: 600,
    },
    {
      name: ".animate-top-delay-700",
      delay: 700,
    },
  ];
  items.forEach((item) => {
    ScrollReveal().reveal(item.name, {
      origin: "top",
      duration: 3000,
      delay: item.delay,
      distance: "30px",
      reset: false,
    });
  });
}

export function animateLeft() {
  ScrollReveal().reveal(".animate-left", {
    origin: "left",
    duration: 3000,
    distance: "30px",
    reset: false,
  });
}

export function animateRight() {
  ScrollReveal().reveal(".animate-right", {
    origin: "right",
    duration: 3000,
    distance: "30px",
    reset: false,
  });
}
