/**
 * Generates a slogan for a product.
 * @param {string} productName - The name of the product.
 * @param {number} temperature - Controls randomness (0.0 to 1.0).
 * @returns {Promise<string>} A promise that resolves to the generated slogan.
 */
const generateSlogan = async (productName, temperature = 0.7) => {
  const prompt = `Generate a catchy slogan for '${productName}'.`;

  try {
    const response = await llmApi.generate({
      prompt: prompt,
      temperature: temperature // Key parameter for randomness
    });

    return response.data.text;
  } catch (error) {
    console.error("Error during AI generation:", error);
    return "Could not generate slogan. Please try again.";
  }
};
