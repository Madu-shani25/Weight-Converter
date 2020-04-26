document.getElementById('IbsInput').addEventListener('input', function(e){
    let Ibs = e.target.value;
    document.getElementById('gram-output').innerHTML =Ibs/0.0022046;
    document.getElementById('kgram-output').innerHTML =Ibs/2.2046;
    document.getElementById('ozOutput').innerHTML =Ibs*16;

});
