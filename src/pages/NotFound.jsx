import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen w-screen flex justify-center items-center font-bold text-4xl md:text-5xl'>
            <div className='flex flex-col items-center gap-5 md:gap-10 border w-96  py-32 rounded-md'>
                <div className='text-center'>
                    <h1>404</h1>
                    <h1> Not Found</h1>
                </div>
                <button
                    className='text-base px-8 py-2 md:px-10 md:py-3  border-none bg-blue-600 text-white font-semibold rounded hover:translate-y-[-4px] hover:scale-105 duration-300 hover:shadow-xl hover:shadow-blue-300'
                    onClick={() => navigate('/')}>
                    Go Home
                </button>
            </div>
        </div>
    )
}

export default NotFound