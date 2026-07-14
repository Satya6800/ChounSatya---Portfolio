<template>
  <section class="skills-page">
    <div class="background-layer">
      <div class="bubbles">
        <div class="bubble" v-for="n in 12" :key="n"></div>
      </div>
      <div class="grid-overlay"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="pulse-ring"></div>
    </div>

    <div class="container">
      <header class="section-head">
        <div class="badge">My Skills</div>
        <h1>Design. Build. Ship.</h1>
        <p class="lead">
          I craft polished digital experiences with a balance of strong frontend systems,
          reliable backend architecture, and thoughtful interaction design.
        </p>
      </header>

      <div class="skill-grid">
        <article class="skill-card">
          <div class="skill-icon icon-code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3>Frontend Development</h3>
          <p>Vue.js, JavaScript, Tailwind CSS, Responsive UIs, Animation</p>
        </article>

        <article class="skill-card">
          <div class="skill-icon icon-server">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="6" rx="2"></rect>
              <rect x="3" y="14" width="18" height="6" rx="2"></rect>
              <path d="M7 8h.01M7 18h.01"></path>
            </svg>
          </div>
          <h3>Backend APIs</h3>
          <p>Node.js, Express, REST & GraphQL, Authentication, Scalable Services</p>
        </article>

        <article class="skill-card">
          <div class="skill-icon icon-design">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h9"></path>
              <path d="M18 2l4 4-7 7-4-4 7-7z"></path>
            </svg>
          </div>
          <h3>UI / UX Design</h3>
          <p>Figma, Wireframing, Prototyping, Micro-interactions, Visual Systems</p>
        </article>

        <article class="skill-card">
          <div class="skill-icon icon-database">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
              <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"></path>
              <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"></path>
            </svg>
          </div>
          <h3>Databases</h3>
          <p>MongoDB, SQL, Data Modeling, Query Optimization, Cloud Storage</p>
        </article>

        <article class="skill-card">
          <div class="skill-icon icon-speed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
              <path d="M12 8v4l3 3"></path>
              <path d="M4.93 19.07A10 10 0 0 1 4 12"></path>
            </svg>
          </div>
          <h3>Performance</h3>
          <p>Optimized Loading, Code Splitting, Caching, Accessibility, SEO-friendly</p>
        </article>

        <article class="skill-card">
          <div class="skill-icon icon-team">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Collaboration</h3>
          <p>Agile Workflow, Git, Code Reviews, Mentoring, Reliable Delivery</p>
        </article>
      </div>

      <section class="toolset-section">
        <div class="toolset-header">
          <div>
            <div class="badge">Toolset</div>
            <h2>Tools I use every day</h2>
          </div>
          <p>
            A modern stack of frameworks, design tools, and collaboration systems that keep projects fast,
            polished, and production-ready.
          </p>
        </div>

        <div class="tool-grid">
          <div class="tool-card">
            <div class="tool-icon vue-icon">
             <svg viewBox="0 0 256 221" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>
            </div>
            <p>Vue.js</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon html-icon">
             <svg viewBox="0 0 452 520"><path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"/><path fill="#ef652a" d="M226 472l149-41 35-394H226"/><path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/></svg>
            </div>
            <p>HTML</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon css-icon">
             <svg viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"/><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"/><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/></svg>
            </div>
            <p>CSS</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon bootstrap-icon">
              <svg viewBox="0 0 256 204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"/></svg>
            </div>
            <p>Bootstrap</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon node-icon">
             <svg viewBox="0 0 256 292" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="nodejs__a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="nodejs__c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="nodejs__f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><path id="nodejs__b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><path id="nodejs__e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/></defs><path fill="url(#nodejs__a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><mask id="nodejs__d" fill="#fff"><use xlink:href="#nodejs__b"/></mask><path fill="url(#nodejs__c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#nodejs__d)"/><mask id="nodejs__g" fill="#fff"><use xlink:href="#nodejs__e"/></mask><path fill="url(#nodejs__f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#nodejs__g)"/></svg>
            </div>
            <p>Node.js</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon git-icon">
              <svg viewBox="0 0 1024 1024" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor"/></svg>
            </div>
            <p>Git</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon figma-icon">
              <svg viewBox="0 0 54 80" fill="none"><g clip-path="url(#figma__clip0_912_3)"><path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"/><path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"/><path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"/><path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"/><path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"/></g><defs><clipPath id="figma__clip0_912_3"><rect width="53.3333" height="80" fill="white"/></clipPath></defs></svg>
            </div>
            <p>Figma</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon js-icon">
              <svg viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
            </div>
            <p>JavaScript</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon tailwind-icon">
              <svg fill="none" viewBox="0 0 54 33"><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
            </div>
            <p>Tailwind CSS</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon ts-icon">
             <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>
            </div>
            <p>TypeScript</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon flutter-icon">
             <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 317"><defs><linearGradient x1="4%" y1="27%" x2="75.9%" y2="52.9%" id="flutter__a"><stop offset="0%"/><stop stop-opacity="0" offset="100%"/></linearGradient></defs><path fill="#47C5FB" d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"/><path fill="#00569E" d="m121 280 37 37h97l-85-86z"/><path fill="#00B5F8" d="m72 230 48-48 50 49-49 49z"/><path fill-opacity=".8" fill="url(#flutter__a)" d="m121 280 41-14 4-31z"/></svg>
            </div>
            <p>Flutter</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon dart-icon">
             <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><defs><radialGradient id="dart__a" cx="50%" cy="50.002%" r="50.004%" fx="50%" fy="50.002%" gradientTransform="matrix(1 0 0 .99985 0 0)"><stop offset="0%" stop-color="#FFF" stop-opacity=".1"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></radialGradient></defs><path fill="#01579B" d="M52.209 203.791 8.413 159.995C3.218 154.67 0 147.141 0 139.782c0-3.407 1.92-8.733 3.369-11.782l40.427-84.204 8.413 159.995Z"/><path fill="#40C4FF" d="M202.116 52.209 158.32 8.413C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796l158.301 8.413ZM104.418 256h106.111v-45.471l-79.16-25.276-72.422 25.276z"/><path fill="#29B6F6" d="M43.796 180.209c0 13.513 1.694 16.826 8.413 23.582l6.738 6.738h151.582l-74.097-84.204-92.636-82.53V180.21Z"/><path fill="#01579B" d="M178.534 43.777H43.796L210.529 210.51H256V106.093L202.097 52.19c-7.566-7.585-14.285-8.413-23.563-8.413Z"/><path fill="#FFF" d="M53.903 205.466c-6.738-6.756-8.413-13.419-8.413-25.257V45.47l-1.675-1.675v136.413c-.02 11.838-.02 15.113 10.088 25.257l5.044 5.044-5.044-5.044Z" opacity=".2"/><path fill="#263238" d="M254.325 104.418v104.417h-45.471l1.675 1.694H256V106.093z" opacity=".2"/><path fill="#FFF" d="M202.116 52.209c-8.356-8.357-15.188-8.413-25.257-8.413H43.815l1.675 1.675h131.369c5.025 0 17.71-.847 25.257 6.738Z" opacity=".2"/><path fill="url(#dart__a)" d="m254.325 104.418-52.209-52.21L158.32 8.414C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796 3.388 128c-1.45 3.068-3.37 8.394-3.37 11.782 0 7.359 3.238 14.868 8.414 20.213l40.351 40.07c.96 1.185 2.09 2.39 3.426 3.726l1.675 1.675 5.044 5.044 43.796 43.796 1.675 1.675H210.49v-45.47h45.471V106.092l-1.637-1.675Z" opacity=".2"/></svg>
            </div>
            <p>Dart</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon vscode-icon">
             <svg fill="none" viewBox="0 0 100 100"><mask id="vscode__a" width="100" height="100" x="0" y="0" mask-type="alpha" maskUnits="userSpaceOnUse"><path fill="#fff" fill-rule="evenodd" d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z" clip-rule="evenodd"/></mask><g mask="url(#vscode__a)"><path fill="#0065A9" d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"/><g filter="url(#vscode__b)"><path fill="#007ACC" d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"/></g><g filter="url(#vscode__c)"><path fill="#1F9CF0" d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"/></g><path fill="url(#vscode__d)" fill-rule="evenodd" d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z" clip-rule="evenodd" opacity=".25" style="mix-blend-mode:overlay"/></g><defs><filter id="vscode__b" width="116.727" height="92.246" x="-8.394" y="15.829" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.167"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><filter id="vscode__c" width="47.917" height="116.151" x="60.417" y="-8.076" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.167"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><linearGradient id="vscode__d" x1="49.939" x2="49.939" y1=".258" y2="99.742" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
            </div>
            <p>VS Code</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon laravel-icon">
             <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 264"><path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20"/></svg>
            </div>
            <p>Laravel</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon php-icon">
              <svg viewBox="0 -1 100 50"><path fill="currentColor" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"/></svg>
            </div>
            <p>PHP</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon postman-icon">
             <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><path d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z" fill="#FF6C37"/><path d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z" fill="#FFF"/><path d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z" fill="#FF6C37"/><path d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z" fill="#FFF"/><path d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z" fill="#FF6C37"/><path d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z" fill="#FFF"/><path d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z" fill="#FF6C37"/><path d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z" fill="#FFF"/><path d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z" fill="#FF6C37"/><path d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z" fill="#FFF"/><path d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z" fill="#FF6C37"/><path d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z" fill="#FFF"/><path d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z" fill="#FF6C37"/><path d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z" fill="#FFF"/><path d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z" fill="#FF6C37"/><path d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z" fill="#FFF"/><path d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z" fill="#FF6C37"/><path d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z" fill="#FFF"/><path d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z" fill="#FF6C37"/></svg>
            </div>
            <p>Postman</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon mysql-icon">
             <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"><path fill="currentColor" d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"/><path fill="currentColor" d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"/></svg>
            </div>
            <p>MySQL</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon express-icon">
             <svg viewBox="0 0 32 32"><path fill="currentColor" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
            </div>
            <p>Express</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon vercel-icon">
              <svg viewBox="0 0 256 222" preserveAspectRatio="xMidYMid"><path fill="currentColor" d="m128 0 128 221.705H0z"/></svg>
            </div>
            <p>Vercel</p>
          </div>

          <div class="tool-card">
            <div class="tool-icon render-icon">
             <svg fill="none" viewBox="0 0 800 800"><g clip-path="url(#render_white__clip0_682_25)"><path fill="currentColor" d="M605.28 288.733c-.059-1.365-.178-2.7-.296-4.065-.03-.326-.03-.682-.09-1.009-.089-.83-.207-1.632-.326-2.462-.119-.861-.208-1.691-.327-2.522a30 30 0 0 0-.326-1.751c-.178-1.038-.356-2.106-.564-3.144-.178-.831-.386-1.632-.564-2.463-.178-.801-.356-1.572-.534-2.373-.208-.831-.475-1.632-.713-2.463a63 63 0 0 0-.653-2.284c-.267-.831-.564-1.662-.86-2.493l-.713-2.136c-.386-1.038-.801-2.047-1.187-3.056-.208-.504-.386-.979-.594-1.483a106 106 0 0 0-1.454-3.234c-.178-.386-.356-.801-.534-1.187-.475-1.009-1.01-1.988-1.514-2.967-.238-.445-.445-.89-.683-1.335-.593-1.098-1.246-2.195-1.87-3.263-.178-.297-.326-.594-.504-.89a78 78 0 0 0-2.137-3.323l-.446-.712a114 114 0 0 0-2.76-3.887 103 103 0 0 0-2.76-3.531c-.06-.089-.119-.178-.208-.267-18.344-22.222-46.037-36.344-77.054-36.374V194l-.089.059h.029c-8.607 0-16.978 1.098-24.962 3.145-4.779 1.217-9.439 2.819-13.921 4.688a118 118 0 0 0-4.423 1.988c-29.474 14.181-50.845 42.426-55.564 76.011h-.059c-2.078 14.39-6.501 28.008-12.793 40.528h.208c-21.906 43.435-66.903 73.252-118.906 73.252-23.211 0-44.998-5.933-63.994-16.347-2.226-1.217-4.927.386-4.927 2.907v13.44H206v199.583h199.7v-99.806h.207v-49.903c0-27.563 22.351-49.903 49.925-49.903h49.925c8.548 0 16.83-1.098 24.755-3.145a105 105 0 0 0 13.921-4.688 117 117 0 0 0 4.422-1.988c30.543-14.715 52.448-44.533 56.039-79.75.327-3.352.505-6.764.505-10.206 0-1.72-.03-3.441-.119-5.132"/></g><defs><clipPath id="render_white__clip0_682_25"><path fill="#fff" d="M206 194h400v400H206z"/></clipPath></defs></svg>
            </div>
            <p>Render</p>
          </div>
        </div>
       
      </section>

      <section class="feature-row">
        <div class="feature-card">
          <span class="feature-badge">Fast</span>
          <h4>Modern Frontend Stack</h4>
          <p>Single-page apps built for speed, responsive layouts, and polished interactions.</p>
        </div>
        <div class="feature-card">
          <span class="feature-badge">Stable</span>
          <h4>Robust Architecture</h4>
          <p>Clean code patterns, reusable components, and maintainable backend services.</p>
        </div>
        <div class="feature-card">
          <span class="feature-badge">Smart</span>
          <h4>UX-first Thinking</h4>
          <p>Interfaces designed to guide users clearly while keeping brand and performance strong.</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

.skills-page {
  position: relative;
  min-height: 100vh;
  padding: 120px 0 80px;
  background: var(--hero-bg);
  overflow: hidden;
  font-family: 'Syne', sans-serif;
  color: var(--text-primary);
}

.background-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: var(--bg-bubble);
  border: 1px solid var(--bubble-border);
  animation: floatBubble linear infinite;
}

@keyframes floatBubble {
  0%   { transform: translateY(0) scale(1); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 0.6; }
  100% { transform: translateY(-110vh) scale(1.1); opacity: 0; }
}

.bubble:nth-child(1)  { width:14px;  height:14px;  left:6%;   bottom:-10%; animation-duration:9s;  animation-delay:0s; }
.bubble:nth-child(2)  { width:22px;  height:22px;  left:14%;  bottom:-10%; animation-duration:12s; animation-delay:1.5s; }
.bubble:nth-child(3)  { width:8px;   height:8px;   left:23%;  bottom:-10%; animation-duration:7s;  animation-delay:3s; }
.bubble:nth-child(4)  { width:30px;  height:30px;  left:35%;  bottom:-10%; animation-duration:14s; animation-delay:0.5s; }
.bubble:nth-child(5)  { width:16px;  height:16px;  left:50%;  bottom:-10%; animation-duration:10s; animation-delay:2s; }
.bubble:nth-child(6)  { width:10px;  height:10px;  left:62%;  bottom:-10%; animation-duration:8s;  animation-delay:4s; }
.bubble:nth-child(7)  { width:24px;  height:24px;  left:72%;  bottom:-10%; animation-duration:13s; animation-delay:1s; }
.bubble:nth-child(8)  { width:18px;  height:18px;  left:83%;  bottom:-10%; animation-duration:11s; animation-delay:2.5s; }
.bubble:nth-child(9)  { width:6px;   height:6px;   left:90%;  bottom:-10%; animation-duration:6s;  animation-delay:0.8s; }
.bubble:nth-child(10) { width:36px;  height:36px;  left:44%;  bottom:-10%; animation-duration:16s; animation-delay:3.5s; }
.bubble:nth-child(11) { width:12px;  height:12px;  left:18%;  bottom:-10%; animation-duration:9s;  animation-delay:5s; }
.bubble:nth-child(12) { width:20px;  height:20px;  left:78%;  bottom:-10%; animation-duration:11s; animation-delay:1.8s; }

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--grid-color) 1px, transparent 1px),
                    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 1; /* Opacity should be 1 since the variable has alpha */
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.7;
}

