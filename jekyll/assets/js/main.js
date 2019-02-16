$(function () {
    if (top.frames.length != 0) {
        setupForEmbedding();
    }
    PlatformGuides.init();

    $('h2,h3,h4,h5').each(function () {
        $(this).html('<a class="anchor" href="#'+$(this).attr('id')+'"></a>' + $(this).text());
    });
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

var PlatformGuides = {
    init: function () {
        var os = this.getOS();
        if (os) {
            $('#platform-tabs-link-' + os).tab('show');
        }
    },

    getOS: function() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'macos';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'ios';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'windows';
        } else if (/Android/.test(userAgent)) {
            os = 'android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'linux';
        }

        return os;
    }
};
