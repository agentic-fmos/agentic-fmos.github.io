// Mobile navigation toggle
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu when a link is clicked (mobile)
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Schedule: expand / collapse all talk abstracts
(function () {
  const button = document.querySelector('.schedule__toggle');
  const panels = Array.from(document.querySelectorAll('.sched__abstract'));
  if (!button || panels.length === 0) return;

  function sync() {
    const anyClosed = panels.some(function (d) { return !d.open; });
    button.textContent = anyClosed ? 'Expand all abstracts' : 'Collapse all abstracts';
    button.setAttribute('aria-expanded', String(!anyClosed));
  }

  button.addEventListener('click', function () {
    const anyClosed = panels.some(function (d) { return !d.open; });
    panels.forEach(function (d) { d.open = anyClosed; });
    sync();
  });

  panels.forEach(function (d) { d.addEventListener('toggle', sync); });
  sync();
})();
