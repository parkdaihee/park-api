import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'hello next.js!',
    conttents: '안녕하세요 반갑습니다.',
  }
  return NextResponse.json(data)
}
