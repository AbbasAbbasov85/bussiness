document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let studentID = document.getElementById("id").value;

    let data = {
        name: name,
        surname: surname,
        age: age,
        studentID: studentID
    };

    fetch("https://655c839c25b76d9884fd6e12.mockapi.io/Cefer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data);
        
    })
    .catch(error => {
        console.error('API Error:', error);
    });
});