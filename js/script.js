// Manage scroll to top
$(".scrollToTop").click(function(e) {
    e.preventDefault();
    scrollToTarget('1');
    document.activeElement.blur();
});

//Focus rejection on Escape
$(document).keyup(function(e) {
    if (e.key === "Escape") {
        document.activeElement.blur();
    }
});