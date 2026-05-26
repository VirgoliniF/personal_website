const canvas = document.querySelector("#signalCanvas");
const ctx = canvas.getContext("2d");
const courseList = document.querySelector("#courseList");
const filterButtons = document.querySelectorAll(".filter-button");

const catalogueLinks = {
  bachelor: "https://unipd.coursecatalogue.cineca.it/corsi/2017/1691?annoOrdinamento=2017",
  master: "https://unipd.coursecatalogue.cineca.it/corsi/2024/281/insegnamenti/39927",
};

const courses = [
  {
    degree: "bachelor",
    title: "B2 English (Receptive Skills)",
    credits: 3,
    grade: "Pass",
    description: "Academic English comprehension for technical and scientific contexts.",
  },
  {
    degree: "bachelor",
    title: "Mathematical Analysis 1",
    credits: 12,
    grade: "30/30",
    description: "Calculus foundations for engineering, including limits, derivatives, integrals, and series.",
  },
  {
    degree: "bachelor",
    title: "Fundamentals of Chemistry for Bioengineering",
    credits: 9,
    grade: "30/30 cum laude",
    description: "Chemical principles, molecular interactions, and bioengineering-relevant reactions.",
  },
  {
    degree: "bachelor",
    title: "General Physics 1",
    credits: 12,
    grade: "30/30",
    description: "Mechanics, thermodynamics, and physical modelling for engineering systems.",
  },
  {
    degree: "bachelor",
    title: "Biology, Physiology and Anatomy",
    credits: 9,
    grade: "29/30",
    description: "Human biology, organ systems, physiology, and anatomical foundations for biomedical engineering.",
  },
  {
    degree: "bachelor",
    title: "Linear Algebra and Geometry",
    credits: 12,
    grade: "26/30",
    description: "Vector spaces, matrices, linear maps, eigenvalues, and analytic geometry.",
  },
  {
    degree: "bachelor",
    title: "Foundation of Mathematical Analysis and Probability",
    credits: 9,
    grade: "26/30",
    description: "Advanced calculus tools, probability theory, and quantitative reasoning for engineering.",
  },
  {
    degree: "bachelor",
    title: "Elements of Computer Science and Programming",
    credits: 9,
    grade: "26/30",
    description: "Programming fundamentals, algorithms, data structures, and computational problem solving.",
  },
  {
    degree: "bachelor",
    title: "Physics 2",
    credits: 6,
    grade: "26/30",
    description: "Electricity, magnetism, waves, and physical principles behind biomedical instrumentation.",
  },
  {
    degree: "bachelor",
    title: "Circuit Theory",
    credits: 6,
    grade: "29/30",
    description: "Electrical networks, circuit analysis, and dynamic response of linear systems.",
  },
  {
    degree: "bachelor",
    title: "Biomaterials",
    credits: 6,
    grade: "30/30",
    description: "Materials used in biomedical applications, including compatibility, mechanics, and interfaces.",
  },
  {
    degree: "bachelor",
    title: "Signals and Systems",
    credits: 9,
    grade: "28/30",
    description: "Continuous and discrete signals, system response, transforms, filtering, and frequency analysis.",
  },
  {
    degree: "bachelor",
    title: "Fundamentals of Electronics",
    credits: 9,
    grade: "30/30",
    description: "Electronic devices, amplifiers, and circuits relevant to sensing and biomedical acquisition.",
  },
  {
    degree: "bachelor",
    title: "Biological Systems Engineering",
    credits: 9,
    grade: "25/30",
    description: "Engineering models of biological systems and quantitative analysis of physiological processes.",
  },
  {
    degree: "bachelor",
    title: "Fundamentals of Control Theory",
    credits: 9,
    grade: "30/30 cum laude",
    description: "Feedback, stability, transfer functions, state-space models, and controller design basics.",
  },
  {
    degree: "bachelor",
    title: "Biomechanics",
    credits: 9,
    grade: "28/30",
    description: "Mechanical behaviour of biological tissues and movement from an engineering perspective.",
  },
  {
    degree: "bachelor",
    title: "Cellular Engineering Laboratory",
    credits: 6,
    grade: "27/30",
    description: "Laboratory methods for cellular systems, experimental design, and biomedical measurement.",
  },
  {
    degree: "bachelor",
    title: "Biomedical Signal Processing",
    credits: 6,
    grade: "30/30",
    description: "Signal processing methods for biomedical recordings, filtering, feature extraction, and analysis.",
  },
  {
    degree: "bachelor",
    title: "Mechanics for Bioengineering",
    credits: 9,
    grade: "30/30",
    description: "Statics, dynamics, and mechanics applied to bioengineering structures and devices.",
  },
  {
    degree: "bachelor",
    title: "Biomedical Technology and Instrumentation",
    credits: 9,
    grade: "30/30 cum laude",
    description: "Biomedical sensors, measurement chains, acquisition systems, and clinical instrumentation.",
  },
  {
    degree: "bachelor",
    title: "Medical Informatics",
    credits: 9,
    grade: "30/30 cum laude",
    description: "Health data, database concepts, medical information systems, and digital healthcare tools.",
  },
  {
    degree: "bachelor",
    title: "Final Exam",
    credits: 3,
    grade: "Pass",
    description: "Bachelor thesis and final assessment in Biomedical Engineering.",
  },
  {
    degree: "master",
    title: "English Language B2 (Productive Skills)",
    credits: 3,
    grade: "Pass",
    description: "Academic and professional English production for technical communication.",
  },
  {
    degree: "master",
    title: "Biological Signal Processing",
    credits: 9,
    grade: "30/30 cum laude",
    description: "Advanced methods for modelling, processing, and interpreting physiological and neural signals.",
  },
  {
    degree: "master",
    title: "Statistical Methods for Bioengineering",
    credits: 9,
    grade: "28/30",
    description: "Statistical inference, experimental data analysis, and modelling for biomedical applications.",
  },
  {
    degree: "master",
    title: "Neurorobotics and Neurorehabilitation",
    credits: 6,
    grade: "30/30 cum laude",
    description: "Robotics, neural interfaces, and assistive technologies for rehabilitation scenarios.",
  },
  {
    degree: "master",
    title: "Machine Learning for Bioengineering",
    credits: 6,
    grade: "29/30",
    description: "Supervised and unsupervised learning methods applied to biomedical and biological data.",
  },
  {
    degree: "master",
    title: "Biomarkers, Precision Medicine and Drug Development",
    credits: 9,
    grade: "28/30",
    description: "Biomarker discovery, precision medicine concepts, and data-driven therapeutic development.",
  },
  {
    degree: "master",
    title: "Imaging for Neuroscience",
    credits: 9,
    grade: "29/30",
    description: "Neuroimaging principles and analysis methods for studying brain structure and function.",
  },
  {
    degree: "master",
    title: "Bioimaging",
    credits: 9,
    grade: "30/30 cum laude",
    description: "Biomedical imaging modalities, image formation, processing, and quantitative interpretation.",
  },
  {
    degree: "master",
    title: "Deep Learning Applied to Neuroscience and Rehabilitation",
    credits: 6,
    grade: "29/30",
    description: "Neural network models for neuroscience data, rehabilitation technologies, and decoding tasks.",
  },
  {
    degree: "master",
    title: "Modeling Methodology for Physiology and Medicine",
    credits: 9,
    grade: "29/30",
    description: "Mathematical and computational models of physiological systems and medical processes.",
  },
  {
    degree: "master",
    title: "Medical Robotics",
    credits: 9,
    grade: "28/30",
    description: "Robotic systems for medical applications, sensing, control, kinematics, and human interaction.",
  },
  {
    degree: "master",
    title: "Neurophysiology, Neural Computation and Neurotechnologies",
    credits: 6,
    grade: "30/30 cum laude",
    description: "Neural physiology, computational principles, and technologies for recording and interfacing with the nervous system.",
  },
  {
    degree: "master",
    title: "Reinforcement Learning",
    credits: 6,
    grade: "30/30 cum laude",
    description: "Sequential decision making, reward-based learning, policies, value functions, and control.",
  },
  {
    degree: "master",
    title: "Project Work for Thesis Undertaken Abroad",
    credits: 24,
    grade: "Pass",
    description: "Master thesis project developed at EPFL on neural manifolds for motor-imagery decoding.",
  },
];