.orb-1 {
  width: 360px;
  height: 360px;
  top: -80px;
  right: -60px;
  background: rgba(40, 126, 255, 0.18);
}

.orb-2 {
  width: 260px;
  height: 260px;
  bottom: -70px;
  left: -40px;
  background: rgba(134, 90, 255, 0.16);
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 520px;
  height: 520px;
  transform: translate(-50%, -50%);
  border: 1px solid var(--border-subtle);
  border-radius: 50%;
  animation: pulse 12s ease-in-out infinite;
  opacity: 0.35;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.36; }
  50% { transform: translate(-50%, -50%) scale(1.06); opacity: 0.14; }
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-head {
  max-width: 760px;
  margin-bottom: 48px;
}

.badge {
  display: inline-flex;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--badge-border);
  background: var(--badge-bg);
  color: var(--badge-color);
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.section-head h1 {
  font-size: clamp(2.6rem, 4vw, 4rem);
  margin: 1rem 0 1rem;
  line-height: 1.05;
}

.lead {
  max-width: 640px;
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 56px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(12px);
  border-radius: 28px;
  padding: 32px 28px;
  min-height: 240px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-active);
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-sm);
}

.skill-icon {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  margin-bottom: 22px;
  color: var(--text-primary);
  background: var(--badge-bg);
  border: 1px solid var(--border-card);
}

