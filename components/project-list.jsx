'use client';

import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import Link from 'next/link';

const staticProjects = [
    {
        id: 1,
        imageUrl: '/uav.jpg',
        sourceCode: '',
        liveUrl: '',
        title: 'UAV Live Animal Detection',
        content: "This project aims to track and monitor wild animals using UAV (Unmanned Aerial Vehicle) cameras. It involves advanced image processing techniques to detect and visualize animals' positions within the UAV camera's field of view.",
        hastags: [
            {
                id: 10,
                title: 'Machine Learning',
                published: true,
                projectId: 1,
            },
            {
                id: 11,
                title: 'Image Processing',
                published: true,
                projectId: 1,
            },
            {
                id: 12,
                title: 'Python',
                published: true,
                projectId: 1,
            },
        ],
    },
    {
        id: 2,
        imageUrl: '/malware.jpeg',
        sourceCode: '',
        liveUrl: '',
        title: 'Python Malware',
        content: "I was part of a team that developed a malware using Python. I worked with Selenium framework to create a mechanism for capturing and filtering passwords from browser.",
        hastags: [
            {
                id: 7,
                title: 'Selenium',
                published: true,
                projectId: 2,
            },
            {
                id: 8,
                title: 'Malware',
                published: true,
                projectId: 2,
            },
            {
                id: 9,
                title: 'Python',
                published: true,
                projectId: 2,
            },
        ],
    },
    {
        id: 3,
        imageUrl: '/mp3png.png',
        sourceCode: '',
        liveUrl: '',
        title: 'BAUNmp3',
        content: "I developed an MP3 player application using Electron JS as a final project for my object-oriented programming course. This project not only allowed me to gain experience with Electron and JavaScript, but also served as an opportunity to improve my skills in designing and implementing real applicatons.",
        hastags: [
            {
                id: 4,
                title: 'Electron JS',
                published: true,
                projectId: 3,
            },
            {
                id: 5,
                title: 'JavaScript',
                published: true,
                projectId: 3,
            },
            {
                id: 6,
                title: 'OOP',
                published: true,
                projectId: 3,
            },
        ],
    },
    {
        id: 4,
        imageUrl: '/Spotify-Logo.jpeg',
        title: 'Spotify Clone',
        sourceCode: '',
        liveUrl: '',
        content: "I also developed a Spotify clone application using both SwiftUI and UIKit. I want to create my self opportunity to explore the world of mobile development.",
        hastags: [
            {
                id: 1,
                title: 'Spotify',
                published: true,
                projectId: 4,
            },
            {
                id: 2,
                title: 'SwiftUI',
                published: true,
                projectId: 4,
            },
            {
                id: 3,
                title: 'UIKit',
                published: true,
                projectId: 4,
            }
        ],
    },
];

export default function ProjectList() {
    const [isLoading, SetLoading] = useState(false);

    return (
        <>
            {isLoading ? (
                <>
                    <ProjectCardLoading />
                    <ProjectCardLoading />
                    <ProjectCardLoading />
                </>
            ) : (
                <>
                    {staticProjects.map((element) => (
                        <ProjectCard project={element} key={element.id} />
                    ))}
                </>
            )}
        </>
    );
}

const ProjectCardLoading = () => {
    return (
        <div className="w-[380px] h-[475px] mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
            <Skeleton className="h-[250px] w-full mb-4" />

            <div className="flex flex-col px-6 pt-2 pb-4">
                <Skeleton className="mb-4 h-6 w-40 rounded" />
                <Skeleton className="h-20 w-[300px] rounded" />
            </div>

            <div className="flex flex-row mt-auto px-6 pt-2 gap-2 w-full">
                <Skeleton className="rounded-full h-7 w-20" />
                <Skeleton className="rounded-full h-7 w-20" />
                <Skeleton className="rounded-full h-7 w-20" />
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
            <div className="h-[250px] w-full relative">
                <Image
                    className="w-full"
                    src={project.imageUrl}
                    alt="Sunset in the mountains"
                    fill={true}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base dark:text-gray-200">
                    {project.content}
                </p>
            </div>
            <div className="px-6 pb-2">
                {project.hastags.map((element) => (
                    <span
                        key={element.id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        #{element.title}
                    </span>
                ))}
            </div>
            <div className="px-6 min-h-[56px] pt-1 pb-4 flex items-center gap-3">
                {project?.liveUrl && (
                    <Link
                        href={project?.liveUrl}
                        target="_blank"
                        class="relative items-center justify-start inline-block px-5 py-2 overflow-hidden duration-500 text-sm font-semibold group"
                    >
                        <span class=" duration-500  translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                        <span class="relative w-full text-left text-primary transition-colors duration-1000 ease-in-out group-hover:text-white dark:group-hover:text-gray-900">
                            See Live
                        </span>
                        <span class="absolute duration-500 inset-0 border border-primary"></span>
                    </Link>
                )}
                {project?.sourceCode && (
                    <Link target="_blank" href={project.sourceCode}>
                        <p className="hover:translate-x-1 ease-in transition-all duration-300 text-primary text-sm font-semibold">
                            Source Code
                        </p>
                    </Link>
                )}
            </div>
        </div>
    );
};
