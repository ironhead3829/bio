import Badge from "../../components/Badge";
import { FaCode } from "react-icons/fa";
import BadgeList from "../../components/BadgeList";
import BulletList from "../../components/BulletList"

export default function Apex() {
    return (
        <>
        <section id="apex-turbine" className="scroll-mt-24">
          <div className="rounded-xl border border-slate-700/70 border-l-4 border-l-sky-400 bg-slate-900/70 px-5 py-5 shadow-sm shadow-black/10 sm:px-6">
            <div className="mb-3 flex items-center gap-2 text-sky-400">
              <FaCode aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest">Professional Experience</span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  APEX Turbine Testing Technologies
                    <span className="text-lg font-normal text-white inline-block ml-2">
                      (formerly Experimental Design and Analysis Solutions, Inc)
                    </span>
                </h2>

                <p className="mt-1 font-medium text-sky-300">
                  Software Engineer
                </p>
              </div>

              <p className="text-sm text-slate-300">
                January 2015 - January 2026
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-14">
            <p className="leading-8 text-slate-300">
              During eleven years at APEX Turbine, I worked across much of the
              company&apos;s software product line rather than specializing in
              a single subsystem. My responsibilities included C++ desktop
              applications, Python applications and services, Ruby on Rails web
              development, DAQ hardware/software integration, licensing
              systems, build and release automation, database troubleshooting,
              and customer support.
            </p>

            {/* CO / SLU */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                Circumferential Optimizer & Scope Limit Utility
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Two of my first projects at APEX involved extracting existing
                engineering functionality from larger applications and turning
                it into focused standalone C++/Qt applications.
              </p>

              <div className="mt-6 space-y-8 border-l-2 border-sky-500/40 pl-5 sm:pl-6">
                <div>
                  <h4 className="font-semibold text-sky-100">
                    Circumferential Optimizer
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    I began Circumferential Optimizer during my first week at
                    APEX and completed the initial standalone application in
                    approximately one month. The underlying probe-placement
                    calculations already existed within GageMap; my work
                    focused on extracting the required functionality and
                    building the standalone application and user experience.
                  </p>

                  <BulletList>
                    <li>
                      Performed an almost complete redesign of the Qt 4.7 user
                      interface.
                    </li>
                    <li>
                      Replaced a primarily tabular presentation of calculation
                      results with an interactive graphical visualization.
                    </li>
                    <li>
                      Implemented custom visualization using QPainter.
                    </li>
                    <li>
                      Added mouse interaction for selecting and highlighting
                      regions between calculated probe angles.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Scope Limit Utility
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    Immediately after Circumferential Optimizer, I created Scope
                    Limit Utility around limit-file functionality extracted from
                    an existing Workflow application.
                  </p>

                  <BulletList>
                    <li>
                      Built the standalone C++/Qt Widgets application and its
                      table-oriented editing interface.
                    </li>
                    <li>
                      Supported importing, modifying, and exporting CSV-based
                      scope-limit definitions.
                    </li>
                    <li>
                      Later added frequency tolerance (FTOL), defining minimum
                      and maximum frequencies for the extent of limit regions.
                    </li>
                  </BulletList>
                </div>
              </div>
            </div>

            {/* DS / DR / DV */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                DS / DR / DV Product Family
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                DS, DR, and DV were separate engineering products built from a
                substantially shared C++/FLTK codebase. I maintained and
                extended shared functionality across configuration workflows,
                visualization, hardware support, licensing, and general defect
                resolution.
              </p>

              <div className="mt-6 space-y-8 border-l-2 border-sky-500/40 pl-5 sm:pl-6">
                <div>
                  <h4 className="font-semibold text-sky-100">
                    Configuration Workflow
                  </h4>

                  <BulletList>
                    <li>
                      Redesigned FLTK configuration screens used for channels,
                      amplifiers, storage, and related settings.
                    </li>
                    <li>
                      Replaced repetitive cell-by-cell configuration with
                      multi-channel selection and bulk editing through text,
                      numeric, dropdown, and other controls.
                    </li>
                    <li>
                      Added conveniences such as automatically incrementing
                      channel names that ended in a number.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Plot Visualization & Scope Limits
                  </h4>

                  <BulletList>
                    <li>
                      Extended time and magnitude plot limit visualization to
                      support FTOL frequency ranges.
                    </li>
                    <li>
                      Modified where limit regions were drawn based on configured
                      minimum and maximum frequencies.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    PowerPoint Report Generation
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    I developed functionality for automatically constructing
                    PowerPoint presentations from plot images produced by the
                    applications.
                  </p>

                  <BulletList>
                    <li>
                      Examined the internal ZIP/XML document structure of PPTX
                      files to understand the required package.
                    </li>
                    <li>
                      Implemented generation of the necessary PowerPoint/Open
                      XML package without relying on a presentation template.
                    </li>
                    <li>
                      Created and titled multiple slides and automatically
                      arranged existing plot images.
                    </li>
                    <li>
                      Packaged the generated document structure into the final
                      PPTX file.
                    </li>
                  </BulletList>
                </div>
              </div>
            </div>

            {/* DAQ */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                DAQ Hardware & Software Integration
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                I was the primary person responsible for integrating complete
                DAQ systems with APEX software. This work crossed the boundary
                between C++ application code, existing hardware plugins, vendor
                SDKs and drivers, physical hardware, signal wiring, and system
                configuration.
              </p>

              <BulletList>
                <li>
                  Maintained and modified existing C++ hardware plugins for
                  General Standards, National Instruments, VTI, and ME-CALC
                  equipment.
                </li>
                <li>
                  Fixed plugin defects, updated integrations for newer vendor
                  SDKs/drivers, and troubleshot communication from the APEX
                  application through the plugin and vendor software stack.
                </li>
                <li>
                  Assembled DAQ systems using PCI/PCIe cards, chassis and
                  modules, Ethernet and USB devices, and specialized cabling.
                </li>
                <li>
                  Built and repaired custom signal cables from hardware pinouts.
                </li>
                <li>
                  Used DMMs and signal generators for channel calibration,
                  frequency sweeps, phase verification, and acceptance testing.
                </li>
                <li>
                  Configured APEX software on customer systems, created initial
                  DS configurations, prepared systems for shipment, and
                  provided customer training and support.
                </li>
              </BulletList>
            </div>

            {/* License Manager */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                APEX License Manager
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                I designed and implemented the architecture for a centralized
                licensing system that replaced licensing logic distributed
                across individual APEX applications. FlexNet itself and an
                existing legacy C++ wrapper were pre-existing components; I
                designed and implemented the surrounding APEX system.
              </p>

              <div className="mt-6 space-y-8 border-l-2 border-sky-500/40 pl-5 sm:pl-6">
                <div>
                  <h4 className="font-semibold text-sky-100">
                    Architecture & Integration
                  </h4>

                  <BulletList>
                    <li>
                      Designed and implemented a Python daemon that served as the
                      central licensing process.
                    </li>
                    <li>
                      Designed the request/response architecture using encrypted
                      JSON messages over ZeroMQ.
                    </li>
                    <li>
                      Developed a reusable C++ licensing client used by APEX
                      applications.
                    </li>
                    <li>
                      Integrated the centralized licensing client into DX+, DS,
                      DR, DV, DX, GageMap, and GMScript.
                    </li>
                    <li>
                      Created SWIG interface files to expose the C++ FlexNet
                      wrapper to Python.
                    </li>
                    <li>
                      Developed PySide6 GUI and command-line interfaces for
                      managing the licensing system.
                    </li>
                    <li>
                      Wrote the License Manager CMake configuration from
                      scratch.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Monitoring & Recovery
                  </h4>

                  <BulletList>
                    <li>
                      Used ZeroMQ monitor sockets to detect lost client
                      connections and restore associated licenses.
                    </li>
                    <li>
                      Implemented monitoring around licensing availability and
                      daemon connectivity.
                    </li>
                    <li>
                      Implemented runtime monitoring of encrypted feature-cost
                      configuration so changes could be loaded without
                      restarting the daemon.
                    </li>
                    <li>
                      Used AI-assisted code review to identify additional failure paths in the
                      Python daemon, including malformed requests, socket-binding failures,
                      heartbeat-monitor exceptions, and shutdown cleanup.
                    </li>

                    <li>
                      Evaluated and incorporated thread-safety recommendations including
                      threading.Event for shutdown signaling and threading.Lock around shared
                      connection-list updates.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Legacy C++ Modernization
                  </h4>

                  <BulletList>
                    <li>
                      Split classes and structures accumulated in large headers
                      into more conventional .hpp / .cxx organization.
                    </li>
                    <li>
                      Replaced legacy string/token utilities with std::string
                      where appropriate.
                    </li>
                    <li>
                      Replaced a custom thread abstraction with std::thread.
                    </li>
                    <li>
                      Applied RAII, smart pointers where appropriate, lambdas,
                      STL containers and algorithms, and std::filesystem while
                      working in affected areas.
                    </li>
                  </BulletList>
                </div>
              </div>
            </div>

            {/* User Portal */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                APEX User Portal
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                I inherited an existing Ruby on Rails 4.1 customer portal after
                APEX stopped outsourcing its development. I had no previous
                Rails experience when I volunteered to take over the
                application, learned the framework while working on the
                production system, and eventually became its primary developer
                and maintainer.
              </p>

              <div className="mt-6 space-y-10 border-l-2 border-sky-500/40 pl-5 sm:pl-6">
                <div>
                  <h4 className="font-semibold text-sky-100">
                    CRM
                  </h4>

                  <BulletList>
                    <li>
                      Designed and implemented an internal CRM for tracking
                      sales opportunities and customer communications.
                    </li>
                    <li>
                      Designed ActiveRecord models, relationships, migrations,
                      controllers, and UI workflows.
                    </li>
                    <li>
                      Built interfaces using ERB, jQuery/AJAX, DataTables,
                      filtering, and modal workflows.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Inventory & Quoting
                  </h4>

                  <BulletList>
                    <li>
                      Designed and implemented inventory and quoting systems,
                      including models, relationships, migrations, controllers,
                      business logic, and UI.
                    </li>
                    <li>
                      Supported individual items and reusable assemblies with
                      components and quantities.
                    </li>
                    <li>
                      Designed quote-item snapshots so quote-specific changes
                      did not alter inventory records and historical quotes
                      remained stable.
                    </li>
                    <li>
                      Supported sections/subquotes, quantities, discounts,
                      markups, subtotals, and overall quote totals.
                    </li>
                    <li>
                      Generated Excel output with axlsx and designed PDF output
                      using prawn and prawn-table.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Timekeeping & PTO
                  </h4>

                  <BulletList>
                    <li>
                      Designed and built an internal timekeeping and PTO system
                      around the company&apos;s twice-monthly pay periods.
                    </li>
                    <li>
                      Calculated working hours and prevented entered date ranges
                      from crossing pay-period boundaries.
                    </li>
                    <li>
                      Managed annual PTO allocations and administrative
                      approval/rejection workflows.
                    </li>
                    <li>
                      Used Action Mailer and SendGrid for PTO approval requests
                      and notifications.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Licensing & OpenCode
                  </h4>

                  <BulletList>
                    <li>
                      Maintained and extended the portal&apos;s standard FlexNet
                      license-generation workflow.
                    </li>
                    <li>
                      Designed and implemented the portal side of customer
                      OpenCode activation and deactivation.
                    </li>
                    <li>
                      Integrated a coworker-provided request parser and
                      FlexNet&apos;s responsegen utility.
                    </li>
                    <li>
                      Generated required XML/supporting files and managed
                      available and consumed license counts.
                    </li>
                    <li>
                      Used Ruby Open3 to execute external tools, capture output
                      and status, and manage temporary processing directories.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Support API Integration
                  </h4>

                  <BulletList>
                    <li>
                      Created versioned REST APIs connecting customer support
                      requests with internal development systems.
                    </li>
                    <li>
                      Built a v1 integration with GitLab issues and webhooks.
                    </li>
                    <li>
                      Later created a v2 API for equivalent integration with
                      Azure DevOps/Azure Repos.
                    </li>
                    <li>
                      Synchronized issue state, priority, and selected comments
                      between internal systems and the customer portal.
                    </li>
                  </BulletList>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Portal Modernization & Database Work
                  </h4>

                  <BulletList>
                    <li>
                      Incrementally upgraded the application from Rails 4.1
                      through Rails 6.0.
                    </li>
                    <li>
                      Worked with an outside developer on the MariaDB to
                      PostgreSQL migration, including jointly developing a Bash
                      data-migration script.
                    </li>
                    <li>
                      Used direct SQL for troubleshooting and data correction,
                      including joins, filtering, aggregations, and updates.
                    </li>
                    <li>
                      Identified and corrected ActiveRecord N+1 queries using
                      Bullet and eager loading where appropriate.
                    </li>
                    <li>
                      Collaborated on migration of the production application
                      from Rackspace/CentOS to Docker and Azure.
                    </li>
                  </BulletList>
                </div>
              </div>
            </div>

            {/* Build / Release */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                Build, Release & Documentation Automation
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                My APEX responsibilities also included maintaining and
                improving systems used to build, package, sign, document, and
                release software across Windows and Linux.
              </p>

              <BulletList>
                <li>
                  Maintained CMake build definitions, including sources,
                  dependencies, compiler/linker options, install rules, and
                  platform-specific behavior.
                </li>
                <li>
                  Co-developed a Python/Typer command-line build tool for
                  configuration, compilation, signing, staging, and packaging.
                </li>
                <li>
                  Created complete Azure Pipeline configurations and maintained
                  existing Azure and GitLab CI pipelines.
                </li>
                <li>
                  Developed and modified Qt Installer Framework package
                  definitions, components, installer pages/actions, and
                  platform-specific installation behavior.
                </li>
                <li>
                  Automated artifact creation, installer generation, signing,
                  and release workflows.
                </li>
                <li>
                  Migrated approximately 30% of company repositories from
                  GitLab to Azure DevOps, including Git history and associated
                  pipelines.
                </li>
                <li>
                  Created Azure Pipelines that built Sphinx documentation
                  written in reStructuredText and deployed generated static
                  documentation sites to Azure.
                </li>
              </BulletList>
            </div>

            {/* Additional Engineering */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                Additional Applications & Engineering Work
              </h3>

              <div className="mt-6 space-y-8 border-l-2 border-sky-500/40 pl-5 sm:pl-6">
                <div>
                  <h4 className="font-semibold text-sky-100">
                    DAQ+ Viewer
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    Built the initial DAQ+ Viewer application from scratch,
                    following styling established by the larger DAQ+ project.
                    The frontend was primarily QML/JavaScript, obtained data
                    through WebSockets and REST endpoints, and displayed data
                    using QML Charts.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Internal License File Generator
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    Created a Python/PySide6 desktop application that replaced
                    manually constructing FlexNet license files in a text
                    editor. The application provided structured inputs,
                    configurable customer/user lists, review before signing,
                    and integration with the FlexNet-provided signing utility.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    Dewesoft Binary Writer
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    Implemented a C++ Dewesoft binary-file writer using the
                    published format specification and example code, deriving
                    it from APEX&apos;s existing file-writer framework and
                    validating generated files with Dewesoft software.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sky-100">
                    QR Code Utility
                  </h4>

                  <p className="mt-2 leading-8 text-slate-300">
                    Created a small internal Python/PySide6 GUI using the qrcode
                    module to generate QR codes for website and portal links
                    used in sales and conference material.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Practices */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white before:h-5 before:w-1 before:shrink-0 before:rounded-full before:bg-sky-400">
                Software Engineering Practices
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Across the APEX product line, I regularly worked with
                object-oriented C++ designs, large existing codebases,
                cross-platform development, difficult debugging problems, peer
                review, customer support, and informal mentoring.
              </p>

              <div className="mt-6 border-l-2 border-sky-500/40 pl-5 sm:pl-6">
                <h4 className="font-semibold text-sky-100">
                  AI-Assisted Development
                </h4>

                <p className="mt-2 leading-8 text-slate-300">
                  I incorporated GitHub Copilot into my development workflow for
                  navigating large codebases, investigating defects, researching
                  unfamiliar APIs, reviewing and refactoring code, reducing repetitive
                  work, and exploring implementation approaches.
                </p>

                <BulletList>
                  <li>
                    Used AI-assisted repository search to locate relevant code in large,
                    established applications, either beginning with suspected classes
                    and files or searching across the codebase when the implementation
                    location was unknown.
                  </li>

                  <li>
                    Used AI to navigate large, unfamiliar areas of existing codebases, trace
                    data and application behavior across related classes, and understand
                    existing implementation patterns when developing new features.
                  </li>

                  <li>
                    Rejected AI-generated approaches when they relied on incorrect assumptions,
                    using the surrounding code and system behavior to guide further investigation.
                  </li>
                  
                  <li>
                    Used AI-assisted review for refactoring tasks such as breaking up
                    large functions, extracting duplicated logic, reducing repeated code,
                    and consolidating constants scattered across multiple files.
                  </li>

                  <li>
                    Independently evaluated AI recommendations by examining surrounding
                    code and execution paths, consulting documentation, compiling and
                    running changes, reproducing problems, exercising affected
                    functionality, and benchmarking performance-related changes when
                    appropriate.
                  </li>
                </BulletList>
              </div>              

              <BulletList>
                <li>
                  Used GDB, Valgrind, stack traces/backtraces, breakpoints,
                  diagnostic output, source analysis, and vendor documentation
                  to investigate defects.
                </li>
                <li>
                  Developed routinely on Windows and Linux and handled
                  platform-specific libraries, filesystem behavior, process
                  launching, environment variables, and OS APIs.
                </li>
                <li>
                  Used Linux command-line tools and shell scripting for file
                  manipulation, troubleshooting, and automation.
                </li>
                <li>
                  Performed peer merge-request reviews for correctness,
                  maintainability, design issues, and potential defects.
                </li>
                <li>
                  Informally mentored junior developers and interns in C++,
                  Python, Qt, debugging, and working within the existing
                  codebase.
                </li>
                <li>
                  Worked directly with customers to reproduce problems, gather
                  diagnostic information, explain resolutions, and clarify
                  feature requests.
                </li>
              </BulletList>
            </div>

            <BadgeList>
              <Badge>C++</Badge>
              <Badge>Python</Badge>
              <Badge>Qt</Badge>
              <Badge>QML</Badge>
              <Badge>FLTK</Badge>
              <Badge>Ruby on Rails</Badge>
              <Badge>JavaScript</Badge>
              <Badge>jQuery</Badge>
              <Badge>SQL</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>MariaDB</Badge>
              <Badge>ZeroMQ</Badge>
              <Badge>SWIG</Badge>
              <Badge>FlexNet</Badge>
              <Badge>CMake</Badge>
              <Badge>Git</Badge>
              <Badge>GitLab</Badge>
              <Badge>Azure DevOps</Badge>
              <Badge>Azure Pipelines</Badge>
              <Badge>Docker</Badge>
              <Badge>Linux</Badge>
              <Badge>Windows</Badge>
              <Badge>Bash</Badge>
              <Badge>REST APIs</Badge>
              <Badge>WebSockets</Badge>
              <Badge>CI/CD</Badge>
            </BadgeList>
          </div>
        </section>
        </>
    );
}
