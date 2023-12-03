var game = {
  story: [],
  currentLocation: 0,
  options: [],
};
var x = 0;
var final = 0;
var evnne = 0;
var zb1 = 0;
var selected = [];
game.story.push({
  description: 'Тебя пригласили в шоу на "выживание", где дебютирует новая группа из 9 человек. В какой команде ты начнешь свою борьбу?',
  image: '2.jpg',
  options: [
      { description: 'K (Korean)', nextLocation: 1 },
      { description: 'G (Global)', nextLocation: 1 },
  ],
});
game.story.push({
  description: 'Для первой миссии тебе необходимо выбрать песню. Какая песня это будет?',
  image: 'mission1.jpg',
  options: [
      { description: 'SEVENTEEN - Very Nice', nextLocation: 2 },
      { description: 'BTS - Danger', nextLocation: 2 },
      { description: 'EXO - Love Me Right', nextLocation: 2 },
      { description: 'Stray Kids - Back Door', nextLocation: 2 },
      { description: 'NCT DREAM - Hot Sauce', nextLocation: 2 },
      { description: 'BLACKPINK - Kill This Love', nextLocation: 2 },
      { description: 'Wanna One - Burn It Up', nextLocation: 2 },
  ],
});
game.story.push({
  description: 'Какую позицию в группе ты планируешь занять?',
  image: 'bp.jpg',
  options: [
      { description: 'Рэпер', nextLocation: 3 },
      { description: 'Вокалист', nextLocation: 3 },
      { description: 'Танцор', nextLocation: 3 },
  ],
});

