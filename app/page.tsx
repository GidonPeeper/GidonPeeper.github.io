export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              AI & Neuroscience Researcher
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Gidon Peeper
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              MSc Artificial Intelligence student at the University of Amsterdam,
              currently conducting research at Princeton University's Hasson Lab.
              My work focuses on computational neuroscience, natural language
              processing, and interpretable machine learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
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

      {/* Research */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          Current Research
        </h2>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">
            Research Intern & Assistant — Princeton University,{" "}
            <a
              href="https://hassonlab.princeton.edu"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              Hasson Lab
            </a>
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Conducting research at the intersection of artificial intelligence,
            neuroscience, and language. My work focuses on how naturalistic
            language is processed and represented in the human brain using ECoG
            neural recordings and computational language models, with an emphasis
            on designing and evaluating meaningful ways to represent linguistic
            features.
            We are currently preparing a manuscript, but a sneak peek of some of our preliminary results can be found in{" "}
            <a
              href="/ccn-abstract-formatting.pdf"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              this CCN extended abstract
            </a>
            .
          </p>

          
        </div>
      </section>

      {/* Experience */}
      
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        
        <h3 className="mt-10 text-2xl font-semibold tracking-tight">
          Academic Experience
        </h3>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Research Intern — Princeton University
                </h3>

                <p className="mt-2 text-slate-600">
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
        
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Research Internship — Cognitive AI Lab, University of Amsterdam
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Conducted research on causal probing of large language models,
                  critically evaluating concept erasure methods for linguistic
                  interpretability and computational neuroscience applications.
                </p>
              </div>

              <p className="font-medium text-slate-500">
                2025
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  Social Robots & Student Mental Health
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Bachelor thesis project conducted at VU University Amsterdam and
                  the University of Amsterdam, examining the role of social robots
                  in supporting students with mood problems. Manuscript currently
                  under review at the International Journal of Social Robotics (SORO).
                </p>

                <a
                  href="/poster.pdf"
                  target="_blank"
                  className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
                >
                  View ETMAAL 2024 Poster →
                </a>
              </div>

              <p className="whitespace-nowrap font-medium text-slate-500">
                2023–2024
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-14 text-2xl font-semibold tracking-tight">
          Leadership & Teaching
        </h3>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold">
                Co-Founder & President - Dutch Student Association Princeton
              </h3>

              
            </div>

            <p className="whitespace-nowrap font-medium text-slate-500">
              2025–2026
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold">
                Co-Founder & President — Dutch-Jewish Student Council (NJSO)
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Co-founded a national council representing Jewish students at
                Dutch universities. Defined the mission and vision of the
                organization and co-authored its statutes together with legal
                experts and senior community advisors.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Built and led a nationwide student board with the goal of
                promoting a university climate in which students feel welcome,
                respected, and safe. Met with university presidents, members of
                parliament, and the Dutch Minister of Education to discuss issues
                relating to antisemitism and student safety.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Participated in the national taskforce combatting antisemitism
                and gave anonymous interviews to Dutch media outlets for safety
                reasons.
              </p>
            </div>

            <p className="whitespace-nowrap font-medium text-slate-500">
              2024–2025
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
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

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold">
                Shadow Teacher / Paraprofessional
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Provided social and educational support for a student with
                autism.
              </p>
            </div>

            <p className="whitespace-nowrap font-medium text-slate-500">
              2022–2024
            </p>
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
              University of Amsterdam · Current
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              BSc Artificial Intelligence
            </h3>

            <p className="mt-2 text-slate-600">
              VU University Amsterdam · Honors
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              BSc Psychobiology 
            </h3>

            <p className="mt-2 text-slate-600">
              University of Amsterdam · Minor Entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Deep / Machine / Reinforcement Learning",
            "NLP & Large Language Models",
            "Neural Signal Processing",
            "Data Processing, Analysis & Visualization",
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
        <h2 className="text-3xl font-bold tracking-tight">
          Hobbies 
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Piano",
            "Football - Princeton University Club Soccer",
            "Gym",
            "Ice Speedskating",
            "Running - Princeton & Brooklyn Half Marathons",
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
          <h2 className="text-3xl font-bold tracking-tight">
            Contact
          </h2>

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
