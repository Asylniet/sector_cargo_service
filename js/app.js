window.addEventListener('DOMContentLoaded', function() {
    if(window.location.hash) {
        setTimeout(()=>{
            onClick(window.location.hash);
        }, 10)
    }
    const anchors = document.querySelectorAll("a[href^='#']");
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const link = anchor.getAttribute('href');
            onClick(link);
        });
    });
});

function onClick(link) {
    window.location = link; 
    const top = document.getElementById(link.slice(1)).offsetTop;
    window.scrollTo({
        top: top - 70,
        left: 0,
        behavior: 'smooth',
    });
}