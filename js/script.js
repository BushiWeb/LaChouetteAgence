$(".scrollToTop").click(function(e) {
    e.preventDefault();
    scrollToTarget('1');
    document.activeElement.blur();
});