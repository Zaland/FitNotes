import app from "./app";

// start express server
const server = app.listen(3000, () => {
  console.log(`server started at http://localhost:3000`);
});

export default server;
