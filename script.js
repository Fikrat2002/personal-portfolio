// Function to create the Navbar dynamically
function createNavbar() {
    const navbar = document.getElementById("navbar");

    const nav = document.createElement("nav");
    nav.id = "navbar";
    nav.classList.add("nav");

    const ul = document.createElement("ul");
    ul.classList.add("nav-list");

    const links = [
        { href: "#about", text: "About" },
        { href: "#projects", text: "Projects" },
        { href: "#certificates", text: "Certificates" },
        { href: "#contact", text: "Contact" },
        { href: "#skills", text: "Skills" }
    ];

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    navbar.appendChild(nav);
}

// Function to create the Projects section dynamically
function createProjects() {
    const projectsSection = document.getElementById("projects");

    const section = document.createElement("section");
    section.classList.add("projects-section");
    section.id = "projects";

    const header = document.createElement("h2");
    header.classList.add("projects-section-header");
    header.textContent = "Here are few illustrations of my projects";
    section.appendChild(header);

    const projectsGrid = document.createElement("div");
    projectsGrid.classList.add("projects-grid");

    const projectLinks = [
        { 
            href: "https://fikrat2002.github.io/Survey_form/", 
            imgSrc: "images/Screenshot 2024-06-05 092018.png", 
            alt: "project1", 
            title: "Survey_form"
        },
        { 
            href: "https://fikrat2002.github.io/Tribute-page/", 
            imgSrc: "images/Screenshot 2024-06-04 004401.png", 
            alt: "project2", 
            title: "Tribute-Page"
        },
        { 
            href: "https://fikrat2002.github.io/technical-document/", 
            imgSrc: "images/Screenshot 2024-06-02 162743.png", 
            alt: "project3", 
            title: "Technical-Document"
        },
        { 
            href: "https://fikrat2002.github.io/product-landing/", 
            imgSrc: "images/Screenshot 2024-06-01 221842.png", 
            alt: "project4", 
            title: "Product-landing-Page"
        }
    ];

    projectLinks.forEach(project => {
        const projectLink = document.createElement("a");
        projectLink.href = project.href;
        projectLink.target = "_blank";
        projectLink.rel = "noopener";
        projectLink.classList.add("project", "project-tile");

        const img = document.createElement("img");
        img.classList.add("project-image");
        img.src = project.imgSrc;
        img.alt = project.alt;

        const p = document.createElement("p");
        p.classList.add("project-title");
        p.textContent = project.title;

        projectLink.appendChild(img);
        projectLink.appendChild(p);
        projectsGrid.appendChild(projectLink);
    });

    section.appendChild(projectsGrid);
    projectsSection.appendChild(section);
}

// Function to create the Certificates section dynamically
function createCertificates() {
    const certificatesSection = document.getElementById("certificates");

    const section = document.createElement("section");
    section.classList.add("certificates-section");
    section.id = "certificates";

    const header = document.createElement("h2");
    header.classList.add("certificates-section-header");
    header.textContent = "My Certificates";
    section.appendChild(header);

    const certificatesGrid = document.createElement("div");
    certificatesGrid.classList.add("certificates-grid");

    const certificateLinks = [
        { 
            href: "your-certificate-link-1.pdf", 
            title: "Web Development Certificate"
        },
        { 
            href: "your-certificate-link-2.pdf", 
            title: "UI/UX Design Certificate"
        },
        { 
            href: "your-certificate-link-3.pdf", 
            title: "React Development Certificate"
        }
    ];

    certificateLinks.forEach(certificate => {
        const certificateLink = document.createElement("a");
        certificateLink.href = certificate.href;
        certificateLink.target = "_blank";
        certificateLink.rel = "noopener";
        certificateLink.classList.add("certificate", "certificate-tile");

        const p = document.createElement("p");
        p.classList.add("certificate-title");
        p.textContent = certificate.title;

        certificateLink.appendChild(p);
        certificatesGrid.appendChild(certificateLink);
    });

    section.appendChild(certificatesGrid);
    certificatesSection.appendChild(section);
}

// Call the functions to build dynamic sections
document.addEventListener("DOMContentLoaded", function() {
    createNavbar();
    createProjects();
    createCertificates();
});
