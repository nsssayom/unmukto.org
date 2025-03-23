import { AnimatedTitle, AnimatedText, AnimatedCard, AnimatedSection } from "./components/AnimatedComponents";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-xl font-bold gradient-text">
            Unmukto.org
          </a>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm hover:text-[rgb(var(--primary))] transition-all">
              Projects
            </a>
            <a 
              href="https://github.com/nsssayom/obadh_engine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary !py-2"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <AnimatedTitle>
                    <span className="gradient-text">Open Source</span> Bengali Computing
                  </AnimatedTitle>
                  <AnimatedText>
                    A community-driven initiative developing modern tools for Bengali language computing. Current focus: high-performance text input engine with Avro Phonetic layout support.
                  </AnimatedText>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a href="#projects" className="btn-primary">
                    View Projects
                  </a>
                  <a 
                    href="https://github.com/nsssayom/obadh_engine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
                <div className="card p-8 animate-float">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <pre>
                    <code>
                      {`// Modern Bengali text input
use obadh::Engine;

fn main() {
    let engine = Engine::new();
    let bengali = engine.convert(
        "ami banglay gan gai"
    );
    println!("{}", bengali);
    // Output: আমি বাংলায় গান গাই
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-[rgb(var(--primary))/10 text-[rgb(var(--primary))] text-sm font-medium mb-4">
                Active Projects
              </span>
              <h2 className="text-3xl font-bold mb-4 font-display">
                Current Development
              </h2>
              <p className="text-[rgb(var(--text-secondary))]">
                Open-source tools focused on performance and standards compliance
              </p>
            </div>

            <AnimatedCard>
              <div className="card overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-2xl font-bold font-display gradient-text">Obadh</h3>
                        <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))/10 text-[rgb(var(--primary))] text-xs font-medium">
                          Active Development
                        </span>
                      </div>
                      <p className="text-[rgb(var(--text-secondary))] mb-8 leading-relaxed">
                        A Rust-based implementation of the Avro Phonetic keyboard layout. Features include:
                        - Optimized text processing engine
                        - Full Unicode compliance
                        - Customizable phonetic rules
                        - Cross-platform compatibility
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-[rgb(var(--text-secondary))]">
                          <div className="p-2 rounded-lg bg-[rgb(var(--primary))/10">
                            <svg className="w-4 h-4 text-[rgb(var(--primary))]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          High-performance Rust implementation
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[rgb(var(--text-secondary))]">
                          <div className="p-2 rounded-lg bg-[rgb(var(--primary))/10">
                            <svg className="w-4 h-4 text-[rgb(var(--primary))]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          Linguistically accurate transliteration
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="https://github.com/nsssayom/obadh_engine"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          View Source
                        </a>
                        <a 
                          href="http://sayom.me/obadh_engine"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          Try Demo
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="card p-6 bg-gray-50 dark:bg-gray-800/50">
                        <pre className="!bg-transparent !p-0 !border-0">
                          <code>
                            {`// Interactive demo
let input = "ami banglay gan gai";
let output = obadh::convert(input);
// Output: আমি বাংলায় গান গাই

// Advanced usage
let options = Options {
    smart_quote: true,
    auto_correct: true
};
let enhanced = obadh::convert_with_options(
    input, 
    options
);`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              © {new Date().getFullYear()} Unmukto.org. Building open-source solutions for Bengali computing.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/nsssayom/obadh_engine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
