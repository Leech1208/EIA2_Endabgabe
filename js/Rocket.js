"use strict";
var fireworks;
(function (fireworks) {
    class Rocket {
        constructor(_position, _velocity, _lifetime, _size, _color1, _shape) {
            this.color1 = "rgb(255, 221, 0)";
            this.color2 = "blue";
            this.shape = "circle";
            this.expendable = false;
            this.position = _position;
            this.velocity = new fireworks.Vector(0, 0);
            this.velocity.random(10, 20);
            this.lifetime = _lifetime;
            this.size = _size;
            this.color1 = _color1;
            this.shape = _shape;
        }
        draw() {
            switch (this.shape) {
                case "circle":
                    this.drawCircle();
                    break;
                case "triangle":
                    this.drawTriangle();
                    break;
                case "square":
                    this.drawSquare();
                    break;
            }
        }
        drawCircle() {
            fireworks.crc2.save();
            fireworks.crc2.fillStyle = this.color1;
            fireworks.crc2.beginPath();
            fireworks.crc2.ellipse(this.position.x, this.position.y, this.size, this.size, 0, 0, Math.PI * 2);
            fireworks.crc2.fill();
            fireworks.crc2.restore();
        }
        drawSquare() {
            fireworks.crc2.save();
            fireworks.crc2.fillStyle = this.color1;
            fireworks.crc2.beginPath();
            fireworks.crc2.fillRect(this.position.x - 1 * this.size, this.position.y - 1 * this.size, 2 * this.size, 2 * this.size);
            fireworks.crc2.fill();
            fireworks.crc2.restore();
        }
        drawTriangle() {
            fireworks.crc2.save();
            fireworks.crc2.fillStyle = this.color1;
            fireworks.crc2.beginPath();
            fireworks.crc2.moveTo(this.position.x - 1 * this.size, this.position.y + 1 * this.size);
            fireworks.crc2.lineTo(this.position.x + 2 * this.size, this.position.y + 0 * this.size);
            fireworks.crc2.lineTo(this.position.x - 1 * this.size, this.position.y - 1 * this.size);
            fireworks.crc2.fill();
            fireworks.crc2.restore();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    fireworks.Rocket = Rocket;
})(fireworks || (fireworks = {}));
//# sourceMappingURL=Rocket.js.map