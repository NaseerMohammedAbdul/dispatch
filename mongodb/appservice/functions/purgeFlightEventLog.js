exports = async function() {
  /*
    A Scheduled Trigger will always call a function without arguments.
    Documentation on Triggers: https://www.mongodb.com/docs/atlas/app-services/triggers/

    Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.

    Access a mongodb service:
    const collection = context.services.get(<SERVICE_NAME>).db("<DB_NAME>").collection("<COLL_NAME>");
    const doc = collection.findOne({ name: "mongodb" });

    Note: In Atlas Triggers, the service name is defaulted to the cluster name.

    Call other named functions if they are defined in your application:
    const result = context.functions.execute("function_name", arg1, arg2);

    Access the default http client and execute a GET request:
    const response = context.http.get({ url: <URL> })

    Learn more about http client here: https://www.mongodb.com/docs/atlas/app-services/functions/context/#context-http
  */
  
  
  
  
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 30);

  const collection = context.services.get("mongodb-atlas").db("DTFPMOCA").collection("flight_event_log");
  const result = await collection.deleteMany({ flightDate: { $lt: cutoffDate } });
  console.log(`${result.deletedCount} documents deleted from DTFPMOCA`);
  
  const collection1 = context.services.get("mongodb-atlas").db("MOCADEV").collection("flight_event_log");
  const result1 = await collection1.deleteMany({ flightDate: { $lt: cutoffDate } });
  console.log(`${result1.deletedCount} documents deleted from MOCADEV`);

};