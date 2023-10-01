import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.2.1250981319.1694445522&semt=ais" />
                <div>
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">Page not Found</p>
                    <Link to='/'> <button className="btn btn-primary">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;