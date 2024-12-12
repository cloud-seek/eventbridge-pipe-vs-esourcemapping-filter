
export const handler = async (event) => {
    console.log('Raw event: ',event);
    console.log('Event received:', JSON.stringify(event));
  
    return event;
  };
  