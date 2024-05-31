let bigintrandomresult = 0;

function bigintrandom(min , max)
{
  max = BigInt(max)
  min = BigInt(min)
  bigintrandomresult= 0
  bigintrandomresult = BigInt(bigintrandomresult) 
  while(bigintrandomresult < min || bigintrandomresult > max)
  {
  for(let i = 0; i < logaritwithbasen(max,10,0) ; i++)
      {
    bigintrandomresult += BigInt(Math.floor(Math.random() * 10))*(10n**BigInt(i))
      }
  return bigintrandomresult;
  }
}

btn = document.getElementsByClassName("btnContainer")
document.getElementById("Title").style.display = "none"
function log10(bigint) {
  if (bigint < 0) return NaN;
  const s = bigint.toString(10);

  return s.length + Math.log10("0." + s.substring(0, 15))
}

function log(bigint) {
  return log10(bigint) * Math.log(10);
}

function natlog(bigint) {
  if (bigint < 0) return NaN;

  const s = bigint.toString(16);
  const s15 = s.substring(0, 15);

  return Math.log(16) * (s.length - s15.length) + Math.log("0x" + s15);
}

function logaritwithbasen(bigint, base , precsion)
{
 return Number.parseFloat(Math.floor(Number.parseFloat(log10(bigint) / Math.log10(base)).toFixed(25))).toFixed(precsion);
}


const suffixclass1 = 
["","K","M","B", "T", "Qd", "Qn", "Sx", "Sp", "Oc", "No"];
const suffixclass2 = 
["","De","Vt","Ug", "Tg", "Sg", "Qg", "Vg", "Rg", "Og", "Ng"];
const suffixclass3 = 
["","Ce","Du","Tr", "Qa", "Qi", "Se", "Si", "Vq", "Ot", "Ni"];
const prefixesclass1 = 
 ["","U", "D","T","Qd", "Qn", "Sx", "Sp","Rt", "Oc", "No"];

let class1illion 
let class2illion
let class3illion
let class4illion
let class5illion
let class6illion 
let illioncount
let e
function ReturnOutput(num, precsion ,returnoutput) 
{
if(typeof num === "bigint")
 e = Number(logaritwithbasen(BigInt(num),10,5))
else
e = Number(logaritwithbasen(BigInt(Math.floor(num)),10,5))

 
 if(returnoutput == "Scientific")
  return String((Number(BigInt(num)*BigInt(10**precsion) / 10n**BigInt(logaritwithbasen(BigInt(num),10,0))) / 10**precsion) + "e" + e);
 else
 {
 if(num < 1000)
 {
  return String(Number.parseFloat(num).toFixed(precsion));
 }
  else
 { 
  illioncount = Math.floor(e/3)
  // class3illion = Math.floor(illioncount/121)
  // class2illion = Math.floor((illioncount - class3illion*121)/11)
  // class1illion = illioncount - class3illion*121 - class2illion*11
  //  return  String((Number(BigInt(num)*BigInt(10**precsion) / 1000n**BigInt(logaritwithbasen(BigInt(num),1000,0))) / 10**precsion) 
  //          +(num < 10n**33n ? suffixclass1[class1illion] : prefixesclass1[class1illion])
  //          +suffixclass2[class2illion] 
  //          +suffixclass3[class3illion])
  
  class6illion = Math.floor(illioncount/161051)
  class5illion = Math.floor((illioncount - class6illion*161051)/14641)
  class4illion = Math.floor((illioncount - class6illion*161051 - class5illion*14641)/1331)
  class3illion = Math.floor((illioncount - class6illion*161051 - class5illion*14641 - class4illion*1331)/121)
  class2illion = Math.floor((illioncount - class6illion*161051 - class5illion*14641 - class4illion*1331 - class3illion*121)/11)
  class1illion = illioncount - class6illion*161051 - class5illion*14641 - class4illion*1331 - class3illion*121 - class2illion*11
   return  String((Number(BigInt(num)*BigInt(10**precsion) / 1000n**BigInt(logaritwithbasen(BigInt(num),1000,0))) / 10**precsion) 
           +(num < 10n**33n ? suffixclass1[class1illion] : prefixesclass1[class1illion])
           +suffixclass2[class2illion] 
           +suffixclass3[class3illion] 
           +(num < 10n**3003n ? "" : "Mi")
           +prefixesclass1[class4illion]
           +suffixclass2[class5illion]
           +suffixclass3[class6illion])
  }
 }
}









//delevoper password


let D̵̛͎̖̘̯̻̼͔̯̤͕͇̜͍̈͜è̸̛̱̿̎̈́͒̀̒̅̉l̶̥̮̲̝̥̯̺̣̝̾̈́̀̈͂̍͘͝͠ė̸̩̗̫͍͙̲̭͉̜̻̳͌̉̉́̅ͅv̸̭̼̤̖̲̈́̔ǫ̶̘̘̤͚̙͉͈̩̼͙͓͂̎̋̍̎̉̂p̷̢̛͎͚̫͙̦̩̖̊͊̃̎̚͠͝ẽ̶̞͉͖̜̭̳͙̩͗̓̀͆͐́̒̽̑͋͝͝r̶̢̛͇̲̟̬̘̤̘͑͊̃̽̀͘͝P̴̨̨̛̛͔͖̰̹̦̪̩̙͛̋́͂͋́̂̀́̋͜͝͝ā̴̡͈͎̻̘̲̖̲̼͖̺̝͓͕̋͜͝s̸̾̋̈́͗̄̾̄͗̍̕͜͠s̶̢̛̬̹͈͉͓̬̿̑͂̅̄̌w̵̢̜̫̖͎̰̥̘͚̺̳̅͑̇͒̓̓̄͐̋͝͝͝ŏ̸̧͎̮̩̬̣͙̦͕̘͇̿̓̊̓̓́́̈̅̃̽̂ͅŗ̴̡̧̛̬̣̲͉͕̹̑̆̓͛͌̇̀́̇̅̂̎̕͜͠d̷̞̥̼̬̮̒̍̓͒̔̏͒̉̈̎̆͂̍͘̕ = "1"


