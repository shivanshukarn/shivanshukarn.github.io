"use client"
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utility/Firebase";
import { loginAction } from "./loginaction";

export const AdminLogin = () => {
    const formRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()
    const [LoginError, setLoginError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const [adminEmail, adminPassword] = [emailRef.current.value, passwordRef.current.value]
            const userCredential = await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
            if (userCredential) {
                const user = userCredential.user;
                if (user) {
                    const loginAdmin = await loginAction({ adminToken: user.accessToken })
                    if (loginAdmin.status == 'success' && loginAdmin.adminToken) {
                        router.push('/admin/dashboard')
                        setLoginError(false)
                    }
                } else {
                    setLoginError(true)
                }
            } else {
                setLoginError(true)
            }

        } catch (error) {
            setLoginError(true)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error signing in:', errorCode, errorMessage);
        } finally {
            formRef.current.reset();
        }

    }


    return (
        <section className="m-0 ml-0 md:my-8 md:w-[70vw] text-gray-400 body-font bg-gray-900 w-[90vw]">
            <div className='container md:px-0 px-5 py-10 mx-auto'>
                <div className="text-white md:w-2/3 ml-0 md:mt-1 mt-6 md:my-6">
                    <h1 className='sm:text-5xl text-4xl'>ADMIN LOGIN</h1>
                    <div className="mt-2 h-1 w-40 bg-[#007bff] rounded"></div>
                </div>
                <div className="pt-8 pb-4 text-white w-full">
                    <form className="space-y-8" ref={formRef} onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Admin Email</label>
                            <input type="email" id="email" className="shadow-sm bg-[#111827] border text-sm rounded-lg block w-full p-2.5" placeholder="youremail@domain.com" required ref={emailRef} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Admin Password</label>
                            <input type="password" id="password" className="shadow-sm bg-[#111827] border text-sm rounded-lg block w-full p-2.5" placeholder="********" required ref={passwordRef} />
                        </div>
                        <button type="submit" id="sign-in-button" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#007bff] hover:bg-blue-500">Login</button>
                    </form>

                    {LoginError && <div className="error mt-8 mx-auto p-2 bg-red-500 rounded-md">
                        <p className="text-center">Invalid Email & Password, Login failed!</p>
                    </div>}
                </div>
            </div>
            {/* <ToastContainer
                    position="bottom-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                /> */}
        </section>
    )
}