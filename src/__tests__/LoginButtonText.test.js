import Login from "components/auth/Login";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

Enzyme.configure({ adapter: new Adapter() });

it('Test Log In Button Text', () => {
  //const { handleSubmit } = useForm();
  const handleSubmit = jest.fn();
  const wrapper = shallow(<Login/>);
  expect(wrapper.find(Button)).toHaveLength(1);
  expect(wrapper.find(Button).text()).toEqual('Log In With Google');
  expect(wrapper.find("form")).toHaveLength(1);
  wrapper.find("form").simulate("submit");
  expect(handleSubmit).toBeCalled();
});
