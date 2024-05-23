import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FaNewspaper } from "react-icons/fa6";
import {Link} from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <AppBar position="static">
            <Container style={{ maxWidth: 1900 }}>
                <Toolbar disableGutters>
                    <FaNewspaper size={42} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to="/" className = "home">
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="#main-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.0rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            EchoingTimes
                        </Typography>
                    </Link>
                    <div style={{ flexGrow: 1 }} />
                    <Link to="/community" className = "community">
                        Join our Community
                    </Link>
                    <Link to="/info" className = "about">
                        About
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
  );
}

export default Navbar;