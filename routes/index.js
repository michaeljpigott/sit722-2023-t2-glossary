var express = require("express");
var router = express.Router();

const glossaryList = [
  {
    id: "1",
    term: "CI/CD pipelines",
    description:
      "Stands for continuous integration and continuous deployment pipelines. \n A workflow where a combined development and operations team (DevOps) can seamlessly update software in a production environment.\n Uses automated testing for quality control.  ",
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
  {
    id: "13",
    term: "Minimum Viable Product (MVP)",
    description:
      "A bare bones version of a product that works in production. \n The development team can present this product to the business owners. \n ",
    references:
      "Mailchimp (n.d.) What You Need to Know About Minimum Viable Product (MVP), Mailchimp, accessed on 30 July 2023. https://mailchimp.com/resources/minimum-viable-product/ \n Mulder J (2021) Enterprise DevOps for Architects, 1st edn, Packt Publishing, Birmingham UK. \n ",
  },
  {
    id: "14",
    term: "User story",
    description:
      "A story written from a user's perspective that describes what they want the product to do. \n They use non-technical language. \n ",
    references:
      "Mulder J (2021) Enterprise DevOps for Architects, 1st edn, Packt Publishing, Birmingham UK. \n Rehkopf M (n.d.) User stories with examples and a template, Atlassian, accessed on 30 July 2023. https://www.atlassian.com/agile/project-management/user-stories. \n ",
  },
  {
    id: "15",
    term: "Continuous integration (CI)",
    description:
      "A software practice where a team of developers continuously integrate their code in source code manager, e.g. Github. \n The source code manager will automatically check for conflicts. \n ",
    references:
      "Atlasssian (n.d.) What is continuous integration? Atlassian, accessed on 30 July 2022. https://www.atlassian.com/continuous-delivery/continuous-integration \n Krief M (2022) Learning DevOps, 2nd edn, Packt Publishing, Birmingham UK. \n ",
  },
  {
    id: "16",
    term: "Continuous delivery (CD)",
    description:
      "The process where the application is moved into a non-production environment, e.g. staging. \n In a microservices environment, this is where one microservice is tested with all the other microservices. \n Compatability and dependencies will be tested. \n ",
    references:
      "AWS (n.d.) What is Continuous Delivery? AWS, accessed on 30 July 2022. https://aws.amazon.com/devops/continuous-delivery/ \n Krief M (2022) Learning DevOps, 2nd edn, Packt Publishing, Birmingham UK. \n ",
  },
  {
    id: "17",
    term: "Docker",
    description:
      "A software platform that allows you to place an application in a container. This container can then run on any machine regardless of its infrastucture. \n ",
    references:
      "AWS (n.d.) What is Docker? AWS, accessed on 30 July 2022. https://aws.amazon.com/docker/ \n Vadapalli S (2018) DevOps: Continuous Delivery, Integration, and Deployment with DevOps, 1st edn, Packt Publishing, Birmingham UK. \n ",
  },
  {
    id: "18",
    term: "Kubernetes",
    description:
      "Manages containers through an application programming interface (API). \n Can replicate containers and deploy them on physical machines. ",
    references:
      "AWS (n.d.) What is Kubernetes? Azure, accessed on 30 July 2022. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-kubernetes/#overview \n Vadapalli S (2018) DevOps: Continuous Delivery, Integration, and Deployment with DevOps, 1st edn, Packt Publishing, Birmingham UK. \n ",
  },
  {
    id: "19",
    term: "Container",
    description:
      "Can virtualise a service by placing it in a box. \n Docker is an example of a software platform that creates containers. \n Unlike virtual machines, they don't need to replicate a virtual operating system. They are more lightweight than virtual machines. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n ",
  },
  {
    id: "20",
    term: "Image",
    description:
      "A snapshot of a server or microserver that cannot be modified. \n A container is booted from an image. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n ",
  },
  {
    id: "21",
    term: "Dockerfile",
    description:
      "Instructions about how to build a Docker image. \n It is a text file with a series of commands. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Docker docs (n.d.) Dockerfile reference, docker docs, accessed on 4 August 2023. https://docs.docker.com/engine/reference/builder/ \n ",
  },
  {
    id: "22",
    term: "Alpine",
    description:
      "Indicates that the base image of Docker uses Alpine Linux. \n Alpine Linux is lightweight at only 5 MB in size. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Docker Hub (n.d.) alpine, docker hub, accessed on 4 August 2023. https://hub.docker.com/_/alpine \n ",
  },
  {
    id: "23",
    term: "Software Bill of Materials (SBOM)",
    description:
      "It's a list of all the components within a docker image. \n Used as a way of improving suppy chain security. \n ",
    references:
      "Cormack J (n.d.) Announcing Docker SBOM: A step towards more visibility into Docker images, Docker, accessed on 5 August 2023. https://www.docker.com/blog/announcing-docker-sbom-a-step-towards-more-visibility-into-docker-images/ \n ",
  },
  {
    id: "24",
    term: "Docker compose",
    description:
      "A tool that helps us manage multiple docker containers. \n Declares rules using a YAML file. The file contains rules. One rule equals one docker command. \n It is open source and written in Python. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Ligios A (30 November 2022) Introduction to Docker Compose, Baeldung, accessed on 7 August 2023. https://www.baeldung.com/ops/docker-compose \n ",
  },
  {
    id: "25",
    term: "Docker compose file",
    description:
      "A set of instructions that tell the compuer how to build the multiple containers that make up a microservices application. \n Read by the Docker compose application. \n Uses the YAML language. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Docker Docs (n.d.) The Compose file, Docker Docs, accessed on 11 August 2023. https://docs.docker.com/compose/compose-file/03-compose-file/ \n",
  },
  {
    id: "26",
    term: "YAML",
    description:
      "Stands for YAML Ain't Markup Language. \n Designed to be human-readable. \n The extension is either .yml or .yaml. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Red Hat (3 March 2023) What is YAML?, Red Hat, accessed on 11 August 2023. https://www.redhat.com/en/topics/automation/what-is-yaml \n ",
  },
  {
    id: "27",
    term: "docker-compose up",
    description:
      "An important docker-compose command, where docker-compose boots the docker containers according to the instructions in the Docker compose file. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n ",
  },
  {
    id: "28",
    term: "Hot-swappable",
    description:
      "Means that a microservice can be swapped with another while production is still running. \n The term can also mean the swapping of physical hard drives without powering down the computer. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n OnLogic (25 September 2021) What is hot-swap storage? One SUPER important spec to consider [video], OnLogic, accessed on 12 August 2023. https://www.youtube.com/watch?v=sPTtvbDj7fc \n ",
  },
  {
    id: "29",
    term: "Mocking",
    description:
      "Testing the applications with fake data.  \n Lets you find errors. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Kisivuli Q (5 July 2023) Why Mocking Data is a Bad Practice for Testing, Medium, accessed on 13 August 2023. https://medium.com/@queenskisivuli/why-mocking-data-is-a-bad-practice-for-testing-a20d2d7104aa \n Scott Logic (8 February 2016) Data Mocking - A way to test the untestable, Scott Logic, accessed on 13 August 2023. https://blog.scottlogic.com/2016/02/08/data-mocking.html \n ",
  },
  {
    id: "30",
    term: "Azure",
    description:
      "Microsoft's cloud platform that offers more than 200 products.  \n Includes Azure Storage which is used to store files. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Azure (n.d.) What is Azure?, Azure, accessed on 13 August 2023. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-azure/ \n ",
  },
  {
    id: "31",
    term: "NPX",
    description:
      "Stands for Node Package eXecute. \n Used to execute JavaScript packages directly, without installing them. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Singh G (30 June 2023) Difference between NPM and NPX, Coding Ninjas, accessed on 26 August 2023. https://www.codingninjas.com/studio/library/difference-between-npm-and-npx \n ",
  },
  {
    id: "32",
    term: "wait-port",
    description:
      "A utility in node.js that lets you wait until a specific port is opened. \n A command example is wait-port localhost:3000 \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n NPM (n.d.) wait-port, NPM, accessed on 26 August 2023. https://www.npmjs.com/package/wait-port?activeTab=readme \n ",
  },
  {
    id: "33",
    term: "amqplib",
    description:
      "The NPM package that is used as the API to talk to RabbitMQ. \n You can establish connections, create channels, declare exchanges and queues, and publish and consume messages in a RabbitMQ server. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Semgrep (31 July 2023) amqplib v0.4.0, Semgrep, accessed on 26 August 2023. https://semgrep.dev/advisory/npm-package/amqplib/0.4.0 \n ",
  },
  {
    id: "34",
    term: "RabbitMQ",
    description:
      "A type of open source message broker that uses the erlang programming language. \n It supports different message protocols and streaming. \n Allows separate microservices to communicate asynchronously \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Fireship (6 September 2022) RabbitMQ in 100 Seconds [video], Fireship, YouTube, accessed on 27 August 2023. https://www.youtube.com/watch?v=NQ3fZtyXji0 \n RabbitMQ (n.d.) RabbitMQ: easy to use, flexible messaging and streaming — RabbitMQ, RabbitMQ, accessed on 27 August 2023. https://www.rabbitmq.com/ \n ",
  },
  {
    id: "35",
    term: "HTTP POST requests",
    description:
      "Sends data to a destination via the internet. \n Typically sent via an HTML form and changes the data held on a server. \n ",
    references:
      "apipheny (n.d.) What is a POST API Request? How a POST HTTP Request Works, apipheny, accessed on 28 August 2023. https://apipheny.io/what-is-post-request/ \n MDN web docs (11 April 2023) POST, mdn web docs, accessed on 28 August 2023. https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST \n ",
  },
  {
    id: "36",
    term: "Terraform",
    description:
      "It is a tool that helps create infrastructure as code. It uses the hashicorp configuration language (HCL) and is free and open source. \n Can plug into different providers like AWS and Google Cloud. \n The command terraform apply makes the actual changes to the cloud provider. It is machine translatable to YAML and JSON. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Fireship (29 July 2021) Terraform in 100 seconds [video], Fireship, YouTube, accessed on 28 August 2023. https://www.youtube.com/watch?v=tomUWcQ0P3k \n Hashicorp Developer (n.d.) What is Terraform?, Hashicorp Developer, accessed on 28 August 2023. https://developer.hashicorp.com/terraform/intro \n",
  },
  {
    id: "37",
    term: "Kubectl",
    description:
      "A utility used to configure and run Kubernetes.  \n Can make HTTP requests to the Kubernetes API. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Ambassador Labs (8 January 2020) Getting Edgy: What is kubectl? [video], Ambassador Labs, YouTube, accessed on 28 August 2023. https://www.youtube.com/watch?v=NllE69Mp2-Y&t=60s \n Saalu S (n.d.) What is Kubectl?, Teleport, accessed on 28 August 2023. https://goteleport.com/blog/what-is-kubectl/ \n That DevOps Guy (8 September 2019) Kubectl basics for beginners | Kubernetes [video], That DevOps Guy, accessed on 28 August 2023. https://www.youtube.com/watch?v=feLpGydQVio \n",
  },
  {
    id: "38",
    term: "Kubernetes cluster",
    description:
      "A grouping in Kubernetes of multiple virtual machines (known as nodes). \n Each node can have several pods and each pod can have one or more containers.  \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n ",
  },
  {
    id: "39",
    term: "Service principal",
    description:
      "Allows our Kubernetes cluster to authenticate with Azure. \n Azure can then create load balancers as the front-end gateway for users of our application. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n ",
  },
  {
    id: "40",
    term: "RBAC",
    description:
      "Stands for role-based access control \n Roles can get assigned to service principals. \n",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Imperva (n.d) Role-Based Access Control (RBAC), Imperva, accessed on 2 September 2023. https://www.imperva.com/learn/data-security/role-based-access-control-rbac/ \n Microsoft (21 August 20) What is Azure role-based access control (Azure RBAC)?, Microsoft, accessed on 2 September 2023. https://learn.microsoft.com/en-us/azure/role-based-access-control/overview \n",
  },
  {
    id: "41",
    term: "Bitbucket Pipelines",
    description:
      "Atlassian-hosted service used for continuous delivery. \n You upload your git repository to it and use a yaml file to instruct BitBucket how to create your CD pipeline. \n ",
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n ",
  },
  {
    id: "42",
    term: "instantiate",
    description:
      "A computer science term. \n The process of taking a definition and creating an object. \n ",
    references:
      "edutechional (18 July 2016) OOP Instantiation Tutorial, edutechional, YouTube, accessed on 10 September 2023. https://www.youtube.com/watch?v=v-31oLuHphY \n",
  },
  {
    id: "43",
    term: "Azure load balancer",
    description:
      "Distributes incoming traffic to backend resources or servers to deliver high availability.  \n The basic load balancer is offered at no charge in Azure. \n",
    references:
      "AV Networks (n.d.) Azure Load Balancer, AV Networks, accessed on 11 September 2023. https://avinetworks.com/glossary/azure-load-balancer/ \n Microsoft (12 February 2023) What is Azure Load Balancer?, Microsoft, accessed on 11 September 2023. https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview \n",
  },
  {
    id: "44",
    term: "shell script",
    description:
      "A series of commands that can be run by a Unix shell. The commands are written in plain text and executes the commands from top to bottom. \n Uses the .sh file extension. \n ",
    references:
      "Cannon J (n.d.) What Shell Scripting Is and Why You Should Learn It [video], Udemy, accessed on 12 September 2023. https://www.udemy.com/tutorial/linux-shell-scripting-projects/what-shell-scripting-is-and-why-you-should-learn-it/ \n ",
  },
  {
    id: "45",
    term: "node resource group",
    description:
      'When you create a Kubernetes cluster in Azure, it automatically creates a second resource group. This resource group is known as the node resource group. \n It name of the node resource group starts with "MC_". \n It contains all the infrastructure resources associated with the Kubernetes cluster. \n',
    references:
      "Microsoft (6 July 2023) Frequently asked questions about Azure Kubernetes Service (AKS), Microsoft, accessed on 12 September 2023. https://learn.microsoft.com/en-us/azure/aks/faq \n ",
  },
  {
    id: "46",
    term: "end-to-end testing",
    description:
      'When you test an entire application. \n Cypress is an example of an end-to-end testing tool. \n Can be slow to run because you are testing the whole application. You cannot run them if the application becomes too big. \n',
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Deakin University (n.d.) 9.1 Testing, Deakin University, accessed on 15 September 2023. https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890554/View \n ",
  },
   {
    id: "47",
    term: "integration testing",
    description:
      'Tests whole microservices. \n Faster than end-to-end testing, but still can be slow. \n',
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Deakin University (n.d.) 9.1 Testing, Deakin University, accessed on 15 September 2023. https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890554/View \n ",
  },
  {
    id: "48",
    term: "unit testing",
    description:
      'Tests a small section of related code. \n Fast to run. \n Unit testing should account for most autommated testing. \n',
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Deakin University (n.d.) 9.1 Testing, Deakin University, accessed on 15 September 2023. https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890554/View \n ",
  },
  {
    id: "49",
    term: "testing pyramid",
    description:
      'A diagram that demonstrates how many end-to-end, integration and unit tests should be conducted in relation to each other. \n' Unit tests form the base of the pyramid, therefore most unit tests should be most automated tests. \n ',
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Deakin University (n.d.) 9.1 Testing, Deakin University, accessed on 15 September 2023. https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890554/View \n ",
  },
        {
    id: "50",
    term: "Jest",
    description:
      'An automated testing tool that can run unit tests over code written in JavaScript. Facebook created it. \n It is easy to configure so it is good for beginners. \n It can run tests in parallel. \n',
    references:
      "Davis A (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform: a project-based guide, 1st edn, Manning Publications Co., Shelter Island New York. \n Deakin University (n.d.) 9.2 Testing Tools, Deakin University, accessed on 15 September 2023. https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890555/View \n ",
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
