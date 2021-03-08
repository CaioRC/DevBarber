import SignIn from "./screens/SignIn";

const BASE_API = 'http://localhost:4000';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/me` , {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: token
            },
        });
        const json = await req.json();
        return json;
    } ,
    signIn: async (email , password) => {
        const req = await fetch(`${BASE_API}/auth/login` , {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email , password})
        });
        const json = await req.json();
        return json;
    },
    signUp: async (username, email, password) => {
        const req = await fetch(`${BASE_API}/user` , {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email , password})
        });
        const json = await req.json();
        return json;
    },
}