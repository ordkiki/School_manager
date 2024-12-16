import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Load from "../Loader/Load";
import axios from "axios";

function Signin() {
    const Navigate = useNavigate();
    const [isload, SetLoad] = useState(false);
    const [FormData, SetFormData] = useState({ Nom: "",Email: "", Mdp: "" });

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
            const response = await axios.post(
                "http://localhost/API/Ecole-manager/users",
                FormData,
                { headers: { "Content-Type": "application/json" } }
            );
            console.log("Utilisateur ajouté avec succès :", response.data);
            alert("Inscription réussie !");
            Navigate('/Login');

        } catch (error) {
            console.error("Erreur lors de l'inscription :", error.response?.data || error.message);
            alert("Erreur lors de l'inscription !");
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
                        <h3 className="font-semibold">Create a free account</h3>
                        <p className="text-gray-600 font-normal">The platform to manage your school</p>
                        <form onSubmit={handleSubmit} method="POST">

                            <div className="my-4">
                                <label htmlFor="Nom">Nom*</label>
                                <input
                                    type="text"
                                    id="Nom"
                                    name="Nom"
                                    value={FormData.Nom}
                                    onChange={handleChange}
                                    placeholder="Enter your Nom"
                                />
                            </div>
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
                                {isload ? "Loading..." : "Signin"}
                            </button>
                        </form>
                        <p className="w-full text-center p-1">
                            Already have an account? <Link to="/Login" className="font-semibold underline">Log in</Link>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Signin;
