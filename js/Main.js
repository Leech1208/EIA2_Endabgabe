"use strict";
var fireworks;
(function (fireworks) {
    window.addEventListener("load", handleLoad);
    let rockets = [];
    let rocket;
    let particleAmount = 100;
    let sizeSlider;
    let sizeSliderValue = 25;
    let lifetimeSlider;
    let lifetimeSliderValue = 35;
    let color1Picker;
    let color1PickerValue = "#7720B1";
    let radioSquare;
    let radioTriangle;
    let radioCircle;
    let particleShape = "circle";
    let saveButton1;
    let saveButton2;
    let saveButton3;
    let loadButton1;
    let loadButton2;
    let loadButton3;
    let form;
    let database;
    async function handleLoad() {
        sizeSlider = document.getElementById("sizeSlider");
        lifetimeSlider = document.getElementById("lifetimeSlider");
        color1Picker = document.getElementById("color1Picker");
        radioSquare = document.getElementById("square");
        radioTriangle = document.getElementById("triangle");
        radioCircle = document.getElementById("circle");
        saveButton1 = document.getElementById("saveButton1");
        saveButton2 = document.getElementById("saveButton2");
        saveButton3 = document.getElementById("saveButton3");
        loadButton1 = document.getElementById("loadButton1");
        loadButton2 = document.getElementById("loadButton2");
        loadButton3 = document.getElementById("loadButton3");
        form = document.querySelector("form");
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
        if (radioTriangle.checked == true)
            particleShape = "triangle";
        if (radioCircle.checked == true)
            particleShape = "circle";
    }
    async function writeSlot1(_event) {
        database[0].save1["size"] = sizeSliderValue;
        database[0].save1["lifetime"] = lifetimeSliderValue;
        database[0].save1["shape"] = particleShape;
        database[0].save1["color"] = color1PickerValue;
        console.log(database[0]);
    }
    function writeSlot2(_event) {
        database[0].save2["size"] = sizeSliderValue;
        database[0].save2["lifetime"] = lifetimeSliderValue;
        database[0].save2["shape"] = particleShape;
        database[0].save2["color"] = color1PickerValue;
        console.log(database[0]);
    }
    function writeSlot3(_event) {
        database[0].save3["size"] = sizeSliderValue;
        database[0].save3["lifetime"] = lifetimeSliderValue;
        database[0].save3["shape"] = particleShape;
        database[0].save3["color"] = color1PickerValue;
        console.log(database[0]);
    }
    function loadSlot1(_event) {
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
    function loadSlot2(_event) {
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
    function loadSlot3(_event) {
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