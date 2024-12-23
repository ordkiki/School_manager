import axios from 'axios';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa'
// import edit_img from "../../assets/images/edit.png"

function Adduser() {
    const [student_data, setStudent_Data] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent_Data({ ...student_data, [name]: value });
    }

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
            "http://localhost/API/Ecole-manager/eleves/Add",
            student_data,
            { headers: { "Content-Type": "application/json" } }
            );
            alert("Utilisateur ajouté avec succès :", response.data.Prenom);
            // console.log(student_data);

        } catch (error) {
            console.error("Failed add :", error.response?.data || error.message);
            alert(error);
        }
    };

    return (
        <div className='fixed top-0 bg-[rgba(0,0,0,0.7)] left-0 flex justify-center items-center h-screen w-[100vw] transition-all'>
            
            <div className='relative lg:flex lg:justify-between  w-[90vw] lg:w-[30vw] h-[80vh] bg-gray-100 p-5 rounded-lg'>
                <div>
                    <h3>
                        <FaEdit className='text-4xl'></FaEdit>
                        Add new Student
                    </h3>
                    <form action=""  className='w-full  my-5 flex-col flex-wrap' method="post">
                        <div className='flex justify-between'>

                            <div className='mr-5'>
                                <label htmlFor="Nom" className='text-[12px]'>Nom* :</label>
                                <input onChange={handleChange} type="text" name='Nom'  />
                            </div>
                            <div className='ml-5'>
                                <label htmlFor="Prenom" className='text-[12px]'>Prenom* :</label>
                                <input onChange={handleChange} type="text" name='Prenom'  />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Classe" className='text-[12px]'>Classe* :</label>
                            <input onChange={handleChange} type="text" name='Classe'  />
                        </div>
                        <div>
                            <label htmlFor="Cout_annuel" className='text-[12px]'>Cout_annuel* (en Ariary) :</label>
                            <input onChange={handleChange} type="text" name='Ecole_annuel'/>
                        </div>
                        <div>
                            <label htmlFor="Ville_naiss" className='text-[12px]'>Ville_naissance* :</label>
                            <input onChange={handleChange} type="text" name='Ville_naiss'/>
                        </div>
                        <div>
                            <label htmlFor="Tel" className='text-[12px]'>Telephone* :</label>
                            <input onChange={handleChange} type="number" name='Tel' />
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <label htmlFor="Sexes" className='text-[14px] font-medium mx-2'>masculin</label>
                                <input onChange={handleChange} type="radio" name="masculin" id="" />
                            </div>
                            <div>
                                <input type="radio" name="masculin" id="" />
                                <label htmlFor="Sexes" className='text-[14px] font-medium mx-2' >feminin</label>
                         onChange={handleChange}    </div>
                        </div>
                        <button onClick={handleAdd} className='p-1 bg-blue-600 text-white w-full my-4'>
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Adduser