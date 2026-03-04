// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebarLinks = sidebar.querySelectorAll('a');

// Function to close sidebar
const closeSidebarMenu = () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
};

// Toggle sidebar when hamburger is clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// Close sidebar when close button is clicked
closeSidebar.addEventListener('click', closeSidebarMenu);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebarMenu);
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        closeSidebarMenu();
    }
});
