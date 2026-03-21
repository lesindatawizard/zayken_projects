import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export function usePageImages(pageName, fallback = {}) {
  const [images, setImages] = useState(fallback);

  useEffect(() => {
    const ref = doc(db, "pageImages", pageName);
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setImages({ ...fallback, ...data });
        } else {
          setImages(fallback);
        }
      },
      () => {
        setImages(fallback);
      }
    );

    return () => unsubscribe();
  }, [pageName]);

  return images;
}

