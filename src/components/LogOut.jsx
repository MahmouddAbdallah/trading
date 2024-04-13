import { useNavigate } from "react-router-dom";
const LogOut = () => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear();
        window.location.reload();
        navigate('/sign-in')
    }
    return (
        <div>
            <button onClick={logOut} className='logout px-10 py-2 md:px-0 md:py-0 rounded-full text-white md:text-black text-sm shadow-md md:shadow-none whitespace-nowrap'>
                Log out
            </button>
        </div>
    )
}

export default LogOut