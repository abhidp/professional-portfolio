'use client'

import { useState } from 'react'
import Image from 'next/image'
import { experience } from '@/data/portfolio-data'

function CompanyLogo({
  logo,
  initials,
  company
}: {
  logo: string
  initials: string
  company: string
}) {
  const [imgError, setImgError] = useState(false)

  if (imgError || !logo) {
    return (
      <div className='w-14 h-14 rounded-lg bg-accent/10 border border-card-border/20 flex items-center justify-center shrink-0'>
        <span className='text-sm font-bold text-accent'>{initials}</span>
      </div>
    )
  }

  return (
    <div className='w-14 h-14 rounded-lg bg-white/10 border border-card-border/20 flex items-center justify-center shrink-0 overflow-hidden'>
      <Image
        src={logo}
        alt={`${company} logo`}
        width={48}
        height={48}
        className='object-contain'
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export default function Experience() {
  return (
    <section id='experience' className='mb-16 lg:mb-24 scroll-mt-24'>
      <h3 className='text-sm font-bold uppercase tracking-widest text-accent mb-8 lg:hidden'>
        Experience
      </h3>
      <div className='space-y-2'>
        {experience.map((role) => (
          <div
            key={role.dateRange}
            className='group rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-card-border hover:bg-card-bg/50 hover:backdrop-blur-sm'
          >
            <div className='flex gap-4'>
              <CompanyLogo
                logo={role.logo}
                initials={role.initials}
                company={role.company}
              />
              <div className='flex-1 min-w-0'>
                <h4 className='text-lg font-semibold text-text-heading group-hover:text-accent transition-colors'>
                  {role.company}
                </h4>
                <p className='mt-1 text-base font-semibold text-text-muted'>
                  {role.role}
                  <span className='font-normal text-sm'>
                    {' '}
                    · {role.dateRange}
                  </span>
                </p>
                <p className='mt-3 text-sm text-text-muted leading-relaxed'>
                  {role.description}
                </p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6 pl-5'>
        <a
          href='/Abhi_Das_Lead_QA_Engineer.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='group inline-flex items-center gap-1 text-sm font-medium text-text-heading hover:text-accent transition-colors'
        >
          View Full Resume
          <span className='inline-block transition-transform group-hover:translate-x-1'>
            →
          </span>
        </a>
      </div>
    </section>
  )
}
