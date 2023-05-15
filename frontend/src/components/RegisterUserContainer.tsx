import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
import { RegisterUserPres } from "./RegisterUserPres";


export const RegisterUserContainer = (setUuid) => {
    const newUuid = uuidv4()
    const [cookies, setCookie] = useCookies(['ntflx_user']);
    return (
        <RegisterUserPres />
    )
}