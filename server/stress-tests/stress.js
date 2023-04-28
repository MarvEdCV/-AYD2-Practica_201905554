const loadtest = require('loadtest');
const options = {
    url:'http://localhost:8080/movie/',
    maxRequest: 100,
    concurrency: 10,
    timeout: 5000,
    method: 'GET'
}
/*
const options2 = {
    url: 'http://localhost:8080/nombre',
    maxRequest: 1000,
    concurrency: 10,
    timeout: 5000
}

const options3 = {
    url: 'http://localhost:8080/carnet',
    maxRequest: 10000,
    concurrency: 20,
    timeout: 5000
}*/

loadtest.loadTest(options, function(error, result) {
    if (error) {
        console.error('Test failed:', error);
    } else {
        console.log('Test passed:', result);
    }
});
