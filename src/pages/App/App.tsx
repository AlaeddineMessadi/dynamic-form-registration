import React from "react";
import "./styles/App.scss";

function App() {
  const [email, setEmail]: [
    string,
    (videoName: string) => void
  ] = React.useState<string>("");
  /**
   * Form Input videoName ChangeHandler
   */
  const emailChangeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    const email: string = event.target.value as string;
    setEmail(email);
  };

  return (
    <main>
      <form className="container">
        <fieldset className="form-fieldset">
          <legend>
            <h1>Registration Form</h1>
          </legend>
          <h2 className="subtitle">Please enter your Name</h2>
        </fieldset>
      </form>
    </main>
  );
}

export default App;
