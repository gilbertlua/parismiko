import { Check } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, serverTimestamp,addDoc,query,where,updateDoc,doc,deleteDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDmZOH1o77pWmKSspm7rT4m_A4qyGXjb-Q",
  authDomain: "paris-garage.firebaseapp.com",
  projectId: "paris-garage",
  storageBucket: "paris-garage.firebasestorage.app",
  messagingSenderId: "336566940918",
  appId: "1:336566940918:web:1d13f9b6a590e17212a8d7",
  measurementId: "G-7CYFMYQFFW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function CheckConnection() {
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      console.log("Firestore connected successfully!");
      querySnapshot.forEach(() => {
      });
    } catch (error) {
      console.error("Error connecting to Firestore:", error);
    }
}

export async function GetItems() {
    const itemsRef = collection(db, "items");
    const querySnapshot = await getDocs(itemsRef);
    const data = querySnapshot.docs.map(doc => {
        const itemData = doc.data();

        return {
            id: doc.id,
            ...itemData,
            created_date: itemData.created_date?.toDate() || null, // Convert Firestore Timestamp to JavaScript Date
            updated_date: itemData.updated_date?.toDate() || null, // Handle updated_date similarly
        };
    });
    return data;
}


export async function GetItemsByName(name) {
    try {
        const itemsRef = collection(db, "items"); 
        const q = query(itemsRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);
    
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), 
        }));    
        return data; 
      } catch (error) {
        console.error("Error fetching items by name:", error);
        throw error; 
    }
}

export async function AddData(newItem){
    const itemsRef = collection(db,"items")
    await addDoc(itemsRef, {
        merk: newItem.merk,
        price: parseFloat(newItem.price),
        name: newItem.name,
        barcode: newItem.barcode,
        stock: newItem.stock || '0',
        created_date: serverTimestamp(),
        updated_date: serverTimestamp()
    })
}

// update data
export async function UpdateDataById(itemId, updatedItem) {

    const itemRef = doc(db, "items", itemId);      
    await updateDoc(itemRef, {
        merk: updatedItem.merk,
        price: parseFloat(updatedItem.price),
        name: updatedItem.name,
        barcode: updatedItem.barcode,
        stock: updatedItem.stock
    });
}

// delete data
export async function DeleteItem(itemId) {
    try {
        const itemRef = doc(db, "items", itemId);

        await deleteDoc(itemRef);

        console.log(`Item with ID ${itemId} has been deleted.`);
    } catch (error) {
        console.error("Error deleting item:", error);
    }
}