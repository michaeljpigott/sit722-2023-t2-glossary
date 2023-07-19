var express = require("express");
var router = express.Router();

const glossaryList = [
  {
      "id": "1",
      "term": "CI/CD pipelines",
      "description": "A workflow where a combined development and operations team (DevOps) can seamlessly update software in a production environment. Use automated testing for quality control.  ",
      "references": "Red Hat (11 May 2022) What is a CI/CD pipeline?, Red Hat, accessed on 5 July 2022. https://www.redhat.com/en/topics/devops/what-cicd-pipeline IBM Cloud Education (27 September 2021) What Are CI/CD and the CI/CD Pipeline?, IBM, accessed on 16 July 2023. https://www.ibm.com/cloud/blog/ci-cd-pipeline"
  },
  {
      "id": "2",
      "term": "Microservice",
      "description": "A small piece of software that functions independently but can contribute to a larger system.  Equates to functionality in traditional software — for example, search could be a microservice, or an online shopping cart.",
      "references": "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York.Coupland M (2021) DevOps Adoption Strategies: Principles, Processes, Tools, and Trends, 1st edn, Packt Publishing, Birmingham, UK. Red Hat (1 May 2023) What are microservices?, Red Hat, accessed on 16 July 2023. https://www.redhat.com/en/topics/microservices/what-are-microservices"
  },
  {
      "id": "3",
      "term": "Build command",
      "description": "This is the command that builds an app, so your app can run. For example npm install. It will install any required dependencies.",
      "references": "Render (n.d.) New web service, Render, accessed on 16 July 2023. https://dashboard.render.com/web/new DigitalOcean Documentation (29 September 2022) Build & Run Command, DigitalOcean Documentation, accessed on 16 July 2023. https://docs.digitalocean.com/glossary/command/"
  },
  {
      "id": "4",
      "term": "Start Command",
      "description": "This is the commands that runs an app. For example, if your app is a website, then this command will start the server that delivers the website. In node.js, the command is often npm start.",
      "references": "Render (n.d.) New web service, Render, accessed on 16 July 2023. https://dashboard.render.com/web/new"
  },
  {
      "id": "5",
      "term": "Wall of Confusion",
      "description": "The wall of confusion is the confusion that occurs when one team hands over its work to another team. This often occurs in waterfall projects. A prime example is when the development hands over software to the operations team.",
      "references": "Kawaguchi, S (28 February 2020), The Wall of Confusion, Medium, accessed on 16 July 2023. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26"
  },
  {
      "id": "6",
      "term": "DevOps",
      "description": "DevOps is when the development and operation aspects of software development are combined. This process aims for quicker deployments of updated software into the production environment.",
      "references": "Hoffman D (18 September 2020), Comparing Waterfall vs. Agile vs. DevOps methodologies, TechTarget, accessed on 16 July 2023. https://www.techtarget.com/searchsoftwarequality/opinion/DevOps-vs-waterfall-Can-they-coexist"
  },
  {
      "id": "7",
      "term": "Waterfall",
      "description": "The project management style where each phase of a project only starts when the preceding stage finishes. It is difficult to go back to a previous stage if issues are found.",
      "references": "LucidChart (n.d), What the waterfall project management methodology can (and can’t) do for you, LucidChart, accessed on 16 July 2023. https://www.lucidchart.com/blog/waterfall-project-management-methodology Whitehurst M (5 January 2021), DevOps vs Agile vs Waterfall, Cavendish Wood, accessed 16 July 2022. https://info.cavendishwood.com/blog/devops-vs-agile-vs-waterfall"
  },
  {
      "id": "8",
      "term": "Agile",
      "description": "The project management style where different areas of a project are conducted at the same time. Agile does not try to complete the entire project before delivering it to the client. Its focus is on delivering the minimal viable product, which is working software delivered in a short space of time. The short space of time is called a sprint.",
      "references": "Whitehurst M (5 January 2021), DevOps vs Agile vs Waterfall, Cavendish Wood, accessed 16 July 2022. https://info.cavendishwood.com/blog/devops-vs-agile-vs-waterfall   "
  },
  {
      "id": "9",
      "term": "NPM",
      "description": "Manages the packages for node.js. Stands for Node Package Manager.",
      "references": "Abramowski, N (28 November 2022), What is NPM? A Beginner's Guide, Career Foundry, accessed on 16 July 2023. https://careerfoundry.com/en/blog/web-development/what-is-npmCoder Coder (22 June 2021), What is NPM, and why do we need it? | Tutorial for beginners [video], Coder Coder, Youtube, accessed on 16 July 2023. https://www.youtube.com/watch?v=P3aKRdUyr0s W3 Schools (n.d.), What is npm?, W3 Schools, accessed 16 July 2023. https://www.w3schools.com/whatis/whatis_npm.asp"
  },
  {
      "id": "10",
      "term": "Node.js",
      "description": "A runtime environment that allows you to build website applications using JavaScript as the server-side coding language. It is not a framework nor a programming language.",
      "references": "Abramowski, N (28 November 2022) What is NPM? A Beginner's Guide, Career Foundry, accessed on 16 July 2023. https://careerfoundry.com/en/blog/web-development/what-is-npm Anuupadhyay (n.d.) Introduction to Node.js, Geeks for Geeks, accessed on 16 July 2023. https://www.geeksforgeeks.org/introduction-to-node-js/"
  },

];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    subheading:
      "Welcome to Michael Pigott's website showing a collection of DevOps terms and their brief descriptions",
    glossaryItems: glossaryList,
  });
});

module.exports = router;
