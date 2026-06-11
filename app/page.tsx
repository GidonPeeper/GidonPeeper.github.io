export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              AI and Neuroscience Researcher & Engineer
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Gidon Peeper
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I am motivated to use AI not just for the sake of using it, but by
              balancing stochasticity for optimization and efficiency with
              determinism for interpretable outcomes. Leveraging the theoretical
              foundation from my coursework, I have experience developing and
              integrating (agentic) AI for and into my research and work.
              Furthermore, I enjoy analyzing complex problems from multiple
              perspectives, which, along with my experience as a teacher and
              leader of student initiatives, helps me communicate outcomes with
              stakeholders from different backgrounds.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
              >
                Download CV
              </a>

              <a
                href="https://www.linkedin.com/in/gidonpeeper"
                target="_blank"
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              2026–Present
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              External AI Consultant & Engineer
            </h3>
            <p className="mt-1 text-slate-500">Ayrshare</p>
            <p className="mt-4 leading-7 text-slate-600">
              Designing and implementing a multi-modal classification, RAG, and
              recommendation pipeline. Working with the existing data warehouse,
              codebase, and MCP server.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              2025–Present
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Research Intern & Assistant
            </h3>
            <p className="mt-1 text-slate-500">
              Princeton University,{" "}
              <a
                href="https://hassonlab.princeton.edu"
                target="_blank"
                className="text-blue-700 hover:underline"
              >
                Hasson Lab
              </a>
              {" "}· Supervised by Prof. Uri Hasson and Dr. Itamar Jalon
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Leveraging AI and LLMs to enhance our understanding of how the
              brain processes and represents naturalistic language, with an
              emphasis on designing and evaluating meaningful ways to represent
              linguistic features. See the CCN extended abstracts in the
              Publications section for a sneak peek.
            </p>
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
              9th Annual Conference on Cognitive Computational Neuroscience · 2026
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Under Review · NeurIPS 2026
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">
              NeuroCast: Neural Decoding Benchmarks for Naturalistic Speech in
              Human ECoG
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Z. Paris, A. Bhattacharjee, A. L. Lee, J. Han, D. D. Han, G. Peeper,
              S. S. Z. Yang, L. Niekerken, Z. Zada, P. S. Scotti, J. Cha, U. Hasson,
              and I. Jalon
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Manuscript under review · NeurIPS 2026
            </p>
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
              9th Annual Conference on Cognitive Computational Neuroscience · 2026
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
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Under Review · SORO
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
              Manuscript under review · International Journal of Social Robotics · 2024
            </p>
            <a
              href="/poster.pdf"
              target="_blank"
              className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline"
            >
              View ETMAAL 2024 Poster →
            </a>
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
              <h3 className="text-xl font-semibold">
                External AI Consultant & Engineer — Ayrshare
              </h3>
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
                    className="text-blue-700 hover:underline"
                  >
                    Hasson Lab
                  </a>{" "}
                  · Neuroscience
                </p>
              </div>
              <p className="whitespace-nowrap font-medium text-slate-500">
                2025–Present
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
                  Amsterdam.
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
            "Agentic AI",
            "Data Processing, Analysis & Visualization",
            "Deep / Machine / Reinforcement Learning",
            "Neural Signal Processing",
            "NLP & Large Language Models",
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
            "Field Hockey",
            "Football – Princeton University Club Soccer",
            "Gym",
            "Ice Speedskating",
            "Running – 4× Half Marathon",
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
            Feel free to reach out regarding research opportunities,
            collaborations, or professional opportunities.
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
