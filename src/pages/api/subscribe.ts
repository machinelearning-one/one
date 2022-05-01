import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../utils/supabase";

type Data = {
  success: boolean;
  message: string;
};

const validateEmail = (email: string): [boolean, string] => {
  if (email.length < 5 || email.length > 50) {
    return [false, "Email must be between 5 and 50 characters"];
  }
  if (!email.includes("@") || !email.includes(".")) {
    return [false, "Email must contain an @ symbol and a period"];
  }
  return [true, ""];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({
      success: false,
      message: "Please provide an email address",
    });
    return;
  }
  const [valid, message] = validateEmail(email);
  if (!valid) {
    res.status(400).json({
      success: false,
      message,
    });
    return;
  }
  const { error } = await supabase.from("Subscribers").upsert({
    email: email,
  });
  if (error) {
    let message: string;
    if (error.code === "23505") {
      message = "You are already subscribed";
    } else {
      message =
        "An error occurred while connecting to the server, please try again later";
    }
    res.status(500).json({
      success: false,
      message,
    });
    return;
  }
  res.status(200).json({ success: true, message: "Subscribed successfully" });
}
