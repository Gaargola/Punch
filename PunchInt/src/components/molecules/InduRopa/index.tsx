import {Hstyle,Dstyle,ImgStyle} from './style';

function Indumentaria(){
    return(
       <>
       <div>
        <Hstyle>Tienda de Ropa / Clothes Shop</Hstyle>
       </div>
       
       <Dstyle>
       <a href="https://www.roblox.com/catalog/11330898100/Honey-Shirt"><ImgStyle src={"/img/Ropa1.jpg"} alt="Ropa1"/></a>
       <a href="https://www.roblox.com/catalog/11348775567/Dress-Aesthetic"><ImgStyle src={"/img/Ropa2.jpg"} alt="Ropa2"/></a>
       <a href="https://www.roblox.com/catalog/11343955105/Blusa-Aesthetic"><ImgStyle src={"/img/Ropa3.jpg"} alt="Ropa3"/></a>
       <a href="https://www.roblox.com/catalog/11348665183/Aesthetic-Boy"><ImgStyle src={"/img/Ropa4.jpg"} alt="Ropa4"/></a>
       <a href="https://www.roblox.com/catalog/11348164359/Sad-Club"><ImgStyle src={"/img/Ropa5.jpg"} alt="Ropa5"/></a>
       <a href="https://www.roblox.com/catalog/11369727289/Pink-Drees"><ImgStyle src={"/img/Ropa6.jpg"} alt="Ropa6"/></a>      
       </Dstyle>
       </>
    )
}

export default Indumentaria;