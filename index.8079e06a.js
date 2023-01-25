var btn=$("#scrollup-button");$(window).scroll((function(){$(window).scrollTop()>300?btn.addClass("show"):btn.removeClass("show")})),btn.on("click",(function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},"300")}));
//# sourceMappingURL=index.8079e06a.js.map
