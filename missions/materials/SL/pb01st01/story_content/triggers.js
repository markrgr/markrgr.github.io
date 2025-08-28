function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dUB2Jc7ZLQ":
        Script1();
        break;
      case "64ktH7dDNMW":
        Script2();
        break;
      case "67tBo8gSgr9":
        Script3();
        break;
      case "6X2jmYeBDuF":
        Script4();
        break;
      case "6nLsLWja8Gw":
        Script5();
        break;
      case "6ol7Wz5hrh2":
        Script6();
        break;
      case "6lmdmHFFJDd":
        Script7();
        break;
      case "6YmKSvY9aAY":
        Script8();
        break;
      case "6im2iOdkvyu":
        Script9();
        break;
      case "5uFEjekH4Wk":
        Script10();
        break;
      case "6Icyqucnh5r":
        Script11();
        break;
      case "69eBypG43BR":
        Script12();
        break;
      case "6r7aMXVLFDV":
        Script13();
        break;
      case "6jZyzs6dj5F":
        Script14();
        break;
      case "6ZirZAV2tjM":
        Script15();
        break;
      case "5tygdwHd3h3":
        Script16();
        break;
      case "5Wf73PsSgeg":
        Script17();
        break;
      case "6isn5jWrEeB":
        Script18();
        break;
      case "6WTqTyIHltL":
        Script19();
        break;
      case "6XbIQKJVs94":
        Script20();
        break;
      case "5vsPp0aOxP9":
        Script21();
        break;
      case "6CHy6t0WxfT":
        Script22();
        break;
      case "6ZBuxkNJ86g":
        Script23();
        break;
      case "5YHX5DzXb4W":
        Script24();
        break;
      case "6l5M84txsri":
        Script25();
        break;
      case "65NZEe9bu7e":
        Script26();
        break;
      case "5kfAcue2TU7":
        Script27();
        break;
      case "6hjkGN4Nt4a":
        Script28();
        break;
      case "5nQI2uT37IB":
        Script29();
        break;
      case "6ba3tJLY11o":
        Script30();
        break;
      case "6XzLEJ58pLb":
        Script31();
        break;
      case "65musK8LvZC":
        Script32();
        break;
      case "6AyteuEwDxj":
        Script33();
        break;
      case "5uoDTqJ0yR5":
        Script34();
        break;
      case "5o99Ani7bm5":
        Script35();
        break;
      case "5k839lSYFub":
        Script36();
        break;
      case "5eD4Gj8yIGh":
        Script37();
        break;
      case "6UsHdqbT4Qo":
        Script38();
        break;
      case "6Uf1jA2kWlz":
        Script39();
        break;
      case "5nEhNFEdJxL":
        Script40();
        break;
      case "6RHj5E96q4B":
        Script41();
        break;
      case "6WwmMCyqCqK":
        Script42();
        break;
      case "5poe8UkVpmi":
        Script43();
        break;
      case "65jrKi9WOs1":
        Script44();
        break;
      case "5WZTCquI1a0":
        Script45();
        break;
      case "6Lc7kvBAANV":
        Script46();
        break;
      case "5wHf3kdyiTG":
        Script47();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 70000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6GaRnMfcvNB');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 82000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6GaRnMfcvNB');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 76750;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6MHj7FdyhGV');
const duration = 1500;
const easing = 'ease-out';
const id = '5t2XwWG7Sup';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6EtfIK2DBNN');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5WSlUXHc5eC');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6oU0GsgjF6Y');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5zdcqNqWbI1');
const duration = 1500;
const easing = 'ease-out';
const id = '61HuSZSRE9g';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6Bj7nv0fnxa');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6lb7uUBvwkF');
const duration = 750;
const easing = 'ease-out';
const id = '6GPtK9YZLpx';
const pulseAmount = 0.07;
const delay = 8500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('5mBMOghnR2Y');
const duration = 750;
const easing = 'ease-out';
const id = '5YHkvCdwho9';
const pulseAmount = 0.07;
const delay = 8500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('5nkgHR4pwAX');
const duration = 750;
const easing = 'ease-out';
const id = '6UtBCRKB5Hv';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('5ki27UG4L1Y');
const duration = 1500;
const easing = 'ease-out';
const id = '5XM8Ganib18';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('5nfWqqRT9GI');
const duration = 750;
const easing = 'ease-out';
const id = '6Qf1AGPULsZ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  player.once(() => {
const target = object('5lcW5D3J0hi');
const duration = 1500;
const easing = 'ease-out';
const id = '6jWmPig1Z7C';
const pulseAmount = 0.07;
const delay = 11500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  player.once(() => {
const target = object('6gQwthYxApi');
const duration = 1500;
const easing = 'ease-out';
const id = '5hbkJZtQ87T';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('6A2aKShZC1Q');
const duration = 750;
const easing = 'ease-out';
const id = '6mCpqMAkzFh';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6CYV3eCh21m');
const duration = 1500;
const easing = 'ease-out';
const id = '6do7cqzp7B4';
const pulseAmount = 0.07;
const delay = 13250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6OfNOClHloi');
const duration = 1250;
const easing = 'ease-out';
const id = '6FhjJlQyfUc';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  player.once(() => {
const target = object('5tK70CZceGX');
const duration = 1500;
const easing = 'ease-out';
const id = '6JZNKXpGwsu';
const pulseAmount = 0.07;
const delay = 8750;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  player.once(() => {
const target = object('60k9cWj2NWZ');
const duration = 750;
const easing = 'ease-out';
const id = '6Tv3qMU47nQ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script33 = function()
{
  player.once(() => {
const target = object('5xR8s7oagCp');
const duration = 1500;
const easing = 'ease-out';
const id = '5h5mBbzSeSN';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  player.once(() => {
const target = object('6AxdcJm4B4l');
const duration = 750;
const easing = 'ease-out';
const id = '5hSqaI2QFZh';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  player.once(() => {
const target = object('6eN8fKE7Ram');
const duration = 1500;
const easing = 'ease-out';
const id = '5mDAasRCRb5';
const pulseAmount = 0.07;
const delay = 12188;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  player.once(() => {
const target = object('6JahwciFG3X');
const duration = 1500;
const easing = 'ease-out';
const id = '6amzIK8G6cY';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script39 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6dNvGmrUNM3');
const duration = 1500;
const easing = 'ease-out';
const id = '6U20afd0QlK';
const pulseAmount = 0.07;
const delay = 10500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  player.once(() => {
const target = object('6I84e8KuYb7');
const duration = 750;
const easing = 'ease-out';
const id = '6iIniwbCNhW';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script43 = function()
{
  player.once(() => {
const target = object('69R6EAWU1u6');
const duration = 1500;
const easing = 'ease-out';
const id = '6UDkR1DNQPG';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  player.once(() => {
const target = object('5eVxHEfXKN2');
const duration = 1250;
const easing = 'ease-out';
const id = '6BK3uPtLYrd';
const pulseAmount = 0.07;
const delay = 1271;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script46 = function()
{
  const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  player.once(() => {
const target = object('69GWeNQeX8v');
const duration = 1500;
const easing = 'ease-out';
const id = '656lnleNPnh';
const pulseAmount = 0.07;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
function getActor() {
  return {
    "mbox": "mailto:mark.snyder@reallygreatreading.com",
    "objectType": "Agent",
    "name": "Playbooks Example"
  };
}
