import style from './style.module.css'
import circle from '../../assets/circle.png'
import { ChartBack, ChartCircle, ChartGreen, ChartPurple, ChartRed, ChartYellow } from "./Icons"

const HeaderLeft = () => {
    return (
        <div>
            <div className='relative '>
                <div className='absolute top-24 left-32'>
                    <AnimateCounter />
                </div>
                <div className=''>
                    <img src={circle} className='' alt="" />
                </div>
            </div>
        </div>
    )
}

const AnimateCounter = () => {
    return (
        <div className='relative'>
            <div className='relative'>
                <div className='relative'>
                    <div className='absolute left-2 top-2'>
                        <div className='relative'>
                            <ChartYellow className={`absolute top-[10px] left-[10px]  ${style.yellowChart}`} />
                            <ChartGreen className={`absolute top-[12px] left-[12px] ${style.greenChart}`} />
                            <ChartRed className={`absolute top-[11px] left-[11px] ${style.redChart}`} />
                            <ChartPurple className={`absolute top-[10.9px] left-[10.9px] ${style.purpleChart}`} />
                            <ChartCircle className={`absolute`} />
                        </div>
                    </div>
                    <ChartBack className={`absolute`} />
                </div>
            </div>
            <div className='absolute left-[119px] top-[120px]'>
                <div className='flex gap-1 items-center'>
                    <div className={`h-24 overflow-hidden `}>
                        {
                            Array.from({ length: 76 }).map((_, i) => (
                                <div key={i}>
                                    <div className={`flex justify-center ${style.scrollNumber}`}>
                                        <span className='font-extrabold text-[65px] text-[#488EB0] font-mono'>
                                            {i}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' mb-2'>
                        <span className='font-bold text-[65px] text-[#488EB0] font-mono'>
                            %
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderLeft