import { child, get, getDatabase, ref, remove, set } from "firebase/database";
import { redirect } from "react-router-dom";
import { getAuthUid } from "./auth-util";

export const addWishList = async (item, iswish) => {
  const db = getDatabase();
  const uid = getAuthUid();

  const commentsRef = ref(db, `wishlist/${uid}/${item.id}`);

  if (!iswish) {
    //찜 목록에 추가
    const wisiItem = {
      id: item.id,
      title: item.title,
      poster_path: item.poster_path,
      iswish,
      vote_average: item.vote_average,
    };

    await set(commentsRef, wisiItem)
      .then((res) => {
        return;
      })
      .catch((err) => {
        return redirect(`/login`);
      });
  } else if (iswish) {
    //찜 목록 삭제
    await remove(commentsRef)
      .then((res) => {
        return;
      })
      .catch((err) => {
        return redirect(`/login`);
      });
  }

  return redirect(`/home`);
};

export const getWishList = async (wishid) => {
  const uid = getAuthUid();

  const dbRef = ref(getDatabase());

  const result = [];

  await get(child(dbRef, `wishlist/${uid}/${wishid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        result.push(data);
      } else {
        console.log("저장된 값이 없음");
      }
    })
    .catch((error) => {
      return redirect("/login");
    });

  return new Promise((resolve, reject) => {
    resolve(result);
  });
};
