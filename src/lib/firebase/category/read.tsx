"use client";

import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

export function useCategories() {
  const { data, error } = useSWRSubscription(
    ["categories"],
    ([path], { next }) => {
      const ref = collection(db, path);

      const unsub = onSnapshot(
        ref,
        (snaps) => {
          next(
            null,
            snaps.docs.map((v) => v.data())
          );
        },
        (error) => {
          next(error?.message);
        }
      );

      return () => unsub();
    }
  );

  return {
    data,
    error,
    isLoading: data === undefined ? true : false,
  };
}