.skill-icon svg {
  width: 28px;
  height: 28px;
}

.icon-code { background: linear-gradient(135deg, rgba(2, 132, 199, 0.22), rgba(14, 165, 233, 0.2)); }
.icon-server { background: linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(168, 85, 247, 0.16)); }
.icon-design { background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(234, 179, 8, 0.18)); }
.icon-database { background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(34, 197, 94, 0.18)); }
.icon-speed { background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(59, 130, 246, 0.16)); }
.icon-team { background: linear-gradient(135deg, rgba(99, 102, 241, 0.22), rgba(129, 140, 248, 0.18)); }

.skill-card h3 {
  margin: 0 0 0.8rem;
  font-size: 1.15rem;
}

.skill-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.75;
  font-size: 0.95rem;
}

.feature-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(12px);
  border-radius: 28px;
  padding: 28px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-active);
  background: var(--bg-card-hover);
}

.feature-badge {
  display: inline-flex;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: var(--copy-btn-bg);
  color: var(--text-accent);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.feature-card h4 {
  margin: 0 0 0.8rem;
  font-size: 1.15rem;
}

.feature-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.75;
}

.toolset-section {
  margin-bottom: 56px;
}

.toolset-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.toolset-header h2 {
  margin: 0.45rem 0 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.toolset-header p {
  flex: 1 1 420px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.tool-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  background: var(--bg-glass);
  border: 1px solid var(--border-input);
  backdrop-filter: blur(16px);
  border-radius: 22px;
  min-height: 84px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  justify-content: flex-start;
}

.tool-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-active);
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-sm);
}

