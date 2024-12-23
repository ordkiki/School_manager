import { useEffect, useState } from "react";
import axios from "axios";

import { FaEdit } from "react-icons/fa";
import { CgRemove } from "react-icons/cg";

import Sidebar from "../components/Sidebar";
import Adduser from "../components/Students/adduser.component";
import Navbar from "../components/Navbar";
import Edit from "../components/Students/EditComponent";

function Student() {
  const [is_open, setIs_Open] = useState(false);
  const [searchItem, SetSearch] = useState([]);
  const [studentData, SetstudentData] = useState([]);
  const [useMatricule, SetMatricule] = useState(null);
  const [isEdit, SetEdit] = useState(false);
  const [load, setLoading] = useState(false)
  const handleClick = () => {
    setIs_Open(!is_open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetSearch({ ...searchItem, [name]: value });
  };

  const EditbyMatricule = (matricule) => {
    SetEdit(true);
    SetMatricule(matricule); // Passe la matricule directement ici
  };

  const RemoveStudent = async (matricule) => {
    try {
      const response = await axios.delete(
        `http://localhost/API/Ecole-manager/Students/Remove/${matricule}`,
        studentData,
        { headers: { "Content-Type": "application/json" } }
      );
      alert(`Suppression Ok : ${response.data.Prenom}`);
    } catch (error) {
      console.error("Echec de la suppression ,verfifier la status :", error.response?.data || error.message);
      alert(error.message);
    }

  }

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost/API/Ecole-manager/eleves/search/${searchItem.search}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.status);

    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const FetchStudent = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost/API/Ecole-manager/eleves",
          { headers: { "Content-Type": "application/json" } }
        );
        SetstudentData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      } finally {
        setLoading(false); // Indique que le chargement est terminé
      }
    };
    FetchStudent();
  }, []);


  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <div className="max-w-screen-lg mx-auto">
          {/* Barre de recherche */}
          <div className="mb-10">
            <form
              method="POST"
              className="flex flex-wrap gap-4 items-center"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                name="search"
                className="w-full lg:w-[70%] p-2 border rounded-md"
                placeholder="Rechercher..."
                onChange={handleChange}
              />
              <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
                Submit
              </button>
            </form>
          </div>
          {/* Bouton Ajouter */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <button
              onClick={handleClick}
              className="bg-blue-500 px-4 py-2 text-white rounded-md"
            >
              + Add New Student
            </button>

            {is_open && (
              <div className="relative">
                <Adduser />
                <span
                  onClick={handleClick}
                  className="absolute top-0 right-0 text-3xl cursor-pointer bg-gray-200 rounded-full px-2 py-1"
                >
                  &times;
                </span>
              </div>
            )}


            <div className="flex items-center gap-2">
              <label htmlFor="filter">Filtrer par :</label>
              <select
                name="filter"
                className="bg-gray-100 p-2 rounded-md"
                id="filter"
              >
                <option value="name">Nom</option>
                <option value="matricule">Matricule</option>
                <option value="alphabet">Alphabet</option>
              </select>
            </div>
          </div>
          {/* Tableau */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white rounded-lg shadow-md text-sm">
              <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="p-2">Matricule</th>
                  <th className="p-2">Nom</th>
                  <th className="p-2">Prénom</th>
                  <th className="p-2">Classe</th>
                  <th className="p-2">Coût annuel</th>
                  <th className="p-2">Ville naissance</th>
                  <th className="p-2">Tel</th>
                  <th className="p-2">Sexe</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {studentData.length > 0 ? (
                  studentData.map((student, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2 text-center">{student.Matricule}</td>
                      <td className="p-2 text-center">{student.Nom}</td>
                      <td className="p-2 text-center">{student.Prenom}</td>
                      <td className="p-2 text-center">{student.Classe}</td>
                      <td className="p-2 text-center">{student.Ecole_annuel}</td>
                      <td className="p-2 text-center">{student.Ville_naiss}</td>
                      <td className="p-2 text-center">{student.Tel}</td>
                      <td className="p-2 text-center">{student.Sexe}</td>
                      <td className="p-2 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => EditbyMatricule(student.Matricule)}
                          >
                            <FaEdit className="text-blue-600 text-xl cursor-pointer transition hover:scale-110" />

                          </button>
                          <button
                            onClick={() => RemoveStudent(student.Matricule)}
                          >
                            <CgRemove className="text-red-600 text-xl cursor-pointer transition hover:scale-110" />

                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center p-4">
                      Aucun étudiant trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {
        isEdit && (
          <Edit matricule={useMatricule} />

        )

      }

    </div>


  );
}

export default Student;
