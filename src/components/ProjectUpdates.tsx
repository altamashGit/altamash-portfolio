import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Clock, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

interface ProjectUpdate {
  id: number;
  title: string;
  description: string;
  technologies: string;
}

const ProjectUpdates = () => {
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      const loadedUpdates: ProjectUpdate[] = [];
      
      // Fetch all possible updates within the limit
      const fetchPromises = [];
      for (let i = 1; i <= CONFIG.MAX_UPDATES; i++) {
        fetchPromises.push(
          fetch(`${CONFIG.PROJECT_UPDATES_PATH}${CONFIG.PROJECT_UPDATES_PREFIX}${i}.txt`)
            .then(async (response) => {
              if (!response.ok) return null;
              const text = await response.text();
              
              const lines = text.split('\n');
              let title = '';
              let description = '';
              let technologies = '';
              let currentSection = '';

              lines.forEach(line => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('Project:')) {
                  title = trimmedLine.replace('Project:', '').trim();
                } else if (trimmedLine.startsWith('Description:')) {
                  currentSection = 'desc';
                } else if (trimmedLine.startsWith('Technologies:')) {
                  currentSection = 'tech';
                } else if (trimmedLine !== '') {
                  if (currentSection === 'desc') description += trimmedLine + ' ';
                  if (currentSection === 'tech') technologies += trimmedLine + ' ';
                }
              });

              if (title || description) {
                return {
                  id: i,
                  title: title,
                  description: description.trim(),
                  technologies: technologies.trim()
                };
              }
              return null;
            })
            .catch(() => null)
        );
      }
      
      const results = await Promise.all(fetchPromises);
      const validUpdates = results.filter((update): update is ProjectUpdate => update !== null);
      
      // Sort by ID descending (Most Recent First)
      setUpdates(validUpdates.sort((a, b) => b.id - a.id));
      setLoading(false);
    };

    fetchUpdates();
  }, []);

  if (loading) return null;
  if (updates.length === 0) return null;

  return (
    <div className="mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Project <span className="text-gradient">Updates</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {updates.map((update, idx) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 border-blue-500/10 hover:border-blue-500/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-blue-400 uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              <span>Latest Update</span>
            </div>
            
            {update.title && (
              <h3 className="text-xl font-bold text-white mb-3">{update.title}</h3>
            )}
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {update.description}
            </p>
            
            {update.technologies && (
              <div className="pt-4 border-t border-dark-border">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <FileText className="w-3 h-3" />
                  <span>{update.technologies}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectUpdates;
