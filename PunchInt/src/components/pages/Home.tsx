import Barra from '../molecules/BarraTop/index';
import IntroTxtimg from '../molecules/IntroTxtimg/index';
import Indumentaria from '../molecules/InduRopa/index';
import PiePag from '../molecules/piePag/index';

function Home(){
    return(
    <>
        <div>
            {<Barra/>}
        </div>
        <div>
            {<IntroTxtimg/>}
        </div>
        <div>
            {<Indumentaria/>}
        </div>
        <div>
            {<PiePag/>}
        </div>
    </>   
        
    )
}

export default Home;