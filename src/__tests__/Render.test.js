// import addPost from "src/hooks/useAddPost";
// import {useCollectionData} from "react-firebase-hooks/firestore";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App from "App.js";

Enzyme.configure({adapter: new Adapter()});


it("renders without crashing", () => {
  shallow(<App />);
});
