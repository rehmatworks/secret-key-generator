import type { Metadata } from "next"
import { Shield, Github, Lock, AlertTriangle, CheckCircle2, Cpu } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { FocusedKeyGenerator } from "@/components/focused-key-generator"

export const metadata: Metadata = {
  title: "Random Password Generator Online - Secure Password Generator | Free Tool",
  description:
    "Generate strong, random passwords online for free. Create secure passwords with customizable length, symbols, numbers, uppercase and lowercase letters. 100% client-side generation - your passwords never leave your browser.",
  keywords: [
    "random password generator",
    "secure password generator",
    "password generator online",
    "strong password generator",
    "random password generator online",
    "password creator",
    "generate secure password",
    "free password generator",
    "custom password generator",
  ],
  openGraph: {
    title: "Random Password Generator Online - Free Secure Password Tool",
    description:
      "Generate strong, random passwords online. Customize length and character sets. 100% client-side - passwords never leave your browser.",
    type: "website",
    url: "https://seckeygen.com/random-password-generator",
  },
}

export default function PasswordGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Random Password Generator",
    url: "https://seckeygen.com/random-password-generator",
    description:
      "Generate strong, random passwords online with customizable settings. 100% client-side generation for maximum security.",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Customizable password length",
      "Include/exclude character sets",
      "100% client-side generation",
      "No data sent to servers",
      "Web Crypto API security",
    ],
  }

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a Secure Random Password",
    description: "Step-by-step guide to generating a secure random password using our free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the password generator",
        text: "Visit the Random Password Generator page at seckeygen.com/random-password-generator",
      },
      {
        "@type": "HowToStep",
        name: "Customize settings (optional)",
        text: "Open Advanced Settings to customize password length, include/exclude character sets, add custom characters, or set a prefix/suffix",
      },
      {
        "@type": "HowToStep",
        name: "Generate password",
        text: "Click 'Generate New Key' to create a cryptographically secure random password",
      },
      {
        "@type": "HowToStep",
        name: "Copy password",
        text: "Click the copy button to copy your new secure password to clipboard",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

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
        <div className="mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to all generators
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Random Password Generator</h1>
              <p className="text-muted-foreground">
                Generate strong, cryptographically secure random passwords online. Customize length, character sets, and
                more.
              </p>
            </div>

            <FocusedKeyGenerator templateId="password" />

            <article className="prose prose-sm max-w-none space-y-6">
              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mt-0">
                  <Lock className="w-5 h-5 text-primary" />
                  What is a Secure Password?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A secure password is a randomly generated string of characters that is difficult for both humans and
                  computers to guess. Strong passwords are the first line of defense against unauthorized access to your
                  accounts and personal data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our random password generator uses the Web Crypto API&apos;s{" "}
                  <code className="px-1.5 py-0.5 bg-secondary rounded text-xs">crypto.getRandomValues()</code> function
                  to generate cryptographically secure random values, ensuring true randomness that cannot be predicted.
                </p>
              </section>

              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground mt-0">What Makes a Password Strong?</h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-foreground">Length:</strong> Use at least 16 characters. Longer passwords
                      are exponentially harder to crack.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-foreground">Complexity:</strong> Include a mix of uppercase letters,
                      lowercase letters, numbers, and symbols.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-foreground">Randomness:</strong> Avoid patterns, dictionary words, or
                      personal information. Use a true random generator.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-foreground">Uniqueness:</strong> Use a different password for every
                      account. Never reuse passwords.
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground mt-0">How to Use the Password Generator</h2>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                  <li>
                    <strong className="text-foreground">Generate a password:</strong> A secure 20-character password is
                    generated automatically when you load this page.
                  </li>
                  <li>
                    <strong className="text-foreground">Customize (optional):</strong> Click &quot;Advanced
                    Settings&quot; to adjust the password length, enable/disable character sets (lowercase, uppercase,
                    numbers, symbols), or add custom characters.
                  </li>
                  <li>
                    <strong className="text-foreground">Copy the password:</strong> Click the copy button to copy your
                    new password to your clipboard.
                  </li>
                  <li>
                    <strong className="text-foreground">Store securely:</strong> Use a password manager to store your
                    passwords securely.
                  </li>
                </ol>
              </section>

              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mt-0">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Password Security Best Practices
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Use a password manager:</strong> Tools like 1Password,
                      Bitwarden, or KeePass help you generate and store unique passwords for every account.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Enable two-factor authentication (2FA):</strong> Add an extra
                      layer of security beyond just your password.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Never share your passwords:</strong> Keep your passwords
                      private. Legitimate services will never ask for your password.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Check for breaches:</strong> Use services like Have I Been
                      Pwned to check if your accounts have been compromised.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Update passwords regularly:</strong> Change passwords for
                      sensitive accounts periodically, especially after a potential breach.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground mt-0">Password Strength Explained</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Password strength is measured in bits of entropy. The higher the entropy, the harder the password is
                  to crack. Our generator shows you the entropy of your password in real-time:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <span className="font-medium text-red-500">Weak</span>
                    <p className="text-xs text-muted-foreground mt-1">{"< 40 bits - Easily cracked"}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <span className="font-medium text-yellow-500">Fair</span>
                    <p className="text-xs text-muted-foreground mt-1">40-60 bits - Basic protection</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <span className="font-medium text-blue-500">Good</span>
                    <p className="text-xs text-muted-foreground mt-1">60-80 bits - Decent security</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <span className="font-medium text-green-500">Strong</span>
                    <p className="text-xs text-muted-foreground mt-1">80+ bits - Highly secure</p>
                  </div>
                </div>
              </section>

              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground mt-0">Why Use Our Random Password Generator?</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">100% Client-Side:</strong> Your passwords are generated
                      entirely in your browser. No data is ever sent to any server.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Cryptographically Secure:</strong> We use the Web Crypto API
                      for true randomness, not pseudo-random number generators.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Fully Customizable:</strong> Adjust length, character sets,
                      include custom characters, or exclude ambiguous characters like 0, O, l, and I.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Open Source:</strong> Our code is{" "}
                      <a
                        href="https://github.com/rehmatworks/secret-key-generator"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        open source on GitHub
                      </a>
                      . Audit it yourself or contribute to make it better.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground">Free Forever:</strong> No ads, no accounts, no subscriptions.
                      Just a simple, secure password generator.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">
                  Need Secret Keys for Your Framework?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Check out our{" "}
                  <Link href="/" className="text-primary hover:underline font-medium">
                    Secret Key Generator
                  </Link>{" "}
                  for framework-specific keys for Django, FastAPI, JWT, Flask, Laravel, Rails, NextAuth, and more.
                </p>
              </section>
            </article>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-4 space-y-3">
              <h3 className="font-medium text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Security
              </h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  Passwords generated 100% client-side
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  No data sent to any server
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  Uses Web Crypto API
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  Open source - audit the code
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 space-y-3">
              <h3 className="font-medium text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Other Generators
              </h3>
              <div className="space-y-1 text-xs">
                {[
                  { name: "Django Secret Key", slug: "django-secret-key-generator" },
                  { name: "FastAPI Secret Key", slug: "fastapi-secret-key-generator" },
                  { name: "JWT Secret Key", slug: "jwt-secret-key-generator" },
                  { name: "Flask Secret Key", slug: "flask-secret-key-generator" },
                  { name: "Laravel APP_KEY", slug: "laravel-key-generator" },
                  { name: "Rails Secret Key", slug: "rails-secret-key-generator" },
                  { name: "NextAuth Secret", slug: "nextauth-secret-generator" },
                ].map((item, i, arr) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className={`block py-2 hover:bg-secondary/50 px-2 -mx-2 rounded transition-colors text-muted-foreground hover:text-foreground ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="block rounded-lg border border-primary/50 bg-primary/5 p-4 hover:bg-primary/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">All Generators</p>
                  <p className="text-xs text-muted-foreground">View all secret key generators</p>
                </div>
              </div>
            </Link>

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
            Free online random password generator. Generate secure passwords with custom settings.
          </p>
        </div>
      </footer>
    </main>
  )
}
