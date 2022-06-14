import Topics from '../components/Topics'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (<><div className ='Navbar'>
        <h1>Navbar</h1>
    <Link to='/'><h1>Home Button</h1></Link>
    <Topics/>
    </div>
    </>
    )
}

export default Navbar;