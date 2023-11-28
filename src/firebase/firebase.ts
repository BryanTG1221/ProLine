import { initializeApp } from 'firebase/app';
import { getStorage,ref,uploadBytes,getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1atB6diti8fRnGKLw-tXz-Luwp7EtQ_o",
  authDomain: "proline-de53e.firebaseapp.com",
  projectId: "proline-de53e",
  storageBucket: "proline-de53e.appspot.com",
  messagingSenderId: "406758640884",
  appId: "1:406758640884:web:add5f257b0d7fa980aa2a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadCar ({file, folder}) {
    const storageDriversRef = ref(storage, `${folder}/` + file.name);
    const uploadBytesResponse = await uploadBytes(storageDriversRef, file);
    const downloadURL = await getDownloadURL(uploadBytesResponse.ref);
    return downloadURL;
}
