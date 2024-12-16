import axios from "axios";
import { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";

// import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [useremail, setemail] = useState([]);

  const [Logo, setLogo] = useState("");
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(
          "http://localhost/API/Ecole-manager/users/Dashboard",
          { withCredentials: true } // Permet d'envoyer les cookies
        );
        // console.log(response.data);

        setIsLoggedIn(true);
        setemail(response.data.email)

        
      } catch (error) {
        // const navigate = useNavigate();
        // navigate("/Login")
        console.error("Erreur de vérification de session :", error);
      }
    };
    checkSession();


  }, []);

  return (
    <div className="items-center justify-center flex ">
      <div className="flex justify-between px-4 my-10 lg:w-[78vw] w-screen">
        <div className="">
          {isLoggedIn ? (
            <div className="cursor-pointer items-center flex">
              <div className="bg-yellow-400 rounded-full w-[2vw] h-[2vw] flex items-center justify-center">C</div>
                <p className="mx-5 lg:w-0">{useremail}</p>

            </div>
          ) : (
            <button className="p-1 bg-blue-600 text-white rounded-lg text-center">Login</button>
          )}
        </div>
        <div className="flex items-center">
          <button className="text-[12px] p-1 mx-2 bg-blue-500 text-center px-2 rounded-lg font-semibold text-white">
            Add student
          </button>
          <button><CiSettings className="text-xl"></CiSettings></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar