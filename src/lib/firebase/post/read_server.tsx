import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

//get all posts
export const getAllPosts = async () => {
  return await getDocs(collection(db, "posts")).then((snaps) =>
    snaps.docs.map((d) => d.data())
  );
};

//Get All Posts With Categories
export const getAllPostsWithCategory = async (categoryId) => {
  const q = query(
    collection(db, "posts"),
    where("categoryId", "==", categoryId)
  );
  return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()));
};

//get single post
export const getPost = async (id) => {
  return await getDoc(doc(db, `posts/${id}`)).then((snap) => snap.data());
};
