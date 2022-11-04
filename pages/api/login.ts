import type { NextApiRequest, NextApiResponse } from "next";

export default function Login(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    return res.status(200).json({
      token:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh",
      id: "test_id",
    });
  }
  return res.status(400).json({ message: "Bad request" });
}
