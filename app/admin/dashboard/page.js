"use client"
import { auth, db } from "@/utility/Firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

const Admin = () => {
  const router = useRouter()
  const [ContactFormData, setContactFormData] = useState([]);

  /*
    Name
    Email
    Subject
    Message
    Date Time
    */

  const fetchContactFormData = async () => {
    try {
      // Swal.showLoading()
      const DataQuery = query(
        collection(db, `contactFormData`),
        orderBy('created_at', 'desc')
      );
      const querySnapshot = await getDocs(DataQuery);
      const allFormEntries = [];
      for (const doc of querySnapshot.docs) {
        const data = doc.data();
        allFormEntries.push({ ...data });
      }
      setContactFormData(allFormEntries);
    } catch (error) {
      console.error("Error fetching Contact Form Data:", error);
      // Swal.hideLoading()
    } finally {
      // Swal.fire({
      //     icon: 'success',
      //     title: 'Loaded!',
      //     showConfirmButton: false,
      //     timer: 500 // Automatically closes after 0.5 seconds
      // });
      // setEntryComplete(false)
    }
  };
  useEffect(() => {
    fetchContactFormData();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push('/admin/auth/logout');
    });
  }



  return (
    <>
      {/* <div>
      <p>Admin</p>
      <button className="p-2 bg-blue-600 text-white" onClick={handleLogout}>
        Logout
      </button>
    </div> */}

      <section className="m-4 ml-0 md:ml-16 md:m-8 md:w-[70vw] text-gray-300 body-font bg-gray-900">
        <div className="container px-5 py-8 mx-auto">
          <div className="text-white md:w-2/3 ml-0 md:mt-1 mt-6 md:my-6">
            <h1 className='sm:text-4xl text-3xl'>CONTACT FORM ENTRIES</h1>
            <div className="mt-2 h-1 w-72 bg-[#007bff] rounded"></div>
          </div>
          <div className="my-4 divide-y-2 divide-gray-100">

            {ContactFormData.map((formEntry, index) => (
              <div className="py-8 flex flex-wrap md:flex-nowrap" key={index}>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-white">{formEntry.contactName}</span>
                  <span className="mt-1 text-blue-500">{formEntry.contactEmail}</span>
                  <span className="mt-1 text-gray-400 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font mb-2">{formEntry.contactSubject}</h2>
                  <p className="leading-relaxed">{formEntry.contactDesc}</p>
                  <a className="text-blue-700 inline-flex items-center mt-4">REPLY MESSAGE
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}



          </div>
        </div>
      </section>
    </>
  )
}

export default Admin