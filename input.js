let connection;
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_Key,
  keyMaps
} = require("./constants");

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    if (key === "\u0003") {
      process.exit();
    }

    if (key === MOVE_UP_KEY) {
      connection.write("Move: up");
    }

    if (key === MOVE_LEFT_KEY) {
      connection.write("Move: left");
    }

    if (key === MOVE_DOWN_KEY) {
      connection.write("Move: down");
    }

    if (key === MOVE_RIGHT_Key) {
      connection.write("Move: right");
    }

    for (let keys in keyMaps) {
      if (key === keys) {
        connection.write(`Say: ${keyMaps[key]}`);
      }
    }
  });

  return stdin;
};

module.exports = { setupInput };
