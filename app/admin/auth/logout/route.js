import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function GET(request) {
    cookies().delete("adminToken");
    console.log("Signed out")
    redirect("/admin/auth/login")
}