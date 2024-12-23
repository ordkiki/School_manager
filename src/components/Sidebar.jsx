import { HiBars3BottomRight } from 'react-icons/hi2';
import { HiOutlineTable } from 'react-icons/hi';

import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BiEdit, BiLogIn } from 'react-icons/bi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer la sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed lg:w-[15vw] z-50">
          {isOpen && (
        <div
          onClick={toggleSidebar}
          className="-z-10 fixed inset-0 bg-black opacity-65 left-0 w-screen h-screen top-0 z-1"
        ></div>
      )}
      {/* Bouton pour ouvrir/fermer la sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-3 bg-purple-400 text-white fixed top-4 right-4 z-50  rounded-md"
      >
        <HiBars3BottomRight className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`z-1 fixed top-0 left-0 h-screen bg-white  w-45 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >


        <h1 className="text-2xl font-bold p-4 border-b border-gray-500">Mon App</h1>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <HiOutlineTable className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Tableau de Bord</span>
          </Link>
          <Link
            to="/eleves"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <FaUserGraduate className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Élève</span>
          </Link>
          <Link
            to="/enseignant"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <FaChalkboardTeacher className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Enseignant</span>
          </Link>
          <Link
            to="/cours"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <FaBookOpen className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Cours</span>
          </Link>
          <Link
            to="/edt"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <FaCalendarAlt className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Emploi du Temps</span>
          </Link>
        </nav>
        <hr className='border-gray-400'/>
        <nav className='m-4'>
          <Link
            to="/Login"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <BiLogIn className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Log in</span>
          </Link>
          <Link
            to="/Sign"
            className="flex items-center space-x-3 hover:text-white text-gray-500   hover:bg-purple-700 rounded-lg transition"
          >
            <BiEdit className="text-xl" />
            <span className='hover:text-white text-gray-500 p-2'>Sign in</span>
          </Link>
        </nav>
      </div>

      {/* Overlay pour fermer la sidebar sur mobile */}

      {/* Contenu principal */}
    </div>
  );
}

export default Sidebar;
