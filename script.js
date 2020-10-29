// Define the state of the application
let currentScene = 0;

const scenes = [
    
{   // Start 0
    description: "Welcome to Horror House! You are stuck in the house and need to find the hidden key to get out. Do you want to start looking in the kitchen or the living room?",
    choices: ["kitchen", "living room"],
    nextScene: [1, 2],
},
   
{   //  1
    description: "A man is standing right in front of you! Do you punch him or scream?",
    choices: ["punch him", "scream"],
    nextScene: [10, 3],
},

{   //  2
    description: "There is a zombie in the room! Do you want to hide or run to the kitchen?",
    choices: ["hide", "run"],
    nextScene: [7, 3],
},

{   //  3
    description: "You made it to the kitchen. Do you want to look for the key in the cupboards or the drawers?",
    choices: ["cupboards", "drawers"],
    nextScene: [4, 5],
},

{   // 4
    description: "Its not there! Do you want to look in the drawers?",
    choices: ["yes", "no"],
    nextScene: [5, 9],
},

{   // 5
    description: "You found the key! Will you take it with you?",
    choices: ["yes", "no"],
    nextScene: [6, 8],
},

{   // 6
    description: "A ghost is coming for you. Walk or run?",
    choices: ["walk", "run"],
    nextScene: [9, 11],
},

{   // 7
    description: "Oh no, he found you! Do you want to try again?",
    choices: ["yes", "no"],
    nextScene: [0, 0],
},

{   // 8
    description: "You won’t surive without the key! Are you sure you don't want to take it with you?",
    choices: ["yes", "no"],
    nextScene: [9, 6],
},

{   // 9
    description: "Oh no, you died! Do you want to try again?",
    choices: ["yes", "no"],
    nextScene: [0, 0],
},


{   // 10
    description: "Oh no, you're too weak! Do you want to try again?",
    choices: ["yes", "no"],
    nextScene: [0, 0],
},

{   // 11
    description: "You made it! Well done! Go to start?",
    choices: ["yes", "no"],
    nextScene: [0, 0],
}
];


// Run our application
window.onload = presentScene;

// Define the actions for our applications
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