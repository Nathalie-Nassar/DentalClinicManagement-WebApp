import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import AddPatient from "../../forms/AddPatient.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react'


export default function AddPatientPage() {

    return (
        <div>
            {/* <NavBar/> */}
            <SideBar />
            <AddPatient />
            <ScrollButton />
        </div>
    );
}