let isdelevoperpasswordbreak = 0;

let RNG = 0;


//5/20/2024 update
var backroundprogessbarvaule =  document.querySelector(':root').style
let RNGppts = 0;
let totalRNGppts = 0;
let staterlevelingcost = 25;
let staterlevelingfactor = 2;
let currentlevelingcost = 25;
let currentlevelingfactor = 2;
let discountpercent = 1;
let staterlevel = 1;
let currentlevel = 1;
//end


let delaydelakprogessbarupdateinterval = 1000;
let isdelakprogessbarupdateinterval = 0;
let isdelakupdatefollowwithprogess = 1;

setInterval(() => {
  setTimeout(()=>{
                 {
                   if(isdelakprogessbarupdateinterval)
                     backroundprogessbarvaule.setProperty('--backroundprogessbarvaule', "rgb(" + (1 - RNGppts/currentlevelingcost)*255 + "," + RNGppts/currentlevelingcost*255 + ",0)"  );
                 }},delaydelakprogessbarupdateinterval)
},1)




let rollTime = 1;
let rollCd = 500; // 0.8 secs cd (800 miliseconds) i like it let set it to that vaule
let canRoll = true;
let i = 1;
let gallery = [];
let record = 0;
let autoroller = false;
let isautorollerunlocked = false;
let maxed = 0;
let raitytype = "";
let tiertype = 0;
let check = false;
let recordcount = 0;
//glyphs update varible
let isstaterglyphsunlocked = false;
const glyphselectionbtn = document.getElementsByClassName("glyphselectionbtn");
const glyphdescription = document.getElementsByClassName("glyphdescription");
const glyphdname = document.getElementsByClassName("glyphdname"); 
const glyphsunlocked = Array(1000).fill("false")
let bulkfactor = 1;
let tickspeed = 1;
let isfristtime = true;
//end
const raityinfo = document.getElementsByClassName("listElement");
const collectioninfo = document.getElementsByClassName("listChance");
const RollLogs = document.getElementsByClassName("listLogs");
const listtheta = document.getElementsByClassName("listtheta");
const listmenu = document.getElementsByClassName("menuelement");
const listRECORDlogs = document.getElementsByClassName("listRECORDlog");
const listTITLElist = document.getElementsByClassName("listTitle");
//for stater plr
if(isfristtime)
{
  isfristtime=1;
  listmenu[1].style.display = "none"
  listmenu[2].style.display = "none"
  listmenu[3].style.display = "none"
  listmenu[4].style.display = "none"
  listmenu[5].style.display = "none"
  listmenu[6].style.display = "none"
  listmenu[7].style.display = "none"
  listmenu[8].style.display = "none"
  listmenu[9].style.display = "none"
  listmenu[10].style.display = "none"
  listmenu[11].style.display = "none"
  listmenu[12].style.display = "none"

}
  


const tierunlocked = Array(1000).fill(false);

let showtierupper = Number(document.getElementById("tiershowupper").innerHTML)-1;
let showtierlower = Number(document.getElementById("tiershowlower").innerHTML)-1;
let showrecentrecord = Number(document.getElementById("recentrecord").innerHTML)-1;
let showrecentroll = Number(document.getElementById("recenrolls").innerHTML)-1;
let showrecentrolls = 100;
let showhideperfomances = false;
let RollCount = 0;
let raitytypeBAKCUP = "";
let tiertypeBAKCUP = 0;


let RGB = 0;

//currently : page0 = delak roller page1 = Upgrade
let page = 0;
//rank

if(isstaterglyphsunlocked == false)
{
  glyphselectionbtn[0].style.top = "200px";
  glyphselectionbtn[0].style.left = "100px";
  glyphdname[0].style.top = "350px";
  glyphdname[0].style.left = "100px";
  glyphdescription[0].style.top = "435px";
  glyphdescription[0].style.left = "60px";

  
  glyphselectionbtn[1].style.top = "200px";
  glyphselectionbtn[1].style.left = "475px";
  glyphdname[1].style.top = "350px";
  glyphdname[1].style.left = "435px";
  glyphdescription[1].style.top = "435px";
  glyphdescription[1].style.left = "435px";

  
  glyphselectionbtn[2].style.top = "200px";
  glyphselectionbtn[2].style.left = "850px";
  glyphdname[2].style.top = "350px";
  glyphdname[2].style.left = "875px";
  glyphdescription[2].style.top = "435px";
  glyphdescription[2].style.left = "840px";


  
  glyphselectionbtn[3].style.top = "200px";
  glyphselectionbtn[3].style.left = "1225px";
  glyphdname[3].style.top = "350px";
  glyphdname[3].style.left = "1225px";
  glyphdescription[3].style.top = "435px";
  glyphdescription[3].style.left = "1195px";

  

  glyphselectionbtn[4].style.top = "200px";
  glyphselectionbtn[4].style.left = "1625px";
  glyphdname[4].style.top = "350px";
  glyphdname[4].style.left = "1585px";
  glyphdescription[4].style.top = "435px";
  glyphdescription[4].style.left = "1585px";
}



const tips = ["Tips : Ready for >1e308 :))))",
             "Tips : Show less help your game run faster",
             "Tips : You can roll more than 1e308 if you can",
             "Tips : You should unlock autoroller for afk",
              "Tips : Share to your friend if you got more 10M RNG,it SUPER RARE",
             "Tips : Listen to music help running the game even the computer is sleep",
             "Tips : Stay for over 10 minutes to get 1 Million rolls(im higly caculated lol)",
             "Tips : RNG is Random Numbers Generator",
             "Tips : EvRNG is your highest rng/rolls time",
             "Tips : getting a tier 1 Ethereal Delak is basicaly harder than getting a Tier 3 Uncommon Delak lol",
             "Tips : Play this game just for fun,advoid being addicted like me",
             "Tips : Explore the menu pls",
             "Tips : This game is highly button-effect edited,try to move your mouse to a button to see it",
             "Fun fact : 2^10000000 = 9.049DOgOtMiQnVtSe or 9.049e3010299 in scientific notation",
             "Fun fact : each suffix has factor of 11,make it stupid messy",
             "Not even a fun fact : Currently,limits is 9.999...e5314682 or 999....NoNgNiMiNoNgNi)"]




