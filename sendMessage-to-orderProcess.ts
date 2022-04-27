import { ZBClient } from "zeebe-node";

const zbc = new ZBClient();

async function main() {

  zbc.createWorker({
    taskType: "PaymentDone", 
  
    taskHandler: (job, _, w) => {
      const {orderId}=job.variables;
      w.log("throw message");
      zbc.publishMessage({
        correlationKey: orderId, // the orderId of the workflow we want to target
        name: "Message_MoneyRecived",
        variables: {
          paymentStatus: "paid"
        },
        timeToLive: 600000
      });
      w.log(job.variables)
      return job.complete();
   }
 });

  
}


main();