import { NextResponse } from "next/server";
import { z } from "zod";

const submissionSchema = z.object({
  problemSlug: z.string().min(1),
  problemTitle: z.string().min(1),
  nodes: z.array(z.unknown()).min(2),
  edges: z.array(z.unknown()).min(1),
});

type Submission = {
  id: string;
  problemSlug: string;
  problemTitle: string;
  nodes: unknown[];
  edges: unknown[];
  score: number;
  createdAt: string;
};

const globalStore = globalThis as typeof globalThis & {
  __lldArenaSubmissions?: Submission[];
};

if (!globalStore.__lldArenaSubmissions) {
  globalStore.__lldArenaSubmissions = [];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = submissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid submission. Add at least 2 objects and 1 relationship.",
        },
        { status: 400 },
      );
    }

    const submission: Submission = {
      id: crypto.randomUUID(),
      problemSlug: result.data.problemSlug,
      problemTitle: result.data.problemTitle,
      nodes: result.data.nodes,
      edges: result.data.edges,
      score: 8.2,
      createdAt: new Date().toISOString(),
    };

    globalStore.__lldArenaSubmissions!.push(submission);

    return NextResponse.json(
      {
        success: true,
        submissionId: submission.id,
        score: submission.score,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to save submission.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    submissions: globalStore.__lldArenaSubmissions ?? [],
  });
}