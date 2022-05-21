import Imgfluid from "./Imgfluid"
import { MathpixMarkdown, MathpixLoader } from 'mathpix-markdown-it';

// import qnadata from "./qnadata";

const Qna = (props: { question: string; qnimg: any; answer: string; }) => {
    return (
        <>
            <style jsx>{`p,div {color: black; font-family: 'Merienda', cursive;}`}</style>
            {/* Question Component   */}
            <section className="container text-light my-5">
                <div className="fs-5">
                    {/* <> */}
                    <MathpixLoader>
                        <MathpixMarkdown text={props.question} />
                    </MathpixLoader>
                    {/* </> */}
                </div>
                <div className="p-2 p-md-3 mb-2 my-3 d-flex align-items-center justify-content-center rounded ">
                    <Imgfluid src={props.qnimg}></Imgfluid>
                </div>
            </section>
            {/* Answer component  */}
            <section className="container">
                <div className="row featurette my-5">
                    <div className="fs-3 justify-content-space-between" >
                        <MathpixLoader> <MathpixMarkdown text={props.answer} /></MathpixLoader>
                    </div>
                    <hr />
                </div>
            </section>


        </>
    )
}

export default Qna