var isExecuted2 = false;
var isExecuted3 = false;
var isExecuted31 = false;
var isExecuted4 = false;
var isExecuted5 = false;
var isExecuted6 = false;
var isExecuted7 = false;
var isExecuted8 = false;
var isExecuted9 = false;
var isExecuted = false;
var isExecuted1 = false;
var isExecuted11 = false;
var isExecuted12 = false;
function newStory(){
  if (!isExecuted2) {
    switch (selected[2]) {
      case 'Рэпер':
        game.story.push({
          description: 'В чем ты еще хорош?',
          image: 'bp.jpg',
          options: [
            { description: 'Вокал', nextLocation: 4 },
            { description: 'Танцы', nextLocation: 4 },
          ],
        }); isExecuted2 = true;
        break;
        case 'Вокалист':
        game.story.push({
          description: 'В чем ты еще хорош?',
          image: 'bp.jpg',
          options: [
            { description: 'Рэп', nextLocation: 4 },
            { description: 'Танцы', nextLocation: 4 },
          ],
        });isExecuted2 = true;
        break;
        case 'Танцор':
        game.story.push({
          description: 'В чем ты еще хорош?',
          image: 'bp.jpg',
          options: [
            { description: 'Вокал', nextLocation: 4 },
            { description: 'Рэп', nextLocation: 4 },
          ],
        });isExecuted2 = true;
        break;
    }
  }
  if (!isExecuted3) {
    switch (true){
      case ((selected[2] == 'Рэпер' && selected[3] == 'Вокал') || (selected[2] == 'Вокалист' && selected[3] == 'Рэп')):
        game.story.push({
          description: 'Тогда какую песню ты выберешь для второй миссии?',
          image: 'mission2.jpg',
          options: [
            { description: 'BEO - limousine', nextLocation: 5 },
            { description: '(G)I-DLE - Tomboy', nextLocation: 5 },
            { description: 'INFINITE - Man in Love', nextLocation: 5 },
            { description: 'IU & HIGH4 - Not spring', nextLocation: 5 },
          ],
        });isExecuted3 = true;
        if (!isExecuted31) {
          game.story.push({
            description: 'Тебя вытеснил участник рангом выше. Поэтому тебе придется выбрать другую песню. Какую категорию песен выберешь?',
            image: 'boys-planet.jpg',
            options: [
              { description: 'Танцы-Рэп', nextLocation: 6 },
              { description: 'Вокал-Танцы', nextLocation: 6 },
            ],
          });isExecuted31 = true;}
      break;
      case ((selected[2] == 'Вокалист' && selected[3] == 'Танцы') || (selected[2] == 'Танцор' && selected[3] == 'Вокал')):
        game.story.push({
          description: 'Тогда какую песню ты выберешь для второй миссии?',
          image: 'mission2.jpg',
          options: [
            { description: 'Monsta X - Love Killa', nextLocation: 5 },
            { description: 'TWICE - Feel Special', nextLocation: 5 },
            { description: 'BTS - Butterfly', nextLocation: 5 },
            { description: 'SEVENTEEN - Home', nextLocation: 5 },
          ],
        });isExecuted3 = true;
        if (!isExecuted31) {
          game.story.push({
            description: 'Тебя вытеснил участник рангом выше. Поэтому тебе придется выбрать другую песню. Какую категорию песен выберешь?',
            image: 'boys-planet.jpg',
            options: [
              { description: 'Танцы-Рэп', nextLocation: 6 },
              { description: 'Вокал-Рэп', nextLocation: 6 },
            ],
          });isExecuted31 = true;}
      break;
      case ((selected[2] == 'Рэпер' && selected[3] == 'Танцы') || (selected[2] == 'Танцор' && selected[3] == 'Рэп')):
        game.story.push({
          description: 'Тогда какую песню ты выберешь для второй миссии?',
          image: 'mission2.jpg',
          options: [
            { description: 'Jessi - Zoom', nextLocation: 5 },
            { description: 'YOONMIRAE, BIBI - Law', nextLocation: 5 },
            { description: 'H1GHR MUSIC - Gang', nextLocation: 5 },
            { description: 'CRUSH & J-HOPE - Rush Hour', nextLocation: 5 },
          ],
        });isExecuted3 = true;
        if (!isExecuted31) {
          game.story.push({
            description: 'Тебя вытеснил участник рангом выше. Поэтому тебе придется выбрать другую песню. Какую категорию песен выберешь?',
            image: 'boys-planet.jpg',
            options: [
              { description: 'Вокал-Рэп', nextLocation: 6 },
              { description: 'Вокал-Танцы', nextLocation: 6 },
            ],
          });isExecuted31 = true;}
      break;
    }
  }
  if (isExecuted31 && !isExecuted4) {
    switch (selected[6]){
      case 'Вокал-Рэп':
        game.story.push({
          description: 'А какую песню ты выберешь?',
          image: 'mission2.jpg',
          options: [
            { description: 'BEO - limousine', nextLocation: 7 },
            { description: '(G)I-DLE - Tomboy', nextLocation: 7 },
            { description: 'INFINITE - Man in Love', nextLocation: 7 },
            { description: 'IU & HIGH4 - Not spring', nextLocation: 7 },
          ],
        }); isExecuted4 = true;
      break;
      case 'Вокал-Танцы':
        game.story.push({
          description: 'А какую песню ты выберешь?',
          image: 'mission2.jpg',
          options: [
            { description: 'Monsta X - Love Killa', nextLocation: 7 },
            { description: 'TWICE - Feel Special', nextLocation: 7 },
            { description: 'BTS - Butterfly', nextLocation: 7 },
            { description: 'SEVENTEEN - Home', nextLocation: 7 },
          ],
        }); isExecuted4 = true;
      break;
      case 'Танцы-Рэп':
        game.story.push({
          description: 'А какую песню ты выберешь?',
          image: 'mission2.jpg',
          options: [
            { description: 'Jessi - Zoom', nextLocation: 7 },
            { description: 'YOONMIRAE, BIBI - Law', nextLocation: 7 },
            { description: 'H1GHR MUSIC - Gang', nextLocation: 7 },
            { description: 'CRUSH & J-HOPE - Rush Hour', nextLocation: 7 },
          ],
        }); isExecuted4 = true;
      break;
    }
  }
  if (isExecuted4 && !isExecuted5) {
    game.story.push({
      description: 'После прохождения второй миссии настало время третьей. Это самая интересная миссия, поэтому выбирай осознанно. Какую песню выберешь?',
      image: 'mission3.jpg',
      options: [
        { description: 'Switch', nextLocation: 8 },
        { description: 'Over me', nextLocation: 8 },
        { description: 'En Garde', nextLocation: 8 },
        { description: 'Say My Name', nextLocation: 8 },
        { description: 'Super Charger', nextLocation: 8 },
      ],
    }); isExecuted5 = true;}
    if (isExecuted5 && !isExecuted6) {
      game.story.push({
        description: 'Поздравляю! Ты в полуфинале. Что исполнишь?',
        image: 'jp.jpg',
        options: [
          { description: 'Jelly Pop', nextLocation: 9 },
          { description: 'Hot Summer', nextLocation: 9 },
        ],
      }); isExecuted6 = true;}
      if (isExecuted6 && !isExecuted7) {
        game.story.push({
          description: 'Твою партию в песне выбрал участник рангом выше. Тебе необходимо выбрать:',
          image: 'bp.jpg',
          options: [
            { description: 'Занять позицию с маленькой партией', nextLocation: 10 },
            { description: 'Занять такую же позицию, но во второй песне', nextLocation: 10 },
          ],
        }); isExecuted7 = true;}
        if (isExecuted7 && !isExecuted8) {
          game.story.push({
            description: 'Ну вот и результаты!',
            image: 'final.jpg',
            options: [
              { description: 'Посмотреть', nextLocation: 11 },
            ],
          }); isExecuted8 = true;}
          if (isExecuted8 && !isExecuted9) {
            game.story.push({
              description: '',
              image: 'bp.jpg',
                options: [
                ],
            }); isExecuted9 = true;}
}

