document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    try {
      const response = await axios.post('/api/users/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed: ' + error.response.data.error);
    }
  });
  