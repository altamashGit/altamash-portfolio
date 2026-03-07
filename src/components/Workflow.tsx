import React from 'react';
import { motion } from 'motion/react';
import { GitBranch, Box, Server, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control",
      desc: "Code pushed to GitHub triggers automated workflows.",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "CI/CD Pipeline",
      desc: "Jenkins or GitHub Actions builds and tests the application.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Containerization",
      desc: "Docker images are created and pushed to ECR or Docker Hub.",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Deployment",
      desc: "Automated deployment to AWS (EC2, ECS, or Kubernetes).",
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            DevOps <span className="text-gradient">Workflow</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            My systematic approach to software delivery, ensuring reliability and speed through automation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-2xl ${step.bg} border border-white/5 flex items-center justify-center ${step.color} mb-6 relative`}>
                  {step.icon}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center text-[10px] font-bold text-white">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
                
                {idx < steps.length - 1 && (
                  <div className="mt-6 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-neutral-800 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass-card border-emerald-500/20 bg-emerald-500/5 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-black shrink-0">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Continuous Improvement Philosophy</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I believe in the "You build it, you run it" mindset. By integrating security (DevSecOps) and monitoring 
                into every stage of the pipeline, I ensure that infrastructure is not just deployed, but resilient and observable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
