# 🦜️🔗 Robitus, the coding assistant

This app uses a template with LangChain.js + Next.js. It showcases how to use and combine LangChain modules for several
use cases. <br>
If you want to know more about the template, check it out [here](https://github.com/langchain-ai/langchain-nextjs-template)

## Description 

A assistant that aims to automate reviews, providing detailed comments, suggesting improvements and contextual code snippets.

## 🚀 Getting Started

First, clone this repo and download it locally.

Next, you'll need to set up environment variables in your repo's `.env.local` file. Copy the `.env.example` file to `.env.local`.
To start with the basic examples, you'll just need to add your OpenAI API key.

Next, install the required packages using your preferred package manager (e.g. `yarn`).

Now you're ready to run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result! Ask the bot something and you'll see a streamed response:

![A streaming conversation between the user and the AI](/public/images/Robitus.png)



