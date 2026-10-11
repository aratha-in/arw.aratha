import { NextRequest, NextResponse } from 'next/server';
import { bookConsultation, getAllConsultations } from '@/lib/neo4j';
import { sendConsultationConfirmationEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, organisation, preferredDate, preferredTimeSlot, consultationTopic, projectOverview } = body;

    if (!fullName || !email || !preferredDate || !preferredTimeSlot || !consultationTopic) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, Date, Time Slot, and Topic).' },
        { status: 400 }
      );
    }

    const consultation = await bookConsultation({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || '').trim(),
      organisation: String(organisation || 'Independent Researcher').trim(),
      preferredDate: String(preferredDate),
      preferredTimeSlot: String(preferredTimeSlot),
      consultationTopic: String(consultationTopic).trim(),
      projectOverview: projectOverview ? String(projectOverview).trim() : undefined,
    });

    try {
      await sendConsultationConfirmationEmail(consultation);
    } catch (err) {
      console.warn('[Email Warning] Consultation notification failed:', err);
    }

    return NextResponse.json({
      success: true,
      referenceNumber: consultation.referenceNumber,
      message: 'Consultation slot successfully reserved.',
      consultation,
    });
  } catch (err: any) {
    console.error('[API Error /consultation POST]', err);
    return NextResponse.json({ error: 'Server error booking consultation' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const list = await getAllConsultations();
    return NextResponse.json({ success: true, count: list.length, consultations: list });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to retrieve consultations' }, { status: 500 });
  }
}
