$(document).ready(function(){
    var menuItem = $('.header__menu-icon');
    menuItem.click(function(){
        $('body').toggleClass('menu--active')
    })
})