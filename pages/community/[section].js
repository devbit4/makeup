import { useEffect, useState } from "react"
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Faq(){
    const router = useRouter ();
    const section = router.query.section;
    const [problems, setProblems] =useState([]);
    const comminity=["faq","qna"]
    
    const getData = ()=>{
        fetch(`/dbs/${section}.json`)
        .then(data=>data.json())
        .then(json=>setProblems(json.data))
    }

    useEffect(()=>{
       section && getData();
    },[section])

    return(
        <section className="wrapper">
            <div className="sidebar">
                 <h1>All sections</h1>
                <Sidebar menus={comminity} title={"community"}></Sidebar>
            </div>
            <div className="main">
                {
                    problems.map((problem,index)=>{
                        return(
                        <article key={index}>
                            <div className="faq-question">
                                <div className="faq-question-front">
                                    <FontAwesomeIcon icon={faCircle} />
                                    <h2>{problem.question}</h2>
                                </div>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer">
                                    <h2>{problem.answer}</h2>
                                </div>
                            </div>
                        </article>)
                    })
                }
            </div>
        {/* community section 스타일링 */}
        <style jsx>{
        `
        .wrapper{
            display:flex;
        }
        .sidebar{
            width:20%;
            border:1px solid #000;
        }
        .main{
            width:80%;
            border:1px solid #000;
        }
        `
        }
        </style>
        </section>
    )
}