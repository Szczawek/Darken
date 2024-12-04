import fs from "fs";
async function videoLoader(req, res) {
  const path = "./content/components/Test.mp4";
  const size = fs.statSync(path).size;
  const range = req.headers.range;

  // 1MB
  const chunkSize = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize - 1, size - 1);

  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${size}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4", 
    "Cross-Origin-Resource-Policy": "cross-origin",
  };

  res.writeHead(206, headers);
  const stream = fs.createReadStream(path, {
    start,
    end,
  });
  stream.pipe(res);
}
export { videoLoader };
