import {IniStyle,DivImgStyle} from './styles';
import TxtIncial from '../../atoms/txtinicial';
import SliderImg from '../../atoms/imgMov';

function IntroTxtimg(){
    return(
    <>
    <IniStyle>
        {<TxtIncial/>}
    </IniStyle>
    <DivImgStyle>
        {<SliderImg/>}
    </DivImgStyle>
    </>
    )
}

export default IntroTxtimg;