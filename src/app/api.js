export const promesa = () =>{
    const list = new Promise((resolve, reject) =>{
        resolve([
            {
                titulo: "novia de wallie 1",
                precio: 5000,
                descripcion:"novia cariñosa",
                stock:7,
                foto: "../Asset/novia_de_wallie.png"
            },
            {
                titulo: "novia de wallie 2",
                precio: 3000,
                descripcion:"novia toxica",
                stock:8,
                foto: "../Asset/novia_de_wallie.png"
            }
        ])
        return list;
    })
    return list;
}