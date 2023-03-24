**DEPLOYMENT INSTRUCTIONS**

**Deployed Web App:** https://t08-buddy-up.web.app/

**Prerequisites**
- Git

**Dependencies**
- Install node.js, use this link: https://nodejs.org/en/download/
- Run *npm install -g firebase-tools*
- Run *npm i* to install necessary libraries/add-ons 
- Ensure that Chakra UI is installed: https://chakra-ui.com/getting-started

**Installation Steps**
- Clone repository *git clone git@github.com:ucsb-cs148-w23/project-t08-buddyup.git*
- Install the dependencies as described above

**To run locally:**
- Run *npm start* to open web app locally on localhost3000

**To run through firebase project:**
- Run *firebase login*, login to your firebase account
- Run *npm run build*
- Run *firebase init* to initialize project, ask a team member for access
- Click "use an existing project" and conncect to firebase project
- Set public directory as build
- Type "no" when asked to create a single-page app
- Type "no" when asked to overwite html file
- Run *firebase deploy* to deploy 
- Click deployed link
- Note: auto-deployments are now working on Firebase, so merged changes will now show on the web app without the above instructions
