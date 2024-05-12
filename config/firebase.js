import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

const carRef = collection(db, "bmw_arabalar");

const usebmw_arabalarListener = () => {
  const [bmw_arabalar, setbmw_arabalar] = useState([]);

  useEffect(() => {
    return onSnapshot(carRef, (snapshot) => {
      setbmw_arabalar(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          const createdAt = data.createdAt ? data.createdAt.toDate() : null;
          return {
            id: doc.id,
            ...data,
            createdAt: createdAt,
          };
        })
      );
    });
  }, []);
  return bmw_arabalar;
};

export { auth, db, usebmw_arabalarListener };
