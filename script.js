class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}



class WGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, " -> ", [...this.adjacencyList[vertex]]);
        }
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {

                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {

                    let nextNode = this.adjacencyList[smallest][neighbor];

                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {

                        distances[nextNeighbor] = candidate;

                        previous[nextNeighbor] = smallest;

                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}




const graph = new WGraph();
// Adding Nodes for Ground Floor
let ground = [20, 21, 22, 23, 24, 25, 26, 41, 35, 31, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46];

let groundObj = { 20: 'stairs8', 21: 'rightWRG', 22: 'cafe', 23: 'oldcafe', 24: 'bcourt', 25: 'annapurna', 26: 'openspace', 41: 'phylab', 35: 'cl2', 31: 'cl1', 27: 'EMIlab', 28: 'stairs5', 29: 'temple', 30: 'leftWRG', 32: 'mph', 33: 'stairs6', 34: 'stairs9', 36: 'smallGate', 37: 'entry', 38: 'workshop', 39: 'admin', 40: 'LRC', 42: 'innovation', 43: 'stairs7', 44: 'ground', 45: 'basement', 46: 'OAT' }

// console.log(groundObj[ground[0]]);

for (let i = 0; i < ground.length; i++) {
    graph.addVertex(ground[i]);
}
// graph.addVertex("20");
// graph.addVertex("21");
// graph.addVertex("22");
// graph.addVertex("23");
// graph.addVertex("24");
// graph.addVertex("25");
// graph.addVertex("26");
// graph.addVertex("41");
// graph.addVertex("35");
// graph.addVertex("31");
// graph.addVertex("27");
// graph.addVertex("28");
// graph.addVertex("29");
// graph.addVertex("30");
// graph.addVertex("32");
// graph.addVertex("33");
// graph.addVertex("34");
// graph.addVertex("36");
// graph.addVertex("37");
// graph.addVertex("38");
// graph.addVertex("39");
// graph.addVertex("40");
// graph.addVertex("42");
// graph.addVertex("43");
// graph.addVertex("44");
// graph.addVertex("45");
// graph.addVertex("46");

//Adding edges for Ground Floor
graph.addEdge("20", "21", 1);
graph.addEdge("21", "22", 2);
graph.addEdge("22", "24", 1);
graph.addEdge("24", "25", 3);
graph.addEdge("25", "26", 2);
graph.addEdge("26", "41", 6);
graph.addEdge("41", "35", 1);
graph.addEdge("31", "35", 2);
graph.addEdge("27", "31", 3);
graph.addEdge("27", "28", 1);
graph.addEdge("29", "28", 1);
graph.addEdge("30", "29", 2);
graph.addEdge("32", "30", 2);
graph.addEdge("32", "33", 1);
graph.addEdge("34", "32", 2);
graph.addEdge("38", "34", 3);
graph.addEdge("34", "36", 1);
graph.addEdge("33", "34", 1);
graph.addEdge("33", "39", 5);
graph.addEdge("40", "43", 2);
graph.addEdge("42", "43", 2);
graph.addEdge("23", "42", 2);
graph.addEdge("20", "23", 2);
graph.addEdge("29", "32", 1);
graph.addEdge("36", "39", 4);
// graph.addEdge("32", "31", 7);
graph.addEdge("39", "41", 3);
graph.addEdge("26", "44", 2);
graph.addEdge("40", "25", 2);
graph.addEdge("24", "43", 2);
graph.addEdge("22", "42", 2);
graph.addEdge("45", "46", 3);
graph.addEdge("37", "40", 4);
graph.addEdge("39", "37", 4);
graph.addEdge("37", "26", 2);
// graph.addEdge("43", "46", 2);
graph.addEdge("45", "38", 8);
// graph.addEdge("39", "34", 5);

//Adding Nodes for First Floor
let first = [F101, F102, F103, F104, F105, F106, F107, F108, F109, F110, F111, F131, F124, F112, F113, F116, F117, F127, F126, F118, F125, F123, F133, F132, F130, F134, F137, F158, F157, F121, F138, F140, F142, F148, F151, F150, F153, F154, F128]

for (let i = 0; i < first.length; i++) {
    graph.addVertex(first[i]);
}

// graph.addVertex("101");
// graph.addVertex("102");
// graph.addVertex("103");
// graph.addVertex("104");
// graph.addVertex("105");
// graph.addVertex("106");
// graph.addVertex("107");
// graph.addVertex("108");
// graph.addVertex("109");
// graph.addVertex("110");
// graph.addVertex("111");
// graph.addVertex("131");
// graph.addVertex("124");
// graph.addVertex("112");
// graph.addVertex("113");
// graph.addVertex("116");
// graph.addVertex("117");
// graph.addVertex("127");
// graph.addVertex("126");
// graph.addVertex("118");
// graph.addVertex("125");
// graph.addVertex("123");
// graph.addVertex("133");
// graph.addVertex("132");
// graph.addVertex("130");
// graph.addVertex("134");
// graph.addVertex("137");
// graph.addVertex("158");
// graph.addVertex("157");
// graph.addVertex("121");
// graph.addVertex("138");
// graph.addVertex("140");
// graph.addVertex("142");
// graph.addVertex("148");
// graph.addVertex("151");
// graph.addVertex("150");
// graph.addVertex("153");
// graph.addVertex("154");
// graph.addVertex("128");

//Adding edges for First Floor
graph.addEdge("F111", "F113", 1);
graph.addEdge("F116", "F113", 1);
graph.addEdge("F116", "F117", 1);
graph.addEdge("F117", "F127", 1);
graph.addEdge("F127", "F126", 2);
graph.addEdge("F126", "F118", 1);
graph.addEdge("F117", "F118", 2);
graph.addEdge("F125", "F118", 1);
graph.addEdge("F125", "F121", 1);
graph.addEdge("F121", "F123", 1);
graph.addEdge("F124", "F123", 3);
graph.addEdge("F124", "F131", 7);
graph.addEdge("F111", "F103", 1);
graph.addEdge("F107", "F103", 4);
graph.addEdge("F104", "F103", 4);
graph.addEdge("F101", "F107", 2);
graph.addEdge("F103", "F112", 2);
graph.addEdge("F101", "F112", 2);
graph.addEdge("F107", "F112", 3);
graph.addEdge("F108", "F104", 2);
graph.addEdge("F130", "F131", 2);
graph.addEdge("F109", "F131", 2);
graph.addEdge("F105", "F109", 2);
graph.addEdge("F105", "F148", 4);
graph.addEdge("F105", "F153", 4);
graph.addEdge("F130", "F132", 1);
graph.addEdge("F133", "F132", 1);
graph.addEdge("F133", "F134", 1);
graph.addEdge("F134", "F158", 1);
graph.addEdge("F158", "F157", 2);
graph.addEdge("F134", "F137", 3);
graph.addEdge("F137", "F157", 1);
graph.addEdge("F137", "F138", 1);
graph.addEdge("F138", "F140", 1);
graph.addEdge("F140", "F142", 1);
graph.addEdge("F142", "F148", 4);
graph.addEdge("F142", "F153", 4);
graph.addEdge("F148", "F153", 1);
graph.addEdge("F148", "F151", 1);
graph.addEdge("F154", "F151", 1);
graph.addEdge("F154", "F150", 1);
graph.addEdge("F153", "F150", 1);
graph.addEdge("F102", "F148", 3);
graph.addEdge("F102", "F153", 3);
graph.addEdge("F102", "F106", 1);
graph.addEdge("F102", "F110", 2);
graph.addEdge("F105", "F142", 4);
graph.addEdge("F128", "F108", 1);
graph.addEdge("F124", "F128", 1);

//Adding nodes for Second Floor
let second = [S201, S202, S203, S204, S205, S206, S207, S208, S209, S217, S219, S224, S225, S226, S228, S229, S230, S234, S237, S238, S241, S240, S242, S243, S264, S263, S244, S246, S254, S259, S255, S257]

for (let i = 0; i < second.length; i++) {
    graph.addVertex(second[i]);
}
// graph.addVertex("201");
// graph.addVertex("202");
// graph.addVertex("203");
// graph.addVertex("204");
// graph.addVertex("205");
// graph.addVertex("206");
// graph.addVertex("207");
// graph.addVertex("208");
// graph.addVertex("209");
// graph.addVertex("217");
// graph.addVertex("219");
// graph.addVertex("224");
// graph.addVertex("226");
// graph.addVertex("225");
// graph.addVertex("228");
// graph.addVertex("229");
// graph.addVertex("230");
// graph.addVertex("234");
// graph.addVertex("237");
// graph.addVertex("238");
// graph.addVertex("240");
// graph.addVertex("241");
// graph.addVertex("242");
// graph.addVertex("243");
// graph.addVertex("244");
// graph.addVertex("246");
// graph.addVertex("263");
// graph.addVertex("264");
// graph.addVertex("254");
// graph.addVertex("255");
// graph.addVertex("257");
// graph.addVertex("259");

//Adding Edges For Second Floor
graph.addEdge("S217", "S203", 3);
graph.addEdge("S217", "S219", 1);
graph.addEdge("S219", "S224", 1);
graph.addEdge("S224", "S226", 1);
graph.addEdge("S226", "S225", 1);
graph.addEdge("S225", "S229", 2);
graph.addEdge("S226", "S228", 2);
graph.addEdge("S228", "S229", 1);
graph.addEdge("S230", "S228", 1);
graph.addEdge("S230", "S234", 1);
graph.addEdge("S234", "S237", 1);
graph.addEdge("S204", "S237", 1);
graph.addEdge("S207", "S237", 2);
graph.addEdge("S207", "S204", 2);
graph.addEdge("S207", "S208", 7);
graph.addEdge("S205", "S208", 2);
graph.addEdge("S205", "S238", 1);
graph.addEdge("S240", "S238", 1);
graph.addEdge("S240", "S241", 1);
graph.addEdge("S242", "S241", 1);
graph.addEdge("S243", "S242", 1);
graph.addEdge("S264", "S242", 1);
graph.addEdge("S243", "S263", 1);
graph.addEdge("S264", "S263", 1);
graph.addEdge("S244", "S243", 1);
graph.addEdge("S246", "S244", 1);
graph.addEdge("S246", "S237", 1);
graph.addEdge("S237", "S259", 3);
graph.addEdge("S237", "S254", 3);
graph.addEdge("S259", "S254", 1);
graph.addEdge("S259", "S257", 1);
graph.addEdge("S257", "S255", 1);
graph.addEdge("S254", "S255", 1);
graph.addEdge("S202", "S259", 3);
graph.addEdge("S202", "S254", 3);
graph.addEdge("S202", "S206", 2);
graph.addEdge("S217", "S201", 4);

//Adding edges betwwen stairs to connect all the floors
//Connecting 2nd and 1st floor
graph.addEdge("203", "103", 3);
graph.addEdge("204", "104", 3);
graph.addEdge("205", "105", 3);
graph.addEdge("206", "106", 5);
//Connecting 1st and Ground floor
graph.addEdge("107", "28", 3);
graph.addEdge("108", "33", 3);
graph.addEdge("109", "43", 3);
graph.addEdge("110", "20", 5);

// console.log(graph.Dijkstra("117", "226"));


let result = document.getElementById('searchBtn');
result.addEventListener('click', showPath);
let path;

function showPath() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    if (start == '' || end == '') {
        alert('Invalid Classroom');
        return;
    }
    path = graph.Dijkstra(start, end);
    console.log(path);
    let home = document.querySelector('.home');
    let display = document.querySelector('.display');
    home.classList.add('none');
    displayPath(path);
    display.classList.remove('none');
}


function displayPath(path) {
    let pathContainer = document.getElementById('path');
    for (let i = 0; i < path.length; i++) {
        let pathElement = document.createElement('div');
        pathElement.textContent = groundObj[path[i]];
        pathElement.className = 'pathElement';
        pathContainer?.append(pathElement);
    }

    for (let i = 0; i < path.length; i++) {
        console.log(groundObj[path[i]]);
        let room = document.getElementById(`${groundObj[path[i]]}`);
        room.style.background = 'pink';
    }
}

function goBack() {
    window.location.reload();
    // let path = document.getElementById('path');
    // path.innerHTML = 'Your Path is : ';

    // let home = document.querySelector('.home');
    // let display = document.querySelector('.display');

    // home.classList.remove('none');
    // display.classList.add('none');
}

function showOnMap(type = 'close') {
    let map = document.getElementById('groundFloor');
    if (type == 'open') {
        map.classList.remove('none');
    } else {
        map.classList.add('none');
    }

}