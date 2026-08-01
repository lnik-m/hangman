import { type NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://random-words-api.kushcreates.com/api'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const language = searchParams.get('language') || 'en'
  const length = searchParams.get('length')
  const words = searchParams.get('words') || '1'

  if (!category) {
    return NextResponse.json(
      { error: 'Missing required parameter: category' },
      { status: 400 }
    )
  }

  const params = new URLSearchParams({
    category,
    language,
    words
  })
  if (length) {
    params.append('length', String(length))
  }

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`)

    if (!response.ok) {
      throw new Error(`External API error: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Random word API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch random word' },
      { status: 500 }
    )
  }
}