function resultCalc(selected){
  if (!isExecuted) {
    if (selected[0]=='K (Korean)'){
      switch (selected[1]){
        case 'Wanna One - Burn It Up': x+=7; isExecuted = true;
        break;
        case 'SEVENTEEN - Very Nice': x+=4, final+=1, evnne+=2; isExecuted = true;
        break;
        case 'BTS - Danger': x+=7; isExecuted = true;
        break;
        case 'EXO - Love Me Right': final+=2, evnne+=1, zb1+=1; isExecuted = true;
        break;
        case 'NCT DREAM - Hot Sauce': x+=2, evnne+=2; isExecuted = true;
        break;
        case 'BLACKPINK - Kill This Love': x+=3, final+=1, zb1+=1; isExecuted = true;
        break;
        case 'Stray Kids - Back Door': final+=5, evnne+=1, zb1+=3; isExecuted = true;
        break;}
    }
    else {
      switch (selected[1]){
        case 'Wanna One - Burn It Up': x+=7; isExecuted = true;
        break;
        case 'SEVENTEEN - Very Nice': x+=7; isExecuted = true;
        break;
        case 'BTS - Danger': x+=7; isExecuted = true;
        break;
        case 'EXO - Love Me Right': x+=3, final+=1; isExecuted = true;
        break;
        case 'NCT DREAM - Hot Sauce': x+=7; isExecuted = true;
        break;
        case 'BLACKPINK - Kill This Love': final+=3, evnne+=1, zb1+=2; isExecuted = true;
        break;
        case 'Stray Kids - Back Door': x+=2, final+=2, zb1+=1; isExecuted = true;
        break;}
    }
  }
  if (!isExecuted1 && isExecuted7) {
    switch (selected[7]){
      case 'BEO - limousine': evnne+=1; isExecuted1 = true;
      break;
      case '(G)I-DLE - Tomboy': final+=2, zb1+=3; isExecuted1 = true;
      break;
      case 'INFINITE - Man in Love': final+=1, zb1+=1; isExecuted1 = true;
      break;
      case 'IU & HIGH4 - Not spring': x+=4; isExecuted1 = true;
      break;
      case 'Monsta X - Love Killa': final+=3, zb1+=3; isExecuted1 = true;
      break;
      case 'TWICE - Feel Special': x+=4; isExecuted1 = true;
      break;
      case 'BTS - Butterfly': x+=4; isExecuted1 = true;
      break;
      case 'SEVENTEEN - Home': final+=2, evnne+=2; isExecuted1 = true;
      break;
      case 'Jessi - Zoom': final+=2, evnne+=1; isExecuted1 = true;
      break;
      case 'YOONMIRAE, BIBI - Law': final+=1, evnne+=1, zb1+=1; isExecuted1 = true;
      break;
      case 'H1GHR MUSIC - Gang': final+=1, evnne+=2; isExecuted1 = true;
      break;
      case 'CRUSH & J-HOPE - Rush Hour': x+=4, final+=1, zb1+=1; isExecuted1 = true;
      break;
    }
  }
  if (!isExecuted11 && isExecuted7) {
    switch (selected[8]){
      case 'Switch': final+=2, evnne+=2, zb1+=1; isExecuted11 = true;
      break;
      case 'Over me': final+=3, evnne+=1, zb1+=2; isExecuted11 = true;
      break;
      case 'En Garde': final+=3, zb1+=2; isExecuted11 = true;
      break;
      case 'Say My Name': final+=3, evnne+=1, zb1+=4; isExecuted11 = true;
      break;
      case 'Super Charger': x+=5; isExecuted11 = true; break;
    }
  }
  if (isExecuted11 && !isExecuted12 && isExecuted7) {
    switch (true){
      case ((selected[9] == 'Jelly Pop' && selected[10] == 'Занять позицию с маленькой партией') || (selected[9] == 'Hot Summer' &&
        selected[10] == 'Занять такую же позицию, но во второй песне')): final+=4, evnne+=3, zb1+=2; isExecuted12 = true;
      break;
      case ((selected[9] == 'Hot Summer' && selected[10] == 'Занять позицию с маленькой партией') || (selected[9] == 'Jelly Pop' &&
        selected[10] == 'Занять такую же позицию, но во второй песне')): final+=1, evnne+=2, zb1+=6; isExecuted12 = true;
      break;
    }
  }
  arr =[];
  arr.push(x, final, evnne, zb1);
  console.log(arr);
  return (arr);
}

