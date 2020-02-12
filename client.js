const net = require("net");
const { IP, PORT } = require("./constants");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");

    conn.write("Name: NMM");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  return conn;
};

module.exports = { connect };
