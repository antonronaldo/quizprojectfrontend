import { Link } from "react-router-dom";

function QuizQuestionTwo({question,index}){
  console.log(index);
      return <div>
        <h1>Question page 2</h1>
        <h1>{question.question}</h1>
    
        <Link to="/QuizQuestionOne" className="pageRoutingLink">Previous page</Link>
        <Link to="/QuizQuestionThree" className="pageRoutingLink">Next page</Link>
      </div>
}

export default QuizQuestionTwo;