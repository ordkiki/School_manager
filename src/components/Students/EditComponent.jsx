import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

function Edit() {
    const { Matricule } = useParams(); // Extraire Matricule correctement
    const [studentData, setStudentData] = useState({
        Nom: '',
        Prenom: '',
        Classe: '',
        Ecole_annuel: '',
        Ville_naiss: '',
        Tel: '',
        Sexe: 'masculin'
    });
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost/API/Ecole-manager/Students/Edit?Matricule=${Matricule}`,
                studentData,
                { headers: { "Content-Type": "application/json" } }
            );
            alert(`Mise à jour réussie pour : ${response.data.Prenom}`);
        } catch (error) {
            console.error("Échec :", error.response?.data || error.message);
            alert(error.message);
        }
    };
    
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(
                    `http://localhost/API/Ecole-manager/Students/${Matricule}`
                );
                console.log(response.data);
                if (response.data) {
                    setStudentData(response.data);
                    
                } else {
                    throw new Error("Étudiant non trouvé");
                }
            } catch (error) {
                console.error("Erreur lors de l'importation des données :", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudent();
    }, [Matricule]);
    console.log(studentData);

    if (loading) return <div>Chargement...</div>;

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.7)] flex justify-center items-center'>
            <div className='w-[90vw] lg:w-[30vw] h-[80vh] bg-white p-5 rounded-lg'>
                <h3 className='text-lg font-bold mb-5 flex items-center'>
                    <FaEdit className='mr-2 text-xl' />
                    Modifier l'étudiant
                </h3>
                <form onSubmit={handleEdit} className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div>
                            <label>Nom :</label>
                            <input type="text" name="Nom" value={studentData.Nom} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Prénom :</label>
                            <input type="text" name="Prenom" value={studentData.Prenom} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <label>Classe :</label>
                        <input type="text" name="Classe" value={studentData.Classe} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Coût annuel :</label>
                        <input type="text" name="Ecole_annuel" value={studentData.Ecole_annuel} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Ville de naissance :</label>
                        <input type="text" name="Ville_naiss" value={studentData.Ville_naiss} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Téléphone :</label>
                        <input type="number" name="Tel" value={studentData.Tel} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Sexe :</label>
                        <select name="Sexe" value={studentData.Sexe} onChange={handleChange}>
                            <option value="masculin">Masculin</option>
                            <option value="feminin">Féminin</option>
                        </select>
                    </div>
                    <button type="submit" className='p-2 bg-blue-600 text-white rounded-md'>
                        Mettre à jour
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
