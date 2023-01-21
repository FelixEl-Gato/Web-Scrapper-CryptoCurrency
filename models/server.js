import express from "express";

class Server {
  constructor() {
    this.app = express();

    // this.middleware();

    this.routes();
  }

  middleware() {}

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(5050, () => {
      console.log("Server running on port 5050");
    });
  }
}

export default Server;
