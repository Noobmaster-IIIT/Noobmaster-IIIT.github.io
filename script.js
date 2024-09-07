// Filter functionality for projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

// Add click event to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Loop through all project items
        projectItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            // Show all items if the category is "all"
            if (category === 'all') {
                item.style.display = 'flex'; // Show all items
            } else {
                // Show items matching the selected category, hide others
                if (itemCategory === category) {
                    item.style.display = 'flex'; // Show matching item
                } else {
                    item.style.display = 'none'; // Hide non-matching item
                }
            }
        });

        // Update active class for the buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button functionality
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block'; // Show the button
    } else {
        backToTopBtn.style.display = 'none'; // Hide the button
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

