import { useState } from 'react'
import { HiOutlineClipboard, HiOutlineClipboardDocumentCheck } from 'react-icons/hi2'
import { profile } from '../data/profile'

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy email to clipboard', error)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {copied ? (
        <HiOutlineClipboardDocumentCheck className="h-4 w-4" aria-hidden="true" />
      ) : (
        <HiOutlineClipboard className="h-4 w-4" aria-hidden="true" />
      )}
      {copied ? 'Email copied' : 'Copy email'}
    </button>
  )
}
