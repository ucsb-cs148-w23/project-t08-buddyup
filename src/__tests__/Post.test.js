import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
//import Login from './simple';
import Login from "components/auth/Login";
//import firebase from 'firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firestore, auth } from "firebase_setup/firebase";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
//import MockFirebase from 'config/firebase';
import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import firebase from 'firebase/app';
import sinon from 'sinon';
import NewComment from "components/comments/NewComment";
import Post from "components/post";

Enzyme.configure({ adapter: new Adapter() });

// const mockStore = configureMockStore([thunk]);
// const store = mockStore();
// const FirebaseAuthProps = {};

// // jest.mock('config/Firebase', () => ({
// //   __esModule: true,
// //   default: {
// //     GoogleAuthProvider: jest.fn(),
// //     signInWithPopup: jest.fn(),
// //   }
// // }));
// const authObjectMock = {
//   signInWithPopup: jest.fn(() => Promise.resolve(true)),
//   GoogleAuthProvider: jest.fn(() => Promise.resolve(true)),
// };
// const authMock = jest.fn(() => authObjectMock);

// jest.mock('firebase/auth', () => {
//   const authObjectMock = {
//     signInWithPopup: jest.fn(() => Promise.resolve(true)),
//     GoogleAuthProvider: jest.fn(() => Promise.resolve(true)),
//   };
//   const authMock = jest.fn(() => authObjectMock);
//   return { authMock };
// });

// describe('<Login />', () => {
//   afterEach(() => {
//     jest.resetAllMocks();
//   });
//   test('simulate click button', () => {
//     // @ts-ignore
//     //auth.mockImplementation(() => new auth.Auth());
//     const withProvider = (
//       <Provider store={store}>
//         <Login />
//       </Provider>
//     );

//     //const wrapper = mount(withProvider);
//     const wrapper = shallow(<Login/>);
//     expect(wrapper.find('Button').text()).toBe('Log In With Google');
//     wrapper.find('Button').simulate('click');
//     //expect(auth.GoogleAuthProvider).toBeCalledTimes(1);
//     //expect(auth).toBeCalledTimes(1);
//     //const signInWithPopupSpy = jest.spyOn(authMock, 'signInWithPopup');
//     const signInWithPopupMock = jest.fn();
//     jest.spyOn(auth.prototype, 'signInWithPopup').mockImplementation(signInWithPopupMock);
//     expect(signInWithPopupMock).toBeCalledTimes(1);
//   });
// });
it('simulates click events', () => {
  const handleLogin = jest.fn();
  const wrapper = shallow(<Login/>);
  wrapper.find('Button').simulate('click');
  expect(handleLogin).toBeCalledTimes(1);
});
// it("contains the welcome text", async () => {
//   await page.goto("http://localhost:3000");
//   await page.waitForSelector(".App-welcome-text");
//   const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
//   expect(text).toContain("Edit src/App.js and save to reload.");
// });
// try comments
// it('simulates comment click events', () => {
//   const handleAddComment = jest.fn();
//   const post = {
//     'id': 123
//   };
//   const wrapper = shallow(<NewComment post={post}/>);
//   wrapper.find('Button').simulate('click');
//   expect(handleAddComment).toBeCalledTimes(1);
// });