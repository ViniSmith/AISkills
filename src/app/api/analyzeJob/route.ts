import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { promptTemplate } from './promptTemplate';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: NextRequest) {
  const { jobDescription, userInfo } = await request.json();

  const prompt = generatePrompt(jobDescription, userInfo);

  try {
    const response = await callGroqAPI(prompt);
    return NextResponse.json({ result: response });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error calling Groq API:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return NextResponse.json({ result: 'Erro ao chamar a API do Groq.' }, { status: 500 });
  }
}

function generatePrompt(jobDescription: string, userInfo: any) {
  return promptTemplate
    .replace('${jobDescription}', jobDescription)
    .replace('${userInfo.level}', userInfo.level)
    .replace('${userInfo.stack}', userInfo.stack)
    .replace('${userInfo.technologies.join(\', \')}', userInfo.technologies.join(', '));
}

async function callGroqAPI(prompt: string) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama3-8b-8192',
    });

    return response.choices[0]?.message?.content || 'Nenhuma resposta obtida da IA.';
  } catch (error) {
    throw new Error('Erro ao chamar a API do Groq.');
  }
}