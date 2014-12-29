/*
** copyright (c) 2014 Zhou jiahao
** name: I CAN FLY. 
** author: zJh
** site: http://ZKILL.INFO
** email: Z@ZKILL.INFO
** date: 2014-08-17
** laGst update: 2014-08-21
** license: GNU
*/

/*
** KEY OBJs.
*/

var pic = {
	//--------------------BULLET---------------------
	bullet0: "*",
	bullet1: "=",
	bullet2: "~",
	bullet3: "-",
	bullet4: "}",
	bullet5: ")",

	bullet6: ":",

	//--------------------BOY------------------------
	fBShoot: [
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["\"", " ", "\\"], // 1st frame.
				 
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["'", " ", "\\"], // 2nd frame.

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [",", " ", "\\"], // 2rd frame.

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [".", " ", "\\"], // 4th frame.
			],

	fUShoot: [
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["\"", "|", " "], // 1st frame.
				 
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["'", "|", " "], // 2nd frame.

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [",", "|", " "], // 3rd frame.

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [".", "|", " "], // 4th frame.
			],

	fDShoot: [
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["'", " ", "\\"], // 1st frame.
				 
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [" ", " ", "\\"], // 2nd frame.

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["'", " ", "\\"], // 3rd frame.

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["'", " ", "\\"], // 4th frame.
			],

	fFShoot: [
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["\"", "/", ">"], 

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 ["'", "/", ">"], 
				 
			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [".", "/", ">"], 

			 [" ", "o", " "],
			 ["[", "|", "-"],
			 [",", "/", ">"], 

			],

	still: [
		  	[" ", "o", " "],
		  	["[", "|", "-"],
		  	["'", "|", " "], 


		  	[" ", "o", " "],
		  	["[", "|", "-"],
		  	[" ", "|", " "], 

		  	[" ", "o", " "],
		  	["[", "|", "-"],
		  	[" ", "|", " "], 

		  	[" ", "o", " "],
		  	["[", "|", "-"],
		  	[" ", "|", " "], 
		  ],


	//--------------------ENEMY------------------------
	enemy1: [
		  	[" ", "|", ""],
		  	["-", "o", "-"],
		  	[" ", "|", ""], 

		  	[" ", "", ""],
		  	["-", "o", "-"],
		  	[" ", "", ""], 

		  	[" ", "", " "],
		  	["-", "o", "-"],
		  	[" ", "", ""], 

		  	[" ", "", ""],
		  	["-", "o", "-"],
		  	[" ", "", ""], 
		  ],
	enemy2: [
		  	[" ", "|", ""],
		  	["[", "o", "]"],
		  	[" ", "|", ""], 

		  	[" ", "|", ""],
		  	["[", "o", "]"],
		  	[" ", "|", ""], 

		  	[" ", "|", ""],
		  	["[", "o", "]"],
		  	[" ", "|", ""], 

		  	[" ", "/", ""],
		  	["[", "o", "]"],
		  	[" ", "\\", ""], 

		  ],

	enemy3: [
		  	[" ", ".", "/"],
		  	["-", "=", "-"],
		  	["/", " ", ""], 

		  	[" ", " ", "/"],
		  	["-", "=", "-"],
		  	["/", " ", ""], 

		  	[" ", " ", "/"],
		  	["-", "=", "-"],
		  	["/", " ", ""], 

		  	[" ", " ", "/"],
		  	["-", "=", "-"],
		  	["/", " ", ""], 
		  ],

	//--------------------ENEMY-BOSS-------------------
	enemy4: [
	["_", "_", "_", "/", "_", "_", "_", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", "/", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", ",", "-", "-", ",", " ", " ", " ", " ", " ", " ", "_", ],
	["_", "/", "_", "|", "_", "|", "=", "=", "=", "=", "=", "`", "|", ],
	["\\", "_", "_", "_", "_", "/", " ", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", " ", "\\", " ", " ", " ", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", " ", "|", "\\", " ", " ", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", ",", "-", "-", ",", " ", " ", " ", " ", " ", " ", "_", ],
	["_", "/", "_", "|", "_", "|", "=", "=", "=", "=", "=", "`", "\\", ],
	["\\", "_", "_", "_", "_", "/", " ", " ", " ", " ", " ", " ", " ", ],
	["_", "_", "_", "|", "_", "_", "_", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", ",", "-", "-", ",", " ", " ", " ", " ", " ", " ", "_", ],
	["_", "/", "_", "|", "_", "|", "=", "=", "=", "=", "=", "`", "-", ],
	["\\", "_", "_", "_", "_", "/", " ", " ", " ", " ", " ", " ", " ", ],
	["_", "_", "_", "/", "_", "_", "_", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", "/", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", ],
	[" ", " ", ",", "-", "-", ",", " ", " ", " ", " ", " ", " ", "_", ],
	["_", "/", "_", "|", "_", "|", "=", "=", "=", "=", "=", "`", "+", ],
	["\\", "_", "_", "_", "_", "/", " ", " ", " ", " ", " ", " ", " ", ],
		],

	enemy5: [
[" ", " ", " ", " ", "=", "+", " ", " ", " ", " ", " ", " ", " ", " ", "_", "_", "_", ],
[" ", "_", "_", "_", "[", "|", "]", "_", "_", "_", "_", "_", "_", "_", "|", "\\", "|", ],
["/", "_", "|", " ", " ", "O", " ", "O", " ", "O", " ", "O", " ", "/", " ", " ", "/", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", " ", ],
[" ", " ", " ", " ", "=", "+", " ", " ", " ", " ", " ", " ", " ", " ", "_", "_", "_", ],
[" ", "_", "_", "_", "[", "|", "]", "_", "_", "_", "_", "_", "_", "_", "|", "-", "|", ],
["/", "_", "|", " ", " ", "O", " ", "O", " ", "O", " ", "O", " ", "/", " ", " ", "/", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", " ", ],
[" ", " ", " ", " ", "=", "+", " ", " ", " ", " ", " ", " ", " ", " ", "_", "_", "_", ],
[" ", "_", "_", "_", "[", "|", "]", "_", "_", "_", "_", "_", "_", "_", "|", "/", "|", ],
["/", "_", "|", " ", " ", "O", " ", "O", " ", "O", " ", "O", " ", "/", " ", " ", "/", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", " ", ],
[" ", " ", " ", " ", "=", "+", " ", " ", " ", " ", " ", " ", " ", " ", "_", "_", "_", ],
[" ", "_", "_", "_", "[", "|", "]", "_", "_", "_", "_", "_", "_", "_", "|", "|", "|", ],
["/", "_", "|", " ", " ", "O", " ", "O", " ", "O", " ", "O", " ", "/", " ", " ", "/", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", " ", ],
],
    boss: [
[" ", "\\", "/", " ", " ", " ", " ", " ", " ", " ", " ", "_", "_", "\\", "_", "_", ],
[" ", "/", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\\", " ", ],
[" ", "|", "=", "|", "_", "_", "_", "_", "_", "_", "_", "_", "|", "=", "|", " ", ],
["/", "_", "_", "/", "O", " ", "O", " ", " ", "O", " ", "O", "\\", "_", "_", "\\", ],

["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", ],
["_", "_", "\\", "_", "_", " ", " ", " ", " ", " ", " ", "_", "_", "/", "_", "_", ],
[" ", " ", "|", "\\", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\\", " ", ],
[" ", "|", "=", "|", "_", "_", "_", "_", "_", "_", "_", "_", "|", "=", "|", " ", ],

["/", "_", "_", "/", "O", " ", "O", " ", " ", "O", " ", "O", "\\", "_", "_", "\\", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", ],
["_", "_", "/", "_", "_", " ", " ", " ", " ", " ", " ", "_", "_", "\\", "_", "_", ],
[" ", "/", "|", "\\", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\\", " ", ],

[" ", "|", "=", "|", "_", "_", "_", "_", "_", "_", "_", "_", "|", "=", "|", " ", ],
["/", "_", "_", "/", "O", " ", "O", " ", " ", "O", " ", "O", "\\", "_", "_", "\\", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", ],
["_", "_", "/", "_", "_", " ", " ", " ", " ", " ", " ", " ", " ", "/", "_", "_", ],

[" ", "/", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", "/", "|", " ", " ", ],
[" ", "|", "=", "|", "_", "_", "_", "_", "_", "_", "_", "_", "|", "=", "|", " ", ],
["/", "_", "_", "/", "O", " ", "O", " ", " ", "O", " ", "O", "\\", "_", "_", "\\", ],
["\\", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "/", ],
],

}

//THE HERO
var boy = {

	wid: 3,//size
	ht: 3,
	x: 1,//aix
	y: 0,
	_x: 0,//previous aix
	_y: 0,
	step: {x: 0, y: 0},//step width
	levelNum : 0,
	levelStep:[10,20,50,100,500],

	bullets: [],	
	bulletIndex: 0,
	bulletLevel: 0,
	bulletNum: 1,

	body: pic.fUShoot,
	
					
	upgrade : function(){
			boy.levelNum = 
				score > boy.levelStep[4] ?  5 :
				score > boy.levelStep[3] ?  4 :
				score > boy.levelStep[2] ?  3 :
				score > boy.levelStep[1] ?  2 :
				score > boy.levelStep[0] ?  1 : 0 ;

			switch( boy.levelNum ){
				case 0 : boy.bulletNum = 1; break;
				case 1 : boy.bulletNum = 3; break;
				case 2 : boy.bulletNum = 5; break;
				case 3 : boy.bulletNum = 10; break;
				case 4 : boy.bulletNum = 30; break;
			}
			
			boy.upgradeWp(boy.levelNum);

	},

	upgradeWp: function(level){
					if(level == boy.bulletLevel ){
				    	boy.bullets = [];
						for( var i = 0; i < boy.bulletNum; i++){
							boy.bullets[i] = new Bullet();
						}
						boy.bulletLevel++;
					}
			   },

	update: function(){
			boy.upgrade();
			display.drawPic(boy, count);

			//update bullets' position
			for ( var i = 0; i < boy.bullets.length; i++){
				boy.bullets[ i ].update();
				boy.bullets[ i ].render();
			}

			//update position and action;
			boy.step.y = 0; 
			boy.step.x = 0;
			boy.body = pic.still;

			kboard.handler();
			
			boy.x = boy._x + boy.step.x; 		
			boy.y = boy._y + boy.step.y; 		

			(boy.y > (display.wid-boy.wid)) ? (boy.y=boy._y = (display.wid-boy.wid)):
		 	(boy.y < 0 ) ? boy.y=boy._y = 0:
			boy._y=boy.y;

			(boy.x > (display.ht-boy.ht)) ? (boy.x = boy._x = (display.ht-boy.ht)):
			(boy.x < 0) ? boy.x = boy._x = 0:
			boy._x = boy.x;

			//update level info

	},

	reset:function(){
			//reset position;
			  boy._x= boy.x = 1;
			  boy._y= boy.y = 0;
			  boy.step.x = 0;
			  boy.step.y = 0;
			  boy.levelNum = 0;

			  score = 0;

			//reset bullets' behaviour.
			  boy.bulletIndex = 0;
			  boy.bulletLevel = 0;
			  boy.bulletNum = 0;
			  for( var i = 0; i < boy.bullets.length ; i++){
				  boy.bullets[i].active = false;
			  }

			  //reset enemies' behaviour.
			  for( var i = 0; i < enemyList.length-1; i++){
				  enemyList[i].reset();
			  }
		  }
	
}

//DRAW SCREEN
var display = { 
	wid: 100,
	ht: 24,

	clear: 
	function(){
		for(var row = 0; row < buffer.length; row++)
			for( var col = 0; col < buffer[row].length; col++)
				buffer[row][col] = " ";
	},

	drawDot:
	function(x, y, body){
		buffer[Math.floor(x)][Math.floor(y)] = body;
	},

	drawStr:
	function(str, x, y){

		if (arguments.length != 3 ){
			var x = Math.floor(display.ht/2);
			var y = Math.floor((display.wid-str.length)/2);
		}

		for(var c = 0; c < str.length; c++)
			buffer[x][y+c] = str.charAt(c);
	},
	
	drawPic:
	function(o, counter){
		frameTotal = o.body.length/o.ht;
		frameNow = counter % frameTotal;
		for(var r = 0; r < o.ht; r++)
			for(var c = 0; c < o.wid; c++)
				buffer[Math.floor(o.x)+r][Math.floor(o.y)+c] = o.body[r+frameNow*o.ht][c];	
	},


	flush:
	function(){
		  var cont = "";
		  for (var r = 0; r < display.ht; r++){
			  for(var c = 0; c < display.wid; c++){
				  cont += buffer[r][c] || " ";
			  }
			  cont += "\n";
		  }
		  pre.innerHTML = cont;
  }
}


function Bullet(){
	this.x = 0;
	this.y = 0;
	this._x = 0, 
	this._y = 0,
	this.wid = 1;
	this.ht = 1;
	this.step={x: 0, y: 0};
	this.body = pic.bullet;
	this.active = false;
};

Bullet.prototype.update = function(){
	if (this.active){
		this.x = this._x + this.step.x;
		this.y = this._y + this.step.y;
		if(this.x < 0 || this.x > display.ht || this.y < 0 || this.y > display.wid)
			this.active = false;
	}
};

Bullet.prototype.render= function(){
	if( !this.active ) return;
	this._y += .001;


	this.body = pic["bullet"+boy.levelNum]
	display.drawDot(this.x, this.y, this.body);

	this._x = this.x;
	this._y = this.y;
};

Bullet.prototype.shoot = function( x, y){
	if( ! this.active ){
		this.active = true;
		this._x = x;
		this._y = y;
		this.x = x;
		this.y = y;
		this.step.y = 1.5;
	}
};

//THE ENEMY
function Enemy(x, y){
	this.x = x;
	this.y = y;
	this.step = {x: 0, y:-Math.random(0,1)};
	this.body = pic["enemy" + rand(1,5)];
	this.ht= this.body.length/4;
	this.wid = this.body[0].length;
}

Enemy.prototype.reset = function(){
	this.x = rand(0, display.ht-this.ht);
	this.y = rand(display.wid-this.wid, (display.wid-this.wid)*1.5);
};

Enemy.prototype.update = function(){
	this.x += this.step.x;
	this.y += this.step.y;
	if(this.y < 0){this.reset();}
	display.drawPic(this, count);
};

Enemy.prototype.collide = function( obj ){
	return obj.y + obj.wid > this.y && obj.y < this.y + this.wid &&
		   obj.x + obj.ht > this.x && obj.x < this.x + this.ht;
}



var enemyList = [];
for( var i = 0; i < 7; i++){
	var e = new Enemy(rand(0, display.ht-this.ht), display.wid-this.wid);
	e.reset();
	enemyList[ i ] = e;
}

var renderEnemy = function(){
		for( var i = 0; i < enemyList.length-1; i++){
			enemyList[ i ].update();
			if( enemyList[ i ].collide(boy)){
				kboard.reset();
				state = 2;
			}

			for( var b = 0; b < boy.bullets.length ; b ++){
				if ( boy.bullets[b].active && enemyList[i].collide(boy.bullets[b])){
					enemyList[i].reset();
					score ++;
					boy.bullets[b].active = false;
				}
			}
		}
		
}
//THE BOSS
function Boss(x, y){
	this.x =x;
	this.y =y;
	this.step = {x: 1, y: 1};

	this.body = pic.boss;
	this.ht = this.body.length/4;
	this.wid = this.body[0].length;

	this.health = 1000;
	//this.weapon = {nom: pic.bullet6, spe: pic.rocket};

}
Boss.prototype.update = function(){

	display.drawPic(this, count);

	this.x += this.step.x;
	this.y += this.step.y;
	
	if(this.x < 1 || this.x > (display.ht-this.ht-1)){ this.step.x *= -1;}
	if(this.y < 1 || this.y > (display.wid-this.wid-1)){ this.step.y *= -1;}
	
	if(this.collide(boy)){
		resetGame();
		boss.reset();
		state = 2;
	}

	for( var b = 0; b < boy.bullets.length ; b ++){
		if ( boy.bullets[b].active && this.collide(boy.bullets[b])){
			this.health--;
			score++;
			boy.bullets[b].active = false;
		}
	}

	if (this.health <= 0){ display.drawStr("YOU WIN");resetGame();state=0;}
}
Boss.prototype.collide = function(obj){
	return obj.y + obj.wid > this.y && obj.y < this.y + this.wid &&
		   obj.x + obj.ht > this.x && obj.x < this.x + this.ht;

}

Boss.prototype.reset = function(){
	this.x = 1;
	this.y = 80;
	this.health = 1000;
}

boss = new Boss(1, 80);
//HANDLE THE KEYBOARD
var kboard = {
		list: {},
		hitList: {},
		justHit: {},

		left: 37,
		up: 38,
		right: 39,
		down: 40,
		space: 32,
		isDown: 
		function(key){
			return kboard.list[key] == true;
		},

		isHit: 
		function(key){
			if( kboard.hitList[ key ]){
				kboard.hitList[ key ] = false;
				return true;
			}
			return false;
		},

		reset: function(){
					for (var i = 0; i < 255; i++){
						kboard.list[i] = false;
						kboard.hitList[i] = false;
					}
			   },
		
		handler: function(){
				if(kboard.isDown( kboard.left)){
					boy.body = pic.fBShoot;
					boy.step.x = 0;
					boy.step.y = -1;
				}
				if(kboard.isDown( kboard.right)){
					boy.body = pic.fFShoot;
					boy.step.x = 0; 
					boy.step.y = 1;
				}
				if(kboard.isDown( kboard.up)){
					boy.body = pic.fUShoot;
					boy.step.x = -.5; 
					boy.step.y = 0;
				}
				if(kboard.isDown( kboard.down)){
					boy.body = pic.fDShoot;
					boy.step.x = .5; 
					boy.step.y = 0;
				}
				
				if(kboard.isDown( kboard.space) && ms() - shootTimer > 50){

					boy.bullets[boy.bulletIndex].shoot(boy.x + 1, boy.y+boy.wid+1);

					boy.bulletIndex++ ;

					if (boy.bulletIndex > boy.bullets.length - 1){
						boy.bulletIndex = 0;	
					}
					shootTimer = ms();
				}

			}
				

		
}

document.onkeydown = function(event){
		var e = event || windwo.event || arguments.callee.caller.arguments[0];
		var kc = e.keyCode;
		kboard.list[kc] = true;
		if( !kboard.justHit[kc]){
			kboard.justHit[kc] = true;
			kboard.hitList[kc] = true;
		}
};

document.onkeyup = function(e){
	var kc = e.keyCode;
	kboard.list[kc] = false;
	kboard.justHit[kc] = false;
	kboard.hitList[kc] = false;
}

/*
** GLOBAL VAR
*/
var count = 4; //for producing frame num.
var score = 0;
var state = 0;
var shootTimer = 0;
var pre= document.getElementById("screen");
var buffer = new Array(display.ht);


for( var i = 0; i < buffer.length; i++)
	buffer[i] = new Array(display.wid);

//FUNCTIONS | UTILS
function rand(l, m){
	return Math.floor(Math.random()*(m-l+1)+l);
}
function ms(){
	return new Date().getTime();
}
function notice(str){
	var text_y = Math.floor(display.ht/2);
	var text_x = Math.floor((display.wid-str.length)/2);
	buffer[text_y][text_x] = str;
	display.flush();

}

function info(){
	var levelBar = 20;
	var lBar = "";
	var progress = Math.floor(score/boy.levelStep[boy.levelNum]*levelBar);
	for( var c = 0; c < levelBar; c++){
		 lBar += c < progress ?  "=" : '-'
	}

	display.drawStr('score: '+score+' - level: '+boy.levelNum+
					' ['+lBar+'] '+score+'/'+boy.levelStep[boy.levelNum]+" boss's health:"+boss.health, 0, 0);
}

/*
** THE GAME MAIN LOOP 
*/



function resetGame(){
	boy.reset();
	kboard.reset();
//	boss.reset();
}
function menu(){

	display.clear();
	display.drawStr('Press "SPACE" to start.')
	display.flush();

	if (kboard.isHit(kboard.space)){
		resetGame();
		state = 1;
	}
}

function gameOver(){

	display.clear();
	display.drawStr('GAME OVER | score: '+score);
	display.flush();

	if (kboard.isHit(kboard.space))
		state = 0;
}

function game(){
	display.clear();

	boy.update();
	if( boy.levelNum == 5 ){
		boss.update();	
	}else{
		renderEnemy();
	}

	info();

	display.flush();
	count ++;
}

function gameloop(){
	switch( state ){
		case 0: menu();break;
		case 1: game();break;
		case 2: gameOver();break;
	}
}

setInterval(gameloop, 20);
