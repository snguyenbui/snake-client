// Stores the active TCP connection object.
let connection;

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
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 'd') {
    connection.write("Move: right");
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