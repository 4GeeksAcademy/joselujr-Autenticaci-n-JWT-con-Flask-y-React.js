import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getProfile } from "../services/userService";

export const Private = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPrivateInformation = async () => {
            const token = sessionStorage.getItem("token");
            const { ok, data } = await getProfile(token);

            if (!ok) {
                sessionStorage.removeItem("token");
                dispatch({ type: "LOGOUT" });
                navigate("/login");
                return;
            }

            dispatch({
                type: "SET_USER",
                payload: data,
            });
            setLoading(false);
        };

        getPrivateInformation();
    }, []);

    const signOut = () => {
        sessionStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    };

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border" role="status"></div>
                <p className="mt-3">Cargando...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-12 col-sm-10 col-md-7 col-lg-5">
                    <div className="card shadow border-0">
                        <div className="card-body p-4 p-md-5 text-center">

                            <h2 className="mb-3">Zona privada</h2>
                            <p className="text-muted">
                                Estás autenticado y tu token es válido.
                            </p>

                            <div className="bg-light rounded p-3 my-4">
                                <p className="mb-1">
                                    <strong>User ID:</strong> {store.user?.id}
                                </p>
                                <p className="mb-0">
                                    <strong>Email:</strong> {store.user?.email}
                                </p>
                            </div>

                            <button className="btn btn-danger" onClick={signOut}>
                                Cerrar sesión
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};