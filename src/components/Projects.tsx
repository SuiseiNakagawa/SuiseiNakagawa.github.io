import Image from 'next/image'
import { ExternalLink, Github, FileText } from 'lucide-react'

interface Project {
  enabled?: boolean
  title: string
  hook: string
  approach: string
  diagramLabel: string
  tags: string[]
  imageSrc?: string
  imageAlt?: string
  links?: {
    paper?: string
    github?: string
    demo?: string
  }
}

const projects: Project[] = [
  {
    title: 'ABIDE Graph Classifier',
    hook: 'Do graph neural networks actually help ASD vs control classification when all models share the same ABIDE connectivity pipeline?',
    approach:
      'Using ABIDE preprocessed resting-state fMRI (n=1035), I built a shared pipeline that derives Fisher z-transformed functional connectivity and compares matrix models (Logistic Regression, MLP) against graph models (GCN, GAT). On the held-out test set, Logistic Regression achieved the highest ROC-AUC (0.7228), suggesting the current top-k graph formulation (k=10) did not outperform simpler baselines in this setup.',
    diagramLabel: 'Model Comparison (ROC-AUC)',
    tags: ['fMRI', 'PyTorch Geometric', 'Graph ML', 'ASD Classification'],
    imageSrc: '/abide.png',
    imageAlt: 'Graph representation sample from ABIDE Graph Classifier',
    links: {
      github: 'https://github.com/SuiseiNakagawa/abide-classifier',
    },
  },
  {
    title: 'Applied Bayesian Missing Persons Model (mispitools)',
    hook: 'How can Bayesian evidence aggregation improve inference in missing persons search when integrating non-genetic and uncertain information sources?',
    approach:
      'Worked with an existing R-based Bayesian framework (mispitools) for incorporating non-genetic evidence in missing persons search. Conducted exploratory analysis on case-study data, validated model behavior through simulation-based checks, and contributed to a methods-focused write-up interpreting probabilistic outputs under varying assumptions.',
    diagramLabel: 'App Icon',
    tags: ['Bayesian Modeling', 'R', 'Applied Statistics', 'Probabilistic Inference'],
    imageSrc: '/MispiIcon.png',
    imageAlt: 'Bayesian inference workflow diagram for missing persons model',
    links: {
      github: 'https://github.com/MarsicoFL/mispitools',
      demo: 'https://www.loom.com/share/460f99a92c024ebd9690293b9aa9a8fe',
    },
  },
  {
    title: 'Stylometric Drift Detection in Personal Writing',
    hook: 'Can stylistic features of writing be used to detect distribution shifts in authorship over time?',
    approach:
      'Built a supervised classification pipeline to analyze stylistic differences in 50 personal academic documents written before and after Fall 2024. Extracted 12 stylometric features capturing lexical, structural, punctuation, and function-word usage, and trained Naive Bayes, Logistic Regression, and linear SVM models under stratified cross-validation. Models achieved ~55-58% cross-validation accuracy with consistent holdout performance, suggesting weak but detectable stylistic signal under limited data conditions.',
    diagramLabel: 'Stylometric Feature Pipeline',
    tags: ['NLP', 'Stylometry', 'Classification', 'Text Analysis'],
    imageSrc: '/stylistic_drift.png',
    imageAlt: 'Feature pipeline for stylometric drift detection across writing samples',
    links: {
      github: 'https://github.com/SuiseiNakagawa/stylistic-drift-analysis',
    },
  },
  {
    enabled: false,
    title: 'Attention-Based Time Series Forecasting',
    hook: 'Can transformers reliably capture long-range temporal dependencies in noisy, irregularly-sampled data?',
    approach:
      'We introduce a sparse self-attention mechanism tailored for time-series that selectively attends to salient historical windows. Evaluated across energy, financial, and biomedical benchmarks, our approach reduces MSE by 15% relative to full-attention baselines while halving computational cost.',
    diagramLabel: 'Architecture Diagram',
    tags: ['PyTorch', 'Transformers', 'Time Series'],
  },
  {
    enabled: false,
    title: 'Few-Shot Learning for Medical Imaging',
    hook: 'Medical datasets are costly to annotate — can we adapt to new pathologies from only 5–10 labeled examples?',
    approach:
      'Building on prototypical networks, we augment the embedding space with anatomy-aware geometric priors derived from segmentation masks. The approach achieves strong few-shot accuracy on CheXpert and PathMNIST without fine-tuning, generalizing across imaging modalities.',
    diagramLabel: 'Results Visualization',
    tags: ['PyTorch', 'Medical Imaging', 'Meta-Learning'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-10 border-t border-[#E0DDD6]">
      <div className="max-w-container mx-auto">

        {/* Section heading */}
        <div className="mb-10 reveal">
          <p className="t-meta text-accent mb-2">Projects</p>
          <h2 className="t-section-heading section-heading-accent">Research Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal-group">
          {projects.filter((project) => project.enabled !== false).map((project, i) => (
            <article key={i} className="project-card">

              {/* Diagram placeholder */}
              {project.imageSrc ? (
                <div className="w-full h-44 relative overflow-hidden rounded-t-[inherit] border-b border-[#E0DDD6] bg-[#F7F4EF]">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? `${project.diagramLabel} for ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-44 placeholder-img"
                  role="img"
                  aria-label={`${project.diagramLabel} for ${project.title}`}
                >
                  <span>{project.diagramLabel}</span>
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-col gap-3 p-6 flex-1">

                {/* Title */}
                <h3 className="t-card-title">{project.title}</h3>

                {/* Hook — italicized research question */}
                <p className="font-serif text-[0.9rem] italic text-accent-light font-semibold leading-snug">
                  {project.hook}
                </p>

                {/* Approach */}
                <p className="t-small-body">{project.approach}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex items-center gap-5 pt-3 mt-1 border-t border-[#E0DDD6]">
                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        className="icon-link-sm"
                        aria-label={`Paper for ${project.title}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FileText size={12} strokeWidth={2} />
                        <span>Paper</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="icon-link-sm"
                        aria-label={`GitHub for ${project.title}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={12} strokeWidth={2} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="icon-link-sm"
                        aria-label={`Demo for ${project.title}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={12} strokeWidth={2} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
