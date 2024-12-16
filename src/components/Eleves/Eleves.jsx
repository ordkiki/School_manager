import { FaUser } from "react-icons/fa";
import { HiBars4 } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa6";
import Navbar from "../Navbar";

function Eleves() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="w-full">
        {/* Navbar */}
        <div className="my-10">
          <Navbar />
        </div>

        {/* Cards */}
        <div className="w-full flex flex-wrap justify-center gap-4">
          {/* Carte FILLES */}
          <div className="relative lg:w-[18vw] w-full sm:w-[45vw] md:w-[30vw] m-2 h-[20vh] bg-white rounded-lg shadow-md">
            <div className="flex justify-center items-center text-white rounded-lg absolute -top-5 left-4 w-[30%] h-[60%] bg-yellow-500">
              <FaUser className="text-4xl" />
            </div>
            <div className="absolute top-2 right-2 text-sm">
              <h3 className="font-bold">FILLES</h3>
              <h3>6</h3>
            </div>
            <div className="absolute bottom-2 left-2 text-xs">
              <p>Total des élèves enregistrés</p>
            </div>
          </div>

          {/* Carte GARÇONS */}
          <div className="relative lg:w-[18vw] w-full sm:w-[45vw] md:w-[30vw] m-2 h-[20vh] bg-white rounded-lg shadow-md">
            <div className="flex justify-center items-center text-white rounded-lg absolute -top-5 left-4 w-[30%] h-[60%] bg-green-500" />
            <div className="absolute top-2 right-2 text-sm">
              <h3 className="font-bold">GARÇONS</h3>
              <h3>6</h3>
            </div>
            <div className="absolute bottom-2 left-2 text-xs">
              <p>Total des élèves enregistrés</p>
            </div>
          </div>

          {/* Carte ÉLÈVES */}
          <div className="relative lg:w-[18vw] w-full sm:w-[45vw] md:w-[30vw] m-2 h-[20vh] bg-white rounded-lg shadow-md">
            <div className="flex justify-center items-center text-white rounded-lg absolute -top-5 left-4 w-[30%] h-[60%] bg-red-500" />
            <div className="absolute top-2 right-2 text-sm">
              <h3 className="font-bold">ÉLÈVES</h3>
              <h3>6</h3>
            </div>
            <div className="absolute bottom-2 left-2 text-xs">
              <p>Total des élèves enregistrés</p>
            </div>
          </div>

          {/* Carte CLASSES */}
          <div className="relative lg:w-[18vw] w-full sm:w-[45vw] md:w-[30vw] m-2 h-[20vh] bg-white rounded-lg shadow-md">
            <div className="flex justify-center items-center text-white rounded-lg absolute -top-5 left-4 w-[30%] h-[60%] bg-blue-500">
              <HiBars4 className="text-4xl" />
            </div>
            <div className="absolute top-2 right-2 text-sm">
              <h3 className="font-bold">CLASSES</h3>
              <h3>6</h3>
            </div>
            <div className="absolute bottom-2 left-2 text-xs">
              <p>Classes au total</p>
            </div>
          </div>
        </div>

        {/* Tableau des derniers inscrits */}
        <div className="my-10 w-full px-4 overflow-x-auto">
          <div className="w-full flex justify-center items-center mb-4">
            <div className="p-4 rounded-lg bg-purple-500 shadow-md w-full max-w-5xl">
              <div className="flex items-center text-white">
                <p className="font-bold">Info :</p>
                <div className="flex items-center mx-4 bg-[rgba(255,255,255,0.1)] p-1 rounded">
                  <FaUserGraduate />
                  <span className="ml-2">10 DERNIERS INSCRITS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">

          
          {/* Tableau */}
          <table className="table-auto w-full max-w-5xl bg-white rounded-lg shadow-md text-sm">
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
              <tr className="border-t">
                <td className="p-2 text-center">#</td>
                <td className="p-2 text-center">Nom</td>
                <td className="p-2 text-center">Prénom</td>
                <td className="p-2 text-center">Classe</td>
                <td className="p-2 text-center">Cout annuel</td>
                <td className="p-2 text-center">Ville naissance</td>
                <td className="p-2 text-center">Tel</td>
                <td className="p-2 text-center">Sexe</td>
                <td className="p-2 text-center">Action</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eleves;