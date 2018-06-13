$(function () {
    if (top.frames.length != 0) {
        setupForEmbedding();
    }
});

function setupForEmbedding() {
    $('#top-navigation').hide();
    $('#sidebar').hide();
    $('#footer').hide();
    $('body').addClass('embedded');
    $('#embed-nav-trigger-container').removeClass('d-none');
    $('#embed-nav-trigger').click(triggerFullscreenMenu);
    $('#embed-nav-close').click(closeFullscreenMenu);
}

function closeFullscreenMenu(e) {
    $('#embed-navigation').addClass('d-none');
    e.stopPropagation();
    return false;
}

function triggerFullscreenMenu(e) {
    $('#embed-navigation').removeClass('d-none');
    e.stopPropagation();
    return false;
}
