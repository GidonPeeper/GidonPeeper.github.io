const pill =
  "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              AI Engineer & Researcher · London
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Gidon Peeper
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I am motivated to use AI not for its own sake, but where it earns
              its place: balancing stochasticity for optimization and efficiency
              with determinism for interpretable outcomes. I currently live in
              London and work as an AI contractor for Ayrshare, where I build
              its data and recommendation pipeline. Before that, I spent
              a year in Princeton’s Hasson Lab using language models to study
              how the brain processes natural conversation.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              I enjoy analyzing complex problems from multiple perspectives, and
              my experience as a teacher and in student leadership helps me
              communicate outcomes to people from different backgrounds.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className="rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
              >
                Download CV
              </a>

              <a
                href="https://www.linkedin.com/in/gidonpeeper"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                LinkedIn
              </a>

              <a
                href="mailto:gidonpeeper@gmail.com"
                className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <img
              src="/profile.jpg"
              alt="Gidon Peeper"
              className="h-56 w-56 rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Current Work</h2>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                2026–Present · London
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                External AI Consultant & Engineer
              </h3>
              <p className="mt-1 text-slate-500">
                <a
                  href="https://www.ayrshare.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Ayrshare
                </a>{" "}
                · Social media API for apps and AI agents
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-slate-600">
            Ayrshare is building an AI feature that tells customers what kind
            of post is likely to perform, based on their own engagement data. I
            build the pipeline behind it: a pseudonymized daily sync from
            production into BigQuery, multimodal LLM labeling of posts against
            a fixed feature taxonomy, and statistical modeling of which post
            features relate to reach and engagement. The results are designed
            to be served to customers’ agents through MCP tools.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            I work with the CEO on product direction, with the engineering team
            on the boundary between production and analytics, and with beta
            customers on the questions they want answered.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Python",
              "Node.js",
              "BigQuery",
              "Cloud Functions",
              "Vertex AI (Gemini)",
              "CatBoost & SHAP",
              "MCP",
            ].map((tag) => (
              <span key={tag} className={pill}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Publications</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              CCN 2026
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">
              Prospective Planning and Retrospective Integration: Distinct Neural
              Signatures of Future and Past in Naturalistic Conversations
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              I. Jalon, G. Peeper, H. Wang, Z. Zada, B. Aubrey, A. Bhattacharjee,
              S. Nastase, A. Goldstein, O. Devinsky, A. Flinker, and U. Hasson
            </p>
            <p className="mt-1 text-sm text-slate-400">
              9th Annual Conference on Cognitive Computational Neuroscience,
              New York · 2026
            </p>
            <a
              href="https://openreview.net/forum?id=kFoXJzTPOI"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline"
            >
              View on OpenReview →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              CCN 2026
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">
              Distributed Sensitivity to Semantics and Structure Across the Brain
              During Naturalistic Conversations
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              G. Peeper, I. Jalon, H. Wang, Z. Zada, B. Aubrey, A. Bhattacharjee,
              S. Nastase, A. Goldstein, O. Devinsky, A. Flinker, and U. Hasson
            </p>
            <p className="mt-1 text-sm text-slate-400">
              9th Annual Conference on Cognitive Computational Neuroscience,
              New York · 2026
            </p>
            <a
              href="/distributed-sensitivity.pdf"
              target="_blank"
              className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline"
            >
              View extended abstract →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Published · International Journal of Social Robotics
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">
              Examining the Potential of Social Robots to Increase Adherence in
              Internet-based CBT
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              E. A. Konijn, G. Peeper, T. Portegies, N. Garnefski, V. Kraaij, and
              S. Struijs
            </p>
            <p className="mt-1 text-sm text-slate-400">
              International Journal of Social Robotics, 18(6), 83 · 2026 · Open
              access
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
              <a
                href="https://doi.org/10.1007/s12369-026-01417-8"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-700 hover:underline"
              >
                Read the paper →
              </a>
              <a
                href="/poster.pdf"
                target="_blank"
                className="text-sm font-medium text-blue-700 hover:underline"
              >
                View ETMAAL 2024 poster →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>

        <h3 className="mt-10 text-2xl font-semibold tracking-tight">
          Research & Industry
        </h3>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  External AI Consultant & Engineer — Ayrshare
                </h3>
                <p className="mt-1 text-slate-600">London · Remote</p>
                <p className="mt-4 leading-7 text-slate-600">
                  Building Ayrshare’s data and AI recommendation pipeline, from
                  the production sync to the models and how their results are
                  served. Described under Current Work.
                </p>
              </div>
              <p className="whitespace-nowrap font-medium text-slate-500">
                2026–Present
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Research Intern & Assistant — Princeton University
                </h3>
                <p className="mt-1 text-slate-600">
                  <a
                    href="https://hassonlab.princeton.edu"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Hasson Lab
                  </a>{" "}
                  · Supervised by Prof. Uri Hasson and Dr. Itamar Jalon
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  Used machine learning to study how the brain processes and
                  represents naturalistic language, with an emphasis on
                  designing and evaluating meaningful ways to represent
                  linguistic features. Built new pipelines and features into
                  the lab’s existing Python codebase.
                </p>
              </div>
              <p className="whitespace-nowrap font-medium text-slate-500">
                2025–2026
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Summer Research Intern — Cognitive AI Lab, University of Amsterdam
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Designed and evaluated LLM vector representations of linguistic
                  features for interpretability and computational neuroscience
                  applications.
                </p>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2025
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Researcher & Coordinator — Social Robots & Student Mental Health
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Programmed humanoid robots to function as mental-health therapists.
                  Designed a study in collaboration with clinical therapists to compare
                  efficacy, alliance, and adherence to a screen-based control. Conducted
                  at VU University Amsterdam, Leiden University, and the University of
                  Amsterdam. Published in the International Journal of Social Robotics
                  in 2026.
                </p>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2023
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-14 text-2xl font-semibold tracking-tight">
          Leadership & Teaching
        </h3>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Co-Founder & President — Dutch Student Association Princeton
                </h3>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2025–2026
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  President — Dutch National Student Council
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Co-founded a national council representing students across all Dutch
                  universities; defined its mission, drafted statutes with legal experts,
                  and assembled and led a nationwide board. Engaged with senior university
                  leaders and national policymakers, including the Minister of Education,
                  supported parliamentary policy-making efforts, and gave media interviews.
                </p>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2024–2025
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  High School Teacher — JSG Maimonides
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Taught mathematics, Dutch, and English as a second language to
                  9th and 10th grade students.
                </p>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2022–2024
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Shadow Teacher / Paraprofessional
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Provided social and educational support for a student with autism.
                </p>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2022–2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              MSc Artificial Intelligence
            </h3>

            <p className="mt-2 text-slate-600">
              University of Amsterdam · 2023–2026
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              Relevant coursework: Machine, Deep & Reinforcement Learning,
              Information Retrieval, Interpretability/XAI, Natural Language
              Processing. AI Entrepreneurship: co-developed an AI-driven MVP
              with pharmacies to combat polypharmacy.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              BSc Artificial Intelligence — With Honors
            </h3>

            <p className="mt-2 text-slate-600">
              VU University Amsterdam · 2020–2023 · Minor Entrepreneurship
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              BSc Psychobiology
            </h3>

            <p className="mt-2 text-slate-600">
              University of Amsterdam · 2019–2023
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Agentic AI & MCP",
            "Recommendation Systems",
            "NLP & Large Language Models",
            "Multimodal LLM Labeling & Evaluation",
            "Deep / Machine / Reinforcement Learning",
            "Data Pipelines on Google Cloud",
            "Data Processing, Analysis & Visualization",
            "Neural Signal Processing",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-800">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Hobbies</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Piano",
            "Football",
            "Gym",
            "Ice Speedskating",
            "Running",
            "Skiing",
            "Snowboarding",
            "Swimming",
            "Tennis",
          ].map((hobby) => (
            <span
              key={hobby}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {hobby}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-3xl bg-slate-900 px-8 py-16 text-white">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Based in London. Feel free to reach out about work, research, or
            collaborations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:gidonpeeper@gmail.com"
              className="rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-200"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/gidonpeeper"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
