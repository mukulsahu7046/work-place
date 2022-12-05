import { Button } from "@mui/material";
import React, { useContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import cartoon from '../../assets/cartoon.png'
import { positions } from "@mui/system";
import "./style.css";
function AuthPage({ type }) {

  const [state, dispatch] = useContext(UserContext);

  const navigate = useNavigate();
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "SET_USER", payload: user });
        const docRef = doc(db, "userData", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userInfo = docSnap.data()
          const userType = userInfo.type;
          // localStorage.setItem('userinfo',JSON.stringify(userInfo))
          dispatch({ type: "SET_USER_INFO", payload: userInfo })

          if (type === "candidate") {
            if (userType === type) {
              navigate("/candidate/profile");
            } else {
              alert("you are already onboarded as employer");
              return;
            }
          } else {
            if (userType === type) {

              navigate("/employer/profile");

            } else {
              alert("you are already onboarded as candidate");
              return;
            }
          }
          console.log("Document data:", docSnap.data());
        } else {

          if (type === "candidate") {

            navigate("/candidate/onboarding");

          } else {

            navigate("/employer/onboarding");

          }
        }

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };

  return (
    <div style={{background: "#FFFFFF", height:"100vh", position:"relative"}}>
      <h1 style={{fontSize:"60px", paddingTop:"50px"}}>Welcome {type} please SignIn</h1>
      <h3 style={{fontSize:"36px", paddingTop:"50px"}}>SignIn with google</h3>
      <Button className="button" variant="contained" size="large" style={{width:"200px", marginTop:"50px", fontSize:"18px"}} onClick={signIn}> SignIn</Button>
      <img src={cartoon} alt="cartoon" style={{width:"423px", height:"545px", position:"absolute",top:"130px", right:"0px" }}/>
    </div>
  );
}

export default AuthPage;
// type
// onboarding when user is now
// profile we have  user's data