const raitylist = ["Common", "Uncommon", "Rare", "Unsual" ,"Epic", "Unique", "Legendary" , "Mythical" , "Ethereal"]
const raityexpoment = [2,5,10,15,35,50,75,150,250,325,500,650,800,1250,1750,2550]
const raitycolor = ["var(--commoncolor)" , "var(--uncommoncolor)" , "var(--rarecolor)" , "var(--unsualcolor)" , "var(--epiccolor)" , "var(--uniquecolor)" , "var(--legendarycolor)" , "var(--mythicalcolor)" , "var(--etherealcolor)"]
const raityfontstyle = ["normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal","normal"]
const raityfonttype = ["Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman" ,"Times New Roman","Times New Roman","Times New Roman","Times New Roman","Times New Roman"]
const tierperceptionalginwithraitiesvaule = Array(raitylist.length).fill(0)

let maximusraity = 0;
let maximusraitytype = "";



const delakdata = Array(raitylist.length);
for (let i = 0; i < delakdata.length; i++) {
  delakdata[i] = Array(raityinfo.length / raitylist.length).fill(0);
}





let maxedsystemtierdelakreached = raityinfo.length / raitylist.length;
//Tier 1 Delak (1/2)
for(let j = 0; j < raitylist.length; j++){

 
listTITLElist[j].innerHTML = raitylist[j] +" Delak (They Are X"+String(ReturnOutput(raityexpoment[j],0))+" times rarer)"
listTITLElist[j].style.color = raitycolor[j]
listTITLElist[j].style.fontStyle = raityfontstyle[j]
listTITLElist[j].style.fontFamily = raityfonttype[j]
  listTITLElist[j].style.display = "none"
  listtheta[j].style.display = "none"
for(let i = 0 ; i < maxedsystemtierdelakreached ; i++)
 {

  if(BigInt(raityexpoment[j])**BigInt(i+1) < 1000n)
  raityinfo[i + j*maxedsystemtierdelakreached].innerHTML = "Tier " + String(ReturnOutput(i + 1,0)) + " " + raitylist[j] + " Delak (1/" + String(ReturnOutput(BigInt(raityexpoment[j])**BigInt(i+1),0)) + ")"
  else
  raityinfo[i + j*maxedsystemtierdelakreached].innerHTML = "Tier " + String(ReturnOutput(i + 1,0)) + " " + raitylist[j] + " Delak (1/" + String(ReturnOutput(BigInt(raityexpoment[j])**BigInt(i+1),3)) + ")"
  


  
  raityinfo[i + j*maxedsystemtierdelakreached].style.color = raitycolor[j]
  raityinfo[i + j*maxedsystemtierdelakreached].style.fontStyle = raityfontstyle[j]
  raityinfo[i + j*maxedsystemtierdelakreached].style.fontFamily = raityfonttype[j]
  collectioninfo[i + j*maxedsystemtierdelakreached].innerHTML = String(ReturnOutput(0,0))
  collectioninfo[i + j*maxedsystemtierdelakreached].style.color = raitycolor[j]
  collectioninfo[i + j*maxedsystemtierdelakreached].style.fontStyle = raityfontstyle[j]
  collectioninfo[i + j*maxedsystemtierdelakreached].style.fontFamily = raityfonttype[j]
  collectioninfo[i + j*maxedsystemtierdelakreached].style.display = "none"
  raityinfo[i + j*maxedsystemtierdelakreached].style.display = "none"
 }


}






























listmenu[9].style.fontSize = "33px";


//end

//lam cai chu nho lai di
//lanh dia he thong
/*
let i = 1;
while(i<10000000){
roll();
i++;}
i = 1;
while(i<100){
console.log(commondelak[i]);
i++;
}

*/


showhideupadate = () => {

 showtierupper = Number(document.getElementById("tiershowupper").innerHTML)-1;
 showtierlower = Number(document.getElementById("tiershowlower").innerHTML)-1;
 showrecentrecord = Number(document.getElementById("recentrecord").innerHTML)-1;
 showrecentroll = Number(document.getElementById("recenrolls").innerHTML)-1;
document.getElementById("listRECORDTitle").innerHTML = "Record logs(Show top "+String(showrecentrecord+1)+" record)"
 document.getElementById("listTitle1").innerHTML = "Roll Logs (top "+String(showrecentroll+1)+" recent)"
 for(let j = 0; j < raitylist.length ; j++){
  for(let i = 0 ; i < maxedsystemtierdelakreached - 1; i++)
   {
     raityinfo[i + j*maxedsystemtierdelakreached].style.display = "none"
     collectioninfo[i + j*maxedsystemtierdelakreached].style.display = "none"
   }
 }

 for(let j = 0; j < raitylist.length ; j++){
  for(let i = showtierlower ; i <= showtierupper; i++)
   {
    if(delakdata[j][i] > 0)
    {
     raityinfo[i + j*maxedsystemtierdelakreached].style.display = "block"
     collectioninfo[i + j*maxedsystemtierdelakreached].style.display = "block"
    }
   }
 }

 for(let i = 0;i < RollLogs.length; i++)
 {
  RollLogs[i].style.display = "none"
 }

 for(let i = 0;i <= showrecentroll; i++)
 {
  RollLogs[i].style.display = "block"
 }

 for(let i = 0;i <=  listRECORDlogs.length-1; i++)
 {
  listRECORDlogs[i].style.display = "none"
 }
 for(let i = 0;i <=  showrecentrecord; i++)
 {
  listRECORDlogs[i].style.display = "block"
 }
 
};













