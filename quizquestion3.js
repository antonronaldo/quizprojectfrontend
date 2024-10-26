import { Link } from "react-router-dom";

function QuizQuestionThree({question,index}){
  console.log(index);
      return <div>
        <h1>Question page 3</h1>
        <h1>{question.question}</h1>
        <Link to="/QuizQuestionTwo"className="pageRoutingLink">Previous page</Link>
        <Link to="/QuizQuestionFour"className="pageRoutingLink">Next Page</Link>
      </div>
}

export default QuizQuestionThree;