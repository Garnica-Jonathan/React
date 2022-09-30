
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './Firebase';

// CREATE
export const createItem = async(obj) => {
    const colRef = collection(db, 'Ecommerce');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'Ecommerce');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, 'Ecommerce');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'Ecommerce');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'Ecommerce');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Ecommerce');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}




















// import Foto from"../Asset/novia_de_wallie.png"

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
                // foto: Foto

            },
            {
                id: 2,
                titulo: "novia de wallie 2",
                precio: 249,
                descripcion:"novia cariñosa",
                stock:9,
                // foto: Foto

            },
        ])
        },2000)
    })
    return list;
}

