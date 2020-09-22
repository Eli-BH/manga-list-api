const cors = require("cors");
const app = require("./app");

const port = process.env.PORT;
app.use(cors());
app.get("", (req, res) => {
  res.send(`Welcome to the ricefields server`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
