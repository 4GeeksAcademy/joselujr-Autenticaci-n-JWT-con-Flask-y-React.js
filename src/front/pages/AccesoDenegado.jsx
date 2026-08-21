import { Link } from "react-router-dom";

export const AccesoDenegado = () => {
    return (
        <div className="container text-center py-5">
            <svg viewBox="0 0 200 200" style={{ maxWidth: "220px" }}>

                <circle cx="70" cy="150" r="12" fill="none" stroke="#6c757d" strokeWidth="6" />
                <circle cx="100" cy="165" r="12" fill="none" stroke="#6c757d" strokeWidth="6" />
                <circle cx="130" cy="150" r="12" fill="none" stroke="#6c757d" strokeWidth="6" />
                
                <path d="M 70 80 L 70 55 A 30 30 0 0 1 130 55 L 130 80"
                      fill="none" stroke="#495057" strokeWidth="14" strokeLinecap="round" />
                
                <rect x="55" y="80" width="90" height="70" rx="10" fill="#dc3545" />
                
                <circle cx="100" cy="105" r="10" fill="#fff" />
                <rect x="96" y="110" width="8" height="20" rx="3" fill="#fff" />
            </svg>

            <h1 className="mt-4">Fuera Cotilla</h1>
            <p className="lead text-muted mb-4">
                Esto es solo para usuarios autenticados.<br />
                Necesitas iniciar sesión para continuar.
            </p>

            <Link to="/login" className="btn btn-primary btn-lg">
                Iniciar sesión
            </Link>
        </div>
    );
};