import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handelSocialLogIn = (menu) => {
        menu()
            .then(res => console.log(res.user))
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handelSocialLogIn(googleSignIn)} className="btn  btn-outline">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;