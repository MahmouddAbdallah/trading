import style from './style.module.css'
import circle from '../../assets/circle.png'
import { ChartBack, ChartCircle, ChartGreen, ChartPurple, ChartRed, ChartYellow } from "./Icons"

const HeaderLeft = () => {
    return (
        <div>
            <div className='relative '>
                <div className='absolute top-[70px] md:top-24 left-[110px] md:left-[160px] lg:left-32'>
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
                    <div className='absolute left-[1px] top-[1px] md:left-2 md:top-2'>
                        <div className='relative'>
                            <ChartYellow className={`absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[10px] left-[10px]  ${style.yellowChart}`} />
                            <ChartGreen className={`absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[12px] left-[12px] ${style.greenChart}`} />
                            <ChartRed className={`absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[9px] left-[12px] md:top-[11px] md:left-[11px] ${style.redChart}`} />
                            <ChartPurple className={`absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[11.5px] left-[12.5px] md:top-[10.9px] md:left-[10.9px] ${style.purpleChart}`} />
                            <ChartCircle className={`absolute w-[224px] h-[221px] md:w-[324px] md:h-[324px]`} />
                        </div>
                    </div>
                    <ChartBack className={`absolute w-[195px] h-[195px] md:w-[292px] md:h-[292px]`} />
                </div>
            </div>
            <div className='absolute left-[72px] top-[72px] md:left-[119px] md:top-[120px]'>
                <div className='flex gap-1 items-center'>
                    <div className={`h-24 overflow-hidden `}>
                        {
                            Array.from({ length: 79 }).map((_, i) => (
                                <div key={i}>
                                    <div className={`flex justify-center ${style.scrollNumber}`}>
                                        <span className='font-extrabold text-[50px] md:text-[65px] text-[#488EB0] font-mono'>
                                            {i}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' mb-2'>
                        <span className='font-bold text-[50px] md:text-[65px] text-[#488EB0] font-mono'>
                            %
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderLeft