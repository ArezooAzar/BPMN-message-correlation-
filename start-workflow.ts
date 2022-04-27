import { ZBClient } from "zeebe-node";

const zbc = new ZBClient();

async function main() {
  console.log(process.cwd())
  console.log(await zbc.deployProcess("./bpmn/order-process-arezoo.bpmn"));

  for (let i = 0; i < 3; i++) {
  console.log(
    await zbc.createProcessInstance("arezo-order-process-", {
      // orderId: Math.random()*1000,
      orderId: Math.floor(Math.random() * 1000) + 1,
      customerId: 123,
      paymentStatus: "unpaid",
    })
  );
}
  console.log(await zbc.deployProcess("./bpmn/paymentprocess-arezoo.bpmn"));
  
}


main();

