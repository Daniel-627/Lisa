// app/newsletter/[slug]/page.tsx
import { fetchPostBySlug } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { portableTextComponents } from "@/lib/portableTextComponents"
import Link from "next/link"

type PageProps = {
    params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params   // 🔹 await params
    const post = await fetchPostBySlug(slug)

    if (!post) return notFound()

    return (
        <article className="pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-2xl overflow-hidden">
                {post.mainImage?.asset && (
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 px-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
                    <p className="mt-4 text-lg">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
                {/* Author */}
                {post.author && (
                    <div className="flex items-center gap-4">
                        {post.author.image && (
                            <Image
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                width={60}
                                height={60}
                                className="rounded-full object-cover"
                            />
                        )}
                        <div>
                            <h3 className="font-semibold">{post.author.name}</h3>
                            {post.author.bio && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {typeof post.author.bio === "string" ? post.author.bio : null}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Body */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <PortableText value={post.body} components={portableTextComponents} />
                </div>
            </div>

            {/* Back button */}
            <div className="text-center mt-12">
                <Link
                    href="/newsletter"
                    className="px-6 py-3 rounded-lg font-medium bg-[#1BA3E2] text-white hover:bg-[#003366] transition"
                >
                    ← Back to Newsletter
                </Link>
            </div>
        </article>
    )
}

export const revalidate = 60
