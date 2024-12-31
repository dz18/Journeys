import { 
    Box,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import { 
    PermIdentityOutlined,
    BusinessCenterOutlined,
    AccountBalanceWalletOutlined,
    LogoutOutlined,
    HistoryOutlined,
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"

const menuItems = [
    {
        icon: <PermIdentityOutlined/>,
        text: 'Manage Account',
        path: '/account/manage',
    },
    {
        icon: <BusinessCenterOutlined/>,
        text: 'Cart',
        path: '/account/cart',
    },
    {
        icon: <AccountBalanceWalletOutlined/>,
        text: 'Wallet',
        path: '/account/wallet',
    },
    {
        icon: <HistoryOutlined/>,
        text: 'Order History',
        path: '/account/order-history',
    },
]


export default function NavMainLayer() {

    const navigate = useNavigate()
    const { SignOut } = useAuth()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const closeMenu = () => {
        setAnchorEl(null)
    }

    const handleSignOut = () => {
        SignOut()
        navigate('/')
    }

    return (
        <Box sx={{
            flexDirection: 'row', 
            display: 'flex',
            alignItems: 'center',
        }}>

            {/* Title */}
            <Box 
                flexGrow={1} 
            >
                <Typography 
                    component='span'
                    variant="h5" 
                    fontWeight="bold"
                    sx={{cursor: 'pointer'}}
                    onClick={() => navigate('/search/stays')}
                >
                    Journeys.com
                </Typography>
            </Box>

            {/* Account Box */}
            <Box
                onClick={openMenu}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{
                    display: "flex",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 1,
                    px: 2,
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                    backgroundColor: open && "rgba(255, 255, 255, 0.2)"
                }}
            >
                <Avatar sizes="small" sx={{mr: 1}}/>
                <Typography fontWeight="bold">Your Account</Typography>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
            >
            {menuItems.map((item, i) => (
                <MenuItem key={i} onClick={() => navigate(item.path)}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </MenuItem>
            ))}
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <LogoutOutlined/>
                    </ListItemIcon>
                    <ListItemText>Sign-Out</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    )
}