import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center text-center"
            style={{
                minHeight: "100vh",
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-white">
                <h1 className="display-4 mb-3">Bienvenido</h1>
                <p className="lead mb-4">
                    Proyecto de autenticación con JWT, Flask y React
                </p>

                <Link to="/login" className="btn btn-primary btn-lg me-2">
                    Iniciar sesión
                </Link>
                <Link to="/signup" className="btn btn-outline-light btn-lg">
                    Registrarme
                </Link>
            </div>
        </div>
    );
};