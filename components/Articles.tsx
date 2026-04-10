import { articles } from '@/data/portfolio-data'
import { ArrowUpRight } from 'lucide-react'

export default function Articles() {
  return (
    <section id='articles' className='mb-16 lg:mb-24 scroll-mt-24'>
      <h3 className='text-sm font-bold uppercase tracking-widest text-accent mb-8 lg:hidden'>
        Articles
      </h3>
      <div className='space-y-2'>
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            className='group block rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-card-border hover:bg-card-bg/50 hover:backdrop-blur-sm'
          >
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='sm:w-32 shrink-0'>
                <span className='text-xs font-medium text-text-muted'>
                  {article.date}
                </span>
              </div>
              <div className='flex-1'>
                <h4 className='font-semibold text-text-heading group-hover:text-accent transition-colors leading-snug'>
                  {article.title}
                  <ArrowUpRight className='inline-block ml-1 w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0' />
                </h4>
                <p className='mt-2 text-sm text-text-muted leading-relaxed'>
                  {article.summary}
                </p>
                <div className='mt-3 flex items-center gap-3'>
                  <span className='rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent'>
                    {article.tag}
                  </span>
                  <span className='text-xs text-text-muted'>
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
