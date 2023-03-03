import Login from "components/auth/Login";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Button } from "@chakra-ui/react";

Enzyme.configure({ adapter: new Adapter() });

it('Test Log In Button Text', () => {
  const wrapper = shallow(<Login/>);
   expect(wrapper.find(Button)).toHaveLength(1);
   expect(wrapper.find(Button).text()).toEqual('Log In With Google');
});
