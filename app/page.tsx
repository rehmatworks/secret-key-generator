import { KeyGenerator } from "@/components/key-generator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Shield, Github, Lock, Cpu } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Secret Key Generator</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Generator - takes 2 columns on desktop */}
          <div className="lg:col-span-2">
            <KeyGenerator />
          </div>

          {/* Sidebar with info cards */}
          <div className="space-y-4">
            {/* Security Info Cards */}
            <div className="rounded-lg border border-border bg-card p-4 space-y-3">
              <h3 className="font-medium text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Security
              </h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  Keys generated 100% client-side
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  No data sent to any server
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  Uses Web Crypto API
                </p>
              </div>
            </div>

            {/* Framework Guides */}
            <div className="rounded-lg border border-border bg-card p-4 space-y-3">
              <h3 className="font-medium text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Framework Guides
              </h3>
              <div className="space-y-1 text-xs">
                {[
                  { name: "Django", slug: "django-secret-key-generator", spec: "50 chars", icon: "🐍" },
                  { name: "FastAPI", slug: "fastapi-secret-key-generator", spec: "32 chars", icon: "⚡" },
                  { name: "JWT", slug: "jwt-secret-key-generator", spec: "64 chars", icon: "🔐" },
                  { name: "Flask", slug: "flask-secret-key-generator", spec: "24 chars", icon: "🍶" },
                  { name: "Laravel", slug: "laravel-key-generator", spec: "base64:32", icon: "🔺" },
                  { name: "Rails", slug: "rails-secret-key-generator", spec: "128 hex", icon: "💎" },
                  { name: "NextAuth", slug: "nextauth-secret-generator", spec: "32 chars", icon: "▲" },
                ].map((framework, i, arr) => (
                  <Link
                    key={framework.slug}
                    href={`/${framework.slug}`}
                    className={`flex items-center justify-between py-2 hover:bg-secondary/50 px-2 -mx-2 rounded transition-colors ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <span>{framework.icon}</span>
                      <span>{framework.name}</span>
                    </span>
                    <span className="font-mono text-muted-foreground">{framework.spec}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-border p-4 text-center">
              <p className="text-xs text-muted-foreground">
                Using <code className="px-1 py-0.5 bg-secondary rounded text-[10px]">crypto.getRandomValues()</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border mt-8">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-center text-xs text-muted-foreground">
            Free online secret key generator for Django, FastAPI, JWT, Flask, Laravel, Rails, and more.
          </p>
        </div>
      </footer>
    </main>
  )
}
