const submit = document.getElementById('submit');
const inputs = document.getElementById('inputs');
const firstPage = document.getElementById('firstpage');

const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
const i5 = document.getElementById('i5');
const i6 = document.getElementById('i6');
const i7 = document.getElementById('i7');
const i8 = document.getElementById('i8');
const i9 = document.getElementById('i9');
const i10 = document.getElementById('i10');
const i11 = document.getElementById('i11');
const i12 = document.getElementById('i12');
const i13 = document.getElementById('i13');
const i14 = document.getElementById('i14');
const i15 = document.getElementById('i15');
const i16 = document.getElementById('i16');

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const e1 = document.getElementById('e1');
const e2 = document.getElementById('e2');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');

const twoa1 = document.getElementById('2a1');
const twoa2 = document.getElementById('2a2');
const twob1 = document.getElementById('2b1');
const twob2 = document.getElementById('2b2');
const twoc1 = document.getElementById('2c1');
const twoc2 = document.getElementById('2c2');
const twod1 = document.getElementById('2d1');
const twod2 = document.getElementById('2d2');

const threea1 = document.getElementById('3a1');
const threea2 = document.getElementById('3a2');
const threeb1 = document.getElementById('3b1');
const threeb2 = document.getElementById('3b2');

const foura = document.getElementById('4a');
const fourb = document.getElementById('4b');

const winner = document.getElementById('winner');

const randomBtn = document.querySelector('.randomize');

const movies = [];

shuffle(movies);
console.log(movies[16]);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
submit.addEventListener('click', function () {
  if (
    i1.value != '' &&
    i2.value != '' &&
    i3.value != '' &&
    i4.value != '' &&
    i5.value != '' &&
    i6.value != '' &&
    i7.value != '' &&
    i8.value != '' &&
    i9.value != '' &&
    i10.value != '' &&
    i11.value != '' &&
    i12.value != '' &&
    i13.value != '' &&
    i14.value != '' &&
    i15.value != '' &&
    i16.value != ''
  ) {
    firstPage.style.display = 'none';
    movies.push(i1.value);
    movies.push(i2.value);
    movies.push(i3.value);
    movies.push(i4.value);
    movies.push(i5.value);
    movies.push(i6.value);
    movies.push(i7.value);
    movies.push(i8.value);
    movies.push(i9.value);
    movies.push(i10.value);
    movies.push(i11.value);
    movies.push(i12.value);
    movies.push(i13.value);
    movies.push(i14.value);
    movies.push(i15.value);
    movies.push(i16.value);
    console.log(movies);
    inputs.style.display = 'none';
    brackets.style.display = 'block';
    populate();
  } else {
    alert('Fill in all text fields');
  }
});
console.log(movies);
function populate() {
  a1.value = movies[1];
  a2.value = movies[2];
  b1.value = movies[3];
  b2.value = movies[4];
  c1.value = movies[5];
  c2.value = movies[6];
  d1.value = movies[7];
  d2.value = movies[8];
  e1.value = movies[9];
  e2.value = movies[10];
  f1.value = movies[11];
  f2.value = movies[12];
  g1.value = movies[13];
  g2.value = movies[14];
  h1.value = movies[15];
  h2.value = movies[0];
  twoa1.value = '';
  twoa2.value = '';
  twob1.value = '';
  twob2.value = '';
  twoc1.value = '';
  twoc2.value = '';
  twod1.value = '';
  twod2.value = '';
  threea1.value = '';
  threea2.value = '';
  threeb1.value = '';
  threeb2.value = '';
  foura.value = '';
  fourb.value = '';
}

a1.addEventListener('click', function () {
  twoa1.value = a1.value;
});
a2.addEventListener('click', function () {
  twoa1.value = a2.value;
});
b1.addEventListener('click', function () {
  twoa2.value = b1.value;
});
b2.addEventListener('click', function () {
  twoa2.value = b2.value;
});
c1.addEventListener('click', function () {
  twob1.value = c1.value;
});
c2.addEventListener('click', function () {
  twob1.value = c2.value;
});
d1.addEventListener('click', function () {
  twob2.value = d1.value;
});
d2.addEventListener('click', function () {
  twob2.value = d2.value;
});
e1.addEventListener('click', function () {
  twoc1.value = e1.value;
});
e2.addEventListener('click', function () {
  twoc1.value = e2.value;
});
f1.addEventListener('click', function () {
  twoc2.value = f1.value;
});
f2.addEventListener('click', function () {
  twoc2.value = f2.value;
});
g1.addEventListener('click', function () {
  twod1.value = g1.value;
});
g2.addEventListener('click', function () {
  twod1.value = g2.value;
});
h1.addEventListener('click', function () {
  twod2.value = h1.value;
});
h2.addEventListener('click', function () {
  twod2.value = h2.value;
});

twoa1.addEventListener('click', function () {
  threea1.value = twoa1.value;
});
twoa2.addEventListener('click', function () {
  threea1.value = twoa2.value;
});
twob1.addEventListener('click', function () {
  threea2.value = twob1.value;
});
twob2.addEventListener('click', function () {
  threea2.value = twob2.value;
});
twoc1.addEventListener('click', function () {
  threeb1.value = twoc1.value;
});
twoc2.addEventListener('click', function () {
  threeb1.value = twoc2.value;
});
twod1.addEventListener('click', function () {
  threeb2.value = twod1.value;
});
twod2.addEventListener('click', function () {
  threeb2.value = twod2.value;
});

threea1.addEventListener('click', function () {
  foura.value = threea1.value;
});
threea2.addEventListener('click', function () {
  foura.value = threea2.value;
});
threeb1.addEventListener('click', function () {
  fourb.value = threeb1.value;
});
threeb2.addEventListener('click', function () {
  fourb.value = threeb2.value;
});

foura.addEventListener('click', function () {
  if (foura.value != '') {
    winner.innerText = `${foura.value} is the winner!`;
  } else {
    return;
  }
});
fourb.addEventListener('click', function () {
  if (fourb.value != '') {
    console.log(fourb.value);
    winner.innerText = `${fourb.value} is the winner!`;
  } else {
    return;
  }
});

randomBtn.addEventListener('click', function () {
  shuffle(movies);
  winner.innerText = '';
  populate();
});
