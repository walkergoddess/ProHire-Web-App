async function generateCoverLetter() {
  const resume = document.getElementById("resumeInput").value;
  const jobDescription = document.getElementById("jobInput").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resume, jobDescription })
  });

  const data = await response.json();
  document.getElementById("output").value = data.coverLetter;
}
add script.js
