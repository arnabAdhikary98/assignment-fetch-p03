// Define the generateGreeting function
function generateGreeting(name, language = 'English') {
    // Object containing greeting messages for different languages
    const greetings = {
      English: `Hello, ${name}!`,
      Spanish: `¡Hola, ${name}!`,
      French: `Bonjour, ${name}!`
    };
  
    // Return the formatted greeting message based on the provided language
    return greetings[language];
  }
  
  // Test the function with different inputs
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  