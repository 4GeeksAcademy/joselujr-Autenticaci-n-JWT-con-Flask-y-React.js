import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { login } from "../services/authService";

export const Login = () => {
    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        const { ok, data } = await login(email, password);

        if (!ok) {
            setError(data.error);
            return;
        }

        sessionStorage.setItem("token", data.token);

        dispatch({
            type: "LOGIN",
            payload: data.token,
        });

        navigate("/private");
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-12 col-sm-10 col-md-7 col-lg-5">
                    <div className="card shadow border-0">
                        <div className="card-body p-4 p-md-5">

                            <h2 className="mb-4 text-center">Iniciar sesión</h2>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Entrar
                                </button>
                            </form>

                            <p className="mt-3 mb-0 text-center">
                                ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};