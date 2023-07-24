var express = require("express");
var router = express.Router();

const glossaryList = [
  {
    id: "1",
    term: "CI/CD pipelines",
    description:
      "A workflow where a combined development and operations team (DevOps) can seamlessly update software in a production environment.\n Use automated testing for quality control.  ",
    references:
      "Red Hat (11 May 2022) What is a CI/CD pipeline?, Red Hat, accessed on 5 July 2022. https://www.redhat.com/en/topics/devops/what-cicd-pipeline \n IBM Cloud Education (27 September 2021) What Are CI/CD and the CI/CD Pipeline?, IBM, accessed on 16 July 2023. https://www.ibm.com/cloud/blog/ci-cd-pipeline \n ",
  },
  {
    id: "2",
    term: "Microservice",
    description:
      "A small piece of software that functions independently but can contribute to a larger system. \n Equates to functionality in traditional software — for example, search could be a microservice, or an online shopping cart. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Coupland M (2021) DevOps Adoption Strategies: Principles, Processes, Tools, and Trends, 1st edn, Packt Publishing, Birmingham, UK. \n Red Hat (1 May 2023) What are microservices?, Red Hat, accessed on 16 July 2023. https://www.redhat.com/en/topics/microservices/what-are-microservices \n ",
  },
  {
    id: "3",
    term: "Build command",
    description:
      "This is the command that builds an app, so your app can run. \n For example npm install. It will install any required dependencies.",
    references:
      "Render (n.d.) New web service, Render, accessed on 16 July 2023. https://dashboard.render.com/web/new \n DigitalOcean Documentation (29 September 2022) Build & Run Command, DigitalOcean Documentation, accessed on 16 July 2023. https://docs.digitalocean.com/glossary/command/ \n ",
  },
  {
    id: "4",
    term: "Start Command",
    description:
      "This is the commands that runs an app. \n For example, if your app is a website, then this command will start the server that delivers the website. In node.js, the command is often npm start.",
    references:
      "Render (n.d.) New web service, Render, accessed on 16 July 2023. https://dashboard.render.com/web/new \n ",
  },
  {
    id: "5",
    term: "Wall of Confusion",
    description:
      "The wall of confusion is the confusion that occurs when one team hands over its work to another team. \n This often occurs in waterfall projects. A prime example is when the development hands over software to the operations team. \n",
    references:
      "Kawaguchi, S (28 February 2020), The Wall of Confusion, Medium, accessed on 16 July 2023. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26 \n ",
  },
  {
    id: "6",
    term: "DevOps",
    description:
      "DevOps is when the development and operation aspects of software development are combined. \n This process aims for quicker deployments of updated software into the production environment.",
    references:
      "Hoffman D (18 September 2020), Comparing Waterfall vs. Agile vs. DevOps methodologies, TechTarget, accessed on 16 July 2023. https://www.techtarget.com/searchsoftwarequality/opinion/DevOps-vs-waterfall-Can-they-coexist \n ",
  },
  {
    id: "7",
    term: "Waterfall",
    description:
      "The project management style where each phase of a project only starts when the preceding stage finishes. \n It is difficult to go back to a previous stage if issues are found.",
    references:
      "LucidChart (n.d), What the waterfall project management methodology can (and can’t) do for you, LucidChart, accessed on 16 July 2023. https://www.lucidchart.com/blog/waterfall-project-management-methodology \n Whitehurst M (5 January 2021), DevOps vs Agile vs Waterfall, Cavendish Wood, accessed 16 July 2022. https://info.cavendishwood.com/blog/devops-vs-agile-vs-waterfall \n ",
  },
  {
    id: "8",
    term: "Agile",
    description:
      "The project management style where different areas of a project are conducted at the same time. \n Agile does not try to complete the entire project before delivering it to the client. \n Its focus is on delivering the minimal viable product, which is working software delivered in a short space of time. \n The short space of time is called a sprint. \n",
    references:
      "Whitehurst M (5 January 2021), DevOps vs Agile vs Waterfall, Cavendish Wood, accessed 16 July 2022. https://info.cavendishwood.com/blog/devops-vs-agile-vs-waterfall \n ",
  },
  {
    id: "9",
    term: "NPM",
    description:
      "Manages the packages for node.js. Stands for Node Package Manager. \n",
    references:
      "Abramowski, N (28 November 2022), What is NPM? A Beginner's Guide, Career Foundry, accessed on 16 July 2023. https://careerfoundry.com/en/blog/web-development/what-is-npm \nCoder Coder (22 June 2021), What is NPM, and why do we need it? | Tutorial for beginners [video], Coder Coder, Youtube, accessed on 16 July 2023. https://www.youtube.com/watch?v=P3aKRdUyr0s \n W3 Schools (n.d.), What is npm?, W3 Schools, accessed 16 July 2023. https://www.w3schools.com/whatis/whatis_npm.asp \n ",
  },
  {
    id: "10",
    term: "Node.js",
    description:
      "A runtime environment that allows you to build website applications using JavaScript as the server-side coding language. \n It is not a framework nor a programming language. \n",
    references:
      "Abramowski, N (28 November 2022) What is NPM? A Beginner's Guide, Career Foundry, accessed on 16 July 2023. https://careerfoundry.com/en/blog/web-development/what-is-npm \n Anuupadhyay (n.d.) Introduction to Node.js, Geeks for Geeks, accessed on 16 July 2023. https://www.geeksforgeeks.org/introduction-to-node-js/ \n ",
  },
  {
    id: "11",
    term: "npm install",
    description:
      "The NPM command that installs all the dependencies listed in the package.json file of a node.js project. \n The installation of packages will follow the order of the dependencies listed in the package-lock.",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n npm Docs (n.d.) npm-install, accessed on 22 July 2023. https://docs.npmjs.com/cli/v8/commands/npm-install \n ",
  },
  {
    id: "12",
    term: "Infrastructure as Code (IAC)",
    description:
      "This is an idea where you create your infrastructure as code rather than relying on an out-of-the-box point and click service. \n Using IAC means it is easier to replicate and share the configuration of your infrastructure, thus achieving better standardisation. \n",
    references:
      "Mulder J (2021) Enterprise DevOps for Architects, 1st edn, Packt Publishing, Birmingham UK. \n Prisma Cloud by Palo Alto Networks (2 July 2022) What Is Infrastructure as Code (IaC)? The Foundation of a Trusted Cloud Native Solution, Prisma Cloud by Palo Alto Networks, Youtube, accessed on 24 July 2023. https://www.youtube.com/watch?v=og3e9OJJ4Us \n PulumiTV (4 November 2021) Infrastructure as Code | Quick Bites of Cloud Engineering (QB1), PulumiTV, YouTube, accessed on 24 July 2023. https://www.youtube.com/watch?v=WhWf48kcEXU \n ",
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
