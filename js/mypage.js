(function () {
    "use strict";



    $('#toggle1, #toggle2, #toggle3, #toggle4, #toggle5').click(function(event) {
        event.preventDefault();
        $(this).parent().next().toggleClass('invisible');
    });

})();