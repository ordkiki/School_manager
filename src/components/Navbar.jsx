import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [useremail, setemail] = useState([]);

  useEffect(() => {
      const checkSession = async () => {
          try {
              const response = await axios.get(
                  "http://localhost/API/Ecole-manager/users/Dashboard",
                  { withCredentials: true } // Permet d'envoyer les cookies
              );
              console.log(response.data);
              
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
      <div>
          {isLoggedIn ? (
            <p>Connecté en tant que : {useremail}</p>
          ) : (
          <p>Connecte</p>
          )}
      </div>
  );
}

export default Navbar