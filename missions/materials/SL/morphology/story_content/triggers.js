function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TXXQIEv8ym":
        Script1();
        break;
      case "6J9MwkEkowQ":
        Script2();
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
const target = object('69ESx8i8EWf');
const duration = 750;
const easing = 'ease-out';
const id = '5dZOTHcZFtk';
const pulseAmount = 0.07;
const delay = 4000;
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
  const target = object('5WXm8Nn2MtK');
const duration = 750;
const easing = 'ease-out';
const id = '6nLXihtbJb1';
const pulseAmount = 0.07;
const delay = 3000;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
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
