import { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

export const auth: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // get user from db with the email
                // if there is no user with the email, create new user
                // else set the user data to token
            }

            return token;
        },

        async session({ session, token }) {
            if (token) {
                // set the token data to session
            }

            return session;
        },

        redirect() {
            return '/dashboard';
        },
    },
};
