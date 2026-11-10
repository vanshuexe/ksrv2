import React from 'react';
import { ONGOING_PROJECTS } from '../data/content';
import { OngoingProject } from '../types';
import { ArrowRight, ArrowUpRight, CircleCheck, Clock3, Lightbulb, FolderOpen } from 'lucide-react';

interface ProjectPortfolioProps {
  onSelectProject: (project: OngoingProject) => void;
}

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({
  onSelectProject,
}) => {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-[#0b0b0b] border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-end mb-10">
          <div className="max-w-xl">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#c59b4e] mb-3">
              Project portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Our Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
            This portfolio will present authorized projects across KSR Groups' business areas, from real estate and civil infrastructure to agro-processing and industrial development. Each published profile will include the project name, location, scope, relevant products or services, current status and photographs approved for sharing. Completed, ongoing and proposed work will be clearly distinguished, with details added only after they have been verified.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: 'Proposed',
              description: 'Opportunities under consideration, subject to feasibility, approvals, finance and agreed terms.',
              Icon: Lightbulb,
            },
            {
              title: 'Ongoing',
              description: 'Work in progress, with status shared only after it has been confirmed.',
              Icon: Clock3,
            },
            {
              title: 'Completed',
              description: 'Finished work, with scope and images published only when approved for sharing.',
              Icon: CircleCheck,
            },
          ].map(({ title, description, Icon }) => (
            <div key={title} className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-[#111] p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c59b4e]/10 text-[#c59b4e]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
                <p className="text-xs leading-relaxed text-neutral-400">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {ONGOING_PROJECTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ONGOING_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-[#151515] rounded-xl p-7 border border-neutral-700 shadow-2xs hover:border-[#c59b4e]/70 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 group-hover:text-[#c59b4e] transition-colors">
                    PRJ / 0{idx + 1}
                  </span>
                  <span className="text-neutral-500 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white tracking-tight mb-1.5 group-hover:text-[#c59b4e] transition-colors">
                  {project.name}
                </h3>

                <div className="text-xs font-semibold text-neutral-400 mb-4">
                  {project.category}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-700 flex items-center justify-between text-xs">
                <span className="text-amber-300 font-medium">
                  {project.status}
                </span>
                <span className="text-[11px] font-bold text-[#c59b4e]">
                  View
                </span>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl border border-neutral-700 bg-gradient-to-r from-[#171717] to-[#111] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#c59b4e]">
                <FolderOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Project profiles are being prepared</h3>
                <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
                  Verified project details, locations, status updates and approved photographs will appear here as they are ready to share.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e2bd76] hover:text-white transition-colors"
            >
              Enquire about a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
