import React from "react";
import { Button } from "./components/button";
import { jsQuestions, otherQuestions, reactQuestions } from "./data";

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
    null
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
      combinedQuestions = [...reactQuestions];
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
      <div className="w-screen flex flex-col p-5 gap-8">
        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <div className="grid grid-cols-4 w-full gap-2">
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
          <div className="flex gap-4 w-1/3">
            <Button handleClick={handleNextQuestion}>Next question</Button>
            <Button handleClick={handleDrawQuestion}>
              Draw random question
            </Button>
          </div>
        </div>
        <div className="w-2/4 border border-slate-700 bg-slate-200 m-auto min-h-96 rounded-md shadow-lg p-2">
          <button
            onClick={() => setRevealAnswer(true)}
            className="bg-slate-100 border border-slate-500 rounded-md p-2 m-auto"
          >
            Show answer
          </button>
          {questionSet ? (
            <div className="flex items-center justify-center pt-4">
              {!revealAnswer ? (
                <h1 className="text-4xl text-center">{questionSet.question}</h1>
              ) : (
                <div
                  className="px-5 flex flex-col gap-2"
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
