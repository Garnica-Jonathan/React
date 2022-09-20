import Foto from"../Asset/novia_de_wallie.png"
export const promesa = () =>{
    const list = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([
            {
                titulo: "novia de wallie 1",
                precio: 5000,
                descripcion:"novia cariñosa",
                stock:7,
                foto: Foto

            },
        ])
        },2000)
    })
    return list;
}

export const getItem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve ([
        {
            titulo: "Informacion",
            foto : Foto,
            descripcion: "Novia cariñosa",
            id: 4
        },
    ]))
})