// Real technology logos via CDN (devicon)
const techLogos: Record<string, { url: string; name: string }> = {
  // Programming Languages
  Python: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
  JavaScript: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
  "JavaScript (ES6+)": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
  PHP: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", name: "PHP" },
  TypeScript: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "TypeScript" },
  Java: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", name: "Java" },
  "C++": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", name: "C++" },
  C: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", name: "C" },
  SQL: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", name: "SQL" },

  // Frontend
  React: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React" },
  "React.js": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React.js" },
  "Next.js": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", name: "Next.js" },
  HTML5: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "HTML5" },
  CSS3: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS3" },
  TailwindCSS: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "TailwindCSS" },
  "Tailwind CSS": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  Bootstrap: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
  Sass: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", name: "Sass" },
  jQuery: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg", name: "jQuery" },
  AJAX: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "AJAX" },
  "Responsive Design": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "Responsive Design" },

  // Backend
  "Node.js": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  Express: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: "Express" },
  "Spring Boot": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", name: "Spring Boot" },
  Django: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", name: "Django" },
  "Django REST Framework": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", name: "Django REST Framework" },
  Flask: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", name: "Flask" },
  FastAPI: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", name: "FastAPI" },
  "REST APIs": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", name: "REST APIs" },

  // Databases
  MySQL: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", name: "MySQL" },
  PostgreSQL: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
  MongoDB: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
  Firebase: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", name: "Firebase" },
  SQLite: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", name: "SQLite" },

  // DevOps & Tools
  Git: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git" },
  GitHub: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: "GitHub" },
  GitLab: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg", name: "GitLab" },
  Docker: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", name: "Docker" },
  Jenkins: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", name: "Jenkins" },
  AWS: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS" },
  "AWS EC2": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS EC2" },
  "AWS S3": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS S3" },
  "AWS IAM": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS IAM" },
  "AWS Lambda": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS Lambda" },
  "AWS Lex": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS Lex" },
  "AWS CloudWatch": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS CloudWatch" },
  "Azure (AZ-900)": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", name: "Azure" },
  Linux: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", name: "Linux" },
  "CI/CD Pipelines": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", name: "CI/CD Pipelines" },
  Postman: { url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", name: "Postman" },
  "REST API Testing": { url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", name: "REST API Testing" },
  UNIX: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", name: "UNIX" },
  Ubuntu: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg", name: "Ubuntu" },
  "Shell Scripting": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", name: "Shell Scripting" },
  Bash: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", name: "Bash" },

  // Design & Creative
  TensorFlow: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
  OpenCV: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", name: "OpenCV" },
  Figma: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", name: "Figma" },

  // Legacy compat
  "React Native": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React Native" },
  "Maps API": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg", name: "Maps API" },
};

export const getTechLogo = (name: string): { url: string; name: string } | null => {
  return techLogos[name] || null;
};

export const getTechIcon = (name: string) => {
  const logo = getTechLogo(name);
  if (!logo) return null;
  return ({ size = 28 }: { size?: number; className?: string }) => (
    <img src={logo.url} alt={logo.name} width={size} height={size} className="drop-shadow-sm" loading="lazy" />
  );
};

export default techLogos;
