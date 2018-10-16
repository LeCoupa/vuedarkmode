/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

/**************************************************************************
 * SUBSCRIBE EMAIL ADDRESS TO MAILCHIMP
 ***************************************************************************/

// TODO: Use the MAILCHIMP_API_KEY from env
// TODO: Verify email is right
// TODO: Trigger message when email added
// TODO: Trigger message when email were already added previously
// TODO: Return any error sent by Mailchimp
exports.handler = async function(event, context, callback) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Load environment variables
  dotenv.config();

  const bodyParams = querystring.parse(event.body);

  await axios.post(
    "https://us19.api.mailchimp.com/3.0/lists/00f5d5e482/members/",
    { email_address: bodyParams.email, status: "subscribed" },
    { auth: { username: "anystring", password: process.env.MAILCHIMP_API_KEY } }
  );

  callback(null, { statusCode: 200, body: bodyParams.email });
};