function updateGame() {
  newStory();
  if (isExecuted12 && isExecuted8) {
    game.story[game.currentLocation].description = resultShow(selected);
    game.story[game.currentLocation].image = resultShowImg(selected);
    //console.log(game.story[game.currentLocation].description);
  }
  //console.log(game.story);
  var storyDiv = document.getElementById('story');
  var optionsDiv = document.getElementById('options');
  var image = document.createElement('img');
  image.src = game.story[game.currentLocation].image;
  image.height = 345;
  storyDiv.innerText = game.story[game.currentLocation].description;
  optionsDiv.innerHTML = '';
  storyDiv.appendChild(image);
  game.story[game.currentLocation].options.forEach(function(option, i) {
    var button = document.createElement('button');
    button.innerText = option.description;
    button.className = "button";
    button.addEventListener('click', function() {
      game.currentLocation = option.nextLocation;
      selected.push(button.innerText);
      console.log(selected);
      updateGame();
    });
    optionsDiv.appendChild(button);
  });
  resultCalc(selected);
}
updateGame();
function findIndexOfMax(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function resultShow(selected){
  result = findIndexOfMax(resultCalc(selected));
  switch (result){
    case 0: text = 'К сожалению, ты не смог дойти до финала. Но у тебя обязательно получится дебютировать в будущем! Удачи!';
    break;
    case 1: text = 'К сожалению, у тебя не получилось дебютировать. Но ты дошел до финала! Молодец!';
    break;
    case 2: text = 'Поздравляю! Ты хорошо показывал себя на протяжении всего шоу, поэтому ты сможешь дебютировать в другой группе! Добро пожаловать в EVNNE!!';
    break;
    case 3: text = 'Поздравляю!! Ты успешно прошел все миссии и смог дебютировать в новой группе, добро пожаловать в ZEROBASEONE!!';
    break;
  }
  //console.log(x, final, evnne, zb1);
  //console.log(resultCalc(selected));
  return text;
}

function resultShowImg(selected){
  var image = document.createElement('img');
  switch (findIndexOfMax(resultCalc(selected))){
    case 0: image.src = '1.jpg'; break;
    case 1: image.src = 'final1.jpg'; break;
    case 2: image.src = 'evnne.jpg'; break;
    case 3: image.src = 'zb1.jpg'; break;
  }
  //console.log(x, final, evnne, zb1);
  //console.log(resultCalc(selected));
  return image.src;
}
