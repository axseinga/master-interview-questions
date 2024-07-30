import React from "react";
import { Button } from "./components/button";
import { reactQuestions } from "./questions/react-data";
import { jsQuestions } from "./questions/js-data";
import { otherQuestions } from "./questions/others-data";

type QuestionSetT = {
  id: string;
  question: string;
  answer: string;
};

export const App = () => {
  const [questionsSelection, setQuestionsSelection] = React.useState<
    QuestionSetT[]
  >([]);
  const [category, setCategory] = React.useState("all");
  const [questionIndex, setQuestionIndex] = React.useState<number>(-1);
  const [questionSet, setQuestionSet] = React.useState<QuestionSetT | null>(
    null,
  );
  const [revealAnswer, setRevealAnswer] = React.useState(false);

  const categories = [
    { label: "All", value: "all" },
    { label: "Javascript", value: "js" },
    { label: "React", value: "react" },
    { label: "Others", value: "others" },
  ];

  React.useEffect(() => {
    let combinedQuestions: QuestionSetT[] = [];
    if (category === "all") {
      combinedQuestions = [...reactQuestions, ...jsQuestions, ...otherQuestions];
    }
    if (category === "js") {
      combinedQuestions = [...jsQuestions];
    }
    if (category === "react") {
      combinedQuestions = [...reactQuestions];
    }
    if (category === "others") {
      combinedQuestions = [...otherQuestions];
    }
    setQuestionsSelection(combinedQuestions);
    setQuestionSet(null);
    setRevealAnswer(false);
  }, [category]);

  const handleDrawQuestion = () => {
    setRevealAnswer(false);
    const length = questionsSelection.length;
    const randomIndex = Math.floor(Math.random() * (length - 1) + 1);
    setQuestionSet(questionsSelection[randomIndex]);
    setQuestionIndex(randomIndex);
  };

  const handleNextQuestion = () => {
    setRevealAnswer(false);
    if (questionIndex === questionsSelection.length) {
      setQuestionSet(questionsSelection[0]);
      setQuestionIndex(0);
    } else {
      setQuestionSet(questionsSelection[questionIndex + 1]);
      setQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex w-screen flex-col gap-8 p-2 sm:p-5">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="grid w-full grid-cols-4 gap-2">
            {categories.map((cat, index) => (
              <Button
                key={`${index}_${cat.label}`}
                handleClick={() => setCategory(cat.value)}
                selected={category === cat.value}
              >
                {cat.label}
              </Button>
            ))}
          </div>
          <div className="flex gap-4 sm:w-1/3">
            <Button handleClick={handleNextQuestion}>Next question</Button>
            <Button handleClick={handleDrawQuestion}>
              Draw random question
            </Button>
          </div>
        </div>
        <div className="m-auto min-h-96 rounded-md border border-slate-700 bg-slate-200 p-2 shadow-lg sm:w-2/4">
          <button
            onClick={() => setRevealAnswer(true)}
            className="m-auto rounded-md border border-slate-500 bg-slate-100 p-2"
          >
            Show answer
          </button>
          {questionSet ? (
            <div className="flex flex-col items-center gap-4 pt-4">
              <h1 className="text-center text-4xl">{questionSet.question}</h1>
              {revealAnswer && (
                <div
                  className="flex w-full flex-col justify-items-start gap-2 px-4 text-left"
                  dangerouslySetInnerHTML={{ __html: questionSet.answer }}
                />
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center pt-4">
              <p>Click on "next question" or "Draw random question" button.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
