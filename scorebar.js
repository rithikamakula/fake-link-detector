fetch("https://your-backend.onrender.com/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: userInputUrl })
})
.then(res => res.json())
.then(data => {
    // Display data.score in progress bar
    // Show data.reasons as detailed info
});
