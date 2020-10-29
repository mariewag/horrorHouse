// Define the state of the application
let currentScene = 0;

const scenes = [
    
{   // Start 0
    text: "Do you want to start looking in the kitchen or the living room?",
    choices: ["Kitchen", "Living room"],
    nextScene: [1, 2],
},
   
{   //  1
    text: "A man is standing right in front of you! Do you punch him or scream?",
    choices: ["Punch him", "Scream"],
    nextScene: [10, 3],
},

{   //  2
    text: "There is a zombie in the room! Do you want to hide or run to the kitchen?",
    choices: ["Hide", "Run"],
    nextScene: [7, 3],
},

{   //  3
    text: "You made it to the kitchen. Do you want to look for the key in the cupboards or the drawers?",
    choices: ["Cupboards", "Drawers"],
    nextScene: [4, 5],
},

{   // 4
    text: "Its not there! Do you want to look in the drawers?",
    choices: ["Yes", "No"],
    nextScene: [5, 9],
},

{   // 5
    text: "You found the key! Will you take it with you?",
    choices: ["Yes", "No"],
    nextScene: [6, 8],
},

{   // 6
    text: "A ghost is coming for you. Walk or run?",
    choices: ["Walk", "Run"],
    nextScene: [9, 11],
},

{   // 7
    text: "Oh no, he found you! Do you want to try again?",
    choices: ["Yes", "No"],
    nextScene: [0, 0],
},

{   // 8
    text: "You won’t surive without the key! Are you sure you don't want to take it with you?",
    choices: ["Yes", "No"],
    nextScene: [9, 6],
},

{   // 9
    text: "Oh no, you died! Do you want to try again?",
    choices: ["Yes", "No"],
    nextScene: [0, 0],
},


{   // 10
    text: "Oh no, you're too weak! Do you want to try again?",
    choices: ["Yes", "No"],
    nextScene: [0, 0],
},

{   // 11
    text: "You made it! Well done! Go to start?",
    choices: ["Yes", "No"],
    nextScene: [0, 0],
}
];


// Run our application
window.onload = presentScene;


// Define the actions for the application
function presentScene() {
    const scene = scenes[currentScene];
    updateDescription(scene);
    createChoices(scene);
}

function updateDescription(scene) {
    const textTag = document.getElementById("text");
    textTag.innerText = scene.text;
}

function createChoices(scene) {
    const container = document.getElementById("choices-container");
    container.innerText = "";

for (let i = 0; i < scene.choices.length; i++) {
    const choice = scene.choices[i];
    const nextScene = scene.nextScene[i];

    const button = createButton(choice, nextScene);
    container.append(button);
    }
}

function createButton(choice, nextScene) {
    const button = document.createElement("button");

    button.innerText = choice;
    button.onclick = function() {
        handleUserChoice(nextScene);
    }

    return button;
}


function handleUserChoice(nextScene) {
    currentScene = nextScene;
    presentScene();
    


}










// Define the actions for our applications
/*
function presentScene() {
    const answer = prompt(scenes[currentScene].description);
    handleUserChoice(answer)

}

function handleUserChoice(answer) {
    console.log(answer)

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]
    }

    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1]
    }

    if (answer === scenes[currentScene].choices[2]) {
        currentScene = scenes[currentScene].nextScene[2]
    }

    if (answer === scenes[currentScene].choices[3]) {
        currentScene = scenes[currentScene].nextScene[3]
    }

    if (answer === scenes[currentScene].choices[4]) {
        currentScene = scenes[currentScene].nextScene[4]
    }

    if (answer === scenes[currentScene].choices[5]) {
        currentScene = scenes[currentScene].nextScene[5]
    }

    if (answer === scenes[currentScene].choices[6]) {
        currentScene = scenes[currentScene].nextScene[6]
    }

    if (answer === scenes[currentScene].choices[7]) {
        currentScene = scenes[currentScene].nextScene[7]
    }

    if (answer === scenes[currentScene].choices[8]) {
        currentScene = scenes[currentScene].nextScene[8]
    }

    if (answer === scenes[currentScene].choices[9]) {
        currentScene = scenes[currentScene].nextScene[9]
    }

    if (answer === scenes[currentScene].choices[10]) {
        currentScene = scenes[currentScene].nextScene[10]
    }

    if (answer === scenes[currentScene].choices[11]) {
        currentScene = scenes[currentScene].nextScene[11]
    }


    presentScene()

}
*/