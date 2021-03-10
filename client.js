const net = require('net');
/**
 * connects to the server and creates a socket object conn
 * @returns socket object conn
 */
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
  });

  return conn;
};

module.exports = connect;