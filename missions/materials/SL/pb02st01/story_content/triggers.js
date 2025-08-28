function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bLED0u9Dc6":
        Script1();
        break;
      case "5sYIntYD1Yn":
        Script2();
        break;
      case "6bj3OQPMvBd":
        Script3();
        break;
      case "6iaSdrDg4y0":
        Script4();
        break;
      case "6ol8Zvh4VOU":
        Script5();
        break;
      case "5uAMM3Vl8xk":
        Script6();
        break;
      case "5yOp900Vu8d":
        Script7();
        break;
      case "5x4qAYqeMbk":
        Script8();
        break;
      case "6iqBnjJx2tO":
        Script9();
        break;
      case "66nLuErlh3l":
        Script10();
        break;
      case "5mItMlDjkvX":
        Script11();
        break;
      case "5gotTk3B8ia":
        Script12();
        break;
      case "5xKwAreD9TG":
        Script13();
        break;
      case "6aYxQthDbfy":
        Script14();
        break;
      case "5XGfA4Y0Jyw":
        Script15();
        break;
      case "5UhtOMVufeX":
        Script16();
        break;
      case "6JMlswsy7u1":
        Script17();
        break;
      case "69mBsdzFqLJ":
        Script18();
        break;
      case "6X1IyMHOLni":
        Script19();
        break;
      case "68A0r85wuwH":
        Script20();
        break;
      case "5ifKoXTugwh":
        Script21();
        break;
      case "6I9tEFtlV7g":
        Script22();
        break;
      case "6jr97ZojR5A":
        Script23();
        break;
      case "5Yzf0wBNWP1":
        Script24();
        break;
      case "6c8LgvGbA51":
        Script25();
        break;
      case "5ZkEKSt8uvx":
        Script26();
        break;
      case "5movfyen03h":
        Script27();
        break;
      case "66OEodcyEBK":
        Script28();
        break;
      case "6rFX5bW66qb":
        Script29();
        break;
      case "5gig7dy9pNO":
        Script30();
        break;
      case "5pkaAYRWIPT":
        Script31();
        break;
      case "5ehNINHEtQY":
        Script32();
        break;
      case "5W40DxZ53au":
        Script33();
        break;
      case "5ntJeP0isuJ":
        Script34();
        break;
      case "5fTfNzJ6vbU":
        Script35();
        break;
      case "5pSYXznXl0f":
        Script36();
        break;
      case "6ee2REWN3uh":
        Script37();
        break;
      case "5dMoYwfZvxi":
        Script38();
        break;
      case "61r8xp2vfx3":
        Script39();
        break;
      case "6fr3gB4XvKZ":
        Script40();
        break;
      case "6gXcfoMUu1t":
        Script41();
        break;
      case "5v2AtgJXrYZ":
        Script42();
        break;
      case "67P9c5jTB1D":
        Script43();
        break;
      case "5ewpdvCsMJv":
        Script44();
        break;
      case "5pNKHI7Jz39":
        Script45();
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

window.Script38 = function()
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

window.Script41 = function()
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

window.Script42 = function()
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

window.Script43 = function()
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

window.Script44 = function()
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

window.Script45 = function()
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

};
function getActor() {
  return {
    "mbox": "mailto:mark.snyder@reallygreatreading.com",
    "objectType": "Agent",
    "name": "Playbooks Example"
  };
}
