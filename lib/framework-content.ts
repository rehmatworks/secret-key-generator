export interface FrameworkContent {
  slug: string
  name: string
  templateId: string
  title: string
  description: string
  keywords: string[]
  icon: string
  envVar: string
  article: {
    intro: string
    whatIs: string
    requirements: string[]
    howToUse: string
    bestPractices: string[]
    commonMistakes: string[]
  }
}

export const FRAMEWORK_CONTENT: FrameworkContent[] = [
  {
    slug: "django-secret-key-generator",
    name: "Django",
    templateId: "django",
    title: "Django Secret Key Generator - Generate Secure SECRET_KEY Online",
    description:
      "Free online Django SECRET_KEY generator. Generate cryptographically secure secret keys for your Django projects instantly. No data stored, 100% client-side generation.",
    keywords: [
      "django secret key generator",
      "django secret key",
      "generate django secret key",
      "django SECRET_KEY",
      "django secret key online",
      "django key generator",
    ],
    icon: "🐍",
    envVar: "SECRET_KEY",
    article: {
      intro:
        "Django requires a SECRET_KEY setting for cryptographic signing. This key is used for sessions, password reset tokens, CSRF protection, and other security-critical features. Never commit your secret key to version control or share it publicly.",
      whatIs:
        "The Django SECRET_KEY is a random string used by Django's cryptographic signing functionality. It's essential for maintaining the security of user sessions, cookies, password reset tokens, and CSRF protection. Each Django project should have a unique, unpredictable secret key.",
      requirements: [
        "Minimum 50 characters long (Django default)",
        "Contains a mix of letters, numbers, and special characters",
        "Must be kept secret and never committed to version control",
        "Should be unique per environment (development, staging, production)",
      ],
      howToUse:
        "Copy the generated key and add it to your Django settings. For production, use environment variables:\n\n```python\nimport os\nSECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')\n```\n\nOr in your .env file:\n```\nDJANGO_SECRET_KEY=your_generated_key_here\n```",
      bestPractices: [
        "Use environment variables to store the secret key",
        "Never hardcode the secret key in settings.py",
        "Use different keys for development, staging, and production",
        "Rotate the secret key if you suspect it has been compromised",
        "Add .env files to .gitignore",
      ],
      commonMistakes: [
        "Committing the secret key to Git repositories",
        "Using the same key across all environments",
        "Using short or predictable keys",
        "Sharing keys in documentation or support tickets",
      ],
    },
  },
  {
    slug: "fastapi-secret-key-generator",
    name: "FastAPI",
    templateId: "fastapi",
    title: "FastAPI Secret Key Generator - Generate Secure Keys Online",
    description:
      "Free online FastAPI secret key generator. Create cryptographically secure keys for FastAPI and Starlette applications. Client-side generation, no data stored.",
    keywords: [
      "fastapi secret key generator",
      "fastapi secret key",
      "starlette secret key",
      "fastapi jwt secret",
      "fastapi security key",
      "python api key generator",
    ],
    icon: "⚡",
    envVar: "SECRET_KEY",
    article: {
      intro:
        "FastAPI applications require secret keys for JWT token signing, session management, and OAuth2 flows. A strong, unpredictable secret key is essential for maintaining application security.",
      whatIs:
        "In FastAPI, secret keys are used primarily for JWT (JSON Web Token) signing and verification, OAuth2 flows, and session-based authentication via Starlette middleware. The key ensures that tokens cannot be forged and sessions remain secure.",
      requirements: [
        "At least 32 characters for adequate security",
        "URL-safe characters recommended for compatibility",
        "Cryptographically random generation",
        "Unique per application and environment",
      ],
      howToUse:
        "Use the generated key with FastAPI's security utilities:\n\n```python\nfrom fastapi import FastAPI\nimport os\n\nSECRET_KEY = os.getenv('SECRET_KEY')\nALGORITHM = 'HS256'\n\n# For JWT tokens\nfrom jose import jwt\ntoken = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)\n```",
      bestPractices: [
        "Store in environment variables, not in code",
        "Use python-dotenv for local development",
        "Consider using Pydantic Settings for configuration",
        "Use HS256 or RS256 algorithms for JWT signing",
        "Implement token refresh mechanisms",
      ],
      commonMistakes: [
        "Using weak or predictable keys",
        "Hardcoding secrets in source code",
        "Not validating token expiration",
        "Using the same key for different purposes (signing vs encryption)",
      ],
    },
  },
  {
    slug: "jwt-secret-key-generator",
    name: "JWT",
    templateId: "jwt",
    title: "JWT Secret Key Generator - Generate Secure JWT Signing Keys Online",
    description:
      "Free online JWT secret key generator. Create cryptographically secure keys for JSON Web Token signing. Perfect for HS256, HS384, and HS512 algorithms.",
    keywords: [
      "jwt secret key generator",
      "jwt secret",
      "json web token key",
      "jwt signing key",
      "hs256 secret key",
      "jwt key generator online",
    ],
    icon: "🔐",
    envVar: "JWT_SECRET",
    article: {
      intro:
        "JSON Web Tokens (JWT) require a secret key for signing and verification when using symmetric algorithms like HS256. The strength of your JWT security directly depends on the secrecy and randomness of this key.",
      whatIs:
        "A JWT secret key is used to create and verify the signature portion of JSON Web Tokens. For symmetric algorithms (HS256, HS384, HS512), the same key is used for both signing and verification. The key must remain secret to prevent token forgery.",
      requirements: [
        "At least 256 bits (32 bytes) for HS256",
        "At least 384 bits (48 bytes) for HS384",
        "At least 512 bits (64 bytes) for HS512",
        "Must be cryptographically random",
        "Should be URL-safe for ease of use",
      ],
      howToUse:
        "Use the generated key with your JWT library:\n\n```javascript\n// Node.js with jsonwebtoken\nconst jwt = require('jsonwebtoken');\nconst token = jwt.sign(payload, process.env.JWT_SECRET, {\n  expiresIn: '1h',\n  algorithm: 'HS256'\n});\n```\n\n```python\n# Python with PyJWT\nimport jwt\ntoken = jwt.encode(payload, os.environ['JWT_SECRET'], algorithm='HS256')\n```",
      bestPractices: [
        "Use a key length appropriate for your algorithm",
        "Implement token expiration (exp claim)",
        "Consider using asymmetric keys (RS256) for microservices",
        "Include issuer (iss) and audience (aud) claims",
        "Implement token refresh for long-lived sessions",
      ],
      commonMistakes: [
        "Using keys shorter than the algorithm requires",
        "Not setting token expiration times",
        "Storing sensitive data in the JWT payload",
        "Not validating all claims on verification",
        "Using JWT for session management without proper invalidation",
      ],
    },
  },
  {
    slug: "flask-secret-key-generator",
    name: "Flask",
    templateId: "flask",
    title: "Flask Secret Key Generator - Generate Secure SECRET_KEY Online",
    description:
      "Free online Flask SECRET_KEY generator. Generate cryptographically secure secret keys for Flask session management and CSRF protection.",
    keywords: [
      "flask secret key generator",
      "flask secret key",
      "flask SECRET_KEY",
      "flask session key",
      "flask security key",
      "python flask key",
    ],
    icon: "🍶",
    envVar: "SECRET_KEY",
    article: {
      intro:
        "Flask uses a secret key for securely signing session cookies and protecting against CSRF attacks. Without a strong secret key, your Flask application's sessions can be tampered with.",
      whatIs:
        "The Flask SECRET_KEY is used by the framework to sign session cookies cryptographically. This signature ensures that session data cannot be modified by users. It's also used by Flask-WTF for CSRF token generation.",
      requirements: [
        "Should be random and unpredictable",
        "At least 24 characters recommended",
        "Can include any printable characters",
        "Must be consistent across application restarts",
      ],
      howToUse:
        "Set the secret key in your Flask application:\n\n```python\nimport os\nfrom flask import Flask\n\napp = Flask(__name__)\napp.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')\n\n# Or using a config file\napp.config.from_envvar('APP_SETTINGS')\n```",
      bestPractices: [
        "Use environment variables for the secret key",
        "Never use the default or example keys in production",
        "Use Flask-Talisman for additional security headers",
        "Enable secure cookies in production",
        "Consider using Flask-Session for server-side sessions",
      ],
      commonMistakes: [
        "Using 'dev' or simple strings as secret keys",
        "Committing the secret key to version control",
        "Not setting SESSION_COOKIE_SECURE in production",
        "Regenerating the key and invalidating all sessions",
      ],
    },
  },
  {
    slug: "laravel-key-generator",
    name: "Laravel",
    templateId: "laravel",
    title: "Laravel APP_KEY Generator - Generate Secure Application Keys Online",
    description:
      "Free online Laravel APP_KEY generator. Generate base64-encoded encryption keys for Laravel applications. Proper 32-byte keys for AES-256-CBC encryption.",
    keywords: [
      "laravel key generator",
      "laravel app key",
      "laravel APP_KEY",
      "laravel encryption key",
      "php artisan key:generate",
      "laravel secret key",
    ],
    icon: "🔺",
    envVar: "APP_KEY",
    article: {
      intro:
        "Laravel's APP_KEY is crucial for encryption services, including encrypted cookies, session data, and any data encrypted using Laravel's Crypt facade. It must be a 32-byte key encoded in base64 format.",
      whatIs:
        "The Laravel APP_KEY is used by the framework's encryption services. Laravel uses AES-256-CBC encryption by default, which requires a 32-byte (256-bit) key. The key is stored in base64 format with a 'base64:' prefix for easy configuration.",
      requirements: [
        "Exactly 32 bytes (256 bits) before base64 encoding",
        "Must be prefixed with 'base64:'",
        "Required for Laravel's encryption services",
        "Essential for secure session and cookie handling",
      ],
      howToUse:
        "Add the generated key to your .env file:\n\n```\nAPP_KEY=base64:your_generated_key_here\n```\n\nAlternatively, use the artisan command:\n```bash\nphp artisan key:generate\n```\n\nFor programmatic generation:\n```php\n$key = 'base64:' . base64_encode(random_bytes(32));\n```",
      bestPractices: [
        "Generate a unique key for each environment",
        "Never share keys between applications",
        "Back up your production key securely",
        "Use Laravel's config caching in production",
        "Rotate keys carefully to avoid data loss",
      ],
      commonMistakes: [
        "Copying APP_KEY between environments",
        "Not regenerating the key after cloning a project",
        "Losing the production key (encrypted data becomes unrecoverable)",
        "Using php artisan key:generate in production without backup",
      ],
    },
  },
  {
    slug: "rails-secret-key-generator",
    name: "Rails",
    templateId: "rails",
    title: "Rails Secret Key Generator - Generate Secure secret_key_base Online",
    description:
      "Free online Rails secret_key_base generator. Generate 128-character hexadecimal keys for Ruby on Rails applications.",
    keywords: [
      "rails secret key generator",
      "rails secret_key_base",
      "ruby on rails secret key",
      "rails credentials",
      "rails master key",
      "rails secret generator",
    ],
    icon: "💎",
    envVar: "SECRET_KEY_BASE",
    article: {
      intro:
        "Rails uses secret_key_base for encrypting cookies, generating signed and encrypted messages, and verifying the integrity of signed cookies. It's a critical security configuration for any Rails application.",
      whatIs:
        "The secret_key_base in Rails is a 128-character hexadecimal string used as the foundation for the application's key derivation. Rails derives specific keys for different purposes (encryption, signing) from this base key using HKDF.",
      requirements: [
        "128 hexadecimal characters (64 bytes)",
        "Must be kept secret and secure",
        "Should be unique per application and environment",
        "Used for cookie encryption, signed messages, and Active Record encryption",
      ],
      howToUse:
        "In Rails 5.2+, use encrypted credentials:\n```bash\nRAILS_MASTER_KEY=your_key rails credentials:edit\n```\n\nOr set as an environment variable:\n```bash\nexport SECRET_KEY_BASE=your_generated_key_here\n```\n\nGenerate with Rails:\n```bash\nrails secret\n```",
      bestPractices: [
        "Use Rails credentials (encrypted) for storing secrets",
        "Keep master.key out of version control",
        "Use different keys for each environment",
        "Consider using Rails 7's per-environment credentials",
        "Back up your master.key securely",
      ],
      commonMistakes: [
        "Committing master.key to version control",
        "Using the same secret_key_base across environments",
        "Not setting the key in production (falls back to insecure defaults)",
        "Losing the master.key (credentials become unreadable)",
      ],
    },
  },
  {
    slug: "nextauth-secret-generator",
    name: "NextAuth",
    templateId: "nextauth",
    title: "NextAuth Secret Generator - Generate NEXTAUTH_SECRET Online",
    description:
      "Free online NextAuth.js secret generator. Generate secure NEXTAUTH_SECRET keys for Next.js authentication with Auth.js.",
    keywords: [
      "nextauth secret generator",
      "nextauth secret",
      "NEXTAUTH_SECRET",
      "next-auth secret key",
      "auth.js secret",
      "next.js auth key",
    ],
    icon: "▲",
    envVar: "NEXTAUTH_SECRET",
    article: {
      intro:
        "NextAuth.js (now Auth.js) requires a secret for encrypting JWTs, hashing tokens, and generating CSRF tokens. This secret is essential for the security of your authentication system.",
      whatIs:
        "NEXTAUTH_SECRET is used by NextAuth.js to encrypt JWT tokens, hash email verification tokens, and generate CSRF tokens. In production, this environment variable is required and NextAuth.js will throw an error if it's not set.",
      requirements: [
        "At least 32 characters recommended",
        "Must be random and unpredictable",
        "Required in production environments",
        "URL-safe characters preferred",
      ],
      howToUse:
        "Add to your .env.local file:\n```\nNEXTAUTH_SECRET=your_generated_secret_here\nNEXTAUTH_URL=http://localhost:3000\n```\n\nOr generate using OpenSSL:\n```bash\nopenssl rand -base64 32\n```\n\nThe secret is automatically used by NextAuth.js when configured:\n```javascript\n// pages/api/auth/[...nextauth].js\nexport default NextAuth({\n  // NEXTAUTH_SECRET is read automatically\n  providers: [...]\n})\n```",
      bestPractices: [
        "Always set NEXTAUTH_SECRET in production",
        "Use different secrets for development and production",
        "Set NEXTAUTH_URL for proper callback URLs",
        "Consider using Auth.js v5 for App Router support",
        "Enable database sessions for better security",
      ],
      commonMistakes: [
        "Not setting NEXTAUTH_SECRET in production",
        "Using weak or predictable secrets",
        "Forgetting to set NEXTAUTH_URL",
        "Not configuring proper callback URLs",
        "Mixing up environment variable names",
      ],
    },
  },
]
