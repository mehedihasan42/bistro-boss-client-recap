import React, { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin,updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = () => {
    googleLogin()
    .then((result) => {
        console.log(result)
        const loggedUser = result.user
        // updateUserProfile(result.name).then(() => {
            const userData = { name: loggedUser.displayName, email: loggedUser.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            }).then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            });
        //   });
    });
  };
  return (
    <button onClick={handleLogin} className="btn btn-circle mx-auto">
      <AiFillGoogleCircle className="text-4xl" />
    </button>
  );
};

export default GoogleLogin;
