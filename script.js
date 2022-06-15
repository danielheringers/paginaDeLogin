const init = () => {
    let inputLogin = document.querySelector('input[type="email"]');
    let inputPassword = document.querySelector('input[type="password"]');
    let submitButton = document.querySelector('input[type="submit"]');

    if(submitButton)
    {
        submitButton.addEventListener('click', (event) =>
        {
            event.preventDefault();
            fetch('https://reqres.in/api/users?page=2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputLogin.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;