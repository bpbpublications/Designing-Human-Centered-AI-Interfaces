import express from "express";
import OpenAI from "openai";

const app = express();
const client = new OpenAI();

app.use(express.json());
app.use(express.static("public"));

app.post("/classify", async (req, res) => {
  const response = await client.chat.completions.create({
    model: "gpt-5-mini",
    messages: [
      { role: "system", content: "Classify this support ticket "
        + "into: Billing, Technical, Account, or General. "
        + "Respond with the category and a confidence score." },
      { role: "user", content: req.body.message }
    ]
  });
  res.json({ result: response.choices[0].message.content });
});

app.listen(3000, () => console.log("Classifier running on port 3000"));
