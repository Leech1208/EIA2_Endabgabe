namespace fireworks {
    export class Rocket {
        position: Vector;
        velocity: Vector;
        lifetime: number;
        size: number;
        color1: string = "rgb(255, 221, 0)";
        color2: string = "blue";
        shape: string = "circle";
        expendable: boolean = false;
        path: Path2D;

        constructor(_position: Vector, _velocity: Vector, _lifetime: number, _size: number, _color1: string, _shape: string) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 20);
            this.lifetime = _lifetime;
            this.size = _size;
            this.color1 = _color1;
            this.shape = _shape;
        }

        draw(): void {
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

        drawCircle(): void {
            crc2.save();
            crc2.fillStyle = this.color1;
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, this.size, this.size, 0, 0, Math.PI * 2);
            crc2.fill();
            crc2.restore();
        }

        drawSquare(): void {
            crc2.save();
            crc2.fillStyle = this.color1;
            crc2.beginPath();
            crc2.fillRect(this.position.x - 1 * this.size, this.position.y - 1 * this.size, 2 * this.size, 2 * this.size);
            crc2.fill();
            crc2.restore();
        }

        drawTriangle(): void {
            crc2.save();
            crc2.fillStyle = this.color1;
            crc2.beginPath();
            crc2.moveTo(this.position.x - 1 * this.size, this.position.y + 1 * this.size);
            crc2.lineTo(this.position.x + 2 * this.size, this.position.y + 0 * this.size);
            crc2.lineTo(this.position.x - 1 * this.size, this.position.y - 1 * this.size);
            crc2.fill();
            crc2.restore();
        }


        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
}