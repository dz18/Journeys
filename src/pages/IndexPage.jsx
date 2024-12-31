import { 
    Box, 
    Button, 
    Container, 
    TextField, 
    Typography 
} from "@mui/material"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"
import { db } from "../../firebaseconfig"
import { useNavigate,  } from "react-router-dom"

export default function IndexPage(){

    const navigate = useNavigate()
    const { SignIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        try {
            SignIn(email, password)
            navigate('/search/flight-hotel')
        } catch (error) {
            console.error('ERROR (index.jsx):', error)
        }
    }

    return(
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>

            <Typography variant="h2">Welcome To Journeys</Typography>
            <Typography variant="h6" color="grey">A Flight + Booking website</Typography>
            
            <Box 
                mt={4} 
                width='50vh'
                display='flex'
                flexDirection='column'
            >
                <TextField 
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Email"
                    sx={{mb: 2}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="password"
                    sx={{mb: 2}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={{mb: 2}}
                    onClick={handleSubmit}
                >
                    Sign-In
                </Button>
            </Box>

            <Box
                width='50vh'
            >
                <Typography mb={1}>Forgot Password? Click Here</Typography>
                <Typography mb={1}>Dont have an Account? Register Here</Typography>
            </Box>
            
            
        </Container>
    )
}