import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
//import CarPanel from "@/components/CarPanel";

export default async function Hospital() {
    const hospitals = await getHospitals();
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
            {/*
            <hr className="my-10"/>
            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
            <CarPanel/>
            */}
        </main>
    );
}