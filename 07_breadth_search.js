const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    const queue = [];
    queue.push(start);

    while (queue.length) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }

        if (graph[current].includes(end)) {
            return true;
        } else {
            queue.push(...graph[current]);
        }
    }

    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