.tool-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  border: 1px solid var(--border-card);
  color: var(--text-primary);
  flex-shrink: 0;
}

.tool-icon svg {
  width: 24px;
  height: 24px;
  max-width: 100%;
  max-height: 100%;
}

.html-icon { background: linear-gradient(135deg, rgba(255, 99, 72, 0.18), rgba(255, 159, 67, 0.14)); }
.css-icon { background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(59, 130, 246, 0.14)); }
.bootstrap-icon { background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(168, 85, 247, 0.14)); }
.tailwind-icon { background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(14, 165, 233, 0.14)); }
.vue-icon { background: linear-gradient(135deg, rgba(80, 183, 114, 0.18), rgba(52, 211, 153, 0.14)); }
.react-icon { background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(129, 140, 248, 0.14)); }
.node-icon { background: linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(16, 185, 129, 0.14)); }
.git-icon { background: linear-gradient(135deg, rgba(248, 113, 113, 0.18), rgba(251, 191, 36, 0.14)); }
.figma-icon { background: linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(96, 165, 250, 0.14)); }
.ts-icon { background: linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(37, 99, 235, 0.14)); }
.flutter-icon { background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(14, 165, 233, 0.14)); }
.dart-icon { background: linear-gradient(135deg, rgba(79, 70, 229, 0.18), rgba(129, 140, 248, 0.14)); }
.vscode-icon { background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(20, 184, 166, 0.14)); }
.laravel-icon { background: linear-gradient(135deg, rgba(220, 38, 38, 0.18), rgba(239, 68, 68, 0.14)); }
.php-icon { background: linear-gradient(135deg, rgba(79, 70, 229, 0.18), rgba(129, 140, 248, 0.14)); }
.postman-icon { background: linear-gradient(135deg, rgba(249, 115, 22, 0.18), rgba(245, 158, 11, 0.14)); }
.mysql-icon { background: linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(16, 185, 129, 0.14)); }
.express-icon { background: linear-gradient(135deg, rgba(109, 40, 217, 0.18), rgba(168, 85, 247, 0.14)); }
.vercel-icon { background: linear-gradient(135deg, rgba(107, 114, 128, 0.18), rgba(75, 85, 99, 0.14)); }
.render-icon { background: linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(16, 185, 129, 0.14)); }
.js-icon { background: linear-gradient(135deg, rgba(215, 246, 59, 0.18), rgba(16, 185, 129, 0.14)); }
.tool-card p {
  margin: 0;
  font-weight: 700;
  font-size: 0.96rem;
  color: var(--text-primary);
  letter-spacing: 0.01em;
  flex: 1 1 auto;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}

@media (max-width: 1180px) {
  .tool-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .tool-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .tool-grid {
    grid-template-columns: 1fr;
  }
  .tool-card {
    justify-content: flex-start;
  }
}

@media (max-width: 980px) {
  .skill-grid,
  .tool-grid,
  .feature-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .skills-page {
    padding-top: 100px;
  }

  .skill-grid,
  .tool-grid,
  .feature-row {
    grid-template-columns: 1fr;
  }

  .section-head {
    margin-bottom: 32px;
  }
}
</style>


