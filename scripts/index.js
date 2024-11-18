
function on(el, events, fn, target, params) {
    for (var ev of events) {
        el.addEventListener(ev, fn.bind(target, params));
    }
}


//初始化弹出菜单逻辑
(function () {
    var menu = document.getElementsByClassName('menu')[0]
    var menuLinks = document.getElementsByClassName('menu-links')[0]
    if (!menu || !menuLinks) throw new Error('not found .menu or .menu-links');

    on(menu, ['click'], function () {
        if (menuLinks.offsetHeight > 0) {
            menuLinks.style.maxHeight = '0px';
        } else {
            menuLinks.style.maxHeight = '500px';
        }
        return false;
    });
})();