//.js-pr-togglecontent
(function($){
    var $togglecontentlink = $(".js-pr-togglecontent");

    if ($togglecontentlink.length == 0) {
        return;
    }

    $togglecontentlink.on("click", function(event){
        event.preventDefault();
        var $this = $(this);
        var toggleSelector = $this.attr("data-toggle-selector");
        $this.toggleClass("active");
        $(toggleSelector).fadeToggle("active");
    });
})(jQuery);
