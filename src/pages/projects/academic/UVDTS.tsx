import { FaMicrochip } from "react-icons/fa";
import Badge from "../../../components/Badge";
import BadgeList from "../../../components/BadgeList";
import BulletList from "../../../components/BulletList";

interface ClassProps {
    projectHeaderClass: string;
    projectClass: string;
}

export default function UVDTS({projectHeaderClass, projectClass}: ClassProps) {
    return (
        <>
            <article className={projectClass}>
                <div className={projectHeaderClass}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">
                        Universal Variable Differential Transformer
                        Simulator
                    </h3>

                    <span className="self-start rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                        Senior Design Capstone · UAH · 2014
                    </span>
                </div>
                </div>

                <p className="mt-5 leading-8 text-slate-300">
                    A two-semester, three-person Computer Engineering
                    senior design project to develop a proof-of-concept
                    lower-cost method of simulating LVDT and RVDT
                    signals for development and testing. The prototype
                    combined analog circuitry, data conversion, an
                    Arduino Uno, and signal-processing firmware.
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                    I was responsible for the hardware design and
                    implementation. My work covered the analog signal
                    path from the input conditioning circuitry through
                    data conversion, filtering, amplification, and the
                    output circuitry.
                </p>

                <BulletList>
                    <li>
                        Selected components and designed the signal
                        conditioning, ADC interface, DAC approach,
                        filters, transformer stages, op-amp circuits,
                        voltage dividers, amplifiers, and supporting
                        circuitry.
                    </li>
                    <li>
                        Performed the analog circuit calculations and
                        used ModelSim to simulate the complete signals
                        entering and leaving the Arduino portion of the
                        design.
                    </li>
                    <li>
                        Assembled the proof-of-concept hardware on
                        breadboards and tested and troubleshot it using
                        an oscilloscope and multimeter.
                    </li>
                    <li>
                        Worked with the firmware developer on
                        hardware/software integration and reviewed
                        implementation changes as the team addressed
                        sampling and throughput limitations.
                    </li>
                    <li>
                        Prepared the final technical report and user
                        manual from the team's collected design and test
                        information and created the circuit schematics
                        and system diagrams.
                    </li>
                </BulletList>

                <div className="mt-6 rounded-lg border border-sky-900/60 bg-slate-900/60 p-5 sm:p-6">
                    <h4 className="flex items-center gap-2 font-semibold text-slate-100">
                        <FaMicrochip className="text-sky-400" aria-hidden="true" />
                        Alternative Architecture
                    </h4>

                    <p className="mt-3 leading-8 text-slate-300">
                        After encountering throughput constraints in the
                        implemented architecture, I proposed a
                        conceptual alternative that preserved the AC
                        waveform in the analog signal path. In-phase and
                        inverted versions of the reference signal would
                        be scaled with digitally controlled
                        potentiometers and recombined with a summing
                        amplifier, leaving the microcontroller
                        responsible for controlling the potentiometers
                        rather than continuously reconstructing the
                        waveform.
                    </p>

                    <p className="mt-5 leading-8 text-slate-300">
                        The concept was not prototyped or validated, but
                        it represented a different approach to the
                        performance problem: simplifying the
                        architecture to remove processing from the
                        critical signal path rather than continuing to
                        optimize around the constraint.
                    </p>
                </div>

                <BadgeList>
                    <Badge>Analog Circuit Design</Badge>
                    <Badge>Arduino</Badge>
                    <Badge>ADC / DAC</Badge>
                    <Badge>ModelSim</Badge>
                    <Badge>Oscilloscope</Badge>
                    <Badge>Hardware Integration</Badge>
                    <Badge>Technical Documentation</Badge>
                </BadgeList>
            </article>
        </>
    );
}
