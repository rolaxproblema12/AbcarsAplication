import { API_HOST, API_Transito,API_Location_Vehicles } from "../utils/constants";
export async function getVehicles(){
    try{
        const url = API_HOST;
        console.log(url);
        const response  =await fetch(url);
        const result = await response.json();
        return result;
    }catch(e){
        console.log(e);
    }
}
export async function getlocationVehicles (location_vehicle){
    try{
        const url = API_Location_Vehicles;
        const response = await fetch(url+location_vehicle);
        const result = await response.json();
        return (result);
    }catch(e){
        console.log(e);
    }
}
export async function updateVehicles(id){
    try{
        const url = API_Transito;
        const response = await fetch(url+id);
        const result = await response.json();
        return JSON.stringify(result);
    }catch(e){
        console.log(e);
    }

}
export async function postVehicles(name,name_guard,mileage,reception,chofer,vehicle_id){

    try{
        const url = API_HOST;
        const response = await fetch(url,{method:'POST',headers:{Accept:'application/json','Content-Type': 'application/json'},body:JSON.stringify({name: name,name_guard:name_guard,mileage:mileage,reception:reception,chofer:chofer,vehicle_id:vehicle_id})
        });
        // console.log(response)
        const result = await response.json();
        // console.log(response);
        return result;
    }catch(e){
        console.log('Error al madar post',e);
    }

}