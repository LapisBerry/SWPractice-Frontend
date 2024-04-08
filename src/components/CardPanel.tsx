'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {
    const ratingReducer = (map:Map<string, number>, action:{type:string, hospitalName:string, hospitalRating:number})=>{
        switch (action.type) {
            case 'edit': {
                return new Map(map.set(action.hospitalName, action.hospitalRating));
            }
            case 'remove': {
                map.delete(action.hospitalName)
                return new Map(map);
            }
            default: return map;
        }
    }

    const [mapHospitalNameRating, dispatchRating] = useReducer(ratingReducer, new Map<string, number>);
    
    /**
     * Mock Data for Demonstration Only
     */
    const mockHospitalRepo = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    ]

    return (
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection: "row",
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                                onRating={(hospital:string)=>dispatchRating({type:'edit', hospitalName:hospital, hospitalRating: mapHospitalNameRating.get(hospital) || 5})}
                            />
                        </Link>
                    ))
                }
            </div>
            {/*
            <div style={{margin: "20px", display: "flex", flexDirection: "row",
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                <ProductCard carName="Honda Civic" imgSrc="/img/civic.jpg"
                onCompare={(car:string)=>dispatchCompare({type:'add', carName:car})}
                />
                <ProductCard carName="Honda Accord" imgSrc="/img/accord.jpg"
                onCompare={(car:string)=>dispatchCompare({type:'add', carName:car})}
                />
                <ProductCard carName="Toyota Fortuner" imgSrc="/img/fortuner.jpg"
                onCompare={(car:string)=>dispatchCompare({type:'add', carName:car})}
                />
                <ProductCard carName="Tesla Model 3" imgSrc="/img/tesla.jpg"
                onCompare={(car:string)=>dispatchCompare({type:'add', carName:car})}
                />
            </div>*/}
            {/*
            <div className="w-full text-xl font-medium">Compare List: {compareList.size}</div>
            {Array.from(compareList).map((car)=><div key={car}
                onClick={()=>dispatchCompare({type:'remove', carName:car})}>
            {car}</div>)}*/}
            <div className="w-full text-xl font-medium">Hospital List: {mapHospitalNameRating.size}</div>
            {Array.from(mapHospitalNameRating).map((hospital)=><div key={hospital[0]}
                data-testid={hospital[0]}
                onClick={()=>dispatchRating({type:'remove', hospitalName:hospital[0], hospitalRating:hospital[1]})}>
                {hospital[0] + " : " + hospital[1]}</div>)}
        </div>
    );
}