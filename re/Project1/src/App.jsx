/* // Mock Internships Data */
const initialInternships = [{
  id: "job-1",
  title: "Software Engineering Intern",
  company: "Google",
  logoText: "G",
  logoColor: "#4285F4",
  category: "technology",
  location: "Mountain View, CA",
  duration: "12 Weeks",
  stipend: "$48",
  description: "Join the Search or Cloud infrastructure teams to build scalable systems. You will write production-grade code in Go, C++, or Java and collaborate with Senior Engineers."
}

  ,
{
  id: "job-2",
  title: "Product Design Intern",
  company: "Figma",
  logoText: "F",
  logoColor: "#F24E1E",
  category: "design",
  location: "San Francisco, CA (Hybrid)",
  duration: "16 Weeks",
  stipend: "$45",
  description: "Design tools that empower teams to create together. Collaborate with product managers and engineers to refine user flows, build high-fidelity interactive prototypes, and conduct user tests."
}

  ,
{
  id: "job-3",
  title: "Data Analyst Intern",
  company: "Stripe",
  logoText: "S",
  logoColor: "#635BFF",
  category: "technology",
  location: "Seattle, WA",
  duration: "12 Weeks",
  stipend: "$42",
  description: "Help optimize Stripe's global payments network. Write complex SQL queries, build dashboards to track key transaction metrics, and present data-driven recommendations to leadership."
}

  ,
{
  id: "job-4",
  title: "Growth Marketing Intern",
  company: "Airbnb",
  logoText: "A",
  logoColor: "#FF5A5F",
  category: "marketing",
  location: "Remote (US/Canada)",
  duration: "10 Weeks",
  stipend: "$35",
  description: "Drive student travel campaigns and host acquisition strategies. Conduct SEO keyword research, monitor pay-per-click ads performance, and design engaging email newsletter campaigns."
}

  ,
{
  id: "job-5",
  title: "Product Management Intern",
  company: "Uber",
  logoText: "U",
  logoColor: "#000000",
  category: "management",
  location: "New York, NY",
  duration: "12 Weeks",
  stipend: "$46",
  description: "Own the lifecycle of a new feature for Uber Rides or Uber Eats. Run user surveys, define key product requirements (PRDs), and coordinate design and engineering sprints."
}

  ,
{
  id: "job-6",
  title: "Frontend Developer Intern",
  company: "Vercel",
  logoText: "V",
  logoColor: "#000000",
  category: "technology",
  location: "Remote",
  duration: "6 Months",
  stipend: "$40",
  description: "Work on Next.js framework optimizations or improve the Vercel developer console interface. Deep dive into React Server Components, Tailwind integration, and client performance."
}

  ,
{
  id: "job-7",
  title: "Brand Designer Intern",
  company: "Canva",
  logoText: "C",
  logoColor: "#00C4CC",
  category: "design",
  location: "Austin, TX (Hybrid)",
  duration: "12 Weeks",
  stipend: "$36",
  description: "Produce marketing illustrations, template assets, and social media brand guidelines. Collaborate directly with the creative director to build visually striking media templates."
}

  ,
{
  id: "job-8",
  title: "Operations Coordinator Intern",
  company: "Spotify",
  logoText: "Sp",
  logoColor: "#1DB954",
  category: "management",
  location: "Boston, MA",
  duration: "12 Weeks",
  stipend: "$38",
  description: "Streamline content onboarding pipelines and licensing operations. Track digital rights metadata, coordinate podcast publisher relations, and optimize process checklists."
}

];

// Default Student Profile
const defaultProfile = {
  name: "Jane Doe",
  email: "jane.doe@university.edu",
  university: "Stanford University",
  major: "Computer Science",
  gradYear: 2027,
  gpa: 3.85,
  skills: "JavaScript, HTML/CSS, Python, React, SQL, Git",
  linkedin: "https://linkedin.com/in/janedoe",
  portfolio: "https://github.com/janedoe",
  bio: "Passionate Computer Science student with a focus on web applications and data systems. Quick learner, looking to build robust software tools and products."
}

  ;

// Initialize localStorage
if (!localStorage.getItem("internships")) {
  localStorage.setItem("internships", JSON.stringify(initialInternships));
}

if (!localStorage.getItem("studentProfile")) {
  localStorage.setItem("studentProfile", JSON.stringify(defaultProfile));
}

if (!localStorage.getItem("applications")) {
  localStorage.setItem("applications", JSON.stringify([]));
}

// State
let state = {
  internships: JSON.parse(localStorage.getItem("internships")),
  profile: JSON.parse(localStorage.getItem("studentProfile")),
  applications: JSON.parse(localStorage.getItem("applications")),
  currentCategory: "all",
  searchQuery: ""
}

  ;

// DOM Elements
const sections = document.querySelectorAll(".page-section");
const navButtons = document.querySelectorAll(".nav-btn");
const searchInput = document.getElementById("search-bar");
const filterPills = document.querySelectorAll(".filter-pill");
const listingsContainer = document.getElementById("listings-container");
const applicationsContainer = document.getElementById("applications-container");
const profileForm = document.getElementById("profile-form");
const applyModal = document.getElementById("apply-modal");
const applyForm = document.getElementById("apply-form");
const detailsModal = document.getElementById("details-modal");
const detailsModalBody = document.getElementById("details-modal-body");
const toast = document.getElementById("toast-notification");
const toastMessage = document.getElementById("toast-message");

// Register Nav Clicks
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    switchTab(targetId);
  });
});

// Logo Click behavior
document.getElementById("nav-logo").addEventListener("click", (e) => {
  e.preventDefault();
  switchTab("section-browse");
});

window.switchTab = function (sectionId) {

  // Update nav buttons active states
  navButtons.forEach(button => {
    if (button.getAttribute("data-target") === sectionId) {
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
    }

    else {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    }
  });

  // Toggle active sections
  sections.forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.add("active");
    }

    else {
      sec.classList.remove("active");
    }
  });

  // Trigger content loading for target section
  if (sectionId === "section-applications") {
    renderApplications();
  }

  else if (sectionId === "section-admin") {
    renderAdminPanel();
  }

  else if (sectionId === "section-profile") {
    loadProfileFormValues();
  }

  else if (sectionId === "section-browse") {
    renderListings();
  }
}

  ;

// Search and Filters
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderListings();
  });
}

filterPills.forEach(pill => {
  pill.addEventListener("click", () => {
    filterPills.forEach(p => {
      p.classList.remove("active");
      p.setAttribute("aria-selected", "false");
    });
    pill.classList.add("active");
    pill.setAttribute("aria-selected", "true");
    state.currentCategory = pill.getAttribute("data-category");
    renderListings();
  });
});

// Load Profile Form Values
function loadProfileFormValues() {
  document.getElementById("profile-name").value = state.profile.name;
  document.getElementById("profile-email").value = state.profile.email;
  document.getElementById("profile-university").value = state.profile.university;
  document.getElementById("profile-major").value = state.profile.major;
  document.getElementById("profile-grad-year").value = state.profile.gradYear;
  document.getElementById("profile-gpa").value = state.profile.gpa;
  document.getElementById("profile-skills").value = state.profile.skills;
  document.getElementById("profile-linkedin").value = state.profile.linkedin;
  document.getElementById("profile-portfolio").value = state.profile.portfolio;
  document.getElementById("profile-bio").value = state.profile.bio;

  renderProfileStats();
}

function renderProfileStats() {
  document.getElementById("profile-card-name").textContent = state.profile.name;

  document.getElementById("profile-card-major").textContent = `$ {
    state.profile.major
  }

  Student`;

  // Avatar initials
  const initials = state.profile.name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2);
  document.getElementById("profile-avatar-large").textContent = initials;
  document.getElementById("header-user-avatar").textContent = initials;
  document.getElementById("header-user-name").textContent = state.profile.name;

  // Stats calculation
  const totalApplied = state.applications.length;
  const totalOffers = state.applications.filter(app => app.status === "selected").length;
  document.getElementById("profile-stat-applied").textContent = totalApplied;
  document.getElementById("profile-stat-selected").textContent = totalOffers;
}

// Save Profile form data
if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    state.profile = {
      name: document.getElementById("profile-name").value.trim(),
      email: document.getElementById("profile-email").value.trim(),
      university: document.getElementById("profile-university").value.trim(),
      major: document.getElementById("profile-major").value.trim(),
      gradYear: parseInt(document.getElementById("profile-grad-year").value),
      gpa: parseFloat(document.getElementById("profile-gpa").value),
      skills: document.getElementById("profile-skills").value.trim(),
      linkedin: document.getElementById("profile-linkedin").value.trim(),
      portfolio: document.getElementById("profile-portfolio").value.trim(),
      bio: document.getElementById("profile-bio").value.trim()
    }

      ;

    localStorage.setItem("studentProfile", JSON.stringify(state.profile));
    showToast("Profile information updated successfully!");
    renderProfileStats();
  });
}

// Show Toast Alert
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }

    , 4000);
}

