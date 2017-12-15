(function() {
    'use strict';

    function clickHandler(event) {
        console.log(event.target.textContent);
        var lbl1 = document.querySelector("#lbl1");
        lbl1.textContent = event.target.textContent + " has been clicked";
    }

    function onLoadHandler(){
        var button1 = document.querySelector("#btn1");
        button1.addEventListener("click", clickHandler);
    }

    document.addEventListener("readystatechange", onLoadHandler);
})();