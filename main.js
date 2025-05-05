document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play-song");

  playButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Get the video URL from the data-video-url attribute
      const videoUrl = btn.getAttribute("data-video-url");

      // Redirect the user to the video URL
      window.open(videoUrl, "_blank");
    });
  });
});
