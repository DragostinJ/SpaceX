{
    events: () => {
      return ['Test1', 'Test2', 'Test3']
    },
    createEvent (args) =>{
      const eventName = args.name;
      return eventName
    }
  }