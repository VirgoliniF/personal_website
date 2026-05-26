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
    date: "2019-11-20",
    credits: 3,
    description: "Academic English comprehension for technical and scientific contexts.",
  },
  {
    degree: "bachelor",
    title: "Mathematical Analysis 1",
    date: "2020-02-14",
    credits: 12,
    description: "Calculus foundations for engineering, including limits, derivatives, integrals, and series.",
  },
  {
    degree: "bachelor",
    title: "Fundamentals of Chemistry for Bioengineering",
    date: "2020-04-08",
    credits: 9,
    description: "Chemical principles, molecular interactions, and bioengineering-relevant reactions.",
  },
  {
    degree: "bachelor",
    title: "General Physics 1",
    date: "2020-06-29",
    credits: 12,
    description: "Mechanics, thermodynamics, and physical modelling for engineering systems.",
  },
  {
    degree: "bachelor",
    title: "Biology, Physiology and Anatomy",
    date: "2020-07-17",
    credits: 9,
    description: "Human biology, organ systems, physiology, and anatomical foundations for biomedical engineering.",
  },
  {
    degree: "bachelor",
    title: "Linear Algebra and Geometry",
    date: "2020-09-01",
    credits: 12,
    description: "Vector spaces, matrices, linear maps, eigenvalues, and analytic geometry.",
  },
  {
    degree: "bachelor",
    title: "Foundation of Mathematical Analysis and Probability",
    date: "2021-02-11",
    credits: 9,
    description: "Advanced calculus tools, probability theory, and quantitative reasoning for engineering.",
  },
  {
    degree: "bachelor",
    title: "Elements of Computer Science and Programming",
    date: "2021-02-18",
    credits: 9,
    description: "Programming fundamentals, algorithms, data structures, and computational problem solving.",
  },
  {
    degree: "bachelor",
    title: "Physics 2",
    date: "2021-02-23",
    credits: 6,
    description: "Electricity, magnetism, waves, and physical principles behind biomedical instrumentation.",
  },
  {
    degree: "bachelor",
    title: "Circuit Theory",
    date: "2021-02-25",
    credits: 6,
    description: "Electrical networks, circuit analysis, and dynamic response of linear systems.",
  },
  {
    degree: "bachelor",
    title: "Biomaterials",
    date: "2021-06-18",
    credits: 6,
    description: "Materials used in biomedical applications, including compatibility, mechanics, and interfaces.",
  },
  {
    degree: "bachelor",
    title: "Signals and Systems",
    date: "2021-06-24",
    credits: 9,
    description: "Continuous and discrete signals, system response, transforms, filtering, and frequency analysis.",
  },
  {
    degree: "bachelor",
    title: "Fundamentals of Electronics",
    date: "2021-07-08",
    credits: 9,
    description: "Electronic devices, amplifiers, and circuits relevant to sensing and biomedical acquisition.",
  },
  {
    degree: "bachelor",
    title: "Biological Systems Engineering",
    date: "2021-08-25",
    credits: 9,
    description: "Engineering models of biological systems and quantitative analysis of physiological processes.",
  },
  {
    degree: "bachelor",
    title: "Fundamentals of Control Theory",
    date: "2022-01-17",
    credits: 9,
    description: "Feedback, stability, transfer functions, state-space models, and controller design basics.",
  },
  {
    degree: "bachelor",
    title: "Biomechanics",
    date: "2022-01-31",
    credits: 9,
    description: "Mechanical behaviour of biological tissues and movement from an engineering perspective.",
  },
  {
    degree: "bachelor",
    title: "Cellular Engineering Laboratory",
    date: "2022-02-10",
    credits: 6,
    description: "Laboratory methods for cellular systems, experimental design, and biomedical measurement.",
  },
  {
    degree: "bachelor",
    title: "Biomedical Signal Processing",
    date: "2022-02-22",
    credits: 6,
    description: "Signal processing methods for biomedical recordings, filtering, feature extraction, and analysis.",
  },
  {
    degree: "bachelor",
    title: "Mechanics for Bioengineering",
    date: "2022-06-15",
    credits: 9,
    description: "Statics, dynamics, and mechanics applied to bioengineering structures and devices.",
  },
  {
    degree: "bachelor",
    title: "Biomedical Technology and Instrumentation",
    date: "2022-06-22",
    credits: 9,
    description: "Biomedical sensors, measurement chains, acquisition systems, and clinical instrumentation.",
  },
  {
    degree: "bachelor",
    title: "Medical Informatics",
    date: "2022-07-14",
    credits: 9,
    description: "Health data, database concepts, medical information systems, and digital healthcare tools.",
  },
  {
    degree: "bachelor",
    title: "Final Exam",
    date: "2022-09-19",
    credits: 3,
    description: "Bachelor thesis and final assessment in Biomedical Engineering.",
  },
  {
    degree: "master",
    title: "English Language B2 (Productive Skills)",
    date: "2022-10-21",
    credits: 3,
    description: "Academic and professional English production for technical communication.",
  },
  {
    degree: "master",
    title: "Biological Signal Processing",
    date: "2023-01-24",
    credits: 9,
    description: "Advanced methods for modelling, processing, and interpreting physiological and neural signals.",
  },
  {
    degree: "master",
    title: "Statistical Methods for Bioengineering",
    date: "2023-01-27",
    credits: 9,
    description: "Statistical inference, experimental data analysis, and modelling for biomedical applications.",
  },
  {
    degree: "master",
    title: "Neurorobotics and Neurorehabilitation",
    date: "2023-02-24",
    credits: 6,
    description: "Robotics, neural interfaces, and assistive technologies for rehabilitation scenarios.",
  },
  {
    degree: "master",
    title: "Machine Learning for Bioengineering",
    date: "2023-06-27",
    credits: 6,
    description: "Supervised and unsupervised learning methods applied to biomedical and biological data.",
  },
  {
    degree: "master",
    title: "Biomarkers, Precision Medicine and Drug Development",
    date: "2023-07-11",
    credits: 9,
    description: "Biomarker discovery, precision medicine concepts, and data-driven therapeutic development.",
  },
  {
    degree: "master",
    title: "Imaging for Neuroscience",
    date: "2023-08-28",
    credits: 9,
    description: "Neuroimaging principles and analysis methods for studying brain structure and function.",
  },
  {
    degree: "master",
    title: "Bioimaging",
    date: "2023-09-19",
    credits: 9,
    description: "Biomedical imaging modalities, image formation, processing, and quantitative interpretation.",
  },
  {
    degree: "master",
    title: "Deep Learning Applied to Neuroscience and Rehabilitation",
    date: "2024-01-31",
    credits: 6,
    description: "Neural network models for neuroscience data, rehabilitation technologies, and decoding tasks.",
  },
  {
    degree: "master",
    title: "Modeling Methodology for Physiology and Medicine",
    date: "2024-02-15",
    credits: 9,
    description: "Mathematical and computational models of physiological systems and medical processes.",
  },
  {
    degree: "master",
    title: "Medical Robotics",
    date: "2024-06-18",
    credits: 9,
    description: "Robotic systems for medical applications, sensing, control, kinematics, and human interaction.",
  },
  {
    degree: "master",
    title: "Neurophysiology, Neural Computation and Neurotechnologies",
    date: "2024-07-04",
    credits: 6,
    description: "Neural physiology, computational principles, and technologies for recording and interfacing with the nervous system.",
  },
  {
    degree: "master",
    title: "Reinforcement Learning",
    date: "2024-10-01",
    credits: 6,
    description: "Sequential decision making, reward-based learning, policies, value functions, and control.",
  },
  {
    degree: "master",
    title: "Project Work for Thesis Undertaken Abroad",
    date: "2025-01-31",
    credits: 24,
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

  const filteredCourses = courses
    .filter((course) => degree === "all" || course.degree === degree)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  courseList.innerHTML = filteredCourses
    .map(
      (course) => `
        <article class="course-card">
          <div class="course-meta">
            <span>${course.degree}</span>
            <span>${new Date(course.date).toLocaleDateString("en-GB")}</span>
            <span>${course.credits} ECTS</span>
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
