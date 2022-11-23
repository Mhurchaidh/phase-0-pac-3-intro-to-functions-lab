const greeting = 'Hello';

function shout(greeting){
    return greeting.toUpperCase();
}

function whisper(greeting){
    return greeting.toLowerCase();
}

function logShout(greeting){
    console.log(greeting.toUpperCase());
}

function logWhisper(greeting){
    console.log(greeting.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){

    let response;

    switch (string){
        case string.toLowerCase():
            response = "I can't hear you!";
            break;
        case string.toUpperCase():
            response = "YES INDEED!";
            break;
        case "Let's have dinner together!":
            response = "I would love to!";
            break;
    }
    return response;
}


