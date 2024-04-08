"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Select, MenuItem } from "@mui/material"
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({onNameChange, onLastNameChange, onCitizenIDChange, onHospitalChange, onDateChange}:
{onNameChange:Function, onLastNameChange:Function, onCitizenIDChange:Function, onHospitalChange:Function, onDateChange:Function}) {

    const [name, setName] = useState<String|null>(null);
    const [lastName, setLastName] = useState<String|null>(null);
    const [citizenID, setCitizenID] = useState<string|null>(null);
    const [hospital, setHospital] = useState("Chula");
    const [date, setDate] = useState<Dayjs|null>(null);

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-col justify-center items-center">
            <TextField variant="standard" name="Name" label="Name" value={name} onChange={(e)=>{setName(e.target.value); onNameChange(e.target.value);}}/>
            <TextField variant="standard" name="Lastname" label="Lastname" value={lastName} onChange={(e)=>{setLastName(e.target.value); onLastNameChange(e.target.value);}}/>
            <TextField variant="standard" name="Citizen ID" label="Citizen ID" value={citizenID} onChange={(e)=>{setCitizenID(e.target.value); onCitizenIDChange(e.target.value);}}/>

            <Select variant="standard" name="hospital" id="hospital" value={hospital}
            className="h-[2em] w-[200px]" onChange={(e)=>{setHospital(e.target.value); onHospitalChange(e.target.value)}}>
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={date} onChange={(value)=>{setDate(value); onDateChange(value);}}/>
            </LocalizationProvider>
        </div>
    );
}