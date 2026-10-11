import { Enquiry, Consultation } from '@/types';

export interface EmailResult {
  success: boolean;
  messageId: string;
  recipient: string;
  subject: string;
  previewUrl?: string;
}

export async function sendEnquiryAcknowledgementEmail(enquiry: Enquiry): Promise<EmailResult> {
  const subject = `[Confirmed] Aratha Research Proposal Request #${enquiry.referenceNumber}`;
  
  // Simulated transactional email generation (e.g., SendGrid / Resend / Postmark compatible)
  console.info(`[Email Service] Sending Client Acknowledgement to: ${enquiry.email}`);
  console.info(`[Email Subject] ${subject}`);
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #171717; background-color: #f7f7f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden; }
        .header { background-color: #0F6B43; color: #ffffff; padding: 24px; }
        .body { padding: 24px; line-height: 1.6; }
        .badge { background: #e8f5ee; color: #0F6B43; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 14px; }
        .details-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin: 20px 0; }
        .footer { background: #f3f4f6; padding: 16px; font-size: 12px; color: #6b7280; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0; font-size: 20px;">ARATHA RESEARCH & ANALYTICS</h2>
          <p style="margin: 4px 0 0; opacity: 0.9; font-size: 14px;">Proposal Enquiry Acknowledgement</p>
        </div>
        <div class="body">
          <p>Dear <strong>${enquiry.fullName}</strong>,</p>
          <p>Thank you for contacting <strong>Aratha Research & Analytics</strong> regarding your upcoming research mandate. We have safely logged your enquiry in our central intelligence repository.</p>
          
          <div class="details-box">
            <p style="margin: 0 0 8px;"><strong>Reference Number:</strong> <span class="badge">${enquiry.referenceNumber}</span></p>
            <p style="margin: 0 0 8px;"><strong>Organisation:</strong> ${enquiry.organisation}</p>
            <p style="margin: 0 0 8px;"><strong>Selected Service:</strong> ${enquiry.service}</p>
            <p style="margin: 0 0 8px;"><strong>Project Title:</strong> ${enquiry.projectTitle}</p>
            <p style="margin: 0 0 8px;"><strong>Target Deadline:</strong> ${enquiry.deadline}</p>
            <p style="margin: 0;"><strong>Deliverables Requested:</strong> ${enquiry.expectedDeliverables.join(', ')}</p>
          </div>

          <h4 style="margin: 20px 0 8px; color: #0F6B43;">Next Steps:</h4>
          <ol style="padding-left: 20px; margin-top: 4px;">
            <li>Our Senior Research Lead will review your project parameters and data availability.</li>
            <li>We will prepare an exploratory methodology framework and preliminary timeline.</li>
            <li>You will receive a formal research proposal and scope agreement within 24–48 business hours.</li>
          </ol>

          <p>If you require immediate assistance or wish to execute a Mutual Non-Disclosure Agreement (NDA), please reply directly to this notice or contact <strong>proposals@aratharesearch.com</strong>.</p>
          
          <p style="margin-top: 24px;">Sincerely,<br><strong>Research & Analytical Governance Team</strong><br>Aratha Research & Analytics</p>
        </div>
        <div class="footer">
          © 2026 Aratha Research & Analytics. Strictly Confidential. This transmission is intended solely for ${enquiry.email}.
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    success: true,
    messageId: `msg-${Date.now()}-${Math.random().toString(36).substring(7)}`,
    recipient: enquiry.email,
    subject,
  };
}

export async function sendConsultationConfirmationEmail(consultation: Consultation): Promise<EmailResult> {
  const subject = `[Confirmed] Research Consultation Scheduled #${consultation.referenceNumber} - Aratha Research`;
  console.info(`[Email Service] Sending Consultation Booking to: ${consultation.email} for ${consultation.preferredDate}`);

  return {
    success: true,
    messageId: `msg-cons-${Date.now()}`,
    recipient: consultation.email,
    subject,
  };
}
