function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZE1C85xH1o":
        Script1();
        break;
      case "68vHN7NCR8O":
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
const target = object('6SoAGDVTFE7');
const duration = 750;
const easing = 'ease-out';
const id = '5krye0YDPN2';
const pulseAmount = 0.03;
const delay = 24000;
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
  const target = object('6SoAGDVTFE7');
const duration = 750;
const easing = 'ease-out';
const id = '5krye0YDPN2';
const pulseAmount = 0.03;
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
