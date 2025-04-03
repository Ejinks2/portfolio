import './App.css';

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href='App.css' rel="stylesheet" />
      <title>Jinks Portfolio</title>
      <div className="header bubble">
          <p class="text-sm">Ethan Jinks</p>
          <h2>Welcome to my portfolio!</h2>
      </div>
      <br />
      <div className="aboutMe bubble" >
          <h2>About Me</h2>
          <h3>
          Hi! My name is Ethan Jinks. I'm a junior Computer Science major at Stevens
          Institute of Technology with a passion for learning and problem solving!
          Some of my favorite courses that I've taken include Systems Programming,
          Web Programming I, and Principles of Programming Languages. I like to
          lead, teach, and inspire others and hope that my software skills can be
          used to help others!
          </h3>
      </div>
      <div className="projects bubble">
          <h2>Projects</h2>
          <ul>
          <li>
              <h3>Simulated Recycling Bin</h3>
              <h4>
              Using the Bash interpreter language, I created a script that when the
              user calls the script, creates a .recycle folder in the home directory
              (if it does not exist) and when the user gives certain flags, either
              moves files into the recycling folder or deletes all files inside the
              recycling folder, simulating a recycling bin.
              </h4>
              <a href="https://github.com/Ejinks2/recycling" target="_blank" rel="noreferrer">
              Simulated Recycling Bin
              </a>
          </li>
          <li>
              <h3>Shell Script</h3>
              <h4>
              Using the C language, I was able to build a shell script that read
              user input from the terminal and then executed different commands
              depending on user input. I gained skills concerning processes and
              forking, tokens, buffers, and common C macros.
              </h4>
              <a href="https://github.com/Ejinks2/ShellScript" target="_blank" rel="noreferrer">
              Shell Script
              </a>
          </li>
          </ul>
      </div>
      <div className="quote bubble">
          <blockquote>
          <h3 id="quote">
              The world is full of kind people. If you can't find one, be one.
          </h3>
          <h3> - Unknown </h3>
          </blockquote>
      </div>
    </>
  );
}

export default App;
