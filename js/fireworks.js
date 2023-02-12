"use strict";
var fireworks;
(function (fireworks) {
    class Rocket {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        create() {
            fireworks.crc2.fillStyle = "red";
            fireworks.crc2.beginPath();
            fireworks.crc2.ellipse(this.position.x, this.position.y, 20, 20, 0, 0, Math.PI * 2);
            fireworks.crc2.fill();
        }
        move() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.create();
        }
    }
    fireworks.Rocket = Rocket;
})(fireworks || (fireworks = {}));
//# sourceMappingURL=fireworks.js.map