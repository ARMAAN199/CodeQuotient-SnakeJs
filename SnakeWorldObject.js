/* Base class for objects in Snake World */
function SnakeWorldObject() {}

SnakeWorldObject.prototype.getX = function() {
  // return x coordinate
  return this.x_position;
};
SnakeWorldObject.prototype.getY = function() {
  // return y coordinate
  return this.y_position;
};
SnakeWorldObject.prototype.setX = function(newX) {
  // set current object's x coordinate
  this.x_position = newX;
};
SnakeWorldObject.prototype.setY = function(newY) {
  // set current object's y coordinate
 this.y_position = newY;
};

// Requires another SnakeWorldObject
SnakeWorldObject.prototype.isSameLocation = function(snakeWorld) {
  // check if passed object is at the same location as current object.
  if(snakeWorld.getX() == this.getX() && snakeWorld.getY() == this.getY())
  return true;
  else return false;
};
