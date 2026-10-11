import { NextResponse } from 'next/server';
import { getAllEnquiries } from '@/lib/neo4j';

export async function GET() {
  try {
    const enquiries = await getAllEnquiries();

    // Generate CSV formatted content
    const headers = [
      'Reference Number',
      'Created Date',
      'Full Name',
      'Email',
      'Phone',
      'Organisation',
      'Client Category',
      'Service Required',
      'Project Title',
      'Data Available',
      'Status',
      'Budget',
      'Deadline',
      'Assigned Analyst',
    ];

    const rows = enquiries.map((e) => [
      `"${e.referenceNumber}"`,
      `"${e.createdAt.substring(0, 10)}"`,
      `"${e.fullName.replace(/"/g, '""')}"`,
      `"${e.email}"`,
      `"${e.phone}"`,
      `"${e.organisation.replace(/"/g, '""')}"`,
      `"${e.clientCategory}"`,
      `"${e.service.replace(/"/g, '""')}"`,
      `"${e.projectTitle.replace(/"/g, '""')}"`,
      `"${e.dataAvailable}"`,
      `"${e.status}"`,
      `"${(e.estimatedBudget || '').replace(/"/g, '""')}"`,
      `"${e.deadline}"`,
      `"${(e.assignedAnalyst || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="aratha_enquiries_${new Date().toISOString().substring(0, 10)}.csv"`,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to generate CSV export' }, { status: 500 });
  }
}
