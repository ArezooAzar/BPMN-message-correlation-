import { ZBClient } from "zeebe-node";

const zbc = new ZBClient();

async function main() {
  zbc.createWorker({
    taskHandler: (job, _, w) => {

      const {customerId}=job.variables;
      w.log("Prepair order");
      w.log(job.variables);
      return job.complete();
    },
    taskType: "PreparOrder",
  });

}

main();

