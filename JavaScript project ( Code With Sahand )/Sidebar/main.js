const sidebar = document.querySelector('#bar-icon'),
  sidebarContainer = document.querySelector('.sidebar'),
  closingBtn = document.querySelector('.sidebar-header i');

sidebar.addEventListener('click', () => {
  sidebarContainer.classList.toggle('show-sidebar');
});

closingBtn.addEventListener('click', () => {
  sidebarContainer.classList.remove('show-sidebar');
});
