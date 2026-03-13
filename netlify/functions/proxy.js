exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode:200, headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"POST"}, body:"" };
  }
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{"content-type":"application/json","x-api-key":process.env.ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01"},
    body:event.body
  });
  const data = await response.text();
  return { statusCode:response.status, headers:{"Access-Control-Allow-Origin":"*","content-type":"application/json"}, body:data };
};
