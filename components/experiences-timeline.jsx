import Link from "next/link";

export default function ExperiencesTimeline() {
    return (
        <div className="w-full md:w-1/2 flex flex-col mx-auto md:mx-0 md:items-start md:justify-start md:pr-2 border-b pb-5 md:pb-0 md:border-0">
            <h2 className="font-medium text-2xl mb-2 px-2">EXPERIENCES</h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="px-2">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Jul 2024 - Present
                        </time>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            <Link
                                href="https://www.es.mdu.se/hero/"
                                target="_blank"
                                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                            >
                                Research Assistant
                            </Link>
                        </h3>
                        <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                            Mälardalen University
                        </h5>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Developing a tool for synthetic data generation using Carla and RoadRunner for autonomous systems as part of an Erasmus+ traineeship.
                        </p>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Gaining hands-on experience with autonomous driving simulators and deep learning frameworks.
                        </p>
                    </li>
                <li className="px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Jun 2023 - Sep 2023 | 3 month
                    </time>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <Link
                            href="https://www.unizar.es/"
                            target="_blank"
                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                        >
                            Full Stack Web Developer Erasmus Intern
                        </Link>
                    </h3>
                    <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                        Universidad de Zaragoza
                    </h5>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Developed and deployed a responsive React website for academic purposes.
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Collaborating closely with university stakeholders during an Erasmus+ traineeship.
                    </p>
                </li>
                <li className="mb-4 px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        November 2021 - Mar 2022 | 5 month
                    </time>
                    <h3>
                        <Link
                            href="https://balikesir.edu.tr/"
                            target="_blank"
                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                        >
                            IT Intern
                        </Link>
                    </h3>
                    <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                        Balikesir University
                    </h5>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Supported researchers by setting up laboratory equipment and assisting in the preparation of technical presentations, which enhanced my practical IT skills.
                    </p>
                </li>
                <li className="mb-4 px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Aug 2020 - Dec 2021 
                    </time>
                    <h3>
                        <Link
                            href=""
                            target="_blank"
                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                        >
                            Freelance Front-End Web Site
                        </Link>
                    </h3>
                    <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                        Bayrampasa Therapy Vet Clinic
                    </h5>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Developed and launched a fully functional website, improving the clinic's online visibility and user engagement, and provided ongoing support to ensure seamless operation.
                    </p>
                </li>
            </ol>
        </div>
    );
}
