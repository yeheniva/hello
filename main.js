function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Its ok');
    }
}

function checkAge(age) {
    return (age > 18) || confirm('Its ok?');
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Its ok?');
}