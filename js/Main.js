"use strict";
var fireworks;
(function (fireworks) {
    window.addEventListener("load", handleLoad);
    let rockets = [];
    let rocket;
    let particleAmount = 100;
    let sizeSlider;
    let sizeSliderValue = 15;
    let lifetimeSlider;
    let lifetimeSliderValue = 20;
    let color1Picker;
    let color1PickerValue = "#7720B1";
    let radioSquare;
    let radioTriangle;
    let particleShape;
    let saveButton1;
    let saveButton2;
    let saveButton3;
    let loadButton1;
    let loadButton2;
    let loadButton3;
    let form;
    async function handleLoad() {
        sizeSlider = document.getElementById("sizeSlider");
        lifetimeSlider = document.getElementById("lifetimeSlider");
        color1Picker = document.getElementById("color1Picker");
        radioSquare = document.getElementById("square");
        radioTriangle = document.getElementById("triangle");
        saveButton1 = document.getElementById("saveButton1");
        saveButton2 = document.getElementById("saveButton2");
        saveButton3 = document.getElementById("saveButton3");
        loadButton1 = document.getElementById("loadButton1");
        loadButton2 = document.getElementById("loadButton2");
        loadButton3 = document.getElementById("loadButton3");
        form = document.querySelector("form");
        //let response: Response = await fetch("Data.json");
        //let content: string = await response.text();
        //let data: Data = JSON.parse(content);
        //generateContent(data);
        // loadJSON method to open the JSON file.
        async function loadNames() {
            const response = await fetch('https://my-json-server.typicode.com/Leech1208/EIA2_Endabgabe/save3');
            const names = await response.json();
            console.log(names);
            // logs [{ name: 'Joker'}, { name: 'Batman' }]
        }
        loadNames();
        form.addEventListener("change", handleChange);
        saveButton1.addEventListener("click", writeSlot1);
        saveButton2.addEventListener("click", writeSlot2);
        saveButton3.addEventListener("click", writeSlot3);
        loadButton1.addEventListener("click", loadSlot1);
        loadButton2.addEventListener("click", loadSlot2);
        loadButton3.addEventListener("click", loadSlot3);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        fireworks.crc2 = canvas.getContext("2d");
        fireworks.crc2.fillStyle = "black";
        fireworks.crc2.strokeStyle = "white";
        fireworks.crc2.fillRect(0, 0, fireworks.crc2.canvas.width, fireworks.crc2.canvas.height);
        canvas.addEventListener("click", shoot);
        window.setInterval(update, 20);
    }
    function handleChange(_event) {
        sizeSliderValue = parseInt(sizeSlider.value);
        lifetimeSliderValue = parseInt(lifetimeSlider.value);
        color1PickerValue = color1Picker.value;
        checkShape();
    }
    function checkShape() {
        if (radioSquare.checked == true)
            particleShape = "square";
        else if (radioTriangle.checked == true)
            particleShape = "triangle";
        else
            particleShape = "circle";
    }
    async function writeSlot1(_event) {
        console.log("Save to Slot 1");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("index.html?" + query.toString());
    }
    function writeSlot2(_event) {
        console.log("Save to Slot 2");
    }
    function writeSlot3(_event) {
        console.log("Save to Slot 3");
    }
    function loadSlot1(_event) {
        console.log("Load Slot 1");
    }
    function loadSlot2(_event) {
        console.log("Load Slot 2");
    }
    function loadSlot3(_event) {
        console.log("Load Slot 3");
    }
    function shoot(_event) {
        for (let i = 0; i < particleAmount; i++) {
            rocket = new fireworks.Rocket(new fireworks.Vector(_event.clientX, _event.clientY), new fireworks.Vector(20, 0), lifetimeSliderValue, sizeSliderValue, color1PickerValue, particleShape);
            rockets.push(rocket);
        }
    }
    fireworks.shoot = shoot;
    function update() {
        fireworks.crc2.fillRect(0, 0, fireworks.crc2.canvas.width, fireworks.crc2.canvas.height);
        for (let rocket of rockets) {
            rocket.move(1 / 2);
            rocket.draw();
            fireworks.crc2.globalAlpha = 0.3;
            // console.log();
        }
        deleteExpendables();
    }
    function deleteExpendables() {
        for (let i = rockets.length - 1; i >= 0; i--) {
            if (rockets[i].expendable)
                rockets.splice(i, 1);
        }
    }
})(fireworks || (fireworks = {}));
//# sourceMappingURL=Main.js.map