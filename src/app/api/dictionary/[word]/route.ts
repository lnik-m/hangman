import { type NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://api.dictionaryapi.dev'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ word: string }> }
) {
  const { word } = await params

  if (!word) {
    return NextResponse.json(
      { error: 'Word parameter is required' },
      { status: 400 }
    )
  }

  const res = await fetch(
    `${BASE_URL}/api/v2/entries/en/${word.trim().toLowerCase()}`
  )
  const data = await res.json()

  return Response.json(data)
}
