# Secret Key Generator

A powerful, open-source **secret key generator** built with Next.js for generating cryptographically secure secret keys for **Django**, **FastAPI**, **JWT**, **Flask**, **Laravel**, **Rails**, **NextAuth**, and other frameworks. Generate random, secure passwords with custom security settings—all processed **100% client-side** in your browser.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rehmatworks/secret-key-generator)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-seckeygen.com-blue?style=for-the-badge)](https://seckeygen.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)

---

## Deploy Your Own

Deploy your own instance of Secret Key Generator with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rehmatworks/secret-key-generator)

This will:
1. Clone the repository to your GitHub account
2. Create a new Vercel project
3. Deploy the application automatically

No configuration required—it works out of the box!

---

## Try It Now

**[Generate Secret Keys Online at seckeygen.com](https://seckeygen.com)**

No installation required. Generate secure keys instantly in your browser.

---

## Features

### Framework-Specific Secret Key Generators

| Framework | Key Specification | Generator Link |
|-----------|-------------------|----------------|
| **Django** | 50 characters (letters, digits, symbols) | [Django Secret Key Generator](https://seckeygen.com/django-secret-key-generator) |
| **FastAPI** | 32 characters (alphanumeric) | [FastAPI Secret Key Generator](https://seckeygen.com/fastapi-secret-key-generator) |
| **JWT** | 64 characters (high entropy) | [JWT Secret Key Generator](https://seckeygen.com/jwt-secret-key-generator) |
| **Flask** | 24 characters (alphanumeric + symbols) | [Flask Secret Key Generator](https://seckeygen.com/flask-secret-key-generator) |
| **Laravel** | Base64-encoded 32 bytes | [Laravel Key Generator](https://seckeygen.com/laravel-key-generator) |
| **Rails** | 128 hex characters | [Rails Secret Key Generator](https://seckeygen.com/rails-secret-key-generator) |
| **NextAuth** | 32 characters | [NextAuth Secret Generator](https://seckeygen.com/nextauth-secret-generator) |

### Security Features

- **100% Client-Side Generation**: All keys generated via the web interface are created in your browser using the Web Crypto API. No data is ever sent to any server.
- **Server-Side API**: The REST API generates keys server-side using Node.js's cryptographically secure `crypto.randomBytes()`. **We never store or log any generated secrets.**
- **Cryptographically Secure**: Uses `crypto.getRandomValues()` (browser) and `crypto.randomBytes()` (API) for true randomness.
- **Zero Data Collection**: Your generated secrets are never stored, logged, or transmitted (web tools) or immediately discarded after response (API).
- **Open Source**: Fully auditable codebase.

### Advanced Customization

- **Custom Key Length**: Generate keys from 8 to 256 characters
- **Character Set Control**: Toggle lowercase, uppercase, numbers, and symbols
- **Custom Characters**: Add your own character set
- **Exclude Characters**: Remove ambiguous characters (e.g., `0`, `O`, `l`, `1`)
- **Prefix & Suffix**: Add custom prefixes or suffixes to generated keys
- **Entropy Display**: Real-time entropy bits calculation and strength indicator

---

## Supported Secret Key Types

### Django Secret Key Generator

Generate secure `SECRET_KEY` values for Django projects. Django requires a 50-character secret key containing letters, digits, and special characters for cryptographic signing.

```python
# settings.py
SECRET_KEY = 'your-generated-secret-key-here'
```

**[Generate Django Secret Key Online](https://seckeygen.com/django-secret-key-generator)**

---

### FastAPI Secret Key Generator

Create secure secret keys for FastAPI applications, perfect for JWT token signing and session management.

```python
# config.py
SECRET_KEY = "your-generated-secret-key-here"
```

**[Generate FastAPI Secret Key Online](https://seckeygen.com/fastapi-secret-key-generator)**

---

### JWT Secret Key Generator

Generate high-entropy secrets for JSON Web Token (JWT) signing. Supports HS256, HS384, and HS512 algorithms.

```javascript
// jwt.config.js
const JWT_SECRET = 'your-generated-secret-key-here';
```

**[Generate JWT Secret Key Online](https://seckeygen.com/jwt-secret-key-generator)**

---

### Flask Secret Key Generator

Generate secure secret keys for Flask session management and CSRF protection.

```python
# app.py
app.secret_key = 'your-generated-secret-key-here'
```

**[Generate Flask Secret Key Online](https://seckeygen.com/flask-secret-key-generator)**

---

### Laravel Key Generator

Generate `APP_KEY` values for Laravel applications in the correct `base64:` format.

```env
# .env
APP_KEY=base64:your-generated-key-here
```

**[Generate Laravel App Key Online](https://seckeygen.com/laravel-key-generator)**

---

### Rails Secret Key Generator

Generate secure `secret_key_base` values for Ruby on Rails applications.

```yaml
# config/secrets.yml
production:
  secret_key_base: your-generated-secret-key-here
```

**[Generate Rails Secret Key Online](https://seckeygen.com/rails-secret-key-generator)**

---

### NextAuth Secret Generator

Generate `NEXTAUTH_SECRET` values for NextAuth.js authentication.

```env
# .env.local
NEXTAUTH_SECRET=your-generated-secret-key-here
```

**[Generate NextAuth Secret Online](https://seckeygen.com/nextauth-secret-generator)**

---

## Additional Generators

- **AES-256 Encryption Keys**: 32-byte keys for AES encryption
- **API Keys**: Prefixed keys for API authentication
- **UUIDs**: Version 4 UUIDs
- **Secure Passwords**: Customizable password generation

---

## Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/rehmatworks/secret-key-generator.git

# Navigate to the project directory
cd secret-key-generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the generator locally.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Cryptography**: Web Crypto API (`crypto.getRandomValues()`), Node.js's `crypto.randomBytes()`

---

## How It Works

### Cryptographic Security

This generator uses the Web Crypto API's `crypto.getRandomValues()` method, which provides cryptographically strong random values. Unlike `Math.random()`, which is predictable and insecure, `crypto.getRandomValues()` sources entropy from the operating system's random number generator.

```javascript
// How keys are generated (simplified)
function generateSecureKey(length, charset) {
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map(x => charset[x % charset.length])
    .join('');
}
```

### Entropy Calculation

Key strength is measured in entropy bits:

- **< 60 bits**: Weak (not recommended)
- **60-80 bits**: Moderate
- **80-128 bits**: Strong
- **> 128 bits**: Very Strong

Formula: `Entropy = log2(charset_size) × key_length`

---

## Security Best Practices

1. **Never commit secrets to version control**: Use environment variables
2. **Rotate secrets regularly**: Especially after team member departures
3. **Use different secrets per environment**: Separate keys for development, staging, and production
4. **Store secrets securely**: Use secret management tools like HashiCorp Vault, AWS Secrets Manager, or environment variables
5. **Minimum key length**: Use at least 32 characters for general purposes, 64+ for high-security applications

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Links

- **Live Demo**: [https://seckeygen.com](https://seckeygen.com)
- **GitHub Repository**: [https://github.com/rehmatworks/secret-key-generator](https://github.com/rehmatworks/secret-key-generator)
- **Report Issues**: [GitHub Issues](https://github.com/rehmatworks/secret-key-generator/issues)

---

## Keywords

secret key generator, django secret key generator, django secret generator online, fastapi secret key generator, jwt secret key generator, jwt secret generator online, flask secret key generator, laravel key generator, laravel app key generator, rails secret key generator, nextauth secret generator, api key generator, secure password generator, cryptographic key generator, random key generator online, app secret generator online, environment variable generator, encryption key generator, aes key generator, uuid generator

---

**[Generate Your Secret Key Now at seckeygen.com](https://seckeygen.com)**

## Credits & Acknowledgments

This project was built with the help of amazing open-source technologies and tools:

| Technology | Description |
|------------|-------------|
| [Vercel v0](https://v0.dev) | AI-powered development assistant used to build this tool |
| [Next.js 16](https://nextjs.org) | React framework for production-grade applications |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com) | Beautifully designed, accessible UI components |
| [Lucide React](https://lucide.dev) | Beautiful, consistent icon set |
| [Radix UI](https://radix-ui.com) | Unstyled, accessible component primitives |
| [Vercel](https://vercel.com) | Cloud platform for deployment and hosting |

### Special Thanks

- **[Vercel](https://vercel.com)** for providing the incredible v0 AI development tool and seamless deployment platform
- The open-source community for the amazing tools and libraries that made this project possible

---

Made with v0 by Vercel. Deployed on Vercel.
