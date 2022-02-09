import React from 'react';

import { User } from '@entities/User';
import { app, auth, firebase } from '@services/firebase';

type AuthContextProps = {
    user: User | null;
    signInWithGoogle(): Promise<void>;
    signOutWithGoogle(): Promise<void>;
};

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthContext = React.createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = React.useState<User | null>(null);

    // React.useEffect(() => {
    //     const currentAuth = auth.getAuth();
    //     const unsubscribe = auth.onAuthStateChanged(currentAuth, (user) => {
    //         if (user) {
    //             const { displayName, photoURL, uid } = user;
    //             if (!displayName || !photoURL) {
    //                 throw new Error('Missing information from Google Account');
    //             }
    //             setUser({
    //                 id: uid,
    //                 name: displayName,
    //                 avatar: photoURL,
    //             });
    //         } else {
    //             setUser(null);
    //         }
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);

    const signInWithGoogle = async () => {
        try {
            const currentAuth = auth.getAuth();
            const provider = new auth.GoogleAuthProvider();
            await auth.signInWithPopup(currentAuth, provider);
        } catch (err) {
            console.log(err);
        }
    };

    const signOutWithGoogle = async () => {
        try {
            const currentAuth = auth.getAuth();
            await auth.signOut(currentAuth);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, signInWithGoogle, signOutWithGoogle }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextProps => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth should be used within a context');
    }
    return context;
};

export type { AuthContextProps, AuthProviderProps };
export { AuthContext, AuthProvider, useAuth };
