// let start = document.getElementById('start');
// let end = document.getElementById('end');

let arr = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46];
// let arr = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 131, 124, 112, 113, 116, 117, 127, 126, 118, 125, 123, 133, 132, 130, 134, 137, 158, 157, 121, 138, 140, 142, 148, 151, 150, 153, 154, 128, 201, 202, 203, 204, 205, 206, 207, 208, 209, 217, 219, 224, 225, 226, 228, 229, 230, 234, 237, 238, 241, 240, 242, 243, 264, 263, 244, 246, 254, 259, 255, 257];

let roomObj = { 20: 'stairs8', 21: 'rightWRG', 22: 'cafe', 23: 'oldcafe', 24: 'bcourt', 25: 'annapurna', 26: 'openspace', 41: 'phylab', 35: 'cl2', 31: 'cl1', 27: 'EMIlab', 28: 'stairs5', 29: 'temple', 30: 'leftWRG', 32: 'mph', 33: 'stairs6', 34: 'stairs9', 36: 'smallGate', 37: 'entry', 38: 'workshop', 39: 'admin', 40: 'LRC', 42: 'innovation', 43: 'stairs7', 44: 'ground', 45: 'basement', 46: 'OAT' }

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = roomObj[arr[i]];
    option.value = arr[i];
    start.add(option);
}
for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = roomObj[arr[i]];
    option.value = arr[i];
    end.add(option);
}



// let roomObj = { 20: ['stairs', 'hello'], 22: 'cafe', 23: 'oldcafe', 24: 'bcourt', 25: 'annapurna', 26: 'openspace', 41: 'phylab', 35: 'cl2', 31: 'cl1', 27: 'EMIlab' }

// console.log(roomObj);







