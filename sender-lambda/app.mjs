import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqs = new SQSClient({ region: process.env.AWS_REGION });

export const handler = async () => {
  const randomValue = 1;
  const params = {
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: JSON.stringify({ a: randomValue }),
  };

  try {
    const response = await sqs.send(new SendMessageCommand(params));
    console.log(`Message sent: ${JSON.stringify(params.MessageBody)} - Response: ${JSON.stringify(response)}`);
  } catch (err) {
    console.error('Error sending message:', err);
  }
};
