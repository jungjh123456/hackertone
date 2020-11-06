const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');
const $next = document.querySelector('.gender > .next')
const $singer = document.querySelector('.singer');
const $start = document.querySelector('.start');
const $battle = document.querySelector('.battle');
const $h3 = document.querySelector('.battle h3');
const $leftImg = document.querySelector('.left > img');
const $rightImg = document.querySelector('.right > img');
const $wrap = document.querySelector('.wrap')

//gender 선택 시작
let jobKey = '';
let genderChoice ='';
let NewidealType = [];
let numArr = [];
let count = 0;
let check = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


const ranDom = n => {
  while (!(numArr.length === n)){
    while (1){
      let num = getRandomInt(0, n)
      if(!numArr.includes(num)){
       numArr.push(num);
       break;
      }   
    }
  }
}

const randomItem = () => {
  NewidealType = NewidealType.map((item, i, arr) => arr[numArr[i]]);
}

const matchImage = (n = 0) => {
  $leftImg.setAttribute('src', NewidealType[n].path);
  $rightImg.setAttribute('src', NewidealType[n+1].path);
  console.log(NewidealType)
}


//gender 선택 이벤트 핸들러 등록

$gender.onclick = e => {
  if(e.target.matches('.gender > next')) return;
  if(e.target.matches ('.gender > .woman')){
    genderChoice = 'w'
  }
  else if(e.target.matches('.gender > .man')){
    genderChoice = 'm'
  } else return; 
}
//gender 선택 끝

// next 버튼을 누르면 gender에 active 삭제, job에 active 추가하는 이벤트 핸들러

$next.onclick = e => {
  if ( !genderChoice ) {
    alert('성별을 선택하세요!');
    return;
  };
  e.target.parentNode.classList.remove('active');
  $job.classList.add('active');
  console.log($job);
}

$job.onclick = e => {
  if (e.target.matches('.job > .prev')) {
    $job.classList.remove('active');
    $gender.classList.add('active');
    jobKey = '';
    genderChoice = '';
  } else if (e.target.matches('.job > .singer')){
    jobkey = 'singer'
  } else if (e.target.matches('.job > .actor')) {
    jobkey = 'actor'

  } else if(e.target.matches('.job > .all')){
    jobkey = 'all'
  } else return;

  console.log(jobkey);
}

$start.onclick = () => {
   NewidealType = idealType.filter(ideal => {
    return jobkey==='all' ? ideal.gender === genderChoice : 
    ideal.gender === genderChoice && ideal.job === jobkey 
  });
  jobkey === 'all' ?  ranDom(32) : ranDom(16)
  randomItem(NewidealType);

  $job.classList.remove('active');
  $battle.classList.add('active');
  matchImage();

 } 

$battle.onclick = e => {
  if (e.target === $leftImg) {
    NewidealType[0].lank = 1;
  } else {
    NewidealType[0].lank = 1;
  }
  matchImage(n)
  console.log(count);
  count = count + 1;

  if (count === 8) {
    $h3.textContent = '8강';
  } else if(count === 12) {
    $h3.textContent = '4강';
  } else if(count === 16){
    $h3.textContent = '결승'

  }
}


// 로고 애니메이션
$wrap.onclick = () => {
  $wrap.classList.add('loading');
};