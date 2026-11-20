(function () {
  var box = document.getElementById('filters');
  if (!box) return;
  var rows = document.querySelectorAll('tbody tr[data-level]');
  var status = document.getElementById('filter-status');
  var levels = [['all', 'All treks'], ['easy', 'Easy'], ['moderate', 'Moderate'], ['hard', 'Hard']];
  function apply(level) {
    var shown = 0;
    rows.forEach(function (r) {
      var show = level === 'all' || r.getAttribute('data-level') === level;
      r.hidden = !show;
      if (show) shown++;
    });
    box.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-filter') === level ? 'true' : 'false');
    });
    if (status) status.textContent = 'Showing ' + shown + ' of ' + rows.length + ' treks';
  }
  levels.forEach(function (l) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = l[1];
    b.setAttribute('data-filter', l[0]);
    b.setAttribute('aria-pressed', l[0] === 'all' ? 'true' : 'false');
    b.addEventListener('click', function () { apply(l[0]); });
    box.appendChild(b);
  });
  apply('all');
})();
