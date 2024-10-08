const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || 100000000;
        }
    });
    let node = findNodeLowestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }
    return costs;
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000;
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node];
        console.log({
            node,
            cost,
            costs
        })
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    })
    return lowestNode;
}

console.log(shortPath(graph, 'a', 'a'));

// ----------------------------------------------------------
// function dijkstra(graph, start) {
//     const distances = {}; // храним кратчайшие расстояния до всех узлов
//     const visited = new Set(); // посещенные узлы
//     const queue = new PriorityQueue(); // очередь с приоритетом
//
//     // Инициализируем расстояния
//     for (let node in graph) {
//         distances[node] = Infinity; // изначально все расстояния бесконечные
//     }
//     distances[start] = 0; // расстояние до стартового узла = 0
//     queue.enqueue(start, 0);
//
//     // Основной цикл
//     while (!queue.isEmpty()) {
//         const { node: current } = queue.dequeue(); // текущий узел с минимальной дистанцией
//
//         if (visited.has(current)) continue; // если узел уже обработан, пропускаем
//         visited.add(current);
//
//         // Обрабатываем соседей текущего узла
//         for (let neighbor in graph[current]) {
//             let weight = graph[current][neighbor]; // вес ребра
//             let distance = distances[current] + weight; // потенциальное новое расстояние
//
//             // Если нашли более короткий путь, обновляем
//             if (distance < distances[neighbor]) {
//                 distances[neighbor] = distance;
//                 queue.enqueue(neighbor, distance); // добавляем в очередь с новым приоритетом
//             }
//         }
//     }
//
//     return distances; // возвращаем кратчайшие расстояния до всех узлов
// }
//
// // Очередь с приоритетом для алгоритма Дейкстры
// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//
//     enqueue(node, priority) {
//         this.values.push({ node, priority });
//         this.sort();
//     }
//
//     dequeue() {
//         return this.values.shift();
//     }
//
//     isEmpty() {
//         return this.values.length === 0;
//     }
//
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority); // сортируем по приоритету (минимальный — первый)
//     }
// }
//
// // Пример графа
// const graph = {
//     A: { B: 1, C: 4 },
//     B: { A: 1, C: 2, D: 5 },
//     C: { A: 4, B: 2, D: 1 },
//     D: { B: 5, C: 1 }
// };
//
// // Запуск алгоритма Дейкстры
// const startNode = 'A';
// console.log(dijkstra(graph, startNode));