const resizeCanvas = () => {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
};

const nodes = [
  { x: 0.2, y: 0.26, r: 7, color: "#0e9f91" },
  { x: 0.42, y: 0.18, r: 10, color: "#ff6b57" },
  { x: 0.66, y: 0.28, r: 8, color: "#f3c74f" },
  { x: 0.32, y: 0.52, r: 11, color: "#142022" },
  { x: 0.58, y: 0.58, r: 7, color: "#0e9f91" },
  { x: 0.76, y: 0.48, r: 9, color: "#b9de59" },
  { x: 0.47, y: 0.78, r: 8, color: "#ff6b57" },
];

const connections = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [3, 6],
  [4, 6],
];

let frame = 0;

const draw = () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const size = Math.min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;

  ctx.clearRect(0, 0, width, height);

  const halo = ctx.createRadialGradient(centerX, centerY, size * 0.05, centerX, centerY, size * 0.48);
  halo.addColorStop(0, "rgba(14, 159, 145, 0.25)");
  halo.addColorStop(0.58, "rgba(243, 199, 79, 0.12)");
  halo.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 0.48, 0, Math.PI * 2);
  ctx.fill();

  const plotted = nodes.map((node, index) => {
    const pulse = Math.sin(frame * 0.018 + index * 1.2);
    return {
      ...node,
      px: centerX + (node.x - 0.5) * size * 0.95 + pulse * 8,
      py: centerY + (node.y - 0.5) * size * 0.95 + Math.cos(frame * 0.014 + index) * 7,
    };
  });

  ctx.lineWidth = 2;
  connections.forEach(([from, to], index) => {
    const a = plotted[from];
    const b = plotted[to];
    const dash = (Math.sin(frame * 0.03 + index) + 1) / 2;
    ctx.strokeStyle = `rgba(20, 32, 34, ${0.16 + dash * 0.28})`;
    ctx.beginPath();
    ctx.moveTo(a.px, a.py);
    ctx.bezierCurveTo(
      (a.px + b.px) / 2,
      a.py - size * 0.08,
      (a.px + b.px) / 2,
      b.py + size * 0.08,
      b.px,
      b.py,
    );
    ctx.stroke();
  });

  plotted.forEach((node, index) => {
    const pulse = (Math.sin(frame * 0.04 + index) + 1) / 2;
    ctx.fillStyle = "rgba(255, 255, 255, 0.86)";
    ctx.beginPath();
    ctx.arc(node.px, node.py, node.r * (3.6 + pulse), 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.px, node.py, node.r + pulse * 2, 0, Math.PI * 2);
    ctx.fill();
  });

  frame += 1;
  requestAnimationFrame(draw);
};

resizeCanvas();
draw();
window.addEventListener("resize", resizeCanvas);

const renderCourses = (degree = "all") => {
  if (!courseList) {
    return;
  }

  const filteredCourses = courses.filter((course) => degree === "all" || course.degree === degree);
  courseList.innerHTML = filteredCourses
    .map(
      (course) => `
        <article class="course-card">
          <div class="course-meta">
            <span>${course.degree}</span>
            <span>${course.credits} ECTS</span>
            <span>${course.grade}</span>
          </div>
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <a href="${catalogueLinks[course.degree]}" target="_blank" rel="noreferrer">
            Official UNIPD catalogue
          </a>
        </article>
      `,
    )
    .join("");
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCourses(button.dataset.degree);
  });
});

renderCourses();
