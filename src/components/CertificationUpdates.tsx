import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Clock, GraduationCap } from 'lucide-react';
import { CONFIG } from '../config';

interface CertificationUpdate {
  id: number;
  title: string;
  description: string;
}

const CertificationUpdates = () => {
  const [certs, setCerts] = useState<CertificationUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCerts = async () => {
      const loadedCerts: CertificationUpdate[] = [];
      
      // Fetch all possible certs within the limit
      const fetchPromises = [];
      for (let i = 1; i <= CONFIG.MAX_UPDATES; i++) {
        fetchPromises.push(
          fetch(`${CONFIG.CERT_UPDATES_PATH}${CONFIG.CERT_UPDATES_PREFIX}${i}.txt`)
            .then(async (response) => {
              if (!response.ok) return null;
              const text = await response.text();
              
              const lines = text.split('\n');
              let title = '';
              let description = '';
              let currentSection = '';

              lines.forEach(line => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('Title:')) {
                  title = trimmedLine.replace('Title:', '').trim();
                } else if (trimmedLine.startsWith('Description:')) {
                  currentSection = 'desc';
                  description = trimmedLine.replace('Description:', '').trim();
                } else if (trimmedLine !== '') {
                  if (currentSection === 'desc') description += ' ' + trimmedLine;
                }
              });

              if (title || description) {
                return {
                  id: i,
                  title: title,
                  description: description.trim()
                };
              }
              return null;
            })
            .catch(() => null)
        );
      }
      
      const results = await Promise.all(fetchPromises);
      const validCerts = results.filter((cert): cert is CertificationUpdate => cert !== null);
      
      // Sort by ID descending (Most Recent First)
      setCerts(validCerts.sort((a, b) => b.id - a.id));
      setLoading(false);
    };

    fetchCerts();
  }, []);

  if (loading) return null;
  if (certs.length === 0) return null;

  return (
    <div className="mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
          <Award className="w-6 h-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Certification <span className="text-gradient">Updates</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 border-emerald-500/10 hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <GraduationCap className="w-3 h-3" />
              <span>New Certification</span>
            </div>
            
            {cert.title && (
              <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
            )}
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationUpdates;
