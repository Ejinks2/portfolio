import './App.css';

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>Jinks Portfolio</title>
      <div className="header">
          <h1>Ethan Jinks</h1>
          <h2>Welcome to my portfolio!</h2>
      </div>
      <br />
      <div className="aboutMe">
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
      <div className="projects">
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
      <div className="quote">
          <blockquote>
          <h3 id="quote">
              The world is full of kind people. If you can't find one, be one.
          </h3>
          <h3> - Unknown </h3>
          </blockquote>
      </div>
      <style
          dangerouslySetInnerHTML={{
          __html:
              "\n        body {\n            background-color: #0D1B2A;\n            color: #1B263B;\n            font-variant-caps: petite-caps;\n        }\n\n        .header {\n            text-align: center;\n            margin: auto;\n            background-color: #B8C6DB;\n            border-radius: 25px;\n            width: 35%;\n            border: 4px solid rgb(51, 44, 65);\n        }\n\n        div {\n            background-color: #B8C6DB;\n        }\n\n        .quote {\n            text-align: center;\n            width: 25%;\n            margin: auto;\n            border-radius: 10%;\n            display: flex;\n            flex-wrap: wrap;\n        }\n\n        .aboutMe {\n            margin: auto;\n            width: 75%;\n            padding-left: 2%; \n            padding-right: 2%;\n            padding-top: 1%;\n            padding-bottom: 1%;\n            border-radius: 15px;\n        }\n\n        .projects {\n            width: 90%;\n            margin: auto;\n            margin-top: 2%;\n            margin-bottom: 2%;\n            border-radius: 10%;\n            padding-left: 2%; \n            padding-right: 2%;\n            padding-top: 2%;\n            padding-bottom: 2%;\n        }\n\n        .projects h3 {\n            font-size: large;\n        }\n    "
          }}
      />
    </>
  );
}

export default App;
