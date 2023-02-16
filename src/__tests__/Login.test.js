// import addPost from "src/hooks/useAddPost";
// import {useCollectionData} from "react-firebase-hooks/firestore";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App from "App.js";

Enzyme.configure({adapter: new Adapter()});

// class Obj {
//   constructor(text) {
//     this.text = text;
//   }
// }



// describe("handleAddPost", () => {
//     test("it should set text to data", () => {
//       const input = new Obj("blah");

//       const output = useCollectionData(query(collection(firestore, "posts"), orderBy("date", "desc"), where("blah","==",text)));
        
      
//       //expect(output[0].includes(input));
    

      
  
//     });
//   });

it("renders without crashing", () => {
  shallow(<App />);
});
