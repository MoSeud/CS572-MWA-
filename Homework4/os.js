const os = require("os");
const Observable = require("events");

function check() {
  console.log("Checking your system...");
  const totalMemGB = os.totalmem() / 1024 / 1024 / 1024;
  if (totalMemGB < 4)
    return "This app needs atleast 4 GB of RAM";
    if (os.cpus().length < 2) return "Processor is not supported";
  return "System is checked successfully";
}
class Check extends Observable {
  constructor() {
    super();
  }
}

const checkOb = new Check();
checkOb.on("check", resp => console.log(resp));
checkOb.emit("check", check());