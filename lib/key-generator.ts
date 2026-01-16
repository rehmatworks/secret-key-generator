export interface KeyTemplate {
  id: string
  name: string
  description: string
  length: number
  charset: string
  prefix?: string
  suffix?: string
  icon: string
}

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

export const KEY_TEMPLATES: KeyTemplate[] = [
  {
    id: "django",
    name: "Django",
    description: "Django SECRET_KEY (50 chars)",
    length: 50,
    charset: CHAR_SETS.alphanumeric + "!@#$%^&*(-_=+)",
    icon: "🐍",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    description: "FastAPI/Starlette secret (32 chars)",
    length: 32,
    charset: CHAR_SETS.urlSafe,
    icon: "⚡",
  },
  {
    id: "jwt",
    name: "JWT",
    description: "JWT signing secret (64 chars)",
    length: 64,
    charset: CHAR_SETS.urlSafe,
    icon: "🔐",
  },
  {
    id: "flask",
    name: "Flask",
    description: "Flask SECRET_KEY (24 chars)",
    length: 24,
    charset: CHAR_SETS.alphanumeric + CHAR_SETS.symbols,
    icon: "🍶",
  },
  {
    id: "laravel",
    name: "Laravel",
    description: "Laravel APP_KEY (32 chars, base64)",
    length: 32,
    charset: CHAR_SETS.base64,
    prefix: "base64:",
    icon: "🔺",
  },
  {
    id: "rails",
    name: "Rails",
    description: "Rails secret_key_base (128 hex)",
    length: 128,
    charset: CHAR_SETS.hexLower,
    icon: "💎",
  },
  {
    id: "nextauth",
    name: "NextAuth",
    description: "NextAuth NEXTAUTH_SECRET (32 chars)",
    length: 32,
    charset: CHAR_SETS.urlSafe,
    icon: "▲",
  },
  {
    id: "encryption",
    name: "AES-256",
    description: "AES-256 encryption key (32 bytes)",
    length: 64,
    charset: CHAR_SETS.hexLower,
    icon: "🔒",
  },
  {
    id: "api-key",
    name: "API Key",
    description: "Generic API key (40 chars)",
    length: 40,
    charset: CHAR_SETS.alphanumeric,
    icon: "🔑",
  },
  {
    id: "uuid",
    name: "UUID v4",
    description: "Random UUID v4",
    length: 36,
    charset: CHAR_SETS.hexLower,
    icon: "🆔",
  },
  {
    id: "password",
    name: "Password",
    description: "Strong password (20 chars)",
    length: 20,
    charset: CHAR_SETS.alphanumeric + CHAR_SETS.symbols,
    icon: "🔏",
  },
  {
    id: "custom",
    name: "Custom",
    description: "Configure your own key",
    length: 32,
    charset: CHAR_SETS.alphanumeric,
    icon: "⚙️",
  },
]

export function generateKey(length: number, charset: string, prefix = "", suffix = ""): string {
  if (typeof window === "undefined" || !window.crypto) {
    throw new Error("Crypto API not available")
  }

  const array = new Uint32Array(length)
  window.crypto.getRandomValues(array)

  let result = ""
  for (let i = 0; i < length; i++) {
    result += charset[array[i] % charset.length]
  }

  return prefix + result + suffix
}

export function generateUUID(): string {
  if (typeof window === "undefined" || !window.crypto) {
    throw new Error("Crypto API not available")
  }

  return crypto.randomUUID()
}

export function buildCharset(options: {
  lowercase: boolean
  uppercase: boolean
  numbers: boolean
  symbols: boolean
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

  return charset
}

export function calculateEntropy(length: number, charsetSize: number): number {
  return Math.floor(length * Math.log2(charsetSize))
}

export function getStrengthLabel(entropy: number): {
  label: string
  color: string
  percentage: number
} {
  if (entropy < 40) return { label: "Weak", color: "text-red-500", percentage: 25 }
  if (entropy < 60) return { label: "Fair", color: "text-yellow-500", percentage: 50 }
  if (entropy < 80) return { label: "Good", color: "text-blue-500", percentage: 75 }
  if (entropy < 128) return { label: "Strong", color: "text-green-500", percentage: 90 }
  return { label: "Very Strong", color: "text-primary", percentage: 100 }
}
