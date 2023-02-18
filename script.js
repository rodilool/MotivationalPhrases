const part1 = ["You can ", "You will ", "You must "]
const part2 = ["never stop,", "never give up,", "carry on fighting,","lift your head,"]
const part3 = [" because you are strong!", " because you are unstoppable!", " because you are beautiful!", " because no one can hurt you!"]

const randomNumber = arr =>{
    return Math.floor(Math.random() * arr.length)
};
const motivationalSpeech = () => {
    console.log(`${part1[randomNumber(part1)]}${part2[randomNumber(part2)]}${part3[randomNumber(part3)]}`);
};

console.log(motivationalSpeech())
