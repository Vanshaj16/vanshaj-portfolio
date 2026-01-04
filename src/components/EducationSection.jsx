import { Calendar, GraduationCap, Trophy } from "lucide-react"
export const EducationSection = () => {
    return (
        <section 
            id="education"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 text-center">Education</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Building a strong foundation in Computer Science and Engineering
                </p>
                <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 mb-8 mt-8">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-10 w-10 text-primary animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-2xl mb-2">Bachelor of Engineering - Computer Science</h4>
                                    <h4 className="font-semibold text-primary text-lg mb-3">Chandigarh University</h4>
                                    <div className="flex items-center space-x-10 mb-3 text-sm text-muted-foreground">
                                        <div className="flex items-center text-lg gap-2">
                                            <div className="p-3 rounded-full bg-primary/10">
                                                <Calendar className="text-primary w-5 h-5" />
                                            </div>
                                            Expected Graduation: June 2027
                                        </div>
                                        <div className="flex items-center text-lg gap-2">
                                            <div className="p-3 rounded-full bg-primary/10">
                                                <Trophy className="text-primary w-5 h-5" />
                                            </div>
                                            CGPA: 8.36
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Pursuing a comprehensive education in Computer Science with focus on software engineering, artificial intelligence, and web technologies. Actively participating in hackathons and competitive programming to apply theoretical knowledge in practical scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </section>
    )
}