
import { useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);
    const navigate = useNavigate();
    const logout = () => {
        setToken(false);
        navigate('/react-pizza-mamma-mia-1/');
    };

    return (
        <UserContext.Provider value={{ token, logout, setToken }}>
            {children}
        </UserContext.Provider >

    )
}

export default UserProvider;