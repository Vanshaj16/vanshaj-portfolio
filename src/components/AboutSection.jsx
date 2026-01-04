import { Code, User, Briefcase } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import resumePdf from "@/assets/Vanshaj_Resume.pdf";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <br/>
                <br/>
                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center md:justify-start">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full" aria-hidden />
                                <div className="relative w-60 h-60 sm:w-70 sm:h-70 rounded-full overflow-hidden border border-primary shadow-lg">
                                    <div className="relative w-60 h-60 sm:w-70 sm:h-70 rounded-full overflow-hidden border border-white/10 shadow-lg">
                                        <img src={profileImg} alt="Vanshaj portrait" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                            <p className="text-muted-foreground">
                                I'm a passionate Computer Science Engineering student at Chandigarh University, graduating in 2027. My journey in tech is fueled by curiosity and a drive to build meaningful digital experiences, especially in full-stack web development.
                            </p>
                            <p className="text-muted-foreground">
                                Proficient in MERN stack, PHP, and C++, I thrive on solving complex problems and continuously enhancing my skills. Beyond coding, I enjoy exploring AI advancements and engaging in competitive programming.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Get in Touch
                                </a>
                                <a href={resumePdf} download className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                    Download Resume
                                </a>
                            </div>
                        </div>
                </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Skilled in building end-to-end web applications using MERN Stack and PHP. I enjoy turning ideas into functional products — from designing intuitive interfaces with React.js and Bootstrap to developing secure backend systems using Node.js, Express, and MySQL/MongoDB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Structures & Algorithms (C++)</h4>
                                    <p className="text-muted-foreground">
                                        Strong foundation in problem-solving using C++, with knowledge of arrays, linked lists, stacks, queues, recursion, graphs, and time-complexity analysis. I constantly practice DSA to sharpen analytical thinking and write optimized, efficient code.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Familiar with ML concepts and libraries such as NumPy, Pandas, Matplotlib, and Seaborn. I enjoy exploring how AI can enhance software — from intelligent search features to data-driven decision-making — and continue to build skills through projects and learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                
                    </div>
                </div>
            </div>
        </section>
    )
};