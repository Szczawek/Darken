async function uploadByServer(video) {
  const form = new FormData();
  form.append("video", video);
  const options = {
    method: "POST",
    credentials: "include",
    body: form,
  };
  const res = await fetch(`${process.env.VITE_URL}/api/upload-video`, options);
  if (!res.ok) throw res.status;
  console.log("Ok");
}
export { uploadByServer };
