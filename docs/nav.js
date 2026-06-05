// AfterIran Wiki — shared navigation
// Add <script src="nav.js"></script> before </body> on every page.
// The sidebar <nav> is injected here so it only needs updating in one place.

(function () {
  const NAV = [
    {
      section: "Sources",
      links: [
        { href: "geoecon-may2026.html", text: "GeoEcon May 2026" },
      ]
    },
    {
      section: "Concepts",
      links: [
        { href: "strait-of-hormuz.html",       text: "Strait of Hormuz" },
        { href: "insurance-regionalization.html", text: "Insurance Regionalization" },
        { href: "bif-europe-risk.html",         text: "BIF — European Risk Shift" },
        { href: "us-china-relations.html",      text: "US–China Relations" },
        { href: "food-crisis-risk.html",        text: "Food Crisis Risk" },
        { href: "defense-energy-resilience.html", text: "Defense Energy Resilience" },
        { href: "ai-talent-race.html",          text: "AI Talent Race" },
      ]
    },
    {
      section: "Analysis & Q&A",
      links: [
      ]
    }
  ];

  const currentPage = location.pathname.split("/").pop() || "index.html";

  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  let html = `<a class="wiki-title" href="index.html">🌍 AfterIran Wiki</a><nav>`;

  for (const group of NAV) {
    if (group.links.length === 0) continue;
    html += `<div class="nav-section">`;
    html += `<span class="nav-section-title">${group.section}</span>`;
    for (const link of group.links) {
      const active = link.href === currentPage ? ' class="active"' : '';
      html += `<a href="${link.href}"${active}>${link.text}</a>`;
    }
    html += `</div>`;
  }

  html += `</nav>`;
  sidebar.innerHTML = html;
})();
