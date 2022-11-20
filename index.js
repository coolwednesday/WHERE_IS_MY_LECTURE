// let start = document.getElementById('start');
// let end = document.getElementById('end');

// let arr = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 131, 124, 112, 113, 116, 117, 127, 126, 118, 125, 123, 133, 132, 130, 134, 137, 158, 157, 121, 138, 140, 142, 148, 151, 150, 153, 154, 128];
let arr = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 131, 124, 112, 113, 116, 117, 127, 126, 118, 125, 123, 133, 132, 130, 134, 137, 158, 157, 121, 138, 140, 142, 148, 151, 150, 153, 154, 128, 201, 202, 203, 204, 205, 206, 207, 208, 209, 217, 219, 224, 225, 226, 228, 229, 230, 234, 237, 238, 241, 240, 242, 243, 264, 263, 244, 246, 254, 259, 255, 257];

let roomObj = {
    20: 'Ground-Floor-Stairs-8', 21: 'Ground-Floor-Right-Washroom', 22: 'Cafe', 23: 'Old-Cafe', 24: 'Badminton-Court', 25: 'Annapurna', 26: 'Open-Space', 41: 'Physics-Lab', 35: 'CL-2', 31: 'Cl-1', 27: 'EMI-Lab', 28: 'Ground-Floor-Stairs-5', 29: 'Temple', 30: 'Ground-Floor-Left-Washroom', 32: 'Multi-Purpose-Hall', 33: 'Gground-Floor-Stairs-6', 34: 'Ground-Floor-Stairs-9', 36: 'Small-Gate', 37: 'Entry', 38: 'Workshop-Lab', 39: 'Admin', 40: 'LRC', 42: 'Innovation-Hub', 43: 'Ground-Floor-Stairs-7', 44: 'Ground', 45: 'Basement', 46: 'Ground-Floor-Stairs-10',
    47: 'O.A.T.',

    101: 'First-Floor-Left-Washroom', 102: 'First-Floor-Right-Washroom', 103: 'First-Floor-Stairs-1', 104: 'First-Floor-Stairs-2', 105: 'First-Floor-Stairs-3', 106: 'First-Floor-Stairs-4', 107: 'First-Floor-Stairs-5', 108: 'First-Floor-Stairs-6', 109: 'First-Floor-Stairs-7', 110: 'First-Floor-Stairs-8', 111: '111', 111: 'CR-1', 131: 'Faculty-Block-ECE', 124: 'EDD-Drawing-Hall', 112: 'M.P.H-First-Floor', 113: '113', 113: 'CR-2', 116: '116', 116: 'T1', 117: '117', 117: 'LT-2', 127: '127', 127: 'T2', 126: '126', 126: 'T3', 118: '118', 118: 'LT1', 125: 'SR-05', 123: '123', 123: 'CR-7', 133: '133', 133: 'Communication-Lab', 132: '132', 132: 'M.M.L. Lab', 130: '130', 130: 'Basic-Electronics-Lab', 134: '134', 134: 'DSP Lab', 137: '137', 137: 'CR-8', 158: '158', 158: 'Project-Lab-CSE', 157: '157', 157: 'Project-Lab-ECE', 121: '121', 121: 'T4', 138: '138', 138: 'CR-9', 140: '140', 140: 'CICR-Lab', 142: '142', 142: 'VLSI-Project-Lab', 148: '148', 148: 'CR-44', 151: '151', 151: 'CL-4', 150: '150', 150: 'CR-59', 153: '153', 153: 'CR-45', 154: '154', 154: 'CR-60', 154: 'CL-3', 128: 'Server-Room',

    201: 'Second-Floor-Left-Washroom', 202: 'Second-Floor-Right-Washroom', 203: 'Second-Floor-Stairs-1', 204: 'Second-Floor-Stairs-2', 205: 'Second-Floor-Stairs-3', 206: 'Second-Floor-Stairs-4', 207: 'Faculty-Block-CSE', 208: 'Faculty-Block-Other-Subjects', 209: 'HSS-Faculty-Block', 217: '217', 217: 'CR-3', 219: '219', 219: 'Humanities-Lab', 224: 'Analog-to-Digital-Lab', 224: '224', 225: 'T5', 225: '225', 226: 'CR-4', 226: '226', 228: 'CR-5', 228: '228', 229: 'T6', 229: '229', 230: 'CR-6', 230: '230', 234: 'T8', 234: '234', 237: 'Electromagnetics-Lab', 237: '237', 238: 'Microcontrollers-Lab', 238: '238', 241: 'CR-53', 241: '241', 240: 'Mobile-Technology-Lab', 240: '240', 242: 'CR-54', 242: '242', 243: 'CR-46', 243: '243', 264: 'P-&-D-Computing-Lab', 264: '264', 263: 'Information-Security-Lab', 263: '263', 244: 'SR-06', 244: 'LT-9', 244: '244', 246: 'TR-09', 246: '246', 254: 'LT-3', 254: '254', 259: 'LT-4', 259: '259', 255: 'LT5', 255: '255', 257: 'LT-6', 257: '257'
}

console.log(roomObj.length);

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







