import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Lightbulb, GraduationCap, Award } from 'lucide-react';

import CertificationUpdates from './CertificationUpdates';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I am an <span className="text-white font-medium">AWS Certified Solutions Architect (Associate)</span> with a deep focus on cloud-native DevOps practices. 
                My journey in tech is driven by a fascination for automation and the challenge of building infrastructure that scales seamlessly.
              </p>
              <p>
                With hands-on experience in deploying scalable applications on AWS using EC2, VPC, and S3, I've developed a strong foundation in 
                containerization with Docker, CI/CD pipelines with Jenkins, and orchestration with Kubernetes.
              </p>
              <p>
                My philosophy is centered around <span className="text-emerald-400 italic">"Infrastructure as Code"</span> and 
                <span className="text-blue-400 italic"> "Automation First"</span>. I believe that a well-architected system is one that is 
                observable, repeatable, and secure by design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 glass-card border-white/5">
                <GraduationCap className="w-8 h-8 text-emerald-500 mb-4" />
                <h4 className="text-white font-bold mb-1">Education</h4>
                <p className="text-xs text-gray-500">Bachelor of Commerce<br/>Doranda College, Ranchi University</p>
              </div>
              <div className="p-6 glass-card border-white/5">
                <Award className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-white font-bold mb-1">Certification</h4>
                <p className="text-xs text-gray-500">AWS Solutions Architect Associate (SAA-C03)</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 glass-card border-white/5 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Career Focus</h3>
              <p className="text-sm text-gray-500">Specializing in Cloud Infrastructure, DevOps Automation, and Site Reliability Engineering.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 glass-card border-white/5 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mindset</h3>
              <p className="text-sm text-gray-500">Continuous learner, problem solver, and community volunteer at TrainWithShubham.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 glass-card border-white/5 flex flex-col items-center text-center md:col-span-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Community Involvement</h3>
              </div>
              <p className="text-sm text-gray-500">
                Volunteer at <span className="text-emerald-400">TrainWithShubham Community</span>. 
                Assisting with live sessions and engaging learners in DevOps, Kubernetes, and AWS.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Certification Updates Section */}
        <CertificationUpdates />
      </div>
    </section>
  );
};

export default About;
