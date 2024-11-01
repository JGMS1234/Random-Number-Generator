//RNG User-Inputed Range

const RNG_Label = document.getElementById('RNG_Label');
const RNG_Btn = document.getElementById('RNG_Btn');
const Submit_Btn = document.getElementById('Submit');

// RNG_Btn.onclick = document.getElementById('Body').style.scale = '1.1';
    
RNG_Btn.onclick = function(){
    if(document.getElementById('Min').value === '' || document.getElementById('Max').value === ''){
        RNG_Label.textContent = 'Please type in Range'}
    else if(isNaN(document.getElementById('Min').value) || isNaN(document.getElementById('Max').value)){
        RNG_Label.textContent = 'Only numbers allowed'}
    else if(document.getElementById('Min').value > document.getElementById('Max').value){
        RNG_Label.textContent = 'Max must be greater than Min'}
    else if(document.getElementById('Min').value == document.getElementById('Max').value){
        RNG_Label.textContent = 'Max must be greater than Min'}
    // else if(document.getElementById('Min').value == 0 || document.getElementById('Max').value == 0){
    //     RNG_Label.textContent = 'Min and Max cannot be 0 at  the same time'}
    else{
        Min = Math.floor(document.getElementById('Min').value);
        Max = Math.floor(document.getElementById('Max').value);
        console.log(Math.random())
        RNG_Label.textContent = Math.round((Math.random() * (Max - Min)) + Min)
        if(RNG_Label.textContent == 666){
            document.getElementById('display').textContent = `Hehehe, You have chosen the cursed number :(`}
        else if(RNG_Label.textContent == 10){
            document.getElementById('display').textContent = `Hehehe, that's a Decade !!!`}
        else if(RNG_Label.textContent == 19){
            document.getElementById('display').textContent = `Hehehe, that's the age of my developer :)`}
        else if(RNG_Label.textContent == 100){
            document.getElementById('display').textContent = `Hehehe, that's a Century !!!`}
        else if(RNG_Label.textContent == 1000){
            document.getElementById('display').textContent = `Hehehe, that's a Millenium !!!`}
        else{document.getElementById('display').textContent = ``}}}
