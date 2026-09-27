import heroBanner from "../assets/hero.svg"

export default function Hero() {
    return (
        <>
            <section className="w-full bg-slate-950">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <img
                        src={heroBanner}
                        alt="Jason Tunstill - Software Engineer"
                    />
                </div>
            </section>
        </>
    );
}
