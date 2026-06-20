import React, { useEffect, useState } from 'react';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setlogin] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };
    
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">Submit</button>
            </form>
        </div>
    );
}

export default Login;