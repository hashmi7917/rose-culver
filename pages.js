let pageNumber = 0;

const pages = [
  {
    slide: 'a Brooklyn-based graphic designer',
    background: '#edc7a9',
    circle: '#3e78ed',
  },
  {
    slide: "Kanye West's biggest fan in the world",
    background: '#a1fffe',
    circle: '#e34a47',
  },
  {
    slide: 'looking for a job at the start of October',
    background: '#d3c7f3',
    circle: '#f7fe00',
  },
  {
    slide: 'letting you <a href="pdf.pdf">download her PDF</a>',
    background: '#faffb8',
    circle: '#b472e6',
  },
];

const nextTag = document.querySelector('.next');
const prevTag = document.querySelector('.prev');
const randomTag = document.querySelector('.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

const next = () => {
  pageNumber += 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

const previous = () => {
  pageNumber -= 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

const random = () => {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

const updateSection = () => {
  outputTag.innerHTML = pages[pageNumber].slide;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

nextTag.addEventListener('click', () => {
  next();
});
prevTag.addEventListener('click', () => {
  previous();
});

// onclick random
randomTag.addEventListener('click', () => {
  random();
});

document.addEventListener('keyup', (e) => {
  console.log(e.key);

  if (e.key == 'ArrowRight') {
    next();
  }
  if (e.key == 'ArrowLeft') {
    previous();
  }
});
