## Welcome to the repo for oxyos.org, the website for Oxy Open Source!

#### Components you will need to download/install 

1. Download Node from nodejs.org, and install
2. In the terminal, run the following command:

`sudo npm install -g`

3. Install nodemon:

`sudo npm install -g nodemon`

4. All of the other dependencies are listed in `package.json`. All you need to do is, after cloning the repo to your machine, navigate to the project root and run:

`npm install`


#### Run locally
Run each of these commands in **separate** terminal windows:

`npm run react-dev`

`npm run server-dev`

Then visit `http://localhost:8080/` in your browser. Hopefully this worked! If not, Google and other project members are your friends.

#### Common Errors
Setting up a React app can be tricky. Here are some errors that we've encountered and how to fix them:

"Nodemon is not recognized as an internal or external command, operable program or batch file."
Solution: run `npm install --save nodemon` in your terminal.

"Module not found: Error: Can't resolve 'url-loader'"
Solution: run `npm install url-loader --save-dev` in your terminal.


Adapted from [this Medium post](https://medium.com/@Preda/getting-started-on-building-a-personal-website-with-react-b44ee93b1710)

## Git workflow
#### Setup
1. On Github, **fork** oxy-os/oxyos.org
2. Either using GitKraken (highly recommended), any other git GUI, or the command line, **clone** the repo 
3. In the Remote section of the left panel in GitKraken, click the "+" button and add oxy-os as a remote
#### Making contributions
1. Open the repo on your local machine, and checkout the `development` branch
2. Make your changes, `commit`, and `push`!
3. Go to your forked copy of the repo on Github, and open a pull request from your development branch to oxy-os/development
#### Keeping your fork up to date with oxy-os
1. In GitKraken, on the left panel, click and drag oxy-os/development on to Local/development
2. Click "Merge oxy-os/development into development"
3. Now you have all of the new changes that have been accepted into oxy-os/oxyos.org on your local development branch. To see those changes in your forked repo on Github, simply `push`
