import {ImgStyle} from './styles';
import {Link} from 'react-router-dom';

function Logs(){
    return(
        <>
        <Link to="/"><ImgStyle src={"/img/logo.png"} alt="logo"/></Link> 
        </>
    )
}

export default Logs;