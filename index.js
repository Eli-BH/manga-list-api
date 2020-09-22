const cors = require("cors");
const app = require("./app");

const port = process.env.PORT;

app.get("", (req, res) => {
  res.send(`Welcome to the ricefields server`);
});
app.use(cors());
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
