namespace fireworks {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let rockets: Rocket[] = [];
    let rocket: Rocket;
    let particleAmount: number = 100;
    let sizeSlider: HTMLInputElement;
    let sizeSliderValue: number = 25;
    let lifetimeSlider: HTMLInputElement;
    let lifetimeSliderValue: number = 35;
    let color1Picker: HTMLInputElement;
    let color1PickerValue: string = "#7720B1";
    let radioSquare: HTMLInputElement;
    let radioTriangle: HTMLInputElement;
    let radioCircle: HTMLInputElement;
    let particleShape: string = "circle";
    let saveButton1: HTMLButtonElement;
    let saveButton2: HTMLButtonElement;
    let saveButton3: HTMLButtonElement;
    let loadButton1: HTMLButtonElement;
    let loadButton2: HTMLButtonElement;
    let loadButton3: HTMLButtonElement;
    let form: HTMLFormElement;
    let database: any;

    async function handleLoad(): Promise<void> {

        sizeSlider = document.getElementById("sizeSlider") as HTMLInputElement;
        lifetimeSlider = document.getElementById("lifetimeSlider") as HTMLInputElement;
        color1Picker = document.getElementById("color1Picker") as HTMLInputElement;
        radioSquare = document.getElementById("square") as HTMLInputElement;
        radioTriangle = document.getElementById("triangle") as HTMLInputElement;
        radioCircle = document.getElementById("circle") as HTMLInputElement;
        saveButton1 = <HTMLButtonElement>document.getElementById("saveButton1") as HTMLButtonElement;
        saveButton2 = <HTMLButtonElement>document.getElementById("saveButton2") as HTMLButtonElement;
        saveButton3 = <HTMLButtonElement>document.getElementById("saveButton3") as HTMLButtonElement;
        loadButton1 = <HTMLButtonElement>document.getElementById("loadButton1") as HTMLButtonElement;
        loadButton2 = <HTMLButtonElement>document.getElementById("loadButton2") as HTMLButtonElement;
        loadButton3 = <HTMLButtonElement>document.getElementById("loadButton3") as HTMLButtonElement;
        form = <HTMLFormElement>document.querySelector("form");


        async function loadRockets() {
            const response = await fetch('https://my-json-server.typicode.com/Leech1208/EIA2_Endabgabe/saveslots');
            database = await response.json();
        }
        loadRockets();

        form.addEventListener("change", handleChange);
        saveButton1.addEventListener("click", writeSlot1);
        saveButton2.addEventListener("click", writeSlot2);
        saveButton3.addEventListener("click", writeSlot3);
        loadButton1.addEventListener("click", loadSlot1);
        loadButton2.addEventListener("click", loadSlot2);
        loadButton3.addEventListener("click", loadSlot3);

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        canvas.addEventListener("click", shoot);
        window.setInterval(update, 20);
    }

    function handleChange(_event: Event): void {

        sizeSliderValue = parseInt(sizeSlider.value);
        lifetimeSliderValue = parseInt(lifetimeSlider.value);
        color1PickerValue = color1Picker.value;
        checkShape();
    }

    function checkShape(): void {
        if (radioSquare.checked == true)
            particleShape = "square";
        if (radioTriangle.checked == true)
            particleShape = "triangle";
        if (radioCircle.checked == true)
            particleShape = "circle";
    }

    async function writeSlot1(_event: Event): Promise<void> {
        database[0].save1["size"] = sizeSliderValue;
        database[0].save1["lifetime"] = lifetimeSliderValue;
        database[0].save1["shape"] = particleShape;
        database[0].save1["color"] = color1PickerValue;
        console.log(database[0]);
    }

    function writeSlot2(_event: Event): void {
        database[0].save2["size"] = sizeSliderValue;
        database[0].save2["lifetime"] = lifetimeSliderValue;
        database[0].save2["shape"] = particleShape;
        database[0].save2["color"] = color1PickerValue;
        console.log(database[0]);
    }
    function writeSlot3(_event: Event): void {
        database[0].save3["size"] = sizeSliderValue;
        database[0].save3["lifetime"] = lifetimeSliderValue;
        database[0].save3["shape"] = particleShape;
        database[0].save3["color"] = color1PickerValue;
        console.log(database[0]);
    }
    
    function loadSlot1(_event: Event): void {
        sizeSliderValue = database[0].save1["size"];
        sizeSlider.value = database[0].save1["size"];
        lifetimeSliderValue = database[0].save1["lifetime"];
        lifetimeSlider.value = database[0].save1["lifetime"];
        particleShape = database[0].save1["shape"];
        switch (database[0].save1["shape"]) {
            case "circle":
                radioCircle.checked = true;
                radioSquare.checked = false;
                radioTriangle.checked = false;
                break;
            case "triangle":
                radioCircle.checked = false;
                radioSquare.checked = false;
                radioTriangle.checked = true;
                break;
            case "square":
                radioCircle.checked = false;
                radioSquare.checked = true;
                radioTriangle.checked = false;
                break;
         }
        color1PickerValue = database[0].save1["color"];
        color1Picker.value = database[0].save1["color"];
    }
    function loadSlot2(_event: Event): void {
        sizeSliderValue = database[0].save2["size"];
        sizeSlider.value = database[0].save2["size"];
        lifetimeSliderValue = database[0].save2["lifetime"];
        lifetimeSlider.value = database[0].save2["lifetime"];
        particleShape = database[0].save2["shape"];
        switch (database[0].save2["shape"]) {
            case "circle":
                radioCircle.checked = true;
                radioSquare.checked = false;
                radioTriangle.checked = false;
                break;
            case "triangle":
                radioCircle.checked = false;
                radioSquare.checked = false;
                radioTriangle.checked = true;
                break;
            case "square":
                radioCircle.checked = false;
                radioSquare.checked = true;
                radioTriangle.checked = false;
                break;
         }
        color1PickerValue = database[0].save2["color"];
        color1Picker.value = database[0].save2["color"];
    }

    function loadSlot3(_event: Event): void {
        sizeSliderValue = database[0].save3["size"];
        sizeSlider.value = database[0].save3["size"];
        lifetimeSliderValue = database[0].save3["lifetime"];
        lifetimeSlider.value = database[0].save3["lifetime"];
        particleShape = database[0].save3["shape"];
        switch (database[0].save3["shape"]) {
            case "circle":
                radioCircle.checked = true;
                radioSquare.checked = false;
                radioTriangle.checked = false;
                break;
            case "triangle":
                radioCircle.checked = false;
                radioSquare.checked = false;
                radioTriangle.checked = true;
                break;
            case "square":
                radioCircle.checked = false;
                radioSquare.checked = true;
                radioTriangle.checked = false;
                break;
         }
        color1PickerValue = database[0].save3["color"];
        color1Picker.value = database[0].save3["color"];
    }

    export function shoot(_event: MouseEvent): void {
        for (let i = 0; i < particleAmount; i++) {
            rocket = new Rocket(new Vector(_event.clientX, _event.clientY), new Vector(20, 0), lifetimeSliderValue, sizeSliderValue, color1PickerValue, particleShape);
            rockets.push(rocket);
        }
    }

    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let rocket of rockets) {
            rocket.move(1 / 2);
            rocket.draw();
            crc2.globalAlpha = 0.3;
        }

        deleteExpendables();
    }

    function deleteExpendables(): void {
        for (let i: number = rockets.length - 1; i >= 0; i--) {
            if (rockets[i].expendable)
                rockets.splice(i, 1);
        }
    }
}