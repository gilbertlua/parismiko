import { ParisTable } from '../Table/ParisTable'
import './Main.css'


export const Main = () => {
    return(
        <div className='main-container '>            
            <br/>
            <h4>GARAGE PARIS SPORT MANAGEMENT SYSTEM</h4>
            <br/>
            <ParisTable className='mt-5'/>
        </div>
    )
}