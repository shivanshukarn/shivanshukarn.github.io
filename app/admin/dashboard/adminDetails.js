"use client"
import { auth } from "@/utility/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export const AdminDetails = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid, user);
                setLoading(false);
            } else {
                console.log("No User Found..............");
                signOut(auth).then(() => {
                    router.push('/admin/auth/logout');
                });
            }
        }, (error) => {
            console.log("error verifying user", error);
            router.push('/admin/auth/logout');
        });

        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <div>Loading...</div>;
    }
}