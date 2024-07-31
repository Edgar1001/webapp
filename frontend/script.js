async function createUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        alert('User created: ' + JSON.stringify(result));
        // Clear input fields after successful user creation
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        
        // Alternatively, you can use the form's reset method
        // document.querySelector('form').reset();


    } catch (error) {
        alert('Failed to create user: ' + error.message);
    }
}

async function getAllUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/users');
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const users = await response.json();
        alert('Users: ' + JSON.stringify(users));
    } catch (error) {
        alert('Failed to fetch users: ' + error.message);
    }
}
