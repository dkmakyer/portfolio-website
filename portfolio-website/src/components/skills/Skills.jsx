import React from "react";
import "./skills.css";
import images from "../images";

const Skills = () => {
  const { html, css, js, react, bootstrap, git, aws, tailwindcss, svelte, myPic,} = images;
  return (
    <>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skill">
          <h4>Web development</h4>
          <ul>
            <li><span ><img className="non-svg" src={html} alt="html-image" /></span>HTML</li>
            <li><span ><img className="non-svg" src={css} alt="css-image" /></span>CSS</li>
            <li><span ><img className="non-svg" src={js} alt="javascript-image" /></span>Javascript</li>
            <li><span ><img className="non-svg" src={react} alt="react-image" /></span>React</li>
            <li><span ><img className="non-svg" src={svelte} alt="svelte-image" /></span>Svelte</li>
            <li><span ><img className="non-svg" src={bootstrap} alt="bootstrap-image" /></span>Bootstrap</li>
            <li><span ><img className="non-svg" src={tailwindcss} alt="tailwind-image" /></span>TailwindCss</li>
          </ul>
        </div>
        <div className="skill">
          <h4>AWS Cloud Computing</h4>
          <ul>
            <li><span><svg  class="svg w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-EC2_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-EC2_32_svg__a)"></path><path d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z" fill="#FFF"></path></g></svg></span>Amazon EC2</li>
            <li><span><svg  class="svg w-6 h-6" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M40.504 26.16l.224-1.666c1.784 1.087 2.335 1.715 2.495 1.98-.473.143-1.428.017-2.72-.314zm-17.702-6.049c0-.053.043-.096.096-.096.015 0 .026.01.039.017l-.073.147c-.033-.01-.062-.03-.062-.068zm13.712 20.687a1.002 1.002 0 00-.01.133c0 .155-.378.744-2.063 1.41-.751.296-1.638.562-2.638.792-2.575.596-5.74.924-8.907.924-8.466 0-13.607-2.17-13.607-3.126 0-.044-.003-.088-.01-.133L5.442 12.285c.247.144.512.281.79.415.079.038.165.074.247.112a15.46 15.46 0 001.089.453c.276.104.56.204.856.3.087.03.17.06.258.086a26.69 26.69 0 001.522.427 29.753 29.753 0 001.378.32c.365.077.738.151 1.117.22l.244.046c.458.08.927.154 1.403.224.134.02.27.036.406.054.36.05.725.096 1.093.14l.453.051c.444.047.892.09 1.343.13.053.003.107.01.162.013.504.041 1.01.074 1.519.104.145.008.29.014.436.021.384.02.768.034 1.152.047l.45.014c.513.011 1.026.02 1.537.02a71.769 71.769 0 001.987-.034c.385-.013.768-.028 1.15-.047l.439-.02c.509-.03 1.015-.064 1.518-.105l.166-.014c.45-.039.896-.082 1.338-.129l.457-.052c.366-.043.73-.089 1.089-.138.137-.018.275-.036.41-.056a50.22 50.22 0 001.402-.223c.083-.015.164-.03.247-.047a37.893 37.893 0 002.493-.539l.344-.086c.406-.108.799-.222 1.178-.34.087-.028.169-.057.254-.086a18.82 18.82 0 001.954-.756c.079-.037.163-.072.24-.109.279-.134.545-.272.792-.416l-1.792 13.306c-3.637-1.167-8.745-3.284-13.58-5.583a2.092 2.092 0 00-2.084-1.993 2.099 2.099 0 00-2.096 2.096c0 1.155.94 2.095 2.096 2.095.454 0 .872-.149 1.215-.396 4.332 2.08 9.863 4.532 14.18 5.778l-1.78 13.21zM22.896 4c10.419 0 17.76 3.228 17.896 5.021l-.026.208c-.018.062-.057.125-.09.19-.027.051-.047.101-.084.154-.044.062-.11.125-.166.188-.051.055-.094.11-.155.166-.068.061-.155.124-.236.186-.075.058-.141.115-.227.174-.091.06-.2.122-.302.184-.1.06-.19.12-.301.178-.11.06-.24.118-.36.178-.124.061-.24.121-.376.182-.13.057-.276.114-.414.171-.15.06-.291.122-.451.181-.148.056-.314.11-.471.164-.171.06-.335.12-.517.177-.17.054-.355.104-.534.157-.19.056-.373.113-.573.167-.192.052-.4.1-.6.15-.206.051-.406.104-.623.154-.216.05-.448.094-.674.141-.218.045-.43.093-.658.136-.24.046-.497.087-.747.13-.23.04-.453.081-.692.118-.26.04-.536.076-.806.113-.244.033-.482.07-.734.1-.293.036-.602.066-.905.097-.244.026-.48.055-.73.077-.336.031-.688.054-1.034.078-.233.018-.458.038-.696.053-.38.022-.776.036-1.17.053-.215.008-.425.021-.646.028a65.284 65.284 0 01-3.797 0c-.222-.007-.434-.02-.654-.029-.39-.016-.783-.03-1.161-.052-.25-.016-.488-.037-.733-.055-.333-.024-.673-.046-.996-.076-.251-.022-.487-.052-.732-.077-.303-.03-.612-.06-.904-.097-.25-.03-.487-.066-.73-.1-.27-.037-.548-.072-.81-.113-.247-.038-.48-.082-.718-.123-.241-.042-.488-.08-.72-.125-.231-.044-.446-.092-.67-.138-.222-.047-.45-.09-.663-.14-.216-.049-.415-.102-.622-.153-.2-.05-.408-.098-.6-.15-.202-.054-.387-.112-.58-.169-.176-.05-.36-.102-.526-.155-.185-.059-.351-.119-.524-.18-.155-.053-.318-.106-.463-.16-.162-.06-.303-.123-.453-.183-.138-.057-.285-.114-.413-.17-.134-.06-.251-.12-.375-.182-.121-.06-.251-.118-.361-.179-.11-.059-.202-.119-.302-.179-.101-.06-.21-.122-.3-.182-.087-.06-.155-.118-.231-.177-.08-.06-.165-.123-.231-.183-.063-.057-.107-.114-.16-.169-.055-.062-.118-.124-.162-.185-.038-.054-.057-.106-.085-.16-.032-.062-.071-.124-.088-.184l-.028-.209C5.14 7.227 12.48 4 22.896 4zm22.359 22.257c-.213-1.15-1.538-2.368-4.237-3.91l1.716-12.752v-.004l.05-.39a.932.932 0 00.01-.13c0-4.167-10.486-7.07-19.898-7.07C13.485 2 3 4.903 3 9.07c0 .044.003.088.009.132l.052.39v.002L7.29 41.01c.13 3.676 9.613 5.048 15.606 5.048 3.315 0 6.638-.346 9.357-.975a20.661 20.661 0 002.922-.882c2.166-.855 3.285-1.929 3.329-3.19l1.74-12.93c.953.202 1.818.325 2.537.325.969 0 1.694-.205 2.086-.673.35-.416.488-.94.388-1.475z" fill="#3F8624" fill-rule="evenodd"></path></svg></span>Amazon S3</li>
            <li><span><svg  class="svg w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-Virtual-Private-Cloud_32_svg__a"><stop stop-color="#4D27A8" offset="0%"></stop><stop stop-color="#A166FF" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-Virtual-Private-Cloud_32_svg__a)"></path><path d="M30.971 21.03l-2.944-1.263v10.489c2.546-.352 2.932-2.968 2.948-3.087l-.004-6.14zm-3.944 9.24V19.76l-3.035 1.273v6.2c.012.055.445 2.768 3.035 3.037zm.306-11.722a.5.5 0 01.391 0l3.944 1.693a.5.5 0 01.303.459v6.534c-.183 1.447-1.357 4.063-4.527 4.063-3.075 0-4.254-2.612-4.448-3.994l-.004-6.603c0-.201.121-.383.306-.461l4.035-1.691zm5.65.637l-5.461-2.406-5.53 2.327v7.128c-.001.042-.054 2.868 1.657 4.623.917.94 2.194 1.419 3.795 1.419 1.602 0 2.887-.48 3.819-1.422 1.735-1.758 1.72-4.585 1.72-4.613v-7.056zM31.98 31.55c-1.127 1.144-2.654 1.725-4.536 1.725-1.884 0-3.404-.581-4.517-1.727-2.005-2.063-1.939-5.197-1.935-5.33v-7.445a.5.5 0 01.305-.461l6.035-2.54a.5.5 0 01.396.004l5.956 2.625c.182.08.299.259.299.457v7.375c.002.125.027 3.255-2.003 5.317zm-20.988-7.314h8v1h-8c-2.811 0-4.811-2.016-4.979-5.016A3.745 3.745 0 016 19.84c0-2.508 1.318-4.222 3.817-4.978a8.352 8.352 0 01-.032-.647c0-2.916 1.577-5.445 4.017-6.445 3.298-1.348 7.042-.895 9.106 1.104a8.232 8.232 0 011.76 2.485c.609-.451 1.4-.663 2.349-.614 1.78.09 3.149 1.713 3.433 4.007 1.498.124 2.485.883 3.01 2.308l-.937.346c-.428-1.157-1.208-1.673-2.531-1.673a.5.5 0 01-.5-.47c-.138-2.338-1.406-3.463-2.526-3.52-.948-.05-1.645.22-2.079.792a.506.506 0 01-.473.193.503.503 0 01-.395-.323 7.378 7.378 0 00-1.807-2.814c-1.788-1.73-5.09-2.1-8.031-.895-2.063.845-3.396 3.01-3.396 5.519 0 .273.035.696.066.959a.498.498 0 01-.376.544C8.169 16.29 7 17.678 7 19.842c0 .1-.001.2.009.302.141 2.495 1.703 4.093 3.983 4.093z" fill="#FFF"></path></g></svg></span>Amazon VPC</li>
            <li><span><svg  class="svg w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-CloudFormation_32_svg__a"><stop stop-color="#B0084D" offset="0%"></stop><stop stop-color="#FF4F8B" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_AWS-CloudFormation_32_svg__a)"></path><path d="M27 19.982h3V18.98h-3v1.002zm-13 6.009h3v-1.002h-3v1.002zm-5 0h3v-1.002H9v1.002zm0-3.005h6v-1.001H9v1.001zm0-6.009h5v-1.001H9v1.001zm0 3.005h16V18.98H9v1.002zm9.968 11.016H7V13.973h11.968v3.021h1v-3.522a.5.5 0 00-.5-.5H6.5a.5.5 0 00-.5.5V31.5a.5.5 0 00.5.501h12.968a.5.5 0 00.5-.5v-9.498h-1v8.996zM34 18.48c0 4.455-3.96 4.506-4 4.506h-8v-1.001h8c.305-.003 3-.122 3-3.505 0-2.848-2.569-3.425-3.083-3.513a.5.5 0 01-.415-.535l.003-.03c-.029-1.607-1.015-2.11-1.442-2.25-.799-.268-1.687-.012-2.158.618a.5.5 0 01-.871-.131c-.311-.87-.762-1.434-1.388-2.062-1.569-1.559-3.691-1.987-5.683-1.15-1.044.44-1.956 1.438-2.502 2.737l-.922-.388c.646-1.539 1.753-2.731 3.036-3.272 2.379-1.002 4.911-.491 6.777 1.364.534.536.978 1.057 1.323 1.734.749-.552 1.752-.717 2.704-.402 1.216.405 1.985 1.461 2.109 2.865C32.19 14.495 34 15.857 34 18.48z" fill="#FFF"></path></g></svg></span>CloudFormation</li>
            <li><span><svg  class="svg w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-DynamoDB_32_svg__a"><stop stop-color="#2E27AD" offset="0%"></stop><stop stop-color="#527FFF" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-DynamoDB_32_svg__a)"></path><path d="M26.066 31.019v-2.866c-1.526 1.308-4.694 2.17-8.538 2.17-3.847 0-7.015-.863-8.541-2.172v2.863c0 1.411 3.508 2.984 8.54 2.984 5.027 0 8.531-1.57 8.54-2.98zm.001-8.175l.987-.006v.006c0 .625-.312 1.207-.906 1.742.726.653.906 1.294.906 1.75l-.001.008v4.67c0 2.272-4.094 3.986-9.525 3.986-5.403 0-9.48-1.696-9.523-3.951 0-.01-.005-.016-.005-.025v-4.69l.002-.008c.002-.454.183-1.09.9-1.737-.716-.65-.897-1.284-.901-1.734L8 22.85v-4.69l.002-.007c.002-.455.184-1.09.902-1.738-.718-.65-.9-1.283-.903-1.734L8 14.675v-4.69c0-.006.003-.009.003-.014C8.023 7.706 12.109 6 17.528 6c2.608 0 5.114.43 6.874 1.177l-.381.925c-1.643-.7-4.01-1.1-6.493-1.1-5.033 0-8.54 1.573-8.54 2.984 0 1.413 3.507 2.986 8.54 2.986.138.001.268 0 .403-.006l.04 1c-.148.008-.296.008-.443.008-3.847 0-7.015-.863-8.541-2.172v2.874c.006.545.543 1.02.992 1.322 1.348.89 3.763 1.496 6.454 1.622l-.047 1c-2.723-.126-5.11-.712-6.645-1.608-.384.295-.753.692-.753 1.15 0 1.411 3.507 2.984 8.54 2.984.496 0 .98-.017 1.453-.05l.072.998c-.496.036-1.006.054-1.525.054-3.847 0-7.015-.862-8.541-2.171v2.861c.006.558.542 1.033.992 1.334 1.54 1.018 4.434 1.65 7.549 1.65h.219v1.003h-.22c-3.165 0-6.029-.612-7.785-1.641-.384.295-.754.693-.754 1.152 0 1.411 3.507 2.984 8.54 2.984 5.024 0 8.527-1.567 8.538-2.978V26.333c0-.455-.367-.85-.749-1.145-.243.143-.505.28-.801.406l-.382-.922c.362-.156.678-.323.939-.5.453-.306.994-.786.994-1.328zm5.288-8.355h-3.283a.491.491 0 01-.4-.21.506.506 0 01-.067-.452l1.455-4.348h-6.528l-3.121 6.012h3.169a.49.49 0 01.392.197.505.505 0 01.084.436l-2.718 10.108 11.017-11.743zm1.51-.155L19.705 28.36a.493.493 0 01-.6.09.505.505 0 01-.233-.568l3.063-11.39h-3.342a.492.492 0 01-.423-.242.505.505 0 01-.014-.492l3.642-7.013a.493.493 0 01.436-.267h7.515c.16 0 .309.078.401.209a.51.51 0 01.066.453l-1.455 4.347h3.746c.198 0 .376.12.454.304a.51.51 0 01-.096.543zM9.728 31.04c.571.332 1.27.626 2.079.87l.281-.96c-.734-.222-1.363-.484-1.869-.779l-.491.869zm2.079-7.232l.281-.96c-.732-.221-1.36-.484-1.869-.78l-.491.87c.573.334 1.273.627 2.079.87zm-2.08-8.974l.492-.868c.505.294 1.135.558 1.87.78l-.282.96c-.81-.244-1.508-.538-2.08-.872z" fill="#FFF"></path></g></svg></span>DynamoDB</li>
            <li><span><svg  class="svg w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-Identity-and-Access-Management_32_svg__a"><stop stop-color="#BD0816" offset="0%"></stop><stop stop-color="#FF5252" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Identity-and-Access-Management_32_svg__a)"></path><path d="M7 30h26V11H7v19zm27-19.5v20a.5.5 0 01-.5.5h-27a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h27a.5.5 0 01.5.5zM22 24h8v-1h-8v1zm6-3h3v-1h-3v1zm-6 0h4v-1h-4v1zm-7 2.5a.5.5 0 10-1.002.002A.5.5 0 0015 23.5zm1 0c0 .651-.419 1.201-1 1.408V26h-1v-1.092c-.581-.207-1-.757-1-1.408 0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5zm-6 3.496l8.997.004.001-2H17v-1h1.998l.001-1H17v-1h1.999L19 20.004 10.003 20 10 26.996zM11 19l6.998.003v-3.426c0-.818-.666-1.414-1.063-1.696a4.362 4.362 0 00-2.435-.78h-.001c-1.765 0-3.497 1.225-3.498 2.474L11 19zm-2 8.496l.003-7.996c0-.133.053-.26.146-.354A.504.504 0 019.503 19H10l.001-3.425c.001-1.989 2.375-3.474 4.498-3.474h.001a5.33 5.33 0 013.014.964c.958.681 1.485 1.573 1.484 2.513v3.426h.502a.5.5 0 01.5.5l-.003 7.996c0 .133-.053.26-.146.354a.504.504 0 01-.354.146L9.5 27.996a.5.5 0 01-.5-.5zM29 18h2v-1h-2v1zm-7 0h6v-1h-6v1z" fill="#FFF"></path></g></svg></span>IAM</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Database Management</h4>
          <ul>
            <li><span></span>SQL</li>
            <li><span></span>Prisma ORM</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Linux systems operations and scripting</h4>
          <ul>
            <li><span></span>Bash</li>
            <li><span></span>Python</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Version Control</h4>
          <ul>
            <li><span></span>Git</li>
            <li><span></span>Github</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
