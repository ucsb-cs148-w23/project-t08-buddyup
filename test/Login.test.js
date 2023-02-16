import addPost from "src/hooks/useAddPost";
import {useCollectionData} from "react-firebase-hooks/firestore";
class Obj {
  constructor(text) {
    this.text = text;
  }
}



describe("handleAddPost", () => {
    test("it should set text to data", () => {
      const input = new Obj("blah");

      const output = useCollectionData(query(collection(firestore, "posts"), orderBy("date", "desc"), where("blah","==",text)));
        
      
      //expect(output[0].includes(input));
    

      
  
    });
  });