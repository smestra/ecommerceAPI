import express from "express";

import { routerApi } from "./src/controllers/routes";

const app = express();
const PORT = 3000;
app.use(express.json());
routerApi(app);

app.listen(PORT, function () {
  console.log("Application running on: http://localhost:" + PORT);
});
