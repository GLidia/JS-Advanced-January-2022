function solve(steps, footprint, speed){
    let kilometers = (steps * footprint) / 1000;
    let additionalMins = kilometers * 2;
    let seconds = (kilometers / speed) * 3600;
    let secondsLeft = seconds % 3600;
    let hours = Math.floor(seconds / 3600);
    let secondsFinal = (secondsLeft % 60).toFixed(0);
    let minutes = Math.floor(secondsLeft / 60);

    console.log(`${hours.toString().padStart(2, '0')}:${(Math.floor(minutes + additionalMins)).toString().padStart(2, '0')}:${secondsFinal.toString().padStart(2, '0')}`);
}
solve(2564, 0.70, 5.5)