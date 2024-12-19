import { app, server,uploadMulter } from "./content/config/serverConfig.js";
import { videoLoader } from "./content/components/videoLoader.js";
import { uploadVideo } from "./content/components/video-action/uploadVideo.js";
import { connectionFirstWall } from "./content/security/connectionFirstWall.js";
app.get("/", (req, res) => {
  res.send("Hello there! Are you lost in my mind?");
});

// Routing with  authorization
app.use("/api", connectionFirstWall);
app.get("/video", videoLoader);

app.post("/api/upload-video",uploadMulter.single("video"), uploadVideo);
server.listen(process.env.PORT, () => {
  console.log(`https://127.0.0.1:${process.env.PORT}`);
});