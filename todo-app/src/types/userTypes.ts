//src/types/userTypes.ts
export interface User{
    id: string;
    username: string;
    password: string;
}


export interface signUpState{
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

export interface userLoginState{
    user:User| null; //Initially no user is logged in
    isLoggedIn: boolean
}