scalarroll = () => 
{

 rollTime += 1;

 document.getElementById("Titlename").innerHTML = "RNG Delak : " + (rollTime < 2 ? rollTime + "Roll": (rollTime < 1000 ? ReturnOutput(rollTime,0) + " Rolls" : ReturnOutput(rollTime,2) + " Rolls") )
 maximusraity =0;
 maximusraitytype = 0;
 RNG = 1/(Math.random())

//  RNG = 5.1
//You Didnt Roll Yet,roll to see something nEw
 
 for(let j = 0; j < raitylist.length; j++)
  {tierperceptionalginwithraitiesvaule[j] = 0}


 
 for(let j = 0; j < raitylist.length; j++)
  {
   tierperceptionalginwithraitiesvaule[j] = Math.floor(Math.log2(RNG)/Math.log2(raityexpoment[j]))
  }

 for(let j = 0; j < raitylist.length; j++)
  {
   if(Math.max(maximusraity, Math.pow(raityexpoment[j],tierperceptionalginwithraitiesvaule[j])) == Math.pow(raityexpoment[j],tierperceptionalginwithraitiesvaule[j]))
   {maximusraitytype = j;}
   maximusraity = Math.max(maximusraity, Math.pow(raityexpoment[j],tierperceptionalginwithraitiesvaule[j]))
  }
 // console.log(maximusraitytype)
 // console.log(maximusraity)
  delakdata[maximusraitytype][Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])) - 1] += bulkfactor
 if(RNG > 2) 
 {
  if(showtierlower <= Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])) - 1 &&  Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])) - 1 <= showtierupper){
  collectioninfo[Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])) + maximusraitytype*maxedsystemtierdelakreached - 1].style.display = "block"
  raityinfo[Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])) + maximusraitytype*maxedsystemtierdelakreached - 1].style.display = "block"
  }
  listtheta[maximusraitytype].style.display = "block"
  listTITLElist[maximusraitytype].style.display = "block"
  
  document.getElementById("rollRecord1").style.fontStyle = raityfontstyle[maximusraitytype]
  document.getElementById("rollRecord1").style.fontFamily = raityfonttype[maximusraitytype]
  document.getElementById("rollRecord1").style.color = raitycolor[maximusraitytype]
  if(Math.floor(RNG) < 1000)
  document.getElementById("rollRecord1").innerHTML = "You have roll a Tier "+ String(ReturnOutput(Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])),0)) + " " + raitylist[maximusraitytype] + " Delak with RNG of " + String(ReturnOutput(RNG,3)) + " (" + String(ReturnOutput(Math.floor(RNG/rollTime),3)) + " EvRNG)"
  else
  document.getElementById("rollRecord1").innerHTML = "You have roll a Tier "+ String(ReturnOutput(Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])),0)) + " " + raitylist[maximusraitytype] + " Delak with RNG of " + String(ReturnOutput(Math.floor(RNG),3)) + " (" + String(ReturnOutput((Math.floor(RNG/rollTime),3))) + " EvRNG)"
 }
 else
 {
  document.getElementById("rollRecord1").style.fontStyle = "normal"
  document.getElementById("rollRecord1").style.fontFamily = "Times New Roman"
  document.getElementById("rollRecord1").style.color = "Gray"
  document.getElementById("rollRecord1").innerHTML = "Bad luck bro(RNG < 2)"
 }
 

 for(let i = showrecentroll ; i > 0 ; i = i-1)
  {
  RollLogs[i].innerHTML = RollLogs[i-1].innerHTML
  RollLogs[i].style.color = RollLogs[i-1].style.color
  RollLogs[i].style.fontStyle = RollLogs[i-1].style.fontStyle
  }

 if(RNG > 2)
 {
  if(Math.floor(RNG) < 1000)
   RollLogs[0].innerHTML =  "#" +   (rollTime  > 1000 ?   String(ReturnOutput(rollTime,2)) :   String(ReturnOutput(rollTime ,0)))  +"You have roll a Tier "+ String(ReturnOutput(Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])),0)) + " " + raitylist[maximusraitytype] + " Delak with RNG of " + String(ReturnOutput(RNG,2)) + " (" +   (record / rollTime  > 1000 ?   String(ReturnOutput(Math.floor(record / rollTime),2)) :   String(ReturnOutput(record / rollTime ,2))) + " EvRNG)"
  else
   RollLogs[0].innerHTML =  "#" + (rollTime  > 1000 ?   String(ReturnOutput(rollTime,2)) :   String(ReturnOutput(rollTime ,0))) +"You have roll a Tier "+ String(ReturnOutput(Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])),0)) + " " + raitylist[maximusraitytype] + " Delak with RNG of " + String(ReturnOutput(Math.floor(RNG),2)) + " (" +  (record / rollTime  > 1000 ?   String(ReturnOutput(Math.floor(record / rollTime),2)) :   String(ReturnOutput(record / rollTime ,2))) + " EvRNG)"
 
  
 RollLogs[0].style.color = raitycolor[maximusraitytype]
 RollLogs[0].style.fontStyle = raityfontstyle[maximusraitytype]
 }
 else
 {
  RollLogs[0].innerHTML = "#" + (rollTime  > 1000 ?   String(ReturnOutput(rollTime,2)) :   String(ReturnOutput(rollTime ,0))) + " Bad luck bro(RNG < 2)"
  RollLogs[0].style.color = "Gray"
  RollLogs[0].style.fontStyle = "normal"
 }



 if(RNG > record && RNG > 2) {
  recordcount++;
  record = RNG;
  for(let i = showrecentrecord ; i > 0 ; i--){

   listRECORDlogs[i].innerHTML = listRECORDlogs[i-1].innerHTML
   listRECORDlogs[i].style.color = listRECORDlogs[i-1].style.color
   listRECORDlogs[i].style.fontStyle = listRECORDlogs[i-1].style.fontStyle
  

  }
  listRECORDlogs[0].style.color = raitycolor[maximusraitytype]
  listRECORDlogs[0].style.fontStyle = raityfontstyle[maximusraitytype]
  listRECORDlogs[0].innerHTML =  "RecD#" +   (recordcount > 1000 ?   String(ReturnOutput(recordcount,2)) :   String(ReturnOutput(recordcount ,0))) + ": A new record has been reached with a Tier " + ReturnOutput(Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])),0) + " " +raitylist[maximusraitytype] +" Delak with RNG of " + (record >= 1000 ? String(ReturnOutput(Math.floor(record),2)) : String(ReturnOutput(record,2))) + "(" + (record/rollTime >= 1000 ? String(ReturnOutput((Math.floor(record/rollTime)),2)) : ReturnOutput(record/rollTime,2)) + "EvRNG)"

 }
 
 document.getElementById("rollCount").innerHTML =
  "You have rolled for " +
  (rollTime > 1000 ?   String(ReturnOutput(rollTime,2)) :   String(ReturnOutput(rollTime,0))) +
  " time" +
  (rollTime > 1 ? "s" : "");

 document.getElementById("rollRecord").innerHTML =
  "Your RNG record : " +
  (record > 1000 ?   String(ReturnOutput(Math.floor(record),2)) :   String(ReturnOutput(record,2))) +
  " (" +
  (record / rollTime  > 1000 ?   String(ReturnOutput(Math.floor(record / rollTime),2)) :   String(ReturnOutput(record / rollTime ,2))) +
  " EvRNG)";
  if(bulkfactor < 1e300){
  RNGppts += RNG*bulkfactor
  totalRNGppts += RNG*bulkfactor}
  else
  { RNGppts += RNG*BigInt(bulkfactor)
    totalRNGppts += RNG*BigInt(bulkfactor)
  }
  document.getElementById("Staticticstext").innerHTML = "you got total " + (totalRNGppts > 1000 ?   String(ReturnOutput(Math.floor(totalRNGppts),2)) :   String(ReturnOutput(totalRNGppts,2))) +" RNG ppts so far"
 document.getElementById("RNGppts").innerHTML = "you got " + (RNGppts > 1000 ?   String(ReturnOutput(Math.floor(RNGppts),2)) :   String(ReturnOutput(RNGppts,2))) +" RNG ppts"
