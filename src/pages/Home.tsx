import Hero from "../components/Hero";

export default function Home() {
    return(
        <>
            <Hero />

            <section className="mx-auto w full max-w-7xl px-6 py-0">

                <p className="mt-4 text-slate-400">
                    I'm Jason Tunstill, a senior software engineer with more than 11 years of experience building and supporting
                    production software across desktop, backend, web, and engineering systems. My primary background is in C++,
                    Python, Qt, and Ruby on Rails, with experience spanning cross-platform applications, real-time data acquisition,
                    REST APIs, hardware integration, CI/CD, and system design and integration.
                </p>

                <p className="mt-4 text-slate-400">
                    I enjoy solving complex technical problems, modernizing legacy systems, and building software that is reliable
                    and maintainable. I'm also expanding my frontend experience with React and modern JavaScript—including building
                    this website as a React application.
                </p>

                <p className="mt-4 text-slate-400">
                    Please feel free to explore this site to learn more about my experience, projects, and technical background.
                </p>
                
            </section>
        </>
    );
}
