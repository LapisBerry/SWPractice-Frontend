"use client"
import DateReserve from "@/components/DateReserve"
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs, { Dayjs } from "dayjs";
import { addBooking, removeBooking } from "@/redux/features/bookSlice";

export default function BookingPage() {
    
    const [name, setName] = useState<string|null>(null);
    const [lastName, setLastName] = useState<string|null>(null);
    const [citizenID, setCitizenID] = useState<string|null>(null);
    const [hospital, setHospital] = useState("Chula");
    const [date, setDate] = useState<Dayjs|null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const makeBooking = ()=>{
        if (name && lastName && citizenID && hospital && date) {
            const item:BookingItem = {
                name: name,
                surname: lastName,
                id: citizenID,
                hospital: hospital,
                bookDate: dayjs(date).format("YYYY/MM/DD")
            }
            dispatch(removeBooking(item.id));
            dispatch(addBooking(item));
        }
    }

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Vaccine Booking</div>

            <DateReserve
            onNameChange={(value:string)=>setName(value)}
            onLastNameChange={(value:string)=>setLastName(value)}
            onCitizenIDChange={(value:string)=>setCitizenID(value)}
            onHospitalChange={(value:string)=>setHospital(value)}
            onDateChange={(value:Dayjs)=>setDate(value)}
            />
            
            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm" onClick={makeBooking}>
                Book Vaccine
            </button>
        </main>
  )
}
