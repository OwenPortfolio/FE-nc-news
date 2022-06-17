import Topics from '../components/Topics'
import {Link} from 'react-router-dom';

const Navbar = ({user}) => {
    return (<><div className ='Navbar'>
    <h4 id='SignedIn'>Signed in as: {user}</h4>
    <Link to='/'><h3>All Stories</h3></Link>
    <Topics/>
    </div>
    </>
    )
}

export default Navbar;