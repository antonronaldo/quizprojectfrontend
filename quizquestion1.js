import { Link } from "react-router-dom";
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import QuizQuestionTwo from "./quizquestion2";
import QuizQuestionThree from "./quizquestion3";
import QuizQuestionFour from "./quizquestion4";

function  QuizQuestionOne() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple')
      .then((response) => {
        console.log(response.data);
        setDataList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trivia questions:", error);
      });
  }, []);
  console.log("dataList"+dataList);

  return (
   dataList && <div> 
      <h1>hai</h1>
        {dataList.map((data,index)=>(
           <Child data={data[index]}/> 
         ))}
            
    </div>
  );
}

function Child({data,index}){
 
  console.log("data"+data);

  return <div>
      
           <h1>hai</h1>
           <QuizQuestionTwo question={data} />
           <QuizQuestionThree question={data}/>
           <QuizQuestionFour question={data}/>
           <Link to="/"className="pageRoutingLink">Previous page</Link>
           <Link to="/QuizQuestionTwo"className="pageRoutingLink">Next page</Link>

  </div>
}

export default QuizQuestionOne;
