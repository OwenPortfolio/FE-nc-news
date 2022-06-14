import Topics from '../components/Topics'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (<><div className ='Navbar'>
    <Link to='/'><h3>Home Button</h3></Link>
    <Topics/>
    </div>
    </>
    )
}

export default Navbar;