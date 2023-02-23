// import addPost from "src/hooks/useAddPost";
//import {useCollectionData} from "react-firebase-hooks/firestore";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import {shallow} from 'enzyme';
//import App from "App.js";
//import {usePost} from 'hooks/posts';
import {
  doc,
  setDoc,

} from "firebase/firestore";
import { firestore } from "firebase_setup/firebase";
import {
  useCollectionData, useDocumentData,
} from "react-firebase-hooks/firestore";

Enzyme.configure({adapter: new Adapter()});

export function useAddPostTest() {
  //const [isLoading, setLoading] = useState(false);
  async function addPostTest(post) {
      //setLoading(true);
      const id = "1234";
      //const uid = auth.currentUser.uid;
      //const name = auth.currentUser.displayName;
      //console.log("UID:");
      //console.log(uid);
      await setDoc(doc(firestore, "posts_test", id), {
          ...post, 
          id,
          date: Date.now(),
      })
  }
  return {addPostTest};
}

export function usePostTest(id) {
  const q = doc(firestore, "posts_test", id);
  const [post] = useDocumentData(q);

  return {post};
}





it("puts post in database with correct fields", () => {
const {addPostTest} = useAddPostTest();

addPostTest({
  title: "test title",
  text: "test text",
  pref: "test pref"
  
});

ret_post = usePostTest("1234");

expect(ret_post.title.toEqual("test title"));

});