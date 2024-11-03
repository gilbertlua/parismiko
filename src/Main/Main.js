import { ParisTable } from '../Table/ParisTable'
import './Main.css'

export const Main = () => {    
    
    return(
        <div className='main-container '>            
            <br/>
            {/* <marquee><p className='text-center h2'>GARAGE <strong className='text-danger'> PARIS SPORT </strong> MANAGEMENT SYSTEM</p></marquee>             */}
            <p className='text-center h2 border p-3 rounded'>GARAGE <strong className='text-danger'> PARIS SPORT & AUDIO </strong> MANAGEMENT SYSTEM</p>
            <hr/>
            <ParisTable className='mt-5'/>
        </div>
    )
}