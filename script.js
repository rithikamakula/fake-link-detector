function checkLink() {
    const url = document.getElementById('urlInput').value;
    const score = getFakeScore(url);
    const scoreBar = document.getElementById('scoreBar');
    const message = document.getElementById('message');
    const scoreText = document.getElementById('scoreText');
    const resultBox = document.getElementById('resultBox');
  
    resultBox.style.display = 'block';
    scoreBar.style.width = score + '%';
    scoreBar.style.backgroundColor = score > 70 ? 'green' : score > 40 ? 'orange' : 'red';
    scoreText.innerText = 'Score: ' + score;
  
    message.innerText = score > 70 ? 'Link Appears Safe ✅' :
                        score > 40 ? 'Link May Be Suspicious ⚠️' :
                        'Link Likely Dangerous ❌';
  }
  
  function getFakeScore(url) {
    // TODO: Replace this logic with actual backend call
    if (url.includes("login") || url.includes("update")) return 30;
    if (url.includes("gov") || url.includes("secure")) return 80;
    return 60;
  }
  