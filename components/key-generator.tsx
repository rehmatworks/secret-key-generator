"use client"

import { useState, useCallback, useEffect } from "react"
import { Copy, RefreshCw, Check, ChevronDown, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import {
  KEY_TEMPLATES,
  generateKey,
  generateUUID,
  buildCharset,
  calculateEntropy,
  getStrengthLabel,
  type KeyTemplate,
} from "@/lib/key-generator"

export function KeyGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<KeyTemplate>(KEY_TEMPLATES[0])
  const [generatedKey, setGeneratedKey] = useState("")
  const [copied, setCopied] = useState(false)
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  // Advanced options
  const [customLength, setCustomLength] = useState(50)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [customChars, setCustomChars] = useState("")
  const [excludeChars, setExcludeChars] = useState("")
  const [prefix, setPrefix] = useState("")
  const [suffix, setSuffix] = useState("")

  const handleGenerate = useCallback(() => {
    setIsGenerating(true)

    setTimeout(() => {
      try {
        if (selectedTemplate.id === "uuid") {
          setGeneratedKey(generateUUID())
        } else if (selectedTemplate.id === "custom" || isAdvancedOpen) {
          const charset = buildCharset({
            lowercase: includeLowercase,
            uppercase: includeUppercase,
            numbers: includeNumbers,
            symbols: includeSymbols,
            customChars,
            excludeChars,
          })

          if (charset.length === 0) {
            setGeneratedKey("Error: No characters selected")
            setIsGenerating(false)
            return
          }

          const key = generateKey(customLength, charset, prefix, suffix)
          setGeneratedKey(key)
        } else {
          const key = generateKey(
            selectedTemplate.length,
            selectedTemplate.charset,
            selectedTemplate.prefix,
            selectedTemplate.suffix,
          )
          setGeneratedKey(key)
        }
      } catch {
        setGeneratedKey("Error: Could not generate key")
      }
      setIsGenerating(false)
    }, 100)
  }, [
    selectedTemplate,
    isAdvancedOpen,
    customLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    customChars,
    excludeChars,
    prefix,
    suffix,
  ])

  useEffect(() => {
    handleGenerate()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCopy = async () => {
    if (!generatedKey || generatedKey.startsWith("Error")) return

    try {
      await navigator.clipboard.writeText(generatedKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = generatedKey
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleTemplateSelect = (template: KeyTemplate) => {
    setSelectedTemplate(template)

    if (template.id !== "custom") {
      setCustomLength(template.length)
      setPrefix(template.prefix || "")
      setSuffix(template.suffix || "")
    }

    setTimeout(() => {
      if (template.id === "uuid") {
        setGeneratedKey(generateUUID())
      } else {
        const key = generateKey(template.length, template.charset, template.prefix, template.suffix)
        setGeneratedKey(key)
      }
    }, 0)
  }

  const currentCharset =
    isAdvancedOpen || selectedTemplate.id === "custom"
      ? buildCharset({
          lowercase: includeLowercase,
          uppercase: includeUppercase,
          numbers: includeNumbers,
          symbols: includeSymbols,
          customChars,
          excludeChars,
        })
      : selectedTemplate.charset

  const currentLength = isAdvancedOpen || selectedTemplate.id === "custom" ? customLength : selectedTemplate.length
  const entropy = calculateEntropy(currentLength, currentCharset.length || 1)
  const strength = getStrengthLabel(entropy)

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-6">
      {/* Generated Key Output */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">{selectedTemplate.name}</span>
          <span className={cn("text-xs font-medium px-2 py-1 rounded-full bg-secondary", strength.color)}>
            {strength.label} · {entropy} bits
          </span>
        </div>

        <div className="relative group">
          <div className="flex items-stretch rounded-lg border border-border bg-background overflow-hidden">
            <div className="flex-1 p-4 font-mono text-sm break-all min-h-[80px] flex items-center">
              <span className="select-all leading-relaxed">{generatedKey || "Click generate"}</span>
            </div>
            <button
              onClick={handleCopy}
              disabled={!generatedKey || generatedKey.startsWith("Error")}
              className="px-5 bg-secondary/50 hover:bg-secondary transition-colors border-l border-border flex items-center justify-center disabled:opacity-50"
              aria-label="Copy to clipboard"
            >
              {copied ? <Check className="w-5 h-5 text-primary" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
            </button>
          </div>

          {/* Strength bar */}
          <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${strength.percentage}%` }}
            />
          </div>
        </div>

        <Button onClick={handleGenerate} className="w-full gap-2" disabled={isGenerating}>
          <RefreshCw className={cn("w-4 h-4", isGenerating && "animate-spin")} />
          Generate New Key
        </Button>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Quick Templates</span>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-2">
          {KEY_TEMPLATES.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template)}
              className={cn(
                "flex flex-col items-center gap-1.5 p-3 rounded-lg border text-center transition-all",
                "hover:border-primary/50 hover:bg-primary/5",
                selectedTemplate.id === template.id ? "border-primary bg-primary/10" : "border-border bg-background",
              )}
            >
              <span className="text-lg">{template.icon}</span>
              <span className="text-xs font-medium truncate w-full">{template.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Settings */}
      <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full py-2 border-t border-border pt-4">
          <Settings2 className="w-4 h-4" />
          <span>Advanced Settings</span>
          <ChevronDown className={cn("w-4 h-4 ml-auto transition-transform", isAdvancedOpen && "rotate-180")} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-5 pt-4">
          {/* Length */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm">Key Length</Label>
              <span className="text-sm font-mono bg-secondary px-2 py-0.5 rounded">{customLength}</span>
            </div>
            <Slider
              min={8}
              max={256}
              step={1}
              value={[customLength]}
              onValueChange={([value]) => setCustomLength(value)}
            />
          </div>

          {/* Character Sets - 4 columns on desktop */}
          <div className="space-y-2">
            <Label className="text-sm">Character Sets</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <CharToggle label="Lowercase" example="a-z" checked={includeLowercase} onChange={setIncludeLowercase} />
              <CharToggle label="Uppercase" example="A-Z" checked={includeUppercase} onChange={setIncludeUppercase} />
              <CharToggle label="Numbers" example="0-9" checked={includeNumbers} onChange={setIncludeNumbers} />
              <CharToggle label="Symbols" example="!@#$" checked={includeSymbols} onChange={setIncludeSymbols} />
            </div>
          </div>

          {/* Custom/Exclude - 2 columns */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm">Include Characters</Label>
              <Input
                placeholder="Add custom characters (e.g., _-.)"
                value={customChars}
                onChange={(e) => setCustomChars(e.target.value)}
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Exclude Characters</Label>
              <Input
                placeholder="Remove ambiguous (e.g., 0O1lI)"
                value={excludeChars}
                onChange={(e) => setExcludeChars(e.target.value)}
                className="font-mono"
              />
            </div>
          </div>

          {/* Prefix/Suffix - 2 columns */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm">Prefix</Label>
              <Input
                placeholder="e.g., sk_live_"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Suffix</Label>
              <Input
                placeholder="e.g., _v1"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                className="font-mono"
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

function CharToggle({
  label,
  example,
  checked,
  onChange,
}: {
  label: string
  example: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg border transition-colors",
        checked ? "border-primary/50 bg-primary/5" : "border-border bg-background",
      )}
    >
      <div className="flex flex-col">
        <span className="text-xs font-medium">{label}</span>
        <span className="text-xs font-mono text-muted-foreground">{example}</span>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  )
}
