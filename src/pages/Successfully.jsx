import { SuccessfullyIcon } from "../components/icons"

const Successfully = () => {
    return (
        <div className="w-full flex justify-center items-center h-96 my-20">
            <div className="space-y-5 flex flex-col items-center">
                <div className="w-96 h-96 rounded-full overflow-hidden">
                    <SuccessfullyIcon className={'w-96 h-96 bg-green-600 text-white'} />
                </div>
                <h6 className="text-3xl">Successfully.</h6>
            </div>
        </div>
    )
}

export default Successfully