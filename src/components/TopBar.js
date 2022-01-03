import { Box, Typography, Avatar, Button } from '@mui/material';
import '../components/TopBar.css';
import MenuIcon from '@mui/icons-material/Menu';


const TopBar = () => {
    return (
        <Box className="topBar">
            <Button>
                <MenuIcon />
            </Button>
            
            <Typography
                variant='h6'
                component='div'
            >
                Flag App
            </Typography>
            <Button sx={{borderRadius: '50%'}}>
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=22"/>
            </Button>
        </Box>
    );
}

export default TopBar;