// Render Internship Listings
function renderListings() {
  listingsContainer.innerHTML = "";

  const filtered = state.internships.filter(job => {
    const matchesCategory = state.currentCategory === "all" || job.category === state.currentCategory;
    const matchesSearch = job.title.toLowerCase().includes(state.searchQuery) || job.company.toLowerCase().includes(state.searchQuery) || job.description.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    listingsContainer.innerHTML = ` <div class="empty-state" style="grid-column: 1 / -1;"><svg class="empty-icon" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg><h3>No internships found</h3><p>Try refining your search or choosing a different field filter.</p></div>`;
    return;
  }

  filtered.forEach(job => {
    const isApplied = state.applications.some(app => app.jobId === job.id);

    const card = document.createElement("article");
    card.className = "glass-card internship-card";

    card.innerHTML = ` <div class="card-header" > <div class="company-logo" style="color: ${job.logoColor}; border-top: 2px solid ${job.logoColor};" > $ {
        job.logoText
      }

      </div> <span class="job-category" >$ {
        job.category
      }

      </span> </div> <h3 class="job-title" >$ {
        job.title
      }

      </h3> <div class="company-name" > <svg viewBox="0 0 24 24" ><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" /></svg> $ {
        job.company
      }

      </div> <div class="job-details" > <div class="detail-item" > <svg viewBox="0 0 24 24" ><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> $ {
        job.location
      }

      </div> <div class="detail-item" > <svg viewBox="0 0 24 24" ><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> $ {
        job.duration
      }

      </div> </div> <p class="job-description" >$ {
        job.description
      }

      </p> <div class="card-footer" > <div class="stipend-amount" >$ {
        job.stipend
      }

      <span>/hr</span></div>
      //  $ {
      //   isApplied ? `
      //    <button class="btn-applied" disabled>
      //    <svg viewBox="0 0 24 24" ><path d="M5 13l4 4L19 7" /></svg> Applied </button>
      //     ` : ` <button class="btn-apply" onclick="openApplyModal('${job.id}')" >Apply Now
      //    </button> `
      // }
       ${
      isApplied ? `
        <button class="btn-applied" disabled>
            <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            Applied
        </button>
    ` : `
        <button class="btn-apply" onclick="openApplyModal('${job.id}')">Apply Now</button>
    `}

      </div > `;
      listingsContainer.appendChild(card);
    });
}

// Modal management for Applications
window.openApplyModal=function(jobId) {
  const job=state.internships.find(j=> j.id===jobId);
  if ( !job) return;

  document.getElementById("apply-job-id").value=job.id;

  // document.getElementById("apply-modal-title").textContent=`Apply for $ {
        job.title
      }

      `;

      document.getElementById("apply-modal-subtitle").textContent=`Submitting application to $ {
        job.company
      }

      `;


      // Fill profile parameters
      document.getElementById("apply-name").value = state.profile.name;
      document.getElementById("apply-email").value = state.profile.email;
      document.getElementById("apply-university").value = state.profile.university;
      document.getElementById("apply-major").value = state.profile.major;
      document.getElementById("apply-gpa").value = state.profile.gpa;
      document.getElementById("apply-grad").value = state.profile.gradYear;
      document.getElementById("apply-resume").value = "";
      document.getElementById("apply-cover").value = "";

      applyModal.classList.add("active");
      applyModal.showModal();
    }

      ;

      function closeApplyModal() {
        applyModal.classList.remove("active");
        applyModal.close();
      }

document.getElementById("btn-close-apply").addEventListener("click", closeApplyModal);

    applyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const jobId = document.getElementById("apply-job-id").value;
      const job = state.internships.find(j => j.id === jobId);

      const newApp = {

        id: "app-" + Date.now(),
        jobId: jobId,
        jobTitle: job.title,
        company: job.company,
        studentName: document.getElementById("apply-name").value.trim(),
        studentEmail: document.getElementById("apply-email").value.trim(),
        studentUniversity: document.getElementById("apply-university").value.trim(),
        studentMajor: document.getElementById("apply-major").value.trim(),
        studentGpa: parseFloat(document.getElementById("apply-gpa").value),
        studentGrad: parseInt(document.getElementById("apply-grad").value),
        resume: document.getElementById("apply-resume").value.trim(),
        cover: document.getElementById("apply-cover").value.trim(),
        status: "pending",
        appliedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric", month: "short", day: "numeric"
        })
      }

        ;

      state.applications.push(newApp);
      localStorage.setItem("applications", JSON.stringify(state.applications));

      showToast(`Application to $ {
      job.company
    }

    submitted successfully !`);

      closeApplyModal();
      renderListings();
      renderProfileStats();
    });

    // Render Student Applications List
    function renderApplications() {
      applicationsContainer.innerHTML = "";

      if (state.applications.length === 0) {
        applicationsContainer.innerHTML = ` <div class="empty-state glass-panel"><svg class="empty-icon" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg><h3>No applications yet</h3><p>Explore internships and apply for developer,
    designer,
    or coordinator roles to view tracking status here.</p><button class="form-submit-btn" style="width: auto; margin-top: 1.5rem; padding: 0.65rem 1.5rem;" onclick="switchTab('section-browse')">Browse Internships</button></div>`;
        return;
      }

      state.applications.forEach(app => {
        // Determine Timeline Steps styling
        const stages = ["pending", "review", "interview", "selected"];
        const labels = ["Submitted", "Under Review", "Interview", "Offer Extended"];
        const currentIndex = stages.indexOf(app.status);
        const isRejected = app.status === "rejected";

        // Calculate progress line percentage
        let progressPercentage = 0;

        if (isRejected) {
          progressPercentage = 33.3; // Progress line ends at coordinator review
        }

        else if (currentIndex >= 0) {
          progressPercentage = (currentIndex / 3) * 100;
        }

        let timelineHtml = "";

        if (isRejected) {
          timelineHtml = ` <div class="timeline-step completed" > <div class="timeline-node" >1</div> <span class="timeline-label" >Submitted</span> </div> <div class="timeline-step completed" > <div class="timeline-node" >2</div> <span class="timeline-label" >Under Review</span> </div> <div class="timeline-step current-rejected" > <div class="timeline-node" >✗</div> <span class="timeline-label" style="color: hsl(var(--color-rejected)); font-weight: 600;" >Application Declined</span> </div> `;
        }

        else {
          labels.forEach((lbl, idx) => {
            let stepClass = "";
            let nodeContent = idx + 1;

            if (idx < currentIndex) {
              stepClass = "completed";
              nodeContent = "✓";
            }

            else if (idx === currentIndex) {
              stepClass = "active";
            }

            timelineHtml += ` <div class="timeline-step ${stepClass}" > <div class="timeline-node" >$ {
              nodeContent
            }

            </div> <span class="timeline-label" >$ {
              lbl
            }

            </span> </div> `;
          });
        }

        const card = document.createElement("div");
        card.className = "glass-panel app-card";

        card.innerHTML = ` <div class="app-card-grid" > <div> <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.25rem;" >$ {
        app.jobTitle
      }

      </h3> <div class="company-name" style="margin-bottom: 0.5rem;" >$ {
        app.company
      }

      </div> <div style="font-size: 0.8rem; color: hsl(var(--text-muted));" >Applied on $ {
        app.appliedAt
      }

      </div> </div> <div> < !-- Desktop spacer / Responsive alignment --> </div> <div> <span class="app-status-badge status-${app.status}" > <span class="status-indicator" ></span> $ {
        app.status==='review' ? 'In Review' : app.status==='selected' ? 'Offer Extended' : app.status
      }

      </span> </div> </div> <div class="app-timeline" > <div class="timeline-line" ></div> <div class="timeline-progress" style="width: ${progressPercentage}%;" ></div> $ {
        timelineHtml
      }

      </div> `;

        // Add dynamic adjustment for mobile vertical progress line if height is needed
        // (CSS covers media query line positions, but using standard width values allows standard responsive timeline grids)
        applicationsContainer.appendChild(card);
      });
    }

    // Render Coordinator Dashboard (Admin)
    function renderAdminPanel() {
      const tbody = document.getElementById("admin-applicants-tbody");
      const emptyState = document.getElementById("admin-empty-state");

      tbody.innerHTML = "";

      // Calculate coordinator stats
      const total = state.applications.length;
      const pending = state.applications.filter(app => app.status === "pending" || app.status === "review").length;
      const interviews = state.applications.filter(app => app.status === "interview").length;
      const selected = state.applications.filter(app => app.status === "selected").length;

      document.getElementById("admin-stat-total").textContent = total;
      document.getElementById("admin-stat-pending").textContent = pending;
      document.getElementById("admin-stat-interview").textContent = interviews;
      document.getElementById("admin-stat-placed").textContent = selected;

      if (total === 0) {
        emptyState.style.display = "block";
        return;
      }

      emptyState.style.display = "none";

      state.applications.forEach(app => {
        const row = document.createElement("tr");

        row.innerHTML = ` <td> <div class="table-candidate" > <div class="user-avatar" style="width: 32px; height: 32px; font-size: 0.8rem;" > $ {
        app.studentName.split(" ").map(n=> n[0]).join("").toUpperCase().substring(0, 2)
      }

      </div> <div class="table-candidate-info" > <span class="table-candidate-name" >$ {
        app.studentName
      }

      </span> <span class="table-candidate-email" >$ {
        app.studentEmail
      }

      </span> </div> </div> </td> <td> <div style="font-weight: 600; color: white;" >$ {
        app.jobTitle
      }

      </div> <div style="font-size: 0.8rem; color: hsl(var(--text-secondary));" >$ {
        app.company
      }

      </div> </td> <td style="font-weight: 700; font-family: var(--font-heading);" >$ {
        app.studentGpa.toFixed(2)
      }

      </td> <td> <select class="admin-select" onchange="updateApplicationStatus('${app.id}', this.value)" > <option value="pending"$ {
        app.status==='pending' ? 'selected' : ''
      }

      >Pending</option> <option value="review"$ {
        app.status==='review' ? 'selected' : ''
      }

      >Under Review</option> <option value="interview"$ {
        app.status==='interview' ? 'selected' : ''
      }

      >Schedule Interview</option> <option value="selected"$ {
        app.status==='selected' ? 'selected' : ''
      }

      >Extend Offer</option> <option value="rejected"$ {
        app.status==='rejected' ? 'selected' : ''
      }

      >Decline</option> </select> </td> <td> <button class="btn-details" onclick="openDetailsModal('${app.id}')" >View Details</button> </td> `;
        tbody.appendChild(row);
      });
    }

    // Update Application Status (Admin Action)
    window.updateApplicationStatus = function (appId, newStatus) {
      const appIndex = state.applications.findIndex(a => a.id === appId);
      if (appIndex === -1) return;

      state.applications[appIndex].status = newStatus;
      localStorage.setItem("applications", JSON.stringify(state.applications));

      showToast(`Updated $ {
      state.applications[appIndex].studentName
    }

    's status to ${newStatus === ' review' ? ' in review' : newStatus}.`);
      renderAdminPanel();
    }

      ;

    // Details Modal Manager
    window.openDetailsModal = function (appId) {
      const app = state.applications.find(a => a.id === appId);
      if (!app) return;

      detailsModalBody.innerHTML = ` <div style="display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem;" > <div class="profile-avatar-large" style="width: 64px; height: 64px; font-size: 1.5rem; margin-bottom: 0;" > $ {
      app.studentName.split(" ").map(n=> n[0]).join("").toUpperCase().substring(0, 2)
    }

    </div> <div> <h4 style="font-size: 1.25rem; font-weight: 700;" >$ {
      app.studentName
    }

    </h4> <div style="font-size: 0.9rem; color: hsl(var(--text-secondary));" >$ {
      app.studentUniversity
    }

    • Major: $ {
      app.studentMajor
    }

    </div> </div> </div> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" > <div> <div class="form-label" >Graduation Year</div> <div style="font-weight: 600; color: white;" >$ {
      app.studentGrad
    }

    </div> </div> <div> <div class="form-label" >GPA Score</div> <div style="font-weight: 700; color: white; font-family: var(--font-heading);" >$ {
      app.studentGpa.toFixed(2)
    }

    / 4.00</div> </div> </div> <div> <div class="form-label" >Resume Document</div> <a href="${app.resume}" target="_blank" style="color: hsl(var(--color-pending)); text-decoration: underline; font-weight: 500; font-size: 0.9rem; display: flex; align-items: center; gap: 0.25rem;" > <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 2;" ><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> View Candidate Resume Document </a> </div> <div> <div class="form-label" >Candidate Statement (Cover Letter)</div> <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; line-height: 1.5; color: hsl(var(--text-secondary)); white-space: pre-wrap;" > $ {
      app.cover
    }

    </div> </div> <div> <div class="form-label" >Recruiter Decision Status</div> <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;" > <span class="app-status-badge status-${app.status}" > <span class="status-indicator" ></span> $ {
      app.status==='review' ? 'In Review' : app.status==='selected' ? 'Offer Extended' : app.status
    }

    </span> <span style="font-size: 0.8rem; color: hsl(var(--text-muted));" >Change status using the action selector in the admin candidates grid.</span> </div> </div> `;

      detailsModal.classList.add("active");
      detailsModal.showModal();
    }

      ;

    function closeDetailsModal() {
      detailsModal.classList.remove("active");
      detailsModal.close();
    }

    document.getElementById("btn-close-details").addEventListener("click", closeDetailsModal);

    // Initial Load Rendering
    window.addEventListener("DOMContentLoaded", () => {
      renderListings();
      renderProfileStats();
    });