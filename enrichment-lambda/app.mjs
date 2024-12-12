
export const handler = async (sqsEvent) => {
  console.log('Event received:', JSON.stringify(sqsEvent));

  const eventFilter = sqsEvent.filter( (evt) => JSON.parse(evt.body).a != 5)

  if (eventFilter.length) {
    console.log('Event passed filter:', eventFilter);
  }
  return eventFilter;
};
