import type { Metadata } from "next"
import { Shield, Github, Code, Zap, Lock, ChevronRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Secret Key Generator API Documentation | Free REST API for Generating Secure Keys",
  description:
    "Free REST API for generating secure secret keys for Django, FastAPI, JWT, Laravel, Rails, and more. No API key required. Rate limited to 30 requests per second.",
  keywords: [
    "secret key api",
    "key generator api",
    "django secret key api",
    "jwt secret api",
    "password generator api",
    "free api",
    "rest api",
  ],
}

function CodeBlock({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <pre className="bg-secondary/50 border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono">
        <code>{children}</code>
      </pre>
    </div>
  )
}

function EndpointCard({
  method,
  path,
  description,
  params,
  example,
  response,
}: {
  method: string
  path: string
  description: string
  params?: { name: string; type: string; required: boolean; description: string }[]
  example: string
  response: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 text-xs font-bold bg-green-500/20 text-green-600 dark:text-green-400 rounded">
            {method}
          </span>
          <code className="text-sm font-mono">{path}</code>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      {params && params.length > 0 && (
        <div className="p-4 border-b border-border">
          <h4 className="text-sm font-medium mb-3">Query Parameters</h4>
          <div className="space-y-2">
            {params.map((param) => (
              <div key={param.name} className="flex items-start gap-3 text-sm">
                <code className="px-1.5 py-0.5 bg-secondary rounded text-xs font-mono shrink-0">{param.name}</code>
                <span className="text-muted-foreground text-xs shrink-0">({param.type})</span>
                {param.required && <span className="text-xs text-red-500 shrink-0">required</span>}
                <span className="text-muted-foreground text-xs">{param.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 border-b border-border">
        <h4 className="text-sm font-medium mb-2">Example Request</h4>
        <CodeBlock>{example}</CodeBlock>
      </div>

      <div className="p-4">
        <h4 className="text-sm font-medium mb-2">Example Response</h4>
        <CodeBlock>{response}</CodeBlock>
      </div>
    </div>
  )
}

export default function ApiDocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebAPI",
    name: "Secret Key Generator API",
    url: "https://seckeygen.com/api/generate",
    description:
      "Free REST API for generating secure secret keys for Django, FastAPI, JWT, Laravel, Rails, and more frameworks.",
    provider: {
      "@type": "Organization",
      name: "Secret Key Generator",
      url: "https://seckeygen.com",
    },
    documentation: "https://seckeygen.com/api-docs",
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
          <div className="flex items-center gap-3">
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
        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>API Documentation</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">API Documentation</h1>
          <p className="text-muted-foreground max-w-2xl">
            Generate secure secret keys programmatically with our free REST API. No API key required. Perfect for CI/CD
            pipelines, automation scripts, and development tools.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">No API Key</span>
            </div>
            <p className="text-xs text-muted-foreground">Free to use without authentication. Just call the endpoint.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Rate Limited</span>
            </div>
            <p className="text-xs text-muted-foreground">30 requests per second per IP address to prevent abuse.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">RESTful JSON</span>
            </div>
            <p className="text-xs text-muted-foreground">Simple GET requests with JSON responses.</p>
          </div>
        </div>

        {/* Base URL */}
        <div className="rounded-lg border border-border bg-card p-4 mb-8">
          <h3 className="text-sm font-medium mb-2">Base URL</h3>
          <code className="text-sm font-mono bg-secondary px-3 py-2 rounded block">
            https://seckeygen.com/api/generate
          </code>
        </div>

        {/* Endpoints */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold">Endpoints</h2>

          {/* Basic Usage */}
          <EndpointCard
            method="GET"
            path="/api/generate"
            description="Generate a random secret key with default settings (32 chars, alphanumeric + symbols)"
            example="curl https://seckeygen.com/api/generate"
            response={`{
  "keys": "Kx9#mP2$vL5nQ8@wR3jY6tB1cF4hN7!s",
  "length": 32,
  "charsetSize": 72,
  "entropy": 197
}`}
          />

          {/* Template Usage */}
          <EndpointCard
            method="GET"
            path="/api/generate?template={template}"
            description="Generate a secret key using a predefined framework template"
            params={[
              {
                name: "template",
                type: "string",
                required: true,
                description:
                  "Template name: django, fastapi, jwt, flask, laravel, rails, nextauth, encryption, api-key, password, uuid",
              },
            ]}
            example="curl https://seckeygen.com/api/generate?template=django"
            response={`{
  "keys": "Kx9mP2vL5nQ8wR3jY6tB1cF4hN7sG0dM2kX5pW8qE1rT4u",
  "template": "django",
  "length": 50,
  "charsetSize": 72,
  "entropy": 308
}`}
          />

          {/* Custom Options */}
          <EndpointCard
            method="GET"
            path="/api/generate?length={n}&lowercase={bool}&uppercase={bool}&numbers={bool}&symbols={bool}"
            description="Generate a custom secret key with specific character sets and length"
            params={[
              { name: "length", type: "number", required: false, description: "Key length (1-256). Default: 32" },
              { name: "lowercase", type: "boolean", required: false, description: "Include lowercase letters (a-z)" },
              { name: "uppercase", type: "boolean", required: false, description: "Include uppercase letters (A-Z)" },
              { name: "numbers", type: "boolean", required: false, description: "Include numbers (0-9)" },
              { name: "symbols", type: "boolean", required: false, description: "Include symbols (!@#$%^&*...)" },
              {
                name: "customChars",
                type: "string",
                required: false,
                description: "Additional custom characters to include",
              },
              {
                name: "excludeChars",
                type: "string",
                required: false,
                description: "Characters to exclude from the key",
              },
              { name: "prefix", type: "string", required: false, description: "Prefix to add to the generated key" },
              {
                name: "count",
                type: "number",
                required: false,
                description: "Number of keys to generate (1-10). Default: 1",
              },
            ]}
            example="curl 'https://seckeygen.com/api/generate?length=16&lowercase=true&numbers=true'"
            response={`{
  "keys": "k9m2v5n8w3j6t1c4",
  "length": 16,
  "charsetSize": 36,
  "entropy": 82
}`}
          />

          {/* Multiple Keys */}
          <EndpointCard
            method="GET"
            path="/api/generate?count={n}"
            description="Generate multiple keys at once (up to 10)"
            params={[{ name: "count", type: "number", required: false, description: "Number of keys (1-10)" }]}
            example="curl 'https://seckeygen.com/api/generate?template=jwt&count=3'"
            response={`{
  "keys": [
    "Kx9mP2vL5nQ8wR3jY6tB1cF4hN7sG0dM2kX5pW8qE1rT4uY7iO0aS3dF6gH9jK",
    "L2mN5bV8cX1zQ4wE7rT0yU3iO6pA9sD2fG5hJ8kL1mN4bV7cX0zQ3wE6rT9yU",
    "P8qW5eR2tY9uI6oA3sD0fG7hJ4kL1mN8bV5cX2zQ9wE6rT3yU0iO7pA4sD1fG"
  ],
  "template": "jwt",
  "length": 64,
  "charsetSize": 64,
  "entropy": 384
}`}
          />
        </div>

        {/* Available Templates */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Templates</h2>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="text-left p-3 font-medium">Template</th>
                  <th className="text-left p-3 font-medium">Length</th>
                  <th className="text-left p-3 font-medium">Characters</th>
                  <th className="text-left p-3 font-medium">Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "django", length: "50", chars: "Alphanumeric + Symbols", use: "Django SECRET_KEY" },
                  { name: "fastapi", length: "32", chars: "URL-safe Base64", use: "FastAPI/Starlette secrets" },
                  { name: "jwt", length: "64", chars: "URL-safe Base64", use: "JWT signing secrets" },
                  { name: "flask", length: "24", chars: "Alphanumeric + Symbols", use: "Flask SECRET_KEY" },
                  { name: "laravel", length: "32", chars: "Base64 (with prefix)", use: "Laravel APP_KEY" },
                  { name: "rails", length: "128", chars: "Hex lowercase", use: "Rails secret_key_base" },
                  { name: "nextauth", length: "32", chars: "URL-safe Base64", use: "NextAuth NEXTAUTH_SECRET" },
                  { name: "encryption", length: "64", chars: "Hex lowercase", use: "AES-256 encryption keys" },
                  { name: "api-key", length: "40", chars: "Alphanumeric", use: "Generic API keys" },
                  { name: "password", length: "20", chars: "Alphanumeric + Symbols", use: "Secure passwords" },
                  { name: "uuid", length: "36", chars: "UUID v4 format", use: "Unique identifiers" },
                ].map((t) => (
                  <tr key={t.name}>
                    <td className="p-3 font-mono text-xs">{t.name}</td>
                    <td className="p-3 text-muted-foreground">{t.length}</td>
                    <td className="p-3 text-muted-foreground">{t.chars}</td>
                    <td className="p-3 text-muted-foreground">{t.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rate Limiting */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Rate Limiting</h2>
          <div className="rounded-lg border border-border bg-card p-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              The API is rate limited to{" "}
              <strong className="text-foreground">30 requests per second per IP address</strong>. Rate limit information
              is included in response headers:
            </p>
            <CodeBlock>{`X-RateLimit-Limit: 30
X-RateLimit-Remaining: 29`}</CodeBlock>
            <p className="text-sm text-muted-foreground">
              If you exceed the rate limit, you&apos;ll receive a{" "}
              <code className="px-1 py-0.5 bg-secondary rounded text-xs">429 Too Many Requests</code> response:
            </p>
            <CodeBlock>{`{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please try again shortly.",
  "retryAfter": 1
}`}</CodeBlock>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Code Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">JavaScript / Node.js</h3>
              <CodeBlock>{`// Generate a Django secret key
const response = await fetch('https://seckeygen.com/api/generate?template=django');
const data = await response.json();
console.log(data.keys); // Your Django SECRET_KEY`}</CodeBlock>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Python</h3>
              <CodeBlock>{`import requests

# Generate a JWT secret
response = requests.get('https://seckeygen.com/api/generate?template=jwt')
data = response.json()
print(data['keys'])  # Your JWT secret`}</CodeBlock>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">cURL</h3>
              <CodeBlock>{`# Generate a custom 64-char alphanumeric key
curl 'https://seckeygen.com/api/generate?length=64&lowercase=true&uppercase=true&numbers=true'`}</CodeBlock>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Bash Script</h3>
              <CodeBlock>{`#!/bin/bash
# Generate and export as environment variable
export SECRET_KEY=$(curl -s 'https://seckeygen.com/api/generate?template=django' | jq -r '.keys')`}</CodeBlock>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Need a Visual Generator?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Use our web-based tool to generate keys interactively with advanced settings.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Shield className="w-4 h-4" />
            Open Key Generator
          </Link>
        </div>
      </div>

      <footer className="border-t border-border mt-8">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-center text-xs text-muted-foreground">
            Free Secret Key Generator API - No API key required
          </p>
        </div>
      </footer>
    </main>
  )
}
