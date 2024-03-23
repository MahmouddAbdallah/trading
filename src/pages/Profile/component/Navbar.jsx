
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
        <nav>
            <div className="w-full flex justify-end p-container py-5">
                <div className=" flex gap-3">
                    <div>
                        <span className="block text-sm"> basic account</span>
                        <span className="block font-semibold"> {user?.name}</span>
                    </div>
                    <div className="bg-red-500 flex justify-center items-center w-10 h-10 rounded-full font-bold text-white">
                        {user?.name?.split('')[0]}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar