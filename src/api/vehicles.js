import { API_HOST } from "../utils/constants";
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
export async function postVehicles(name,name_guard,mileage,reception,vehicle_id){
    console.log('Nombre: ',name )
    console.log('Nombre Guardia ' ,name_guard )
    console.log('Kilometraje ',mileage)
    console.log('Hora  ',reception)
    console.log('Vehicle idd ', vehicle_id)
    try{
        const url = API_HOST;
        const response = await fetch(url,{method:'POST',headers:{'Content-Type': 'application/json'},body:
        ({name: name},{name_guard:name_guard},{mileage:parseInt(mileage)},{reception:reception},{vehicle_id:parseInt(vehicle_id)})
        });
        // console.log(response)
        const result = await response.json();
        // console.log(response);
        return result;
    }catch(e){
        console.log('Error al madar post',e);
    }

}