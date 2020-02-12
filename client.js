const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: NMM");
  });
  return conn;
};

module.exports = { connect };
