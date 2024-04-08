"use client"
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {

    const carItems = useAppSelector( (state)=> state.reduxPersistedReducer.bookSlice.bookItems )
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
        {
            carItems.length===0? <div className="text-center text-5xl">"No Vaccine Booking"</div>: null
        }
        {
            carItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={bookingItem.id}>
                        <div className="text-xl">Name: {bookingItem.name}</div>
                        <div className="text-xl">Lastname: {bookingItem.surname}</div>
                        <div className="text-xl">Citizen ID: {bookingItem.id}</div>
                        <div className="text-xl">Hospital: {bookingItem.hospital}</div>
                        <div className="text-xl">Date: {bookingItem.bookDate}</div>

                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem.id))}>
                            Remove from BookingList
                        </button>
                </div>
            ))
        }
        </>
    );
}