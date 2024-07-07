"use server"
import { cookies } from 'next/headers'

export const loginAction = async ({ adminToken }) => {
    try {
        cookies().delete('adminToken')
        console.log("Login action called...");

        if (!adminToken) {
            console.log("No admin token found, Login failed!")
            return {
                status: "warning",
                message: "adminToken not found",
            };
        }

        if (adminToken) {
            const token = adminToken;
            cookies().set('adminToken', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 1,
                path: '/',
            })

            console.log("Login Successful!")

            return {
                status: "success",
                message: "Login Successful",
                adminToken: token
            };
        }

    } catch (error) {
        console.error("Error during login:", error);
        // If an error occurs, return an error response
        return {
            status: "error",
            message: "An error occurred during login",
        };
    }
};