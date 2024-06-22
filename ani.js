// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('nav ul li a');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  $(function() {
                        $("#floating-video").draggable();
                    });
            });
    }
});
    }
});