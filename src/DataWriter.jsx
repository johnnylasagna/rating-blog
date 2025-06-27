import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import bandData from './data/data.json';

export async function writeAlbumsToFirestore() {
    const bandsCollection = collection(db, 'bands');
    for (const band of bandData) {
        try {
            await addDoc(bandsCollection, band);
            console.log("Uploaded:", band);
        } catch (e) {
            console.error("Error uploading album:", e);
        }
    }
}
