/** Define the state of the application */
let currentScene = 0;

/** Setup the different scenes */
const scenes = [
    
{   // Start 0
    text: "Do you want to start looking in the kitchen or the living room?",
    choices: ["Kitchen", "Living room"],
    nextScene: [1, 2],
},
   
{   // 1
    text: "A man is standing right in front of you! Do you punch him or scream?",
    choices: ["Punch him", "Scream"],
    nextScene: [10, 3],
},

{   // 2
    text: "There is a zombie in the room! Do you want to hide or run to the kitchen?",
    choices: ["Hide", "Run"],
    nextScene: [7, 3],
},

{   // 3
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
    text: "Oh no, he found you!",
    choices: ["Try again"],
    nextScene: [0],
},

{   // 8
    text: "You won’t surive without the key!",
    choices: ["Bring the key"],
    nextScene: [6],
},

{   // 9
    text: "Oh no, you died!",
    choices: ["Try again"],
    nextScene: [0],
},

{   // 10
    text: "Oh no, you're too weak!",
    choices: ["Try again"],
    nextScene: [0],
},

{   // 11
    text: "You made it! Well done!",
    choices: ["Go to start"],
    nextScene: [0],
}
];


/** Run application */
function begin() {
    // Show/hide html element in start page
    document.getElementById("game-container").style.display = "block";
    document.getElementById("start-container").style.display = "none";

    // Run scenes
    presentScene()
}


/** Setup elements for scenes */
function presentScene() {
    const scene = scenes[currentScene];
    updateDescription(scene);
    createChoices(scene);
}

/** Get new description in each scene */
function updateDescription(scene) {
    const textTag = document.getElementById("text");
    textTag.innerText = scene.text;
}

/** Get new choices in each scene */
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

/** Create buttons */
function createButton(choice, nextScene) {
    const button = document.createElement("button");
    button.classList.add("button");

    // Updates the text in the buttons in each scene
    button.innerText = choice;
    button.onclick = function() {
        handleUserChoice(nextScene);
    }

    return button;
}

/** Update content to user choices in each scene */
function handleUserChoice(nextScene) {
    currentScene = nextScene;
    presentScene();
}
