//Terinary operator and switch statement mix in Javascript

function marryMe(name) {
    var decision;

    switch (name) {
        case "Jaya":
            decision = true;
            break;

        case "Niharika":
            decision = false;
            break;

        case "Rouble":
            decision = false;
            break;

        case "Mehak":
            decision = false;
            break;

        default:
            decision = false;
    }
    return decision;
}

function decideThis() {
    var girl = "Mehak";
    var decision = marryMe(girl) ? "Great!! What date should we decide?" : "aah that hurts!! Can I have your sister's number?";
    return decision;
}

console.log(decideThis());