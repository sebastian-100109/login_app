import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src="/images/logo-2.png" alt="Login" class="logo" />
            </div>
            <h1 className='login-title'>Iniciar Sesión</h1>
            <div className="login-form-conteiner">    
                <form className='login-form'>
                    <div className="form-group">
                        <label htmlFor="email">Usuario: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                 </div>
                     <div class="form-group input">
                       <div className="form-group password-group"/>
                        <label htmlFor="password">Contraseña:</label>
                        
            
                         <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            
                        />
                        
                    </div>
                    <a href="#"  class="forgot-password" name="forgot-password"> olvidaste tu contraseña?</a>
                    <button type="submit" className="sign-in-button">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;