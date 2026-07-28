(function(){
  const navToggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');
  if(!navToggle || !sidebar || !overlay || !sidebarClose) return;

  function openSidebar(){
    sidebar.classList.add('open');
    overlay.classList.add('open');
    navToggle.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar(){
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function(){
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);
  sidebarClose.addEventListener('click', closeSidebar);
  document.querySelectorAll('.sidebar-links a').forEach(function(a){
    a.addEventListener('click', closeSidebar);
  });
})();
