import { NextResponse } from 'next/server';
import { getDashboardStats } from '@/lib/neo4j';

export async function GET() {
  try {
    const stats = await getDashboardStats();
    return NextResponse.json({ success: true, stats });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to compute dashboard stats' }, { status: 500 });
  }
}
