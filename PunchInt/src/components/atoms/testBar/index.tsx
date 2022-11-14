import { Link, Ulstyles, LiStyles } from './styles';

function Test(){
    return(
    <Ulstyles>
        <LiStyles>
            <Link to="/">Home</Link>
            </LiStyles>
                <LiStyles>
            <Link to="/about">About us</Link>
        </LiStyles>
    </Ulstyles>       
    )
}

export default Test;