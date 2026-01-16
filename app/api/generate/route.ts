import { type NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rate-limiter"
import { generateServerKey, generateServerUUID, buildCharset, TEMPLATES, CHAR_SETS } from "@/lib/server-key-generator"

export async function GET(request: NextRequest) {
  // Get client IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown"

  // Check rate limit
  const { allowed, remaining, resetIn } = checkRateLimit(ip)

  if (!allowed) {
    return NextResponse.json(
      {
        error: "Rate limit exceeded",
        message: "Too many requests. Please try again shortly.",
        retryAfter: Math.ceil(resetIn / 1000),
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(resetIn / 1000)),
          "Retry-After": String(Math.ceil(resetIn / 1000)),
        },
      },
    )
  }

  const { searchParams } = new URL(request.url)

  // Get parameters
  const template = searchParams.get("template")
  const lengthParam = searchParams.get("length")
  const lowercase = searchParams.get("lowercase")
  const uppercase = searchParams.get("uppercase")
  const numbers = searchParams.get("numbers")
  const symbols = searchParams.get("symbols")
  const customChars = searchParams.get("customChars")
  const excludeChars = searchParams.get("excludeChars")
  const prefix = searchParams.get("prefix") || ""
  const count = Math.min(Number.parseInt(searchParams.get("count") || "1"), 10) // Max 10 keys at once

  const keys: string[] = []
  let templateUsed: string | null = null
  let length: number
  let charset: string

  // If template is specified, use template settings
  if (template) {
    if (template === "uuid") {
      // Special case for UUID
      for (let i = 0; i < count; i++) {
        keys.push(generateServerUUID())
      }
      return NextResponse.json(
        {
          keys,
          template: "uuid",
          length: 36,
        },
        {
          headers: {
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": String(remaining),
          },
        },
      )
    }

    const templateConfig = TEMPLATES[template.toLowerCase()]
    if (!templateConfig) {
      return NextResponse.json(
        {
          error: "Invalid template",
          message: `Template '${template}' not found. Available templates: ${Object.keys(TEMPLATES).join(", ")}, uuid`,
          availableTemplates: [...Object.keys(TEMPLATES), "uuid"],
        },
        { status: 400 },
      )
    }

    templateUsed = templateConfig.id
    length = lengthParam ? Number.parseInt(lengthParam) : templateConfig.length
    charset = templateConfig.charset
    const templatePrefix = templateConfig.prefix || ""

    for (let i = 0; i < count; i++) {
      keys.push(generateServerKey(length, charset, prefix || templatePrefix))
    }
  } else {
    // Custom generation
    length = lengthParam ? Number.parseInt(lengthParam) : 32

    // Validate length
    if (isNaN(length) || length < 1 || length > 256) {
      return NextResponse.json(
        {
          error: "Invalid length",
          message: "Length must be between 1 and 256",
        },
        { status: 400 },
      )
    }

    // Build charset from options or use default
    const hasCharsetOptions = lowercase !== null || uppercase !== null || numbers !== null || symbols !== null

    if (hasCharsetOptions) {
      charset = buildCharset({
        lowercase: lowercase === "true",
        uppercase: uppercase === "true",
        numbers: numbers === "true",
        symbols: symbols === "true",
        customChars: customChars || undefined,
        excludeChars: excludeChars || undefined,
      })
    } else {
      // Default to alphanumeric + symbols
      charset = CHAR_SETS.alphanumeric + CHAR_SETS.symbols
      if (excludeChars) {
        const excludeSet = new Set(excludeChars)
        charset = charset
          .split("")
          .filter((c) => !excludeSet.has(c))
          .join("")
      }
    }

    if (charset.length === 0) {
      return NextResponse.json(
        {
          error: "Invalid charset",
          message: "At least one character set must be enabled",
        },
        { status: 400 },
      )
    }

    for (let i = 0; i < count; i++) {
      keys.push(generateServerKey(length, charset, prefix))
    }
  }

  return NextResponse.json(
    {
      keys,
      ...(templateUsed && { template: templateUsed }),
      length,
      charsetSize: charset.length,
      entropy: Math.floor(length * Math.log2(charset.length)),
    },
    {
      headers: {
        "X-RateLimit-Limit": "5",
        "X-RateLimit-Remaining": String(remaining),
      },
    },
  )
}
