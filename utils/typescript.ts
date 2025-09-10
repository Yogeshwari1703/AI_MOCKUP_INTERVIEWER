// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// const { GoogleGenAI } = require('@google/genai');

import { GoogleGenAI } from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const tools = [
    { codeExecution: {} },
    {
      googleSearch: {}
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `job position:Full Stack Developer,Job Description:react,restapis,nodejs,expressjs,postgrey years of experience 6 depends on this information please give me 5 interview questions with answerd in json format,give question and answered as field in json
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Initiating Question Generation**

My initial focus is on understanding the user's need for five interview questions and answers formatted as JSON. I'm prioritizing the Full Stack Developer role with six years of experience, emphasizing React, REST APIs, and Node. My next steps involve identifying the core competencies to be assessed and structuring the JSON output appropriately.


**Developing Interview Questions**

I've zeroed in on the specifics of the user's request. My focus is now on crafting five relevant interview questions that assess core full-stack developer competencies. These will cover React, Node.js, Express.js, PostgreSQL, and REST APIs, all with the focus on a six-year experienced developer. The format is a priority, so I'll structure the JSON output with "question" and "answer" fields accordingly.


`,
        },
        {
          text: `\`\`\`json
[
  {
    "question": "As a senior full-stack developer, how would you design and implement a secure and scalable RESTful API using Node.js and Express.js that interacts with a PostgreSQL database? Describe the key considerations, including authentication, authorization, data validation, and performance optimization.",
    "answer": "For a secure and scalable RESTful API, I would start by structuring the application with a clear separation of concerns, using a modular approach with controllers, services, and data access layers. For authentication, I'd implement JSON Web Tokens (JWT). Upon successful login, the server would generate a signed JWT containing user information and roles, which would be sent back to the client. For subsequent requests, the client would include the JWT in the Authorization header. I would use middleware to verify the token's signature and expiration. For authorization, I would implement role-based access control (RBAC) middleware that checks the user's roles extracted from the JWT against the required permissions for a specific endpoint. Data validation is crucial to prevent malformed data and security vulnerabilities like SQL injection. I would use a library like Joi or express-validator to define and enforce validation schemas for request bodies, parameters, and query strings. To interact with the PostgreSQL database, I would use an ORM like Sequelize or a query builder like Knex.js to abstract database interactions and prevent SQL injection. For performance optimization, I would implement connection pooling to efficiently manage database connections. I'd also use indexing on frequently queried columns in PostgreSQL to speed up query execution. [2, 7, 8] Caching frequently accessed, non-sensitive data with a tool like Redis can significantly reduce database load and improve response times. Finally, for scalability, I would design the API to be stateless and consider deploying it using a process manager like PM2 and a load balancer to distribute traffic across multiple instances."
  },
  {
    "question": "In a complex React application, you're tasked with managing global state. What are the different approaches you could take, and what are the trade-offs of each? Considering a scenario with frequent updates from multiple components, which approach would you recommend and why?",
    "answer": "In a complex React application, managing global state effectively is crucial for maintainability and performance. The primary approaches are React's built-in Context API and third-party libraries like Redux or MobX. The Context API is simpler to set up and is great for passing data down the component tree without prop drilling. [3, 15] However, it can lead to performance issues in applications with frequent state updates, as any component consuming the context will re-render when the state changes, even if it doesn't use the specific piece of state that was updated. Redux provides a centralized store and a more predictable state management pattern using actions and reducers. This makes it easier to track state changes and debug issues in large applications. While it involves more boilerplate code, tools like Redux Toolkit have significantly reduced this. For a scenario with frequent updates from multiple components, I would recommend Redux. [4, 5] Its centralized nature and the ability to connect components to specific slices of the state prevent unnecessary re-renders. The unidirectional data flow makes the application's logic easier to reason about, especially when multiple components are dispatching actions that modify the same state. Redux's middleware, like Redux Thunk or Redux Saga, also provides a robust way to handle asynchronous operations like API calls."
  },
  {
    "question": "Describe a situation where you had to optimize a slow-performing PostgreSQL query. What steps did you take to identify the bottleneck and what techniques did you use to improve its performance?",
    "answer": "In a previous project, we had a dashboard that was loading very slowly due to a complex PostgreSQL query that joined multiple large tables and performed several aggregate functions. The first step I took was to use the \`EXPLAIN ANALYZE\` command on the query. [10, 12] This provided a detailed query plan, showing the execution time for each step and identifying that a full table scan on a large \`orders\` table was the primary bottleneck. To address this, I first ensured that all columns used in the \`JOIN\` conditions and \`WHERE\` clauses were properly indexed. I discovered that a foreign key column was missing an index, and adding it significantly improved the join performance. Next, I analyzed the \`SELECT\` statement and the aggregate functions. Some of the aggregations were being calculated on the fly for every request. I decided to create a materialized view to pre-calculate and store the aggregated data. [10] This view was refreshed periodically, so the dashboard query only had to read from this much smaller, pre-aggregated table, drastically reducing the query time. I also reviewed the query logic itself and found a subquery that could be rewritten as a more efficient \`JOIN\`. Finally, I ran \`VACUUM ANALYZE\` on the involved tables to update the statistics that PostgreSQL uses to make query planning decisions. These steps combined resulted in a significant improvement in the dashboard's loading speed."
  },
  {
    "question": "How would you handle a large file upload from a React client to a Node.js server, ensuring both a good user experience and efficient server-side processing? What are the potential challenges and how would you mitigate them?",
    "answer": "To handle large file uploads, I would use a multipart form data submission from the React client. I would provide the user with a progress bar to give them feedback on the upload status. On the Node.js server, I would use a library like Multer, which is a middleware for handling \`multipart/form-data\`. [14, 17] A key consideration is to avoid loading the entire file into memory at once, which could lead to performance issues or even crash the server. Multer handles this by streaming the file directly to disk. A potential challenge is handling upload interruptions or failures. To mitigate this, I would implement a resumable upload mechanism. This could involve breaking the file into smaller chunks on the client-side and uploading them sequentially. The server would then reassemble the chunks. This way, if an upload fails, the user can resume from the last successful chunk instead of starting over. Another challenge is security. I would validate the file type and size on both the client and server to prevent users from uploading malicious or excessively large files. On the server, after the upload is complete, I would scan the file for viruses before making it accessible. For a highly scalable solution, I would consider uploading the file directly from the client to a cloud storage service like Amazon S3 or Google Cloud Storage. The React client would first request a signed URL from the Node.js server, which grants temporary permission to upload. This offloads the bandwidth and processing from my server, making it more scalable and resilient."
  },
  {
    "question": "Explain the concept of the event loop in Node.js and how it enables non-blocking I/O. Provide a practical example of how you would leverage this to build a highly concurrent application, for instance, a chat application.",
    "answer": "The Node.js event loop is the core mechanism that allows it to handle concurrent operations despite being single-threaded. [9, 13] It continuously checks a queue for pending events (like I/O operations, timers, or network requests) and executes their corresponding callback functions. When an asynchronous, non-blocking operation is initiated (e.g., reading a file or making a database query), Node.js offloads this task to the underlying system's kernel. Instead of waiting for the operation to complete, Node.js continues to execute other code. Once the operation is finished, the kernel places a callback function into the event queue, and the event loop will execute it when it gets its turn. For a chat application, this non-blocking nature is essential. I would use a library like Socket.IO, which is built on top of WebSockets. When a client sends a message, the Node.js server receives it as an event. Instead of blocking to process and broadcast this message to all other clients, it can simply emit an event to the other connected sockets. While the message is being sent over the network (an I/O operation), the event loop is free to handle other incoming messages from different clients, or other tasks like user authentication. This allows a single Node.js server to handle thousands of concurrent connections and messages efficiently. If a database interaction is needed, for example to store the chat history, the same principle applies. The database query would be an asynchronous operation, and its callback would be executed once the database returns the result, without blocking the event loop and preventing other users' messages from being processed."
  }
]
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
      continue;
    }
    if (chunk.candidates[0].content.parts[0].text) {
      console.log(chunk.candidates[0].content.parts[0].text);
    }
    if (chunk.candidates[0].content.parts[0].executableCode) {
      console.log(chunk.candidates[0].content.parts[0].executableCode);
    }
    if (chunk.candidates[0].content.parts[0].codeExecutionResult) {
      console.log(chunk.candidates[0].content.parts[0].codeExecutionResult);
    }
  }
}

main();
