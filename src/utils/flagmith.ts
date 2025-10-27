import { Flagsmith } from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGMITH_KEY as string,
  requestTimeoutSeconds: 60,
});

export default flagsmith;
