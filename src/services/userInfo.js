import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const userInfo = () => {

    const db = getDatabase();
    const auth = getAuth();

  const userId = auth.currentUser.uid;
  return onValue(ref(db, '/users/' + userId), (snapshot) => {
    const userFirstName = (snapshot.val() && snapshot.val().firstName);
    const userPetName = (snapshot.val() && snapshot.val().petName);
  })
}
  export default {userInfo, userFirstName, userPetName};