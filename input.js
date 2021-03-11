// Stores the active TCP connection object.
let connection;

let direction = "left";

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  setInterval(() => { 
    sendMove();
    }, 100);
  stdin.resume();
  return stdin;
};

const sendMove = () => {
  if (direction === "up"){
    connection.write("Move: up");
  }
  if (direction === "down"){
    connection.write("Move: down");
  }
  if (direction === "left"){
    connection.write("Move: left");
  }
  if (direction === "right"){
    connection.write("Move: right");
  }
}
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'w' && direction !== "down") {
    direction = "up";
  }

  if (key === 's' && direction !== "up") {
    direction = "down";
  }

  if (key === 'a' && direction !== "right") {
    direction = "left";
  }

  if (key === 'd' && direction !== "left") {
    direction = "right";
  }

  if (key === 't') {
    connection.write("Say: I'm using tilt controls");
  }

  if (key === 'b') {
    connection.write("Say: Bees?");
  }

  if (key === 'q') {
    connection.write("Say: It's High Noon");
  }

  if (key === 'y') {
    connection.write("Say: Y u heff 2 b med");
  }
  
  if (key === 'i') {
    connection.write("Say: iz only gaem");
  }
};

module.exports = setupInput;