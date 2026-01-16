import Link from "next/link"
import { ArrowLeft, Shield, Code, AlertTriangle, CheckCircle } from "lucide-react"
import { FocusedKeyGenerator } from "@/components/focused-key-generator"
import { ThemeToggle } from "@/components/theme-toggle"
import type { FrameworkContent } from "@/lib/framework-content"

interface FrameworkArticleProps {
  content: FrameworkContent
}

export function FrameworkArticle({ content }: FrameworkArticleProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Generators
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{content.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{content.name} Secret Key Generator</h1>
              <p className="text-muted-foreground">
                Generate secure <code className="text-sm bg-secondary px-1.5 py-0.5 rounded">{content.envVar}</code> for
                your {content.name} projects
              </p>
            </div>
          </div>
        </div>

        {/* Generator Widget */}
        <FocusedKeyGenerator templateId={content.templateId} showTemplates={true} />

        {/* Article Content */}
        <article className="space-y-8 prose prose-neutral dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{content.article.intro}</p>
          </section>

          {/* What Is Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              What is {content.name} {content.envVar}?
            </h2>
            <p className="text-muted-foreground leading-relaxed">{content.article.whatIs}</p>
          </section>

          {/* Requirements */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Key Requirements</h2>
            <ul className="space-y-2">
              {content.article.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to Use */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              How to Use
            </h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap text-muted-foreground">
                {content.article.howToUse}
              </pre>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Best Practices</h2>
            <ul className="space-y-2">
              {content.article.bestPractices.map((practice, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Common Mistakes */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Common Mistakes to Avoid
            </h2>
            <ul className="space-y-2">
              {content.article.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-red-500 mt-1 flex-shrink-0">✗</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Related Generators */}
        <section className="border-t border-border pt-8 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Other Secret Key Generators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Django", slug: "django-secret-key-generator", icon: "🐍" },
              { name: "FastAPI", slug: "fastapi-secret-key-generator", icon: "⚡" },
              { name: "JWT", slug: "jwt-secret-key-generator", icon: "🔐" },
              { name: "Flask", slug: "flask-secret-key-generator", icon: "🍶" },
              { name: "Laravel", slug: "laravel-key-generator", icon: "🔺" },
              { name: "Rails", slug: "rails-secret-key-generator", icon: "💎" },
              { name: "NextAuth", slug: "nextauth-secret-generator", icon: "▲" },
            ]
              .filter((item) => item.slug !== content.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
          </div>
        </section>

        {/* Security Note */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">100% Client-Side Generation</p>
              <p className="text-sm text-muted-foreground">
                All keys are generated in your browser using the Web Crypto API. No data is ever sent to any server.
                Your secrets stay secret.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Secret Key Generator - Generate secure keys for your applications</p>
          <p className="mt-1">
            <Link href="/" className="hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
