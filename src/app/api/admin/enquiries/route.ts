import { NextRequest, NextResponse } from 'next/server';
import { getAllEnquiries, updateEnquiryStatus } from '@/lib/neo4j';
import { EnquiryStatus } from '@/types';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || undefined;
    const search = searchParams.get('search') || undefined;

    const data = await getAllEnquiries(status, search);
    return NextResponse.json({ success: true, count: data.length, enquiries: data });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, internalNotes, assignedAnalyst } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing required id or status field' }, { status: 400 });
    }

    const updated = await updateEnquiryStatus(
      id,
      status as EnquiryStatus,
      internalNotes,
      assignedAnalyst
    );

    if (!updated) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (err: any) {
    console.error('[Admin Enquiry PATCH]', err);
    return NextResponse.json({ error: 'Server error updating enquiry' }, { status: 500 });
  }
}
