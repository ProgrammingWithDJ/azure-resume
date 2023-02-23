window.addEventListener('DOMContentLoaded', (event) => {
    getvisitCount();
})

const functionApi = 'https://getresumecounter20220825143256.azurewebsites.net/api/GetResumeCounter?code=B8C35rUtTDmBigImx3_V9Hqe8-ni7NU8EJ7zsVFGSWXrAzFuR0KcRA==';

const getvisitCount = () => {

    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website is up and runnuing");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).cath(function (error) {
        console.log(error);
    });

    return count;
}
