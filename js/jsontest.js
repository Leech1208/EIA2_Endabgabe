"use strict";
var fireworks;
(function (fireworks) {
    let data = "";
    fetch("https://webuser.hs-furtwangen.de/~del/Nico/Rockets.json").then(function (response) {
        return response.json();
    })
        .then(function (myJson) {
        data = myJson;
        console.log(data);
    });
})(fireworks || (fireworks = {}));
//# sourceMappingURL=jsontest.js.map