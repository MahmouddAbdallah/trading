import PropTypes from 'prop-types'
import { StarIcon } from './icons'

const Stars = ({ rate, className }) => {
    return (
        <div className='flex gap-1'>
            {Array(parseInt(5))?.fill()?.map((_, i) => {
                return <StarIcon key={i} className={`${className} ${rate > i ? 'fill-[#428BAD] stroke-[#428BAD]' : "fill-[#F9D4AB] stroke-[#F9D4AB]"}`} />
            })}
        </div>
    )
}

Stars.propTypes = {
    rate: PropTypes.number,
    className: PropTypes.string
}

export default Stars