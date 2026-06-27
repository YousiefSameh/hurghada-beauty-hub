import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'النص مطلوب' }, { status: 400 });
    }

    const prompt = `
      You are a professional medical and beauty clinic translator. 
      Translate the following text into 5 languages: English, Russian, French, German, and Spanish.
      Keep the translation concise, professional, and SEO-friendly.
      
      You MUST return the response strictly as a JSON object with the following keys exactly: 
      "en", "ru", "fr", "de", "es".
      
      Text to translate: "${text}"
    `;

    const response = await openai.chat.completions.create({
      model: 'openai/gpt-oss-120b:free',
      messages: [{ role: 'user' as const, content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const resultString = response.choices[0].message.content;
    const translatedData = JSON.parse(resultString || '{}');

    return NextResponse.json(translatedData);
  } catch (error) {
    console.error('Translation API Error:', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء الترجمة' }, { status: 500 });
  }
}
