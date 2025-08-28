function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Js9ZOQsUd5":
        Script1();
        break;
      case "5ZSIwXs1phj":
        Script2();
        break;
      case "6klhIueHJ1L":
        Script3();
        break;
      case "698CuKYJWwF":
        Script4();
        break;
      case "6hufVcYlAxr":
        Script5();
        break;
      case "6KpJe8fxesX":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6VxbWrqEbBb');
const duration = 750;
const easing = 'ease-out';
const id = '69FyLPdNvx6';
const pulseAmount = 0.03;
const delay = 2500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5ZxnS9ZiD7B');
const duration = 750;
const easing = 'ease-out';
const id = '6Fd1Cur5Anz';
const pulseAmount = 0.03;
const delay = 3500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6DUMJuvJcMm');
const duration = 750;
const easing = 'ease-out';
const id = '5epGduLF7rg';
const pulseAmount = 0.03;
const delay = 3500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5qiwXyeGpd5');
const duration = 750;
const easing = 'ease-out';
const id = '6gggMMfLzWw';
const pulseAmount = 0.03;
const delay = 10500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6phMNAR6hoZ');
const duration = 750;
const easing = 'ease-out';
const id = '5j482v0wOsV';
const pulseAmount = 0.03;
const delay = 10500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6GiHDP8Cbwi');
const duration = 750;
const easing = 'ease-out';
const id = '5foXglubMn9';
const pulseAmount = 0.03;
const delay = 9500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
