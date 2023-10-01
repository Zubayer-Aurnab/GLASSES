import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../Components/HOOk/useAuth';
import toast from 'react-hot-toast';

const Register = () => {
    const { signIn } = useAuth()

    const handelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const img = e.target.img.value

        if (password.length < 6) {
            toast.error(`Must provide at least 6 characters`)
        }

        // ////////
        signIn(email, password)
            .then(res => {
                console.log(res);
                toast.success('Your account has been registered')
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handelSubmit} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="Full name"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        name='email'
                                        type="text"
                                        placeholder="email"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input
                                        name='img'
                                        type="text"
                                        placeholder="image url"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='password'
                                        placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <input type="submit" className="btn btn-neutral " placeholder='register' />
                                </div>
                            </form>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;