while(RNGppts >= currentlevelingcost)
{
  currentlevelingcost*=currentlevelingfactor
  currentlevel++;
}
document.getElementById("RNGdelakexpdisplayprogessbar").value = RNGppts/currentlevelingcost*100

  document.getElementById("RNGdelakexpdisplaytext").innerHTML = "RNG roller current level : "+currentlevel+"("+(RNGppts > 1000 ?   String(ReturnOutput(Math.floor(RNGppts),2)) :   String(ReturnOutput(RNGppts,2)))+"/"+(currentlevelingcost > 1000 ?   String(ReturnOutput(Math.floor(currentlevelingcost),2)) :   String(ReturnOutput(currentlevelingcost,2)))+"ppts)"
  document.getElementById("RNGdelakexpdisplaytextpercent").innerHTML =  Math.round(RNGppts/currentlevelingcost*1000)/10 + "%"
  if(isdelakupdatefollowwithprogess)
  backroundprogessbarvaule.setProperty('--backroundprogessbarvaule', "rgb(" + (1 - RNGppts/currentlevelingcost)*255 + "," + RNGppts/currentlevelingcost*255 + ",0)"  );

  collectioninfo[Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype])) + maximusraitytype*maxedsystemtierdelakreached - 1].innerHTML = delakdata[maximusraitytype][Math.floor(Math.log2(maximusraity)/Math.log2(raityexpoment[maximusraitytype]))-1]

}

async function sleep(ms) {
 return new Promise((resolve) => setTimeout(resolve, ms));
}



 roll = () => {
 if (canRoll) {
  canRoll = false;
  
  document.getElementById("rollBtn").innerHTML = "[ON COOLDOWN]";
  document.getElementById("rollBtn").style.borderColor = "red";
  document.getElementById("rollBtn").style.fontSize = "15px";
  setTimeout(() => {
   canRoll = true;
   document.getElementById("rollBtn").innerHTML = "Roll";
   document.getElementById("rollBtn").style.borderColor = "#007bff";
   document.getElementById("rollBtn").style.fontSize = "15px";
  }, rollCd);
  scalarroll();
 }
  if (delakdata[1][0] >= 5 && isautorollerunlocked == false) {
   document.getElementById("rollBtn1").style.borderColor = "green";
   document.getElementById("rollBtn1").innerHTML =
    "Autoroller is ready to unlock"
  } else {
   if (isautorollerunlocked == false) {
    document.getElementById("rollBtn1").innerHTML =
     "require 5 tier 1 Uncommon delak to unlock (currently " +
     String(delakdata[1][0]) +
     "/5)";
    document.getElementById("rollBtn1").style.borderColor = "red";
   }
  }
};

// let addToGallery = (tier) => {

// }

autoroll = () => {
 if (isautorollerunlocked == true) {
  if (autoroller == true) {
   document.getElementById("rollBtn1").innerHTML = "autoroll disabled";
   document.getElementById("rollBtn1").style.borderColor = "red";
   document.getElementById("rollBtn1").style.fontSize = "15px";
   autoroller = false;
  } else {
   document.getElementById("rollBtn1").innerHTML = "autoroll enabled";
   document.getElementById("rollBtn1").style.borderColor = "green";
   document.getElementById("rollBtn1").style.fontSize = "15px";
   autoroller = true;
  }
 }

 if (delakdata[1][0] >= 5 && isautorollerunlocked == false) {
  document.getElementById("rollBtn1").style.borderColor = "green";
  delakdata[1][0] -= 5;
  isautorollerunlocked = true;
  document.getElementById("rollBtn1").innerHTML =
   "Autoroller enabled"
  autoroller = 1;
 } else {
  if (isautorollerunlocked == false) {
   document.getElementById("rollBtn1").innerHTML =
    "require 5 tier 1 Uncommon delak to unlock (currently " +
    String(delakdata[1][0]) +
    "/5)";
   document.getElementById("rollBtn1").style.borderColor = "red";
  }
 }
};

