import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import KnowMoreBtn from '@/components/buttons/KnowMoreBtn';

const inter = Inter({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
});

export default function HomeLayout() {
    return (
        <section
            id="home"
            className="max-w-screen-xl min-h-screen pt-14 mx-auto flex items-center"
        >
            <div className="flex flex-col sm:flex-row justify-start items-center sm:justify-center w-full h-full gap-2">
                <div className="relative sm:mt-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] aspect-square m-4">
                    <Image
                        src="/profilep.png"
                        className="rounded-full shadow-2xl"
                        fill={true}
                        alt="Picture of the author"
                    />
                </div>
                <div
                    className={
                        'px-4 mt-2 sm:mt-0 mb-auto sm:mb-0 flex flex-col justify-start sm:justify-center items-center sm:items-start gap-5 ' +
                        inter.className
                    }
                >
                    <div className="text-4xl font-medium text-center sm:text-start">
                        Hi 👋 my name is{' '}
                        <span className="text-primary">
                            Alperen KARSLI
                        </span>
                    </div>
                    <div className="text-4xl font-medium text-center sm:text-start">
                        I&apos;m a <span>Machine Learning Enthusiast</span>
                    </div>
                    <div>
                        <KnowMoreBtn />
                    </div>
                </div>
            </div>
        </section>
    );
}
