import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"
import { PortableTextComponents } from "@portabletext/react"

// Utility: extract YouTube ID
function getYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
}

export const portableTextComponents: PortableTextComponents = {
    types: {
        // 📷 Images
        image: ({ value }) =>
            value?.asset?._ref ? (
                <div className="my-6">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog image"}
                        width={1000}
                        height={600}
                        className="rounded-lg object-cover"
                    />
                    {value.caption && (
                        <p className="text-center text-sm text-gray-500 mt-2">{value.caption}</p>
                    )}
                </div>
            ) : null,

        // 💻 Code blocks
        code: ({ value }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
                <code>{value.code}</code>
            </pre>
        ),

        // 🎥 Video embeds
        youtube: ({ value }) => {
            const videoId = getYouTubeId(value.url)
            return videoId ? (
                <div className="my-8 aspect-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : null
        },

        vimeo: ({ value }) => (
            <div className="my-8 aspect-video">
                <iframe
                    src={`https://player.vimeo.com/video/${value.videoId}`}
                    title="Vimeo video player"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },

    block: {
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>,
        normal: ({ children }) => <p className="text-lg leading-7 my-4">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 my-6">
                {children}
            </blockquote>
        ),
    },

    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">
                {children}
            </code>
        ),
        link: ({ value, children }) => {
            const target = value?.href?.startsWith("http") ? "_blank" : undefined
            return (
                <Link
                    href={value?.href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : ""}
                    className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
                >
                    {children}
                </Link>
            )
        },
    },

    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>
        ),
    },
}
