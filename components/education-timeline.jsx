import Link from 'next/link';

export default function EducationTimeline() {
    return (
        <div className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 mx-auto md:mx-0 md:items-start md:justify-start md:pr-2">
            <h2 className="font-medium text-2xl mb-2 px-2">EDUCATION</h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-4 px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2020 - 2024 (in progress) Balikesir, Turkey GPA: 3.11/4.00
                    </time>
                    <h3>
                        <Link
                            href="https://www.balikesir.edu.tr/en"
                            target="_blank"
                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                        >
                            Balıkesir University
                        </Link>
                    </h3>
                    <h5 className="font-medium text-base text-gray-700 dark:text-gray-300">
                        Bachelor&apos;s degree, Computer Engineering
                    </h5>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Currently pursuing a comprehensive curriculum in Computer
                        Engineering, focusing on a wide range of technical subjects and
                        skills essential for modern technology solutions.
                    </p>
                </li>
                <li className="px-2">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2016 - 2020 Usak,Turkey GPA: 3.48/4.00
                    </time>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <Link
                            href="https://usakaol.meb.k12.tr/"
                            target="_blank"
                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
                        >
                            Sehit Abdulkadir Kılavuz Anatolian High School
                        </Link>
                    </h3>
                        
                </li>
            </ol>
        </div>
    );
}
