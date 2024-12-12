
export const handler = async (event) => {
  console.log('Event received:', JSON.stringify(event));

  return event;
};
