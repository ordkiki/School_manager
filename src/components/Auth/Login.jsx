import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Load from "../Loader/Load";
import axios from "axios";

function Login() {
    const navigate = useNavigate('/Home');
    const [isload, SetLoad] = useState(false);
    const [FormData, SetFormData] = useState({Email: "", Mdp: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetFormData({ ...FormData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!FormData.Email || !FormData.Mdp) {
            alert("Veuillez remplir tous les champs requis !");
            return;
        }

        SetLoad(true);

        try {
            const response = 
                await axios.post("http://localhost/API/Ecole-manager/users/Log",FormData,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true, // Permet d'envoyer les cookies
                }
            );
            console.log("Connexion de :", response.data);
            alert("Connexion réussie !");
            navigate("/Dashboard");
        } catch (error) {
            console.error("Erreur lors de l'Connexion :", error.response?.status || error.message);
            alert("Erreur lors de l'Connexion!");
        } finally {
            SetLoad(false);
        }
    };

    return (
        <>
            {isload ? (
                <Load />
            ) : (
                <div className="flex justify-center items-center w-screen h-screen">
                    <div>
                        <h3 className="font-semibold">Already have an account, lets Connect</h3>
                        <p className="text-gray-600 font-normal">The platform to manage your school</p>
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="my-4">
                                <label htmlFor="Email">Email*</label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="Email"
                                    value={FormData.Email}
                                    onChange={handleChange}
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="my-4">
                                <label htmlFor="Mdp">Password*</label>
                                <input
                                    type="password"
                                    id="Mdp"
                                    name="Mdp"
                                    value={FormData.Mdp}
                                    onChange={handleChange}
                                    placeholder="Your password"
                                />
                            </div>
                            <button className="bg-black text-white w-full p-1" type="submit" disabled={isload}>
                                {isload ? "Loading..." : "Log in"}
                            </button>   
                        </form>
                        <p className="w-full text-center p-1">
                            Do not have an account? <Link to="/Sign" className="font-semibold underline">Sign in</Link>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
