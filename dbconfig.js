
const config = {
    user: 'sa',
    password:'root',
    server: 'OMEN-15-DH0XXX',
    database: 'GIT',
    port:1433,
    potions:{
        trustedconnection: true,
        enbleArithAbort: true,
        instacename:'SQLEXPRESS'
    },
} 

module.exports = config;

/*console.log(config);
//insert
var estudianteID= "1674";
var nombre= "Pedro";
var aPaterno= "Hernandez";
var aMaterno= "Hernandez";

console.log(db);
//Insert

new sql.ConnectionPool(config).connect().then(pool =>{
    return  pool.request().query ("insert into dbo.Estudiante(estudianteID,nombre,aPaterno,aMaterno) VALUES('"+estudianteID+'"'+nombre+'"'+aPaterno+'"'+aMaterno+'"')
}).then(result=>{
    let rows=result = result.recordset
    console.log(result);
    sql.close();
}).catch(err => {
    console.log(err);
    sql.close();
});

new sql.ConnectionPool(config).connect().then(pool =>{
    return pool.request().query("select * from dbo.Estudiante")
}).then(result => {
    let rows = result.recordset
    console.log(result);
    sql.close();
}).catch(err => {
    console.log(err);
    sql.close();
});

*/