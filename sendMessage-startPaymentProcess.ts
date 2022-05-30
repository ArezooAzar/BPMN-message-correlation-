import { ZBClient } from "zeebe-node";

const zbc = new ZBClient();

 async function main() {
  zbc.createWorker({
    taskType: "StartPayment", 
    taskHandler: (job, _, w) => {
      const {orderId}=job.variables;
      zbc.publishStartMessage({
        name: "Money-Collected",
        variables: {
         
          "orderId":orderId
        },
        timeToLive: 600000
      });
      w.log("prepair order worker start");
      w.log(job.variables)
      return job.complete();
   }
 });
}
  

// main();
// import { ZBClient } from "zeebe-node";

// const zbc = new ZBClient();

//  async function main() {
//   zbc.createWorker({
//     taskType: "StartPayment", 
//     taskHandler: (job, _, w) => {
//       const {orderId}=job.variables;
//       zbc.publishStartMessage({
//         name: "Money-Collected",
//         variables: {
         
//           "orderId":orderId
//         },
//         timeToLive: 600000
//       });
//       w.log("prepair order worker start");
//       w.log(job.variables)
//       return job.complete();
//    }
//  });
// }
  

// main();
