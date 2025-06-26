async function loadRSS() {
  const url = "https://api.rss2json.com/v1/api.json?rss_url=https://scitechdaily.com/feed/";
  const container = document.getElementById("rss-feed");

  try {
    const res = await fetch(url);
    const data = await res.json();
    let output = "<h3>Latest Science News</h3><ul>";
    data.items.slice(0, 5).forEach(item => {
      output += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`;
    });
    output += "</ul>";
    container.innerHTML = output;
  } catch (error) {
    container.innerHTML = "<p>Failed to load news. Please try again later.</p>";
  }
}
window.onload = loadRSS;
