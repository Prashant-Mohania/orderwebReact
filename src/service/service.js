import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { db } from "../firebase";

export async function addCategory(category, img) {
  try {
    await addDoc(collection(db, "categories"), {
      name: category,
      img: img,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updateCategory(id, category, img) {
  try {
    const docRef = doc(db, "categories", id);
    updateDoc(docRef, {
      name: category,
      img: img,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function deleteCategory(id) {
  try {
    const docRef = doc(db, "categories", id);
    deleteDoc(docRef);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function addItem(title, desc, price, category, img, bestseller) {
  try {
    await addDoc(collection(db, "foodItems"), {
      title: title,
      desc: desc,
      price: price,
      category: category,
      img: img,
      bestseller: bestseller,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
export async function updateItem(
  id,
  title,
  desc,
  price,
  category,
  img,
  bestseller
) {
  try {
    const docRef = doc(db, "foodItems", id);
    updateDoc(docRef, {
      title: title,
      desc: desc,
      price: price,
      category: category,
      img: img,
      bestseller: bestseller,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function deleteItem(id) {
  try {
    const docRef = doc(db, "foodItems", id);
    deleteDoc(docRef);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function addOrder(name, number, cart, status, date) {
  try {
    const data = await addDoc(collection(db, "orders"), {
      name: name,
      number: number,
      cart: cart,
      status: status,
      date: date,
    });
    return data.id;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getOrders() {
  try {
    let temp = [];
    const orders = await getDocs(collection(db, "orders"));
    orders.forEach((e) => {
      temp = [...temp, { id: e.id, ...e.data() }];
    });
    return temp;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getOrderStatus(id) {
  try {
    const docRef = doc(db, "orders", id);
    const data = await getDoc(docRef);
    return { id: data.id, ...data.data()["status"] };
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updateStatus(msg, state, id) {
  try {
    const docRef = doc(db, "orders", id);
    updateDoc(docRef, {
      status: {
        msg: msg,
        state: state,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
}

export async function getCategories() {
  try {
    let temp = [];
    const categories = await getDocs(collection(db, "categories"));
    categories.forEach((e) => {
      temp = [...temp, { id: e.id, ...e.data() }];
    });

    return temp;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getItems() {
  try {
    let temp = [];
    const items = await getDocs(collection(db, "foodItems"));
    items.forEach((e) => {
      temp = [...temp, { id: e.id, ...e.data() }];
    });
    return temp;
  } catch (err) {
    console.log(err);
    return false;
  }
}
