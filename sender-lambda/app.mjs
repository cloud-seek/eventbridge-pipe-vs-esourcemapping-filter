import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: process.env.AWS_REGION });

export const handler = async (event) => {
  const queueUrl = event.pipe ? process.env.QUEUE_PIPE_URL: process.env.QUEUE_EVENT_SOURCE_URL;
  const messages = Array.from({ length: 10 }, (_, i) => ({
    MessageBody: JSON.stringify({ a: i }),
  }));

  console.log('messages ==> ', JSON.stringify(messages));

  const sendPromises = messages.map((message) =>
    sqsClient.send(new SendMessageCommand({
      QueueUrl: queueUrl,
      MessageBody: message.MessageBody,
    }))
  );

  const results = await Promise.all(sendPromises);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Messages sent successfully!',
      results,
    }),
  };
};
