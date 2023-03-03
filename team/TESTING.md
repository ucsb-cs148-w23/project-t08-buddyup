**Lab 5 and 6 Tests**

**1) How you implemented the unit test requirement from the previous lab (which testing library, which part(s) of the code, etc.)**
We used the Jest testing library along with Enzyme to create our unit test. Our code for the test is located in the src folder, under the tests file. The lab 5 unit test, which is a render test, ensures that the app is able to start. This test is located in the AppRender.test.js file. 

**2) Your plans regarding unit tests going forward (it’s ok to not go all in with unit tests, but document and reason your decision.)**
Writing comprehensive unit tests for this lab might prove to be difficult given the time constraint of this project, but we see the value in ensuring that even small functionalities of the app work as expected. Right now, actually following through with creating the key features of our application takes priority over unit tests, but we will definitely look into adding them in if time permits. 

**3) How you satisfied the component/integration/end-to-end testing requirement from this lab (which testing library, which part(s) of the code, etc.)** 
For the end-to-end test we created this week for lab 6, we made a test that checks that there exists exactly one log in button on the page and that the user is able to see a button that says 'Log In with Google'. This test is located in the same subfolder, but the code is in the LoginButtonText.test.js file. This tests part of the functonality of our log in page. To do this, we used Jest in conjunction with Enzyme.  
 
**4) Plans regarding higher-level testing going forward (it’s again ok to not commit to an integrated testing solution, but document and reason your decision).**
We intend to test the more important components of our application if time allows. Testing every end-to-end aspect of our application might prove to be diffucult and time consuming, but we aim to test the most important parts of our app that might affect the user's experience the most (posting functionality, logging in successfully, etc). To do this, we would again utilize Jest along with Enzyme's shallow rendering and mocking features. 
