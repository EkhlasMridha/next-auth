import type { NextApiRequest, NextApiResponse } from "next";

export default function Login(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    return res.status(200).json({
      name: "John Doe",
      email: "john@doe.com",
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2NzU0NDE1MSwiaWF0IjoxNjY3NTQ0MTUxfQ.LbARfKNRsHgTS_UkNKAdrcQcKWjtXwRxhl6K7tid38g",
      id: "test_id",
    });
  }
  return res.status(400).json({ message: "Bad request" });
}
