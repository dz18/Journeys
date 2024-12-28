import { 
    onAuthStateChanged,
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { 
    createContext,
    useContext,
    useState
} from "react";
import { auth } from "../../firebaseconfig";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null)

    const SignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid)
            }
        })
    }

    const SignOut = () => {
        signOut(auth)
        setUserId(null)
    }

    const value = {
        userId,
        SignIn,
        SignOut,
        isAuthenticate: !!userId
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}