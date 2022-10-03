
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxLogin } from "../../components/BoxLogin";
import { RoutePath } from "../../types/routes";


export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
      
        navigate(RoutePath.HOME);
    }

    return (
                <BoxLogin
                    onSubmitData={handleSubmit}
                    errorMessage={errorMessage}
                />
                );
}
