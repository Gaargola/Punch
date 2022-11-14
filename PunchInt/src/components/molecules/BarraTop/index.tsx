import Logo from '../../atoms/logo/index';
import Test from '../../atoms/testBar/index';
import {BarStyle} from './styles';

function Bar(){
    return(
        <>
        <BarStyle>
            {<Logo/>} {<Test/>}
        </BarStyle>
        
        </>
    )
}
export default Bar;