import type { Metadata } from "next"
import { FRAMEWORK_CONTENT } from "@/lib/framework-content"
import { FrameworkArticle } from "@/components/framework-article"

const content = FRAMEWORK_CONTENT.find((f) => f.slug === "nextauth-secret-generator")!

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  keywords: content.keywords,
  openGraph: {
    title: content.title,
    description: content.description,
    type: "website",
  },
}

export default function NextAuthSecretGeneratorPage() {
  return <FrameworkArticle content={content} />
}
