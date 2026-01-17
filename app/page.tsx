import { KeyGenerator } from "@/components/key-generator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Shield, Github, Lock, Cpu, Code, KeyRound, Wrench } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Secret Key Generator",
    url: "https://seckeygen.com",
    description:
      "Free online secret key generator for Django, FastAPI, JWT, Flask, Laravel, Rails, and more. Generate cryptographically secure keys with customizable length and characters.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Django SECRET_KEY generation",
      "FastAPI secret key generation",
      "JWT secret key generation",
      "Flask SECRET_KEY generation",
      "Laravel APP_KEY generation",
      "Rails secret_key_base generation",
      "NextAuth NEXTAUTH_SECRET generation",
      "Custom key configuration",
      "100% client-side generation",
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Secret Key Generator</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/random-password-generator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Password Generator
            </Link>
            <a
              href="https://github.com/rehmatworks/secret-key-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
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

            <div className="mt-8 space-y-6 rounded-xl border border-border bg-card p-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">About Secret Key Generator</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Secret Key Generator is a free, open-source tool for generating cryptographically secure secret keys
                  for your web applications. Whether you&apos;re building with Django, FastAPI, Flask, Laravel, Rails,
                  or any other framework, this tool helps you create strong, random keys that meet each framework&apos;s
                  requirements.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-foreground mb-2">Why Use This Generator?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">100% Client-Side:</strong> All keys are generated in your
                      browser using the Web Crypto API. No data is ever sent to any server.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">REST API:</strong> Our API generates keys server-side using
                      Node.js crypto module. We never store or log any generated secrets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Framework-Specific:</strong> Pre-configured templates for
                      Django (50 chars), FastAPI (32 chars), JWT (64 chars), Laravel (base64:32 bytes), Rails (128 hex),
                      and more.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Customizable:</strong> Advanced settings let you control key
                      length, character sets, prefixes, suffixes, and excluded characters.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Open Source:</strong> The source code is available on GitHub.
                      Audit it, fork it, or contribute to it.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-foreground mb-2">Supported Frameworks</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Django SECRET_KEY, FastAPI secret keys, JWT signing secrets, Flask SECRET_KEY, Laravel APP_KEY, Rails
                  secret_key_base, NextAuth NEXTAUTH_SECRET, AES-256 encryption keys, API keys, UUIDs, and secure
                  passwords.
                </p>
              </div>
            </div>
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
                  { name: "Django", slug: "django-secret-key-generator", spec: "50 chars" },
                  { name: "FastAPI", slug: "fastapi-secret-key-generator", spec: "32 chars" },
                  { name: "JWT", slug: "jwt-secret-key-generator", spec: "64 chars" },
                  { name: "Flask", slug: "flask-secret-key-generator", spec: "24 chars" },
                  { name: "Laravel", slug: "laravel-key-generator", spec: "base64:32" },
                  { name: "Rails", slug: "rails-secret-key-generator", spec: "128 hex" },
                  { name: "NextAuth", slug: "nextauth-secret-generator", spec: "32 chars" },
                ].map((framework, i, arr) => (
                  <Link
                    key={framework.slug}
                    href={`/${framework.slug}`}
                    className={`flex items-center justify-between py-2 hover:bg-secondary/50 px-2 -mx-2 rounded transition-colors ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="text-muted-foreground hover:text-foreground">{framework.name}</span>
                    <span className="font-mono text-muted-foreground">{framework.spec}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Developers Section */}
            <div className="rounded-lg border border-border bg-card p-4 space-y-3">
              <h3 className="font-medium text-sm flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Developers
              </h3>
              <div className="space-y-1 text-xs">
                <Link
                  href="/api-docs"
                  className="flex items-center justify-between py-2 hover:bg-secondary/50 px-2 -mx-2 rounded transition-colors border-b border-border"
                >
                  <span className="text-muted-foreground hover:text-foreground">REST API</span>
                  <span className="text-muted-foreground">Docs</span>
                </Link>
                <a
                  href="https://github.com/rehmatworks/secret-key-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 hover:bg-secondary/50 px-2 -mx-2 rounded transition-colors"
                >
                  <span className="text-muted-foreground hover:text-foreground">Source Code</span>
                  <Github className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Other Tools Section */}
            <div className="rounded-lg border border-border bg-card p-4 space-y-3">
              <h3 className="font-medium text-sm flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary" />
                Other Tools
              </h3>
              <div className="space-y-1 text-xs">
                <Link
                  href="/random-password-generator"
                  className="flex items-center justify-between py-2 hover:bg-secondary/50 px-2 -mx-2 rounded transition-colors"
                >
                  <span className="text-muted-foreground hover:text-foreground">Password Generator</span>
                  <KeyRound className="w-3.5 h-3.5 text-muted-foreground" />
                </Link>
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
          <div className="flex items-center justify-center gap-6 mb-3">
            <Link
              href="/random-password-generator"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Password Generator
            </Link>
            <Link href="/api-docs" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              API Documentation
            </Link>
            <a
              href="https://github.com/rehmatworks/secret-key-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Free online secret key generator for Django, FastAPI, JWT, Flask, Laravel, Rails, and more.
          </p>
        </div>
      </footer>
    </main>
  )
}
