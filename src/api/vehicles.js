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
export async function postVehicles(value){
    try{
        const url = API_HOST;
        const response = await fetch(url,{method:'POST',headers:{'Content-Type': 'application/json'},body:
            JSON.stringify({name: value})
        });
        const result = await response.json();
        console.log(response);
        return result;
    }catch(e){
        console.log(e);
    }

}