const countLabel = document.getElementById('countLabel')
const decreseBtn = document.getElementById('decreseBtn')
const resetBtn = document.getElementById('resetBtn')
const increaseBtn = document.getElementById("increaseBtn")
let count = 0;


decreseBtn.onclick = function(){
    count--;
    countLabel.textContent = count

}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count

}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;

}

