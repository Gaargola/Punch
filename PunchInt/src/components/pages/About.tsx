import PiePag from '../molecules/piePag/index';
import TxtAbout from '../molecules/aboutTxt';
import Barra from '../molecules/BarraTop/index';

function About(){
    return(
        <>
        <div>{<Barra/>}</div>
        <div>{<TxtAbout/>}</div>
        <div>{<PiePag/>}</div>
        </>
    )
}

export default About;