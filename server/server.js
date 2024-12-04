import { app, server } from "./content/config/serverConfig.js";
import { videoLoader } from "./content/components/videoLoader.js";
app.get("/", (req, res) => {
  res.send("Hello there! Are you lost in my mind?");
});

app.get("/video", videoLoader);

server.listen(process.env.PORT, () => {
  console.log(`https://127.0.0.1:${process.env.PORT}`);
});
