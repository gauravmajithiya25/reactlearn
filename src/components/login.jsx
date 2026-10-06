import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">

                <h2>Login</h2>
                <p>Welcome back! Please login to your account.</p>

                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Login;