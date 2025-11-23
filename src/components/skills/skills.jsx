export function Skills() {
    return (
        <section className="mt-4 skills-section w-full flex flex-col items-start justify-start text-left px-4">
            <h2 className="text-4xl font-bold mb-6">Skills</h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3">Frontend</h3>
                    <ul className="list-disc list-inside text-lg space-y-1">
                        <li>React (hooks, context)</li>
                        <li>HTML & CSS, Tailwind CSS</li>
                        <li>JavaScript / TypeScript</li>
                    </ul>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3">Backend</h3>
                    <ul className="list-disc list-inside text-lg space-y-1">
                        <li>Node.js & Express</li>
                        <li>RESTful APIs & GraphQL</li>
                        <li>Authentication & Authorization</li>
                    </ul>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3">Database</h3>
                    <ul className="list-disc list-inside text-lg space-y-1">
                        <li>MongoDB & Mongoose</li>
                        <li>PostgreSQL & SQL</li>
                        <li>Redis / Caching</li>
                    </ul>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3">Testing</h3>
                    <ul className="list-disc list-inside text-lg space-y-1">
                        <li>Jest & React Testing Library</li>
                        <li>Cypress for E2E</li>
                        <li>Unit & Integration testing</li>
                    </ul>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3">Tools</h3>
                    <ul className="list-disc list-inside text-lg space-y-1">
                        <li>Git & GitHub</li>
                        <li>Docker, Vite</li>
                        <li>CI / CD basics</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}