import heroBanner from "../assets/hero.svg";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden border-b border-slate-800/80 bg-slate-950/70">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <div className="relative mx-auto w-full max-w-7xl px-6 py-8 md:py-12">
                <div className="overflow-hidden rounded-2xl border border-sky-400/20 bg-slate-900/60 p-3 shadow-[0_24px_80px_-35px_rgba(14,165,233,0.4)] sm:p-5">
                    <img src={heroBanner} alt="Jason Tunstill - Software Engineer" className="block h-auto w-full" />
                </div>
            </div>
        </section>
    );
}
