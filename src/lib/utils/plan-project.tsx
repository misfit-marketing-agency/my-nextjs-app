"use server";

import { SendEmailCommand } from "@aws-sdk/client-ses";
import { render } from "@react-email/render";

import PlanProjectEmail from "@/components/templates/plan-project";
import { sesClient } from "@/lib/ses";
import { PlanProjectSchema } from "@/schemas/plan-project";

export async function planProject(data: PlanProjectSchema) {
  const emailHtml = await render(<PlanProjectEmail {...data} />);
  const sendEmailCommand = new SendEmailCommand({
    Source: process.env.AWS_SES_SENDER!,
    Destination: {
      ToAddresses: [
        process.env.TO_EMAIL_1!,
        process.env.TO_EMAIL_2!,
        ...(process.env.TO_EMAIL_3 ? [process.env.TO_EMAIL_3!] : []),
      ],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New Project Planning Submission",
      },
    },
  });

  const result = await sesClient.send(sendEmailCommand);
  const success = result?.MessageId;

  if (!success) {
    throw new Error("Project planning submission failed. Please try again.");
  }
}
