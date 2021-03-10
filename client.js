const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: SUN");
    // conn.write("Move: up")
    // setInterval(() => {
    //   conn.write("Move: left") 
    // }, 50);
  });

  return conn;
};

module.exports = connect;