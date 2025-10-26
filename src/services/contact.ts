import axios from "axios";

export const createContact = async (    
    name: string,
    email: string,
    message: string,
) => {
    const response = await axios.post('http://localhost:3000/api/contact', {
        name,
        email,
        message
    }, {
        headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
}