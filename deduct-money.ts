import { ZBClient } from "zeebe-node";

const zbc = new ZBClient();

async function main() {
  zbc.createWorker({
    taskHandler: (job, _, w) => {
      w.log("deduct-money");
      w.log(job.variables);
      return job.complete();
    },
    taskType: "deduct-money",
  });

}

main();
