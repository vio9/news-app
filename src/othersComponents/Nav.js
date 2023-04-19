import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className='nav'>
      <Link className='link' to='/'>
        Home{' '}
      </Link>
      <Link className='link' to='coucou'>
        coucou
      </Link>
    </div>
  );
}

export default Nav;