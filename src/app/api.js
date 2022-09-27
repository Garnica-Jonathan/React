import Foto from"../Asset/novia_de_wallie.png"
//  export const Fet = () =>fetch(`../json/Productos.json`).then(res => res.json)
//    export const Fete = () =>fetch(' https://api.escuelajs.co/api/v1/products').then(res => res.json())
     

export const promesa = () =>{
    const list = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([
            {
                id:1,
                titulo: "novia de wallie 1",
                precio: 250,
                descripcion:"novia cariñosa",
                stock:7,
                foto: Foto

            },
            {
                id: 2,
                titulo: "novia de wallie 2",
                precio: 249,
                descripcion:"novia cariñosa",
                stock:9,
                foto: Foto

            },
        ])
        },2000)
    })
    return list;
}

// export const getItem = () =>{
//     const list = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve([
//             {
//                 id:23,
//                 titulo: "novia de wallie 2",
//                 precio: 5000,
//                 descripcion:"novia cariñosa",
                
//                 foto: Foto

//             },
//             {
//                 id: 32,
//                 titulo: "novia de wallie 3",
//                 precio: 5000,
//                 descripcion:"novia cariñosa",
                
//                 foto: Foto

//             },
//         ])
//         },2000)
//     })
//     return list;
// }
