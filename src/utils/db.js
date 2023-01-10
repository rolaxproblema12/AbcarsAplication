import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';



export function getDbConnection(){
    try{
        const db = SQLite.openDatabase('qrData.db');
        console.log('conexion a base de datos exitosa');
        return db;
    }catch(e){
        console.log(e)
    }
}

// }
export function createTables(db){
    
    useEffect(()=>{
    try{
        db.transaction(tx =>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS location_vehicles(id INTEGER PRIMARY KEY AUTOINCREMENT , name_location TEXT,name_guard TEXT, mileage TEXT,reception TEXT, vehicle_id TEXT)')
        });
        console.log('creada')
    }catch(e){
        console.log('error',e);
    }
    }, [])
    

}
export function initDataBase(){
    const db = getDbConnection();
    createTables(db);
    console.log('creado con exito')
    // db.close();

}
export function insertQr(db, name,name_guard,mileage,reception,vehicle_id){
    try{
        // const insertQuery = `INSERT INTO vehicle_location(name) values ('${name}')`;
        // return db.executeSql(insertQuery);}
        // console.log('Hola desde insett',name)
        // console.log(db)
        db.transaction(tx => {
            tx.executeSql('INSERT INTO location_vehicles (name_location,name_guard,mileage,reception,vehicle_id) VALUES (?,?,?,?,?)',[name,name_guard,mileage,reception,vehicle_id],
            (txObj, resultSet) => console.log(resultSet),
            (txObj, error) => console.log('Error', error))
        })
        // db.transaction(tx=>{
        //     tx.executeSql(,
        //     (txobj,resultset)=>{console.log('resultado',resultset)});
        // });

        return 'registro creado sin wifi'
    }catch(e){
        console.log(e);
    }

}
export async function getTasks(db){
    const [information, setInformation] = useState("0")
    // console.log("Hola desde Qr optiencion",db)
    // const results = db.executeSql('SELECT id, name FROM vehicle_Location');
    // function transac(){
    //     db.transaction(tx =>{
    //         tx.executeSql('SELECT name FROM location_vehicles', [],(_,{rows}) =>
    //             JSON.stringify(rows)
    //         );
    //     })
    // }
    // const result = await new Promise(transac())
    // return result
    // return new Promise((resolve,reject)=>{
        await db.transaction(tx =>{
            tx.executeSql('SELECT * FROM location_vehicles', [],(_,{rows}) => setInformation(JSON.stringify(rows))
            );
        })
        const result = await information;
        return result;
    // })

    // return 'Holi';
    // results.forEach(function(ResultSet){
    //     for(let index = 0; index < ResultSet.rows.length; index++){
    //         qrs.push(ResultSet.rows.item(index));
    //     }
    // });

}

export function updateVehiclesdb(db,id){
    db.transaction(tx =>{
        tx.executeSql('UPDATE location_vehicles SET name_location=? WHERE vehicle_id = ?',[id]);
    });
    console.log('registro actualizado')


}