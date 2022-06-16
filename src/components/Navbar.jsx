import Topics from '../components/Topics'
import {Link} from 'react-router-dom';

const Navbar = ({user}) => {
    return (<><div className ='Navbar'>
    <h4>Signed in as: {user}</h4>
    <Link to='/'><h3>Home Button</h3></Link>
    <Topics/>
    </div>
    </>
    )
}

export default Navbar;