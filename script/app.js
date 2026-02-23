/*=================== Data ===================*/

let jobs = [
    {
     id: 1,
          company: "Mobile First Corp",
          position: "React Native Developer",
          location: "Remote",
          type: "Full-time",
          salary: "$130,000 - $175,000",
          description:
            "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
          status: "none",
   },
   {
       id: 2,
          company: "WebFlow Agency",
          position: "Web Designer & Developer",
          location: "Los Angeles, CA",
          type: "Part-time",
          salary: "$80,000 - $120,000",
          description:
            "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
          status: "none",
   }, 
   {
     id: 3,
          company: "DataViz Solutions",
          position: "Data Visualization Specialist",
          location: "Boston, MA",
          type: "Full-time",
          salary: "$125,000 - $165,000",
          description:
            "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
          status: "none",
   },
   {
        id: 4,
            company: "CloudNet Inc.",
            position: "Cloud Solutions Architect",
            location: "Seattle, WA",
            type: "Full-time",
            salary: "$140,000 - $185,000",
            description:
              "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
            status: "none",
   },
   {
        id: 5,
            company: "AI Innovators",
            position: "Machine Learning Engineer",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$135,000 - $175,000",
            description:
              "Develop and deploy machine learning models for real-world applications. Must have experience with Python, TensorFlow, and PyTorch.",
            status: "none",
   },
   {
        id: 6,
            company: "FinTech StartUp",
            position: "Blockchain Developer",
            location: "Austin, TX",
            type: "Full-time",
            salary: "$120,000 - $160,000",
            description:
              "Develop and maintain blockchain-based applications and smart contracts. Experience with Ethereum and Solidity required.",
            status: "none",
   },
   {
        id: 7,
            company: "HealthTech Solutions",
            position: "Full Stack Developer",
            location: "New York, NY",
            type: "Full-time",
            salary: "$110,000 - $150,000",
            description:
              "Develop and maintain full-stack web applications for healthcare clients. Must have experience with React, Node.js, and database design.",
            status: "none",
   },
   {
        id: 8,
            company: "EduTech Innovators",
            position: "UX/UI Designer",
            location: "Chicago, IL",
            type: "Full-time",
            salary: "$90,000 - $130,000",
            description:
              "Design intuitive user experiences for educational platforms. Must have experience with Figma, Adobe XD, and user research.",
            status: "none",
   },
   {
        id: 9,
            company: "GreenTech Energy",
            position: "Sustainability Analyst",
            location: "Denver, CO",
            type: "Full-time",
            salary: "$85,000 - $120,000",
            description:
              "Analyze and develop sustainability strategies for energy companies. Must have experience in environmental science and data analysis.",
            status: "none",
   },
];

let currentTab = "all";

/* ==================== Render ==================== */

function renderJobs() {
      const container = document.getElementById("jobsContainer");
        container.innerHTML = "";

        let filtered = jobs.filter((job) => {
          if (currentTab === "all") return true;
          return job.status === currentTab;
        });

        // Update Tab Right-side Count
        const totalJobsCount = jobs.length;
        if (currentTab === "all") {
          document.getElementById("tabCount").innerText =
            `${totalJobsCount} jobs`;
        } else {
          document.getElementById("tabCount").innerText =
            `${filtered.length} of ${totalJobsCount} jobs`;
        }

        // Empty State Handling
        if (filtered.length === 0) {
          container.innerHTML = `
                    <div class="col-span-full flex flex-col items-center justify-center p-16 bg-white rounded-lg border border-gray-100 shadow-sm mt-4">
                        <div class="text-blue-400 mb-4">
                            <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-slate-800 mb-1">No jobs available</h3>
                        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
                    </div>
                `;
          return;
        }

        // Render Cards
        filtered.forEach((job) => {
          const card = document.createElement("div");
          card.className =
            "card bg-white border border-gray-100 shadow-sm rounded-lg relative group transition-all hover:shadow-md";

          // Pill Status Logic
          let statusBadge = `<span class="px-2 py-0.5 text-[10px] font-bold rounded bg-gray-100 text-gray-600 uppercase tracking-wider">NOT APPLIED</span>`;
          if (job.status === "interview") {
            statusBadge = `<span class="px-2 py-0.5 text-[10px] font-bold rounded bg-teal-50 text-teal-600 border border-teal-200 uppercase tracking-wider">INTERVIEW</span>`;
          } else if (job.status === "rejected") {
            statusBadge = `<span class="px-2 py-0.5 text-[10px] font-bold rounded bg-red-50 text-red-600 border border-red-200 uppercase tracking-wider">REJECTED</span>`;
          }

          card.innerHTML = `
                    <div class="card-body p-6">
                        <button class="absolute top-6 right-6 text-gray-300 hover:text-red-500 transition-colors" onclick="deleteJob(${job.id})">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>

                        <h2 class="text-lg font-bold text-slate-900">${job.company}</h2>
                        <p class="text-sm text-gray-500 mb-2">${job.position}</p>
                        
                        <div class="text-xs text-gray-400 flex flex-wrap items-center gap-1.5 mb-4">
                            <span>${job.location}</span>
                            <span class="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                            <span>${job.type}</span>
                            <span class="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                            <span>${job.salary}</span>
                        </div>

                        <div class="mb-4">${statusBadge}</div>

                        <p class="text-sm text-gray-600 mb-6 max-w-4xl leading-relaxed">${job.description}</p>
                        
                        <div class="flex gap-3 mt-auto">
                            <button class="px-5 py-1.5 text-xs font-bold rounded tracking-wide transition-colors border ${job.status === "interview" ? "bg-teal-500 text-white border-teal-500" : "bg-white text-teal-600 border-teal-500 hover:bg-teal-50"}" onclick="updateStatus(${job.id}, 'interview')">
                                INTERVIEW
                            </button>
                            <button class="px-5 py-1.5 text-xs font-bold rounded tracking-wide transition-colors border ${job.status === "rejected" ? "bg-red-500 text-white border-red-500" : "bg-white text-red-500 border-red-500 hover:bg-red-50"}" onclick="updateStatus(${job.id}, 'rejected')">
                                REJECTED
                            </button>
                        </div>
                    </div>
                `;
          container.appendChild(card);
        });
}
renderJobs();

/* ==================== logic functions ==================== */

function updateDashboardCounts() {
        const total = jobs.length;
        const interview = jobs.filter((j) => job.status === "interview").length;
        const rejected = jobs.filter((j) => job.status === "rejected").length;

        document.getElementById("totalCount").innerText = total;
        document.getElementById("interviewCount").innerText = interview;
        document.getElementById("rejectedCount").innerText = rejected;
}
updateDashboardCounts();

function updateStatus(id, status) {
    const job = jobs.find((j) => j.id === id);
    if (job.status === status) {
        job.status = "none";
    } else {
        job.status = status;
    }
    renderJobs();
    updateDashboardCounts();
}