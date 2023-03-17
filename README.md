# project-t08-buddyup

**Project Name:** Buddy Up

**Project Description:** A web application for finding roommates and housing at UCSB.

**Group Member & GitHub IDs:**
Brenna Scholte (BrennaScholte),
Anouki Panthagani (anouki-p),
Sophia Moore (sophiajmoore),
Lauren Daniel (laurenjdaniel),
Kaiwen Tang (kkwen123),
Sergio Colis Chavez (sergioacolis),
Kai Hilbourne (kaihilbourne)

**Tech Stack(s) We Plan to Use:**
We will be using React for the frontend and Firebase for the backend.

**What Our App Will Do for the User:**
For our project we will be creating a platform for prospective and current UCSB students to meet roommates living on-campus, in IV, or in the greater Santa Barbara area. As stated above we will be using React and Firebase to create our application. Users will login using their UCSB email addresses, which will be implemented using Google OAuth. React provides the frontend framework for building user interfaces, while Firebase provides the backend services such as real-time database, authentication, and hosting. We are using Firebase as the backend for a React so that users' data can be easily synced and updated in real-time, providing a seamless user experience.

**User Roles:**
- UCSB students looking for housing: allowed to create profile, update personal information, post listing looking for roommates, rate/review leasing companies and dorms
- Representatives for leasing companies: post housing listings once approved
- Administrators (us): delete inappropriate/spam profiles/posts, add new data, make updates to application's functions

**Installation:**
- Deploy Web App: https://t08-buddy-up.web.app/
- See team/MVP_DEMO.md for MVP demo video

**Prerequisites**
- Git

**Dependencies**
- Install node.js, use this link: https://nodejs.org/en/download/
- Run *npm install -g firebase-tools*
- Run *npm i* to install necessary libraries/add-ons 

**Installation Steps**
- Clone repository *git clone git@github.com:ucsb-cs148-w23/project-t08-buddyup.git*
- Install the dependencies as described above

To run locally:
- Run *npm start* to open web app locally on localhost3000

To run through firebase project:
- Run *firebase login*, login to your firebase account
- Run *npm run build*
- Run *firebase init* to initialize project, ask a team member for access
- Click "use an existing project" and conncect to firebase project
- Set public directory as build
- Type "no" when asked to create a single-page app
- Type "no" when asked to overwite html file
- Run *firebase deploy* to deploy 
- Click deployed link

**Functionality:**
This is the Buddy Up web app MVP. This web app is a platform for prospective and current UCSB students to meet roommates living on-campus, in IV, or in the greater SB area. 

When you first click on the URL you will be directed to the login page. If you click on the login button, a pop-up window will appear and you’ll be able to login with Google. To sign out, just click the sign out button in the top left corner. Take note that the current URL is protected/dashboard. Once you sign out, if you attempt to go back to the dashboard, it will not allow you to, and will instead redirect you to the login page.

Returning back to the dashboard, you are able to create a new post by typing in the text field at the top and clicking the post button to submit the post to the feed. To view older posts, just scroll. To view or add comments to a post, just select the comment icon on the post you’d like to view. Here you will be able to see previous comments as well as be able to add your own by typing in the text field and clicking the add comment button to submit. 

If you go back to click on the profile button, you'll end up on your profile! Here you can see your profile picture, my name, year, and your housing preference. You can also see all posts that you've made and also the comments under them. To return to the dashboard, just click on the dashboard button.

All in all, our app will be a service for UCSB students to easily find roommates and connect with others through comments. Future functionality will include a page with descriptions of on-campus and off-campus housing options, as well as a way for students to rank them. Students will also be able to select their lifestyle preferences in profile bios. Once everything is implemented, UCSB students will be able to have one platform that will fulfill their housing needs. 

**Known Problems**
- When on your profile page, and attempt to click the comment icon of your post(s) you are redirected to the wrong page and it will give you an error message.

**Contributing**
- No outside contribution at this time

#Deployment
- Live testable version of Buddy Up: https://t08-buddy-up.web.app/
