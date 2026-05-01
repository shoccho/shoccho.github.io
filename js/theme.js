(function () {
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) return;

  function setLabel(theme) {
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", theme === "dark" ? "Switch to light mode (Alt + T)" : "Switch to dark mode (Alt + T)");
  }

  setLabel(document.documentElement.dataset.theme || "light");

  toggle.addEventListener("click", function () {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setLabel(next);
  });
})();
