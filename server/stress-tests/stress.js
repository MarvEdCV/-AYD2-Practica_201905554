const loadtest = require('loadtest');

const options1 = {
    url:'http://localhost:8080/movie/',
    maxRequests: 500,
    concurrency: 10,
    timeout: 5000
}

const options2 = {
    url: 'http://localhost:8080/nombre',
    maxRequests: 1000,
    concurrency: 10,
    timeout: 5000
}

const options3 = {
    url: 'http://localhost:8080/carnet',
    maxRequests: 10000,
    concurrency: 20,
    timeout: 5000
}

loadtest.loadTest(options3, (error, result) => {
    if (error) {
        console.error('Test failed:', error);
    } else {
        console.log('Test passed:', result);
    }
});
