import { gradients } from '@/utils/gradients'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const colors = {
  violet: [gradients.violet[0], 'text-purple-100', 'bg-purple-100'],
  pink: [gradients.pink[0], 'text-rose-100', 'bg-rose-100'],
  blue: [gradients.blue[0], 'text-sky-100', 'bg-sky-100'],
  black: [gradients.black[0], 'text-gray-100', 'bg-gray-100'],
  teal: [gradients.teal[0], 'text-green-100', 'bg-green-100'],
  purple: [gradients.purple[0], 'text-fuchsia-100', 'bg-fuchsia-100'],
  lightblue: [gradients.lightblue[0], 'text-cyan-100', 'bg-cyan-100'],
  amber: [gradients.amber[0], 'text-orange-100', 'bg-orange-100'],
  orange: [gradients.orange[0], 'text-orange-100', 'bg-orange-100'],
}

const rotation = [-2, 1, -1, 2, -1, 1]

const testimonials = [
  {
    content: 'Talk is cheap. Show me the code.',
    author: {
      name: 'Linus Trovalds',
      role: 'Creator of Linux',
      avatar: require('@/img/avatars/linus-trovalds.webp').default,
    },
  },
  {
    content:
      'The people who are crazy enough to think they can change the world are the ones who do.',
    author: {
      name: 'Steve Jobs',
      role: 'Founder @ Apple Inc.',
      avatar: require('@/img/avatars/steve-jobs.webp').default,
    },
  },
  {
    content: `I choose a lazy person to do a hard job. Because a lazy person will find a easy way to do it.`,
    author: {
      name: 'Bill Gates',
      role: 'Founder @ Microsoft Inc.',
      avatar: require('@/img/avatars/bill-gates.webp').default,
    },
  },
  {
    content: `  Everything that has not been hyperlinked will soon be hyperlinked.`,
    author: {
      name: 'Guillermo Rauch',
      role: 'Founder @ Vercel.',
      avatar: require('@/img/avatars/guillermo-rauch.webp').default,
    },
  },
  {
    content: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    author: {
      name: 'Martin Fowler',
      role: 'Programmer',
      avatar: require('@/img/avatars/martin-fowler.webp').default,
    },
  },
  {
    content: 'Truth can only be found in one place: the code.',
    author: {
      name: `Robert C. Martin`,
      role: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      avatar: require('@/img/avatars/robert-martin.webp').default,
    },
  },
  {
    content: `Java is to JavaScript what car is to Carpet.`,
    author: {
      name: 'Chris Heilmann',
      role: 'Programmer',
      avatar: require('@/img/avatars/chris-heilmann.webp').default,
    },
  },
  {
    content: ' Code is like humor. When you have to explain it, it’s bad.',
    author: {
      name: 'Corey House',
      role: `Founder @ ReactJS Consulting`,
      avatar: require('@/img/avatars/corey-house.webp').default,
    },
  },
]

function Testimonial({ testimonial, base, index, total }) {
  const x = useTransform(
    base,
    [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
    ['0%', `${(index + 1) * -100}%`, `${total * 100 - (index + 1) * 100}%`, '0%']
  )
  const [straight, setStraight] = useState(false)

  const color = colors[Object.keys(colors)[index % Object.keys(colors).length]]

  return (
    <motion.li
      className="flex-none px-3 md:px-4"
      onMouseEnter={() => setStraight(true)}
      onMouseLeave={() => setStraight(false)}
      style={{ x }}
    >
      <motion.figure
        className="w-80 flex-none rounded-xl shadow-lg md:w-xl"
        initial={false}
        animate={straight ? { rotate: 0 } : { rotate: rotation[index % rotation.length] }}
      >
        <blockquote className="rounded-t-xl bg-white px-6 py-8 text-lg font-semibold leading-8 text-gray-900 dark:bg-gray-800 md:p-10 md:text-xl md:leading-8">
          <svg width="45" height="36" className={`mb-5 fill-current ${color[1]}`}>
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z" />
          </svg>
          {typeof testimonial.content === 'string' ? (
            <p className="text-gray-900 dark:text-gray-300">{testimonial.content}</p>
          ) : (
            testimonial.content
          )}
        </blockquote>
        <figcaption
          className={`flex items-center space-x-4 rounded-b-xl bg-gradient-to-br p-6 font-semibold leading-6 text-white md:px-10 md:py-6 ${color[0]}`}
        >
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white p-1">
            <Image
              src={testimonial.author.avatar}
              alt={testimonial.author.name}
              className={`h-12 w-12 rounded-full ${color[2]}`}
              width={416}
              height={416}
              quality={100}
              blurDataURL={testimonial.author.avatar}
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="flex-auto">
            {testimonial.author.name}
            {testimonial.author.role && (
              <>
                <br />
                <span className={color[1]}>{testimonial.author.role}</span>
              </>
            )}
          </div>
          {testimonial.tweetUrl && (
            <cite className="flex">
              <a
                href={testimonial.tweetUrl}
                className="opacity-50 transition-opacity duration-200 hover:opacity-75"
              >
                <span className="sr-only">Original tweet by {testimonial.author.name}</span>
                <svg width="33" height="32" fill="currentColor">
                  <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z" />
                </svg>
              </a>
            </cite>
          )}
        </figcaption>
      </motion.figure>
    </motion.li>
  )
}

export function Testimonials() {
  const x = useMotionValue(0)
  const { inView, ref: inViewRef } = useInView({ threshold: 0, rootMargin: '100px' })
  const [duration, setDuration] = useState(150)

  useEffect(() => {
    if (!inView) return

    const controls = animate(x, 100, {
      type: 'tween',
      duration,
      ease: 'linear',
      repeatType: 'loop',
    })

    return controls.stop
  }, [inView, x, duration])

  return (
    <div
      ref={inViewRef}
      className="relative"
      onMouseEnter={() => setDuration(250)}
      onMouseLeave={() => setDuration(150)}
    >
      <div
        className="pointer-events-none absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 dark:from-gray-900"
        style={{ height: 607, maxHeight: '50vh' }}
      />
      <div className="-my-8 flex overflow-hidden">
        <ul className="flex w-full items-center py-8">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              testimonial={testimonial}
              base={x}
              index={i}
              total={testimonials.length}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
