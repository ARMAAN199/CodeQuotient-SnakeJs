var NUM_INITIAL_SECTIONS = 3;
// Directions
var UP = 0;
var UP_KEY_CODE = 38;
var DOWN = 1;
var DOWN_KEY_CODE = 40;
var LEFT = 2;
var LEFT_KEY_CODE = 37;
var RIGHT = 3;
var RIGHT_KEY_CODE = 39;

function Snake() {
  this.img = document.createElement('img');
  this.img.src = 'images/snake2.png';
  this.sections = [];
}

Snake.prototype = new SnakeWorldObject();

Snake.prototype.setupSnake = function(maxX, maxY) {
    var numsec = NUM_INITIAL_SECTIONS;
  // Set snake's starting coordinates
    // this.setX(Math.floor(Math.random() * maxX));
    // this.setY(Math.floor(Math.random() * maxY));
    var X = Math.floor(maxX / 2);
    var Y = Math.floor(maxY / 2);
    this.setX(X);
    this.setY(Y);
      for (var i = 1; i < numsec+1; i++) {
        var y = Y + 1;
        this.sections.unshift(new SnakeSection(X, y));
    }
    // var section = [this.getX(),this.getY()]
    // var section2 = [this.getX(),this.getY()-1]
    // var section3 = [this.getX(),this.getY()-2]
    // this.sections[0] = section3; 
    // this.sections.push(section2);   
    // this.sections.push(section);
  // create initial number of snake sections (snake length)
};

Snake.prototype.hasCollided = function(maxX, maxY) {
  // Check if snake has collided with itself or board boundaries.
  console.log(this.sections)
    if(this.getX() < 0 || this.getY() < 0 || this.getX() >= maxX || this.getY() >= maxY)
    {
  return true;
    }
    // for (var i=0; i<this.sections.length-1; i++)
    // {
    // if ((this.sections[i][0] == this.getX() && this.sections[i][1] == this.getY())) {return true}
    // }
  for(var i = 0; i < this.sections.length-1; i++){
      if(this.isSameLocation(this.sections[i]))
      return true;
  }
//   for(var i = 0; i < this.sections.length; i++){
//       if(this.isSameLocation(this.sections[i]))
//       return true;
//   }    
      return false;
};
// Snake.prototype.hasCollided = function(maxX, maxY) {
//   // Check if snake has collided with itself or board boundaries.
//     if(this.getX() < 0 || this.getY() < 0 || this.getX() >= maxX || this.getY() >= maxY)
//     {
//   return true;
//     }

//   for(var i = 0; i < this.sections.length; i++){
//       if(this.isSameLocation(this.sections[i]))
//       return true;
//   }
//   return false;
// };

Snake.prototype.endMove = function(didGrow) {
  if (!didGrow) {
     this.sections.shift();
  }
};
// Snake.prototype.endMove = function(didGrow) {
//   if (!didGrow) {
//   }
//   else{
//      NUM_INITIAL_SECTIONS++;
//   }
// };

Snake.prototype.startMove = function() {
  this.direction = this.nextDirection;
  // Move snake here
  if(this.direction==UP)
  {
  this.setY(this.getY()-1);
  }
  if(this.direction==DOWN)
  {
  this.setY(this.getY()+1);
  }
  if(this.direction==LEFT)
  {
  this.setX(this.getX()-1);
  }    
  if(this.direction==RIGHT)
  {
  this.setX(this.getX()+1);
  }
  var new_section = [this.getX(), this.getY()] 
  this.sections.push(new_section)
};

Snake.prototype.draw = function(context, spacing) {
  // Draw the complete snake
  for(var i=0; i<this.sections.length; i++)
  {
//    var hear = new SnakeSection(this.getX(), this.getY());
//   hear.draw(context, spacing)
  var hear = new SnakeSection(this.sections[i][0], this.sections[i][1]);
  hear.draw(context, spacing)    
  }
//   console.log("context" , context);
};

Snake.prototype.init = function(maxX, maxY) {
  this.setupListeners();
  this.setupSnake(maxX, maxY);
};

Snake.prototype.setupListeners = function() {
  this.direction = UP;
  this.nextDirection = UP;
  var _this = this;
  document.addEventListener('keydown', function(e) {
        e.preventDefault();
    // Set snake's nextDirection based on keypress.
        if(e.keyCode == 37) {
        _this.nextDirection = LEFT;
        }
        if(e.keyCode == 39) {
        _this.nextDirection = RIGHT;
        }
        if(e.keyCode == 38) {
        _this.nextDirection = UP;
        }
        if(e.keyCode == 40) {
        _this.nextDirection = DOWN;
        }
  }); 
};
