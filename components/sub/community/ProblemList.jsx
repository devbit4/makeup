import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProblemList({ currentProblems, onClick }) {
  const handleClick = (e) => {
    onClick(e);
  };
  return (
    <>
      <div className='problems'>
        {currentProblems.map((problem, index) => {
          return (
            <article key={index} className='problem'>
              <div className='question' onClick={handleClick}>
                <div className='question-content'>
                  <FontAwesomeIcon icon={faCircle} />
                  <h2>{problem.question}</h2>
                </div>
                <div className='question-underbar'>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <div className='answer'>
                <p>{problem.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
      <style jsx>{`
        .problems {
          min-height: 450px;
        }
        .problem {
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #ccc;
        }
        .question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .question-content {
          display: flex;
          align-items: center;
          padding: 10px;
        }
        .question-underbar {
          cursor: pointer;
          transform: rotate(180deg);
          transition: all 0.5s;
        }
        .question-content h2 {
          font: 700 16px/1 'roboto';
          margin-left: 10px;
        }
        .answer {
          padding: 20px 0px 0px 20px;
        }
        .answer p {
          font: 400 12px/1.4 'roboto';
        }
        .problem.off .answer {
          display: none;
        }
        .problem.off .question-underbar {
          transform: rotate(0deg);
        }
      `}</style>
    </>
  );
}
