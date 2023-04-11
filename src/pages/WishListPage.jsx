import MovieItem from "../components/Movie/MovieItem";
import { child, get, getDatabase, ref } from "firebase/database";
import { redirect, useLoaderData } from "react-router-dom";
import { getAuthUid } from "../util/auth-util";

function WishListPage() {
  const data = useLoaderData();

  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <MovieItem item={data} />;
    </div>
  );
}

export default WishListPage;

export async function loader() {
  const uid = getAuthUid();

  const dbRef = ref(getDatabase());

  const result = [];

  await get(child(dbRef, `wishlist/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        for (const key in data) {
          result[key] = data[key];
        }
        return result;
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
}
