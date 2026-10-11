import { NextRequest, NextResponse } from 'next/server';
import { createEnquiry, getAllEnquiries } from '@/lib/neo4j';
import { sendEnquiryAcknowledgementEmail } from '@/lib/email';
import { ClientCategory, ServiceType, DeliverableFormat } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      organisation,
      clientCategory,
      service,
      projectTitle,
      description,
      dataAvailable,
      expectedDeliverables,
      reportFormat,
      deadline,
      estimatedBudget,
      preferredConsultationDate,
      consentPrivacy,
    } = body;

    // Validation
    if (!fullName || !email || !organisation || !service || !projectTitle || !description) {
      return NextResponse.json(
        { error: 'Please provide all required fields (Name, Email, Organisation, Service, Project Title, Description).' },
        { status: 400 }
      );
    }

    if (!consentPrivacy) {
      return NextResponse.json(
        { error: 'You must consent to the privacy policy to submit a research enquiry.' },
        { status: 400 }
      );
    }

    const newEnquiry = await createEnquiry({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || '').trim(),
      organisation: String(organisation).trim(),
      clientCategory: (clientCategory as ClientCategory) || 'Corporate / Enterprise',
      service: (service as ServiceType) || 'Company Research & Corporate Intelligence',
      projectTitle: String(projectTitle).trim(),
      description: String(description).trim(),
      dataAvailable: dataAvailable || 'Desk Research Required',
      expectedDeliverables: Array.isArray(expectedDeliverables) && expectedDeliverables.length > 0
        ? expectedDeliverables
        : (['Executive PDF Report'] as DeliverableFormat[]),
      reportFormat: String(reportFormat || 'Standard Executive PDF'),
      deadline: String(deadline || 'Flexible / Within 30 days'),
      estimatedBudget: estimatedBudget ? String(estimatedBudget) : undefined,
      preferredConsultationDate: preferredConsultationDate ? String(preferredConsultationDate) : undefined,
    });

    // Send transactional acknowledgement email asynchronously
    try {
      await sendEnquiryAcknowledgementEmail(newEnquiry);
    } catch (emailErr) {
      console.warn('[Email Warning] Failed to trigger notification dispatch:', emailErr);
    }

    return NextResponse.json({
      success: true,
      referenceNumber: newEnquiry.referenceNumber,
      message: 'Your research proposal request has been logged successfully.',
      enquiry: newEnquiry,
    });
  } catch (err: any) {
    console.error('[API Error /enquiry POST]', err);
    return NextResponse.json(
      { error: 'An unexpected server error occurred while processing your proposal request.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || undefined;
    const search = searchParams.get('search') || undefined;

    const data = await getAllEnquiries(status, search);
    return NextResponse.json({ success: true, count: data.length, enquiries: data });
  } catch (err: any) {
    console.error('[API Error /enquiry GET]', err);
    return NextResponse.json({ error: 'Failed to retrieve enquiries' }, { status: 500 });
  }
}
