// Server-side key generation using Node.js crypto
import { randomBytes, randomUUID } from "crypto"

export const CHAR_SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  hexLower: "0123456789abcdef",
  hexUpper: "0123456789ABCDEF",
  base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  urlSafe: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
}

export interface TemplateConfig {
  id: string
  name: string
  length: number
  charset: string
  prefix?: string
}

export const TEMPLATES: Record<string, TemplateConfig> = {
  django: {
    id: "django",
    name: "Django SECRET_KEY",
    length: 50,
    charset: CHAR_SETS.alphanumeric + "!@#$%^&*(-_=+)",
  },
  fastapi: {
    id: "fastapi",
    name: "FastAPI Secret",
    length: 32,
    charset: CHAR_SETS.urlSafe,
  },
  jwt: {
    id: "jwt",
    name: "JWT Secret",
    length: 64,
    charset: CHAR_SETS.urlSafe,
  },
  flask: {
    id: "flask",
    name: "Flask SECRET_KEY",
    length: 24,
    charset: CHAR_SETS.alphanumeric + CHAR_SETS.symbols,
  },
  laravel: {
    id: "laravel",
    name: "Laravel APP_KEY",
    length: 32,
    charset: CHAR_SETS.base64,
    prefix: "base64:",
  },
  rails: {
    id: "rails",
    name: "Rails secret_key_base",
    length: 128,
    charset: CHAR_SETS.hexLower,
  },
  nextauth: {
    id: "nextauth",
    name: "NextAuth Secret",
    length: 32,
    charset: CHAR_SETS.urlSafe,
  },
  encryption: {
    id: "encryption",
    name: "AES-256 Key",
    length: 64,
    charset: CHAR_SETS.hexLower,
  },
  "api-key": {
    id: "api-key",
    name: "API Key",
    length: 40,
    charset: CHAR_SETS.alphanumeric,
  },
  password: {
    id: "password",
    name: "Secure Password",
    length: 20,
    charset: CHAR_SETS.alphanumeric + CHAR_SETS.symbols,
  },
}

export function generateServerKey(length: number, charset: string, prefix = ""): string {
  const bytes = randomBytes(length)
  let result = ""

  for (let i = 0; i < length; i++) {
    result += charset[bytes[i] % charset.length]
  }

  return prefix + result
}

export function generateServerUUID(): string {
  return randomUUID()
}

export function buildCharset(options: {
  lowercase?: boolean
  uppercase?: boolean
  numbers?: boolean
  symbols?: boolean
  customChars?: string
  excludeChars?: string
}): string {
  let charset = ""

  if (options.lowercase) charset += CHAR_SETS.lowercase
  if (options.uppercase) charset += CHAR_SETS.uppercase
  if (options.numbers) charset += CHAR_SETS.numbers
  if (options.symbols) charset += CHAR_SETS.symbols
  if (options.customChars) charset += options.customChars

  if (options.excludeChars) {
    const excludeSet = new Set(options.excludeChars)
    charset = charset
      .split("")
      .filter((c) => !excludeSet.has(c))
      .join("")
  }

  // Remove duplicates
  charset = [...new Set(charset)].join("")

  return charset || CHAR_SETS.alphanumeric // Fallback to alphanumeric
}
