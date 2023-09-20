let player;
let startpositionx;
let startpositiony;
let stage=1;
let teki;
let tu;
let tekitou;
let rects = [
 [0,350,600,49],
  [0,0,50,600],
  [0,0,150,300],
  [200,100,50,700],
  [200,0,50,50],
  [300,0,100,300],
  [575,200,50,300],
  [150,0,450,5],
  [500,100,100,5],
  [590,100,10,100],
  [400,200,100,100],
]
let rects2 = [
  [275,172.5,5,50],
  [330,172.5,5,117.5],
  [275,166.5,60,5],
  [215,285,115,5],
  [215,112.5,5,177.5],
  [215,112,175,5],
  [390,112.5,5,227.5],
  [155,339.5,240,5],
  [155,52.5,5,287.5],
  [155,52.5,305,5],
  [455,52.5,5,347.5],
  [0,0,95,400],
  [95,395,505,5],
  [95,0,505,5],
  [505,0,5,355],
  [560,50,40,350],
]

function setup() {
  createCanvas(600, 400);
  background(220);
  player = {x:53,y:318};
  stage=1
}

function drawPlayer(){
  fill(255)
  stroke(0);  
  rect(player.x,player.y,30,30);
  if(player.x>599){
    stage += 1
    player = {x:startpositionx,y:startpositiony};
  }
}

function drawteki(){
 fill(255,0,0)
 rect(300,200,30,30)
}

function draw() {
  background(220);
  fill(0,255,255);
  stroke(0,255,255);
  
if(stage==1){ 
  rects.forEach(r=>{
    rect(r[0],r[1],r[2],r[3])
  })}

else if(stage==2){ 
  rects2.forEach(r2=>{
    rect(r2[0],r2[1],r2[2],r2[3])
  })}
  
  drawPlayer()
  if(stage==3){ 
    drawteki()
    tu=log(floor(random(5))) 
  }
if(stage==1){ 
  rects.forEach(r=>{
    if(r[0]<player.x&&
       player.x<r[0]+r[2]&&
       r[1]<player.y&&
       player.y<r[1]+r[3]){
       player = {x:startpositionx,y:startpositiony};
    }    
  })}
  
if(stage==1){
  rects.forEach(r=>{
    if(r[0]<player.x+30&&
       player.x+30<r[0]+r[2]&&
       r[1]<player.y+30&&
       player.y+30<r[1]+r[3]){
       player = {x:startpositionx,y:startpositiony};
    }    
  })} 
  
if(stage==2){
  rects2.forEach(r2=>{
  if(r2[0]<player.x&&
       player.x<r2[0]+r2[2]&&
       r2[1]<player.y&&
       player.y<r2[1]+r2[3]){
       player = {x:startpositionx,y:startpositiony};  
  }
  })}  
  
if(stage==2){
  rects2.forEach(r2=>{
    if(r2[0]<player.x+30&&
       player.x+30<r2[0]+r2[2]&&
       r2[1]<player.y+30&&
       player.y+30<r2[1]+r2[3]){
       player = {x:startpositionx,y:startpositiony};
    }    
  })}   
  
if(stage==3){  if(tu==0){
  }
  else if(tu==1){
    teki.x +=3;
  }
  else if(tu==2){
    teki.x -=3;
  }
  else if(tu==3){
    teki.y +=3;
  }
  else if(tu==4){
    teki.y -=3;
  }}
  
  if(keyCode === RIGHT_ARROW){
    player.x +=3;
  }
  else if(keyCode === LEFT_ARROW){
    player.x -=3;
  }
  else if(keyCode === UP_ARROW){
    player.y -=3;
  }
  else if(keyCode === DOWN_ARROW){
    player.y +=3;
  }
  
  if(stage==1){
    startpositionx=53
    startpositiony=318
  }
  else if(stage==2){
    startpositionx=280
    startpositiony=174
  }
  else if(stage==3){
    startpositionx=0
    startpositiony=0
  }
}
