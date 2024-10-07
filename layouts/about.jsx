import ViewResumeBtn from '@/components/buttons/ViewResumeBtn';
import Link from 'next/link';

export default function About() {
    return (
        <section
            id="about"
            className="max-w-screen-xl min-h-screen py-14 mx-auto flex flex-col items-center sm:justify-center gap-2 sm:my-0"
        >
            <div className="text-4xl font-bold text-center">
                About <span className="text-primary">ME</span>
            </div>
            <p className="text-gray-600 antialiased text-xl font-light max-w-xl tracking-wider leading-8 dark:text-slate-100 px-2">
                Aspiring Machine Learning Enthusiast with experience in Full Stack Development and a focus on Python.
                I'm proficient in English and dedicated to ongoing learning, making me well-suited for projects that require technical expertise and creative problem-solving.
            </p>
            <div className="gap-3 flex flex-col sm:flex-row">
                <ViewResumeBtn />
                <a
                    href="/Alperen's CV.pdf"
                    download="Alperen's CV"
                    className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary font-medium text-lg"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}
