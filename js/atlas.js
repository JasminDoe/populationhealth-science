/**
 * COLLABORATION ATLAS — INTERACTION DATA / FILTERING
 * =================================================
 * Each collaborator is keyed by a short ID (e.g. "cooper").
 * Add the same ID as data-person="cooper" on its <circle> in atlas.qmd.
 * Use data-project="mania", "global", or "babies" on each circle.
 * Add shared paper titles below; only include verified URLs.
 *
 * This is a curated initial set, not a complete global coauthor network.
 * Details are inserted via textContent (rather than unsafe HTML).
 */
(() => {
  const map = document.querySelector("#atlas-map");
  if (!map) return; // No atlas: do nothing on other website pages.

  const dots = [...map.querySelectorAll("[data-person]")];
  const filters = [...document.querySelectorAll("[data-project-filter]")];
  const publicationRows = [...document.querySelectorAll("[data-publication-project]")];
  const detail = document.querySelector("#person-card");

  // EDIT COLLABORATOR DESCRIPTIONS AND SHARED PAPERS HERE.
  // Affiliation names correspond to those given in the supplied manuscripts.
  const collaborators = {
    cooper: {
      name: "Rebecca Cooper",
      affiliation: "Boston Children's Hospital / Harvard Medical School",
      papers: ["Risk factors associated with longitudinal trajectories of mania symptoms in youth"],
      paperUrl: "https://doi.org/10.1017/S0954579426101606"
    },
    jalbrzikowski: {
      name: "Maria Jalbrzikowski",
      affiliation: "Boston Children's Hospital / Harvard Medical School",
      papers: ["Risk factors associated with longitudinal trajectories of mania symptoms in youth"],
      paperUrl: "https://doi.org/10.1017/S0954579426101606"
    },
    soehner: {
      name: "Adriane Soehner",
      affiliation: "University of Pittsburgh",
      papers: ["Risk factors associated with longitudinal trajectories of mania symptoms in youth"],
      paperUrl: "https://doi.org/10.1017/S0954579426101606"
    },
    ruggeri: {
      name: "Kai Ruggeri",
      affiliation: "Columbia University / University of Cambridge (as listed in manuscripts)",
      papers: ["Global mental wealth", "People in 26 countries prefer individual control"]
    },
    pelica: {
      name: "Sofia Pelica",
      affiliation: "Vrije Universiteit Amsterdam (as listed in manuscripts)",
      papers: ["Global mental wealth", "People in 26 countries prefer individual control"]
    },
    stock: {
      name: "Friederike Stock",
      affiliation: "Max Planck Institute for Human Development, Berlin (as listed in manuscript)",
      papers: ["People in 26 countries prefer individual control"]
    },
    meltzoff: {
      name: "Andrew N. Meltzoff",
      affiliation: "University of Washington (as listed in manuscript)",
      papers: ["A Multi-Lab Investigation of Neonatal and Early Imitation"]
    },
    slaughter: {
      name: "Virginia Slaughter",
      affiliation: "University of Queensland (as listed in manuscript)",
      papers: ["A Multi-Lab Investigation of Neonatal and Early Imitation"]
    }
  };

  // Display a profile card for the selected map dot.
  function selectCollaborator(id) {
    const item = collaborators[id];
    if (!item || !detail) return;

    dots.forEach((dot) => dot.setAttribute("aria-pressed", String(dot.dataset.person === id)));
    detail.replaceChildren();

    const title = document.createElement("h3");
    title.textContent = item.name;
    detail.append(title);

    const affiliation = document.createElement("p");
    affiliation.textContent = item.affiliation;
    detail.append(affiliation);

    const heading = document.createElement("strong");
    heading.textContent = "Shared research";
    detail.append(heading);

    const papers = document.createElement("ul");
    item.papers.forEach((paper) => {
      const li = document.createElement("li");
      li.textContent = paper;
      papers.append(li);
    });
    detail.append(papers);

    if (item.paperUrl) {
      const link = document.createElement("a");
      link.href = item.paperUrl;
      link.rel = "noopener noreferrer";
      link.textContent = "Read shared paper ↗";
      detail.append(link);
    }
  }

  // Keyboard support: map dots are reachable with Tab, activated by Enter/Space.
  dots.forEach((dot) => {
    dot.addEventListener("click", () => selectCollaborator(dot.dataset.person));
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectCollaborator(dot.dataset.person);
      }
    });
  });

  // Filter both the map dots and the plain-text shared-publication list.
  function filterProject(project) {
    filters.forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.projectFilter === project))
    );
    dots.forEach((dot) => {
      dot.style.opacity = (project === "all" || dot.dataset.project === project) ? "1" : "0.13";
    });
    publicationRows.forEach((row) => {
      row.hidden = project !== "all" && row.dataset.publicationProject !== project;
    });
  }

  filters.forEach((button) =>
    button.addEventListener("click", () => filterProject(button.dataset.projectFilter))
  );
})();
