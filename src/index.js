const dotenv = require("dotenv");
const app = require("./api/app");

dotenv.config();

const port = process.env.PORT || "3001";

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