roll1 = () => {
 if (autoroller) {
  scalarroll();
  } 
 }

Delakrolleropenevent = () => {
 page = 0;
 document.getElementById("Delakroller").style.display = "block";
 document.getElementById("Upgrade").style.display = "none";
 document.getElementById("Research").style.display = "none";
 document.getElementById("Automation").style.display = "none";
 document.getElementById("Merge").style.display = "none";
 document.getElementById("Bank").style.display = "none";
 document.getElementById("Potion").style.display = "none";
 document.getElementById("Glyph").style.display = "none";
 document.getElementById("Challenges").style.display = "none";
 document.getElementById("Achievements").style.display = "none";
 document.getElementById("Event").style.display = "none";
 document.getElementById("Codes").style.display = "none";
 document.getElementById("Statistics").style.display = "none";
 document.getElementById("Setting").style.display = "none";
   document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
};
Upgradeopenevent = () => {
   page = 1;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "block";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
};
Researchopenevent = () => {
   page = 2;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "block";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Automationopenevent = () => {
   page = 3;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "block";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Mergeopenevent = () => {
   page = 4;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "block";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Bankopenevent = () => {
   page = 5;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "block";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Potionopenevent = () => {
   page = 6;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "block";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Glyphopenevent = () => {
   page = 7;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "block";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Challengesopenevent = () => {
   page = 8;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "block";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Achievementsopenevent = () => {
   page = 9;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "block";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Eventopenevent = () => {
   page = 10;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "block";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Codesopenevent = () => {
   page = 11;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "block";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Statisticsopenevent = () => {
   page = 12;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "block";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Settingopenevent = () => {
   page = 13;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "block";
     document.getElementById("Credit").style.display = "none";
     document.getElementById("Relax").style.display = "none";
}
Creditopenevent = () => {
   page = 14;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "block";
   document.getElementById("Relax").style.display = "none";
}
Relaxopenevent = () => {
   page = 15;
   document.getElementById("Delakroller").style.display = "none";
   document.getElementById("Upgrade").style.display = "none";
   document.getElementById("Research").style.display = "none";
   document.getElementById("Automation").style.display = "none";
   document.getElementById("Merge").style.display = "none";
   document.getElementById("Bank").style.display = "none";
   document.getElementById("Potion").style.display = "none";
   document.getElementById("Glyph").style.display = "none";
   document.getElementById("Challenges").style.display = "none";
   document.getElementById("Achievements").style.display = "none";
   document.getElementById("Event").style.display = "none";
   document.getElementById("Codes").style.display = "none";
   document.getElementById("Statistics").style.display = "none";
   document.getElementById("Setting").style.display = "none";
     document.getElementById("Credit").style.display = "none";
   document.getElementById("Relax").style.display = "block";
}
setInterval(roll1, -10);
setInterval(() =>{ if (RGB < 360) RGB += 0.005;
                 else RGB = 0;

                 listmenu[14].style.color =
                  "rgb(" +
                  String(Math.abs(Math.sin(RGB * 50 - 61)) * 255) +
                  "," +
                  String(Math.abs(Math.sin(RGB * 60 - 187)) * 255) +
                  "," +
                  String(Math.abs(Math.sin(RGB *40 - 13)) * 255) +
                  ")";
                 for(i = showtierlower ; i<=showtierupper ; i++)
                  {
                   collectioninfo[i + 8000].style.color =                   "rgb(" +
                   String(Math.abs(Math.sin(RGB*30)) * 255) +
                   "," +
                   String(Math.abs(Math.sin(RGB*30)) * 255) +
                   "," +
                   String(Math.abs(Math.sin(RGB*30)) * 255) +
                   ")";
                   raityinfo[i + 8000].style.color =                   "rgb(" +
                    String(Math.abs(Math.sin(RGB*30)) * 255) +
                    "," +
                    String(Math.abs(Math.sin(RGB*30)) * 255) +
                    "," +
                    String(Math.abs(Math.sin(RGB*30)) * 255) +
                    ")";

                  }
                  listTITLElist[8].style.color =                   "rgb(" +
                   String(Math.abs(Math.sin(RGB*30)) * 255) +
                   "," +
                   String(Math.abs(Math.sin(RGB*30)) * 255) +
                   "," +
                   String(Math.abs(Math.sin(RGB*30)) * 255) +
                   ")";
                 
                 
                 } , 100)
setInterval(
() => {
 document.getElementById("rollRecord2").innerHTML = tips[Math.round(Math.random() * (tips.length - 1))]
 },150000)


  function chooseglyphs(id) {
    document.getElementById("Glyphselection").style.display = "none"
    document.getElementById("MainGame").style.display = "block"
    document.getElementById("MainGame").style.opacity = 0;
    setTimeout(function() {
        const myDiv = document.getElementById("MainGame");
        myDiv.style.transition = "opacity 1s";
        myDiv.style.opacity = 1;
    }, 1000);
    glyphsunlocked[id] = true;

    if(id == 0)
    {
      bulkfactor=2
      listmenu[1].style.display = "block"
      listmenu[2].style.display = "block"
      listmenu[11].style.display = "block"
      listmenu[10].style.display = "block"
      listmenu[12].style.display = "block"
      listmenu[13].style.display = "block"
      listmenu[14].style.display = "block"
      listmenu[9].style.display = "block"
    }
      else if(id == 1)
      {
        discountpercent = 0.8;
        staterlevelingcost *= discountpercent;
        staterlevelingfactor *= discountpercent;
        currentlevelingcost *= discountpercent;
        currentlevelingfactor *= discountpercent;
        rollCd = rollCd/tickspeed
        listmenu[1].style.display = "block"
        listmenu[2].style.display = "block"
        listmenu[11].style.display = "block"
        listmenu[10].style.display = "block"
        listmenu[12].style.display = "block"
        listmenu[13].style.display = "block"
        listmenu[14].style.display = "block"
        listmenu[9].style.display = "block"
      }
    else if(id == 2)
    {
      tickspeed = 2.5;
      rollCd = rollCd/tickspeed
      listmenu[1].style.display = "block"
      listmenu[2].style.display = "block"
      listmenu[11].style.display = "block"
      listmenu[9].style.display = "block"
      listmenu[10].style.display = "block"
      listmenu[12].style.display = "block"
      listmenu[13].style.display = "block"
      listmenu[14].style.display = "block"
    }
    else if(id == 3)
    {
      rollCd = rollCd/tickspeed
      listmenu[1].style.display = "block"
      listmenu[2].style.display = "block"
      listmenu[4].style.display = "block"
      listmenu[11].style.display = "block"
      listmenu[10].style.display = "block"
      listmenu[12].style.display = "block"
      listmenu[13].style.display = "block"
      listmenu[14].style.display = "block"
      listmenu[9].style.display = "block"
    }
    else if(id == 4)
    {
      rollCd = rollCd/tickspeed
      listmenu[1].style.display = "block"
      listmenu[2].style.display = "block"
      listmenu[12].style.display = "block"
      listmenu[13].style.display = "block"
      listmenu[9].style.display = "block"
      listmenu[14].style.display = "block"
    }
    
  }
function mouseenterglyphs(id) {
  glyphdescription[id].style.opacity = 0
  setTimeout(function() {
      const myDiv = glyphdescription[id];
      myDiv.style.transition = "opacity 0.25s";
      myDiv.style.opacity = 1;
  },250);
}
function mouseleaveglyphs(id) {
  glyphdescription[id].style.opacity = 1
  setTimeout(function() {
      const myDiv = glyphdescription[id];
      myDiv.style.transition = "opacity 0.25s";
      myDiv.style.opacity = 0;
  },250);
}
Delakrolleropenevent();
checkenterdevpassword = () => {
  if( D̵̛͎̖̘̯̻̼͔̯̤͕͇̜͍̈͜è̸̛̱̿̎̈́͒̀̒̅̉l̶̥̮̲̝̥̯̺̣̝̾̈́̀̈͂̍͘͝͠ė̸̩̗̫͍͙̲̭͉̜̻̳͌̉̉́̅ͅv̸̭̼̤̖̲̈́̔ǫ̶̘̘̤͚̙͉͈̩̼͙͓͂̎̋̍̎̉̂p̷̢̛͎͚̫͙̦̩̖̊͊̃̎̚͠͝ẽ̶̞͉͖̜̭̳͙̩͗̓̀͆͐́̒̽̑͋͝͝r̶̢̛͇̲̟̬̘̤̘͑͊̃̽̀͘͝P̴̨̨̛̛͔͖̰̹̦̪̩̙͛̋́͂͋́̂̀́̋͜͝͝ā̴̡͈͎̻̘̲̖̲̼͖̺̝͓͕̋͜͝s̸̾̋̈́͗̄̾̄͗̍̕͜͠s̶̢̛̬̹͈͉͓̬̿̑͂̅̄̌w̵̢̜̫̖͎̰̥̘͚̺̳̅͑̇͒̓̓̄͐̋͝͝͝ŏ̸̧͎̮̩̬̣͙̦͕̘͇̿̓̊̓̓́́̈̅̃̽̂ͅŗ̴̡̧̛̬̣̲͉͕̹̑̆̓͛͌̇̀́̇̅̂̎̕͜͠d̷̞̥̼̬̮̒̍̓͒̔̏͒̉̈̎̆͂̍͘̕  == 0)
  {
    document.getElementById("enterdevpasswordforsetting").style.display = "none"
    document.getElementById("devsetting").style.display = "block"}
  else
  {
    document.getElementById("enterdevpassword").innerHTML = "nuh uh stop trying bro u suck"
  document.getElementById("enterdevpasswordforsetting").style.display = "block"
  document.getElementById("devsetting").style.display = "none"
  }
}


setInterval(() => {
  if( D̵̛͎̖̘̯̻̼͔̯̤͕͇̜͍̈͜è̸̛̱̿̎̈́͒̀̒̅̉l̶̥̮̲̝̥̯̺̣̝̾̈́̀̈͂̍͘͝͠ė̸̩̗̫͍͙̲̭͉̜̻̳͌̉̉́̅ͅv̸̭̼̤̖̲̈́̔ǫ̶̘̘̤͚̙͉͈̩̼͙͓͂̎̋̍̎̉̂p̷̢̛͎͚̫͙̦̩̖̊͊̃̎̚͠͝ẽ̶̞͉͖̜̭̳͙̩͗̓̀͆͐́̒̽̑͋͝͝r̶̢̛͇̲̟̬̘̤̘͑͊̃̽̀͘͝P̴̨̨̛̛͔͖̰̹̦̪̩̙͛̋́͂͋́̂̀́̋͜͝͝ā̴̡͈͎̻̘̲̖̲̼͖̺̝͓͕̋͜͝s̸̾̋̈́͗̄̾̄͗̍̕͜͠s̶̢̛̬̹͈͉͓̬̿̑͂̅̄̌w̵̢̜̫̖͎̰̥̘͚̺̳̅͑̇͒̓̓̄͐̋͝͝͝ŏ̸̧͎̮̩̬̣͙̦͕̘͇̿̓̊̓̓́́̈̅̃̽̂ͅŗ̴̡̧̛̬̣̲͉͕̹̑̆̓͛͌̇̀́̇̅̂̎̕͜͠d̷̞̥̼̬̮̒̍̓͒̔̏͒̉̈̎̆͂̍͘̕  == 0)
  {
    document.getElementById("enterdevpasswordforsetting").style.display = "none"
    document.getElementById("devsetting").style.display = "block"
  }
  else
  {
    document.getElementById("enterdevpasswordforsetting").style.display = "block"
    document.getElementById("devsetting").style.display = "none"
  }
},0)

preloadsettiongrefresh = () => {
 if(document.getElementById("choosetheme").value == 0)
   document.getElementById("gamestyle").href = "StyleTheme/styleneonnormal.css"
  else  if(document.getElementById("choosetheme").value == 1)
     document.getElementById("gamestyle").href = "StyleTheme/stylelightnormal.css"
  else  if(document.getElementById("choosetheme").value == 2)
     document.getElementById("gamestyle").href = "StyleTheme/stylemetronormal.css"
  else  if(document.getElementById("choosetheme").value == 3)
     document.getElementById("gamestyle").href = "StyleTheme/stylemetronormal.css"
}

advancesettiongrefresh = () => {
 delaydelakprogessbarupdateinterval = Number(document.getElementById("progessbardelakexpupdateinterval").innerHTML)
   isdelakupdatefollowwithprogess=0;
  isdelakprogessbarupdateinterval=0;
   if(document.getElementById("chooseprogessbardelakexpupdate").value == 0)
     isdelakupdatefollowwithprogess=1;
     else if(document.getElementById("chooseprogessbardelakexpupdate").value == 1)
   {
     isdelakprogessbarupdateinterval=1;
   }
  else{
    backroundprogessbarvaule.setProperty('--backroundprogessbarvaule', "RGB(0,255,0)");
  }
}


document.getElementById("HTMLeditbox").value=document.getElementById("HTMLeditor").innerHTML
devsettingrefresh2 = () => {
  document.getElementById("HTMLeditbox").value= document.getElementById("HTMLeditor").innerHTML
}


devsettingrefresh1 = () => {
  document.getElementById("HTMLeditor").innerHTML= document.getElementById("HTMLeditbox").value
}
devsettingrefresh3 = () => {
  document.getElementById("Headeditor").innerHTML= document.getElementById("Headeditbox").value
}

document.getElementById("Headeditbox").value= document.getElementById("Headeditor").innerHTML
devsettingrefresh4 = () => {
  document.getElementById("Headeditbox").value= document.getElementById("Headeditor").innerHTML
}
devsettingrefresh5 = () => {
  document.getElementById("scripteditor").src= document.getElementById("Scripteditbox").value
}

document.getElementById("Scripteditbox").value= document.getElementById("scripteditor").src
devsettingrefresh6 = () => {
  document.getElementById("Scripteditbox").value= document.getElementById("scripteditor").src
}
const codeunlocked = Array(8000).fill("0")
Codesubmit = () => {
  if(  document.getElementById("Codeentry").value === "RNG")
  {
    if(codeunlocked[0] == "1")
      document.getElementById("Codeentry").value = "Entered code"
    else
    {
      document.getElementById("Codeentry").value = "You get Bulk factor bonus(from x"+ bulkfactor + " to x"+ (bulkfactor + 4) +")"
      bulkfactor += 4;
      codeunlocked[0] = "1"
    }
  }
  else if(  document.getElementById("Codeentry").value === "plsplay")
  {
    if(codeunlocked[1] == "1")
      document.getElementById("Codeentry").value = "Entered code"
    else
    {
      document.getElementById("Codeentry").value = "You get TickSpeed mult bonus(from x"+ tickspeed + " to x"+ (tickspeed / 4) +")"
      tickspeed = tickspeed*4;
      rollCd = rollCd/tickspeed
      codeunlocked[1] = "1"
    }
  }
  else if(  document.getElementById("Codeentry").value === "5/25/2024")
  {
    if(codeunlocked[2] == "1")
      document.getElementById("Codeentry").value = "Entered code"
    else
    {
      RNGppts = RNGppts*100
      document.getElementById("Codeentry").value = "You get x100 RNG PPts(Current RNGppts after bonus: "+ (RNGppts > 1000 ?   String(ReturnOutput(Math.floor(RNGppts),2)) :   String(ReturnOutput(RNGppts,2))) +")"
      codeunlocked[2] = "1"
    }
  }
  else if( document.getElementById("Codeentry").value === "FreeDelak!")
  {
    if(codeunlocked[3] == "1")
      document.getElementById("Codeentry").value = "Entered code"
    else
    {
        RNGppts += 2**250
      totalRNGppts += 2**250
      delakdata[0][249] += 1;
      collectioninfo[249].style.display = "block"
      raityinfo[249].style.display = "block"
      document.getElementById("Codeentry").value = "You get a free tier 250 Common Delak(+" + String(ReturnOutput(Math.floor(2**250),2)) + " RNG ppts)"
      codeunlocked[3] = "1"
    }
  }
  else
  {
    document.getElementById("Codeentry").value = "Invalid code"
  }
}





let vaulerngrequirevar;
let try2=0
vaulerngrequire = () => {
  vaulerngrequirevar = Number(document.getElementById("vaulerngrequire").innerHTML)
  try2=0
  while(1/Math.random()<vaulerngrequirevar)
    {
      try2++;
    }
  document.getElementById("rngtestoutput").innerHTML = "You need to rolls for "+ try2 + " times to get "+ vaulerngrequirevar+" RNG"
}
const statictime = document.getElementById("Timeplayedtext")
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let days = 0;
let years = 0;
setInterval(() => {
   milisecond += 2;
  if(milisecond >= 1000)
  {
    milisecond = 0;
    second++;
  }
  if(second >= 60)
  {
    second = 0;
    minute++;
  }
  if(minute >= 60)
  {
    minute = 0;
    hour++;
  }
  if(hour >= 24)
  {
    hour = 0;
    days++;
  }
  if(days >= 365)
  {
    days = 0;
    years++;
  }
  statictime.innerHTML = "you have played for "+ String(years) + " years, "+ String(days) + " days, "+ String(hour) + " hours, "+ String(minute) + " minutes, "+ String(second) + " seconds, "+ String(milisecond) + " miliseconds"
  
} , 0)


