const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routers/project_data");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://perammahendra60:mahi123@projectmanagement.8loc9uv.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log("db not connected", error);
  });

app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);
const port = 5000 || 8000;

app.get("/", (req, res) => {
  return res.send("servernot running");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
