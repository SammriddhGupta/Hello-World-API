# A simple API that prints "hello world" using node js and express js 

## The steps are as below: 

1. Ensure you have node installed ( you can check by typing `node -- version` in your terminal).

2. Create your directory(folder), cd(change directory) into it with the command `cd foldername` and then initialise npm in the project by running `npm init -y` (the -y skips the default questions you would have to just press enter enter for, if you want to see them just use `npm init`).

3. This will create a `package.json` file which holds metadata for your project. It has a section called `scripts` where we can add our own commands we want to execute for the project. 

4. Configure express by running `npm i express --save` (--save to save it to the dependencies list).

5. Create an index.js file in your root directory and add code to print "hello world".

6. To avoid having to restart your server again and again after coding changes, install the utility package nodemon with `npm i nodemon -D`.

7. In your package.json file, under the scripts section, add `"serve": "nodemon index.js"` so you can start your server by simply running the command `npm run serve`.
(If you do not want to use nodemon, you can start the server by using `node index.js`)

8. Run your server and open http://localhost:8000/ (or whatever port you configured) in your browser and voila! you should be seeing "Hello World" printed on the screen. 

9. Use `ctrl+c` to terminate the server from the terminal.

10. Now to push your code to GitHub, first let's create a `.gitignore` file.

11. Add `node_modules` , `.npm` , `.env` in your gitignore file, so that these files are not pushed to your GitHub repository.

12. Create a fresh repository in your GitHub account

13. Follow the steps on screen to initialise git and push your code, also described below
Run the following commands in your terminal
- `git init` 
- make a README.md file and write a 1 liner description for now
- `git add README.md`
- `git commit -m "add README.md"`
- `git branch -M main`
- `git remote add origin insert_your_repo_url` 
- `git push -u origin main`
- once this is done, refresh your GitHub and your README.md should have been pushed to it
- now you don't need to follow all these steps each time, just add files, put a commit message and push (keep in mind that we have to make merge requests later and only work on our own branch but this is just a setup tutorial)