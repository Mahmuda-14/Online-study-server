import faq from '../assets/faq_graphic.jpg'
import cp from '../assets/Wave.svg'

const Faq = () => {
    return (
        <div>
            <h2 className=' text-3xl font-semibold font-serif text-center mt-[4.5rem]'>Frequently Asked Questions</h2>
            <hr className=' border-solid border-2 sm:ml-[4rem] lg:mx-72 my-8 px-60' />
            
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${cp}` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={faq} className="w-[35rem] rounded-lg -ml-[75px]" />
                    <div>
                        <div className="collapse collapse-arrow bg-white my-10 mx-6 sm:right-5">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-2xl font-bold">
                                What is Topic Listing?
                            </div>
                            <div className="collapse-content">
                                <p> Topic listing is the initial step in any assignment where you brainstorm and identify potential subject areas that align with the assignments objectives. It involves selecting a specific topic from a list of options by considering factors like personal interest, feasibility, and relevance to the assignment.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white my-10 mx-6 sm:right-5">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-2xl font-bold">
                                How to find a topic?
                            </div>
                            <div className="collapse-content">
                                <p>Carefully read the assignment instructions and guidelines. Make note of any specific requirements, such as the subject matter, length, and formatting. Understanding the assignments objectives is crucial.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white my-10 mx-6 sm:right-5">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-2xl font-bold">
                                Does it need to paid?
                            </div>
                            <div className="collapse-content">
                                <p>No,Its totally free...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;