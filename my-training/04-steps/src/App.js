import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {
        //Every component has its own states and when we change their states
        //it does not interfere to the others
      }
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //const [test,setTest] = useState({name:"Arash"})

  function handlePrevios() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      //setStep((s) => s + 1);

      //Do not work as we expected, use currentState
      // setStep(step + 1)
      // setStep(step + 1)
    }

    //Works but ==> Bad Practice
    //test.name = "Fred"

    //Use its function to set the value
    //setTest({name:"Mehrdad"})
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevios}>
              <span>⏮️</span>Previos
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>⏭️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}
