"use strict";
var firework;
(function (firework) {
    class Rocket {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        create() {
            firework.crc2.fillStyle = "red";
            firework.crc2.beginPath();
            firework.crc2.ellipse(this.position.x, this.position.y, 20, 20, 0, 0, Math.PI * 2);
            firework.crc2.fill();
        }
        move() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.create();
        }
    }
    firework.Rocket = Rocket;
})(firework || (firework = {}));
//# sourceMappingURL=firework.js.map