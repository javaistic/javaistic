import { gradients } from '@/utils/gradients'
import { motion } from 'framer-motion'
import styles from './GradientLockup.module.css'

const rotation = {
  '-1': '-rotate-1',
  '-2': '-rotate-1 sm:-rotate-2',
  1: 'rotate-1',
  2: 'rotate-1 sm:rotate-2',
}

export function GradientLockup({
  header,
  left,
  right,
  color,
  rotate,
  pin = 'left',
  gradientProps = {},
}) {
  return (
    <div className={`grid ${styles.root}`}>
      <div
        className={`col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 ${
          left && right ? 'row-start-2 row-end-4' : 'row-start-2 row-end-5'
        } flex lg:row-end-5 lg:py-10 xl:py-16 ${
          pin === 'left' ? '-ml-8 pr-4 sm:ml-0 sm:pr-0' : '-mr-8 pl-4 sm:mr-0 sm:pl-0'
        }`}
      >
        <div className="w-full flex-none rounded-3xl bg-gray-100" />
        <motion.div
          className={`-ml-full w-full flex-none transform rounded-3xl bg-gradient-to-br shadow-lg ${gradients[color][0]} ${rotation[rotate]}`}
          {...gradientProps}
        />
      </div>
      {header && (
        <div className="relative col-start-1 col-end-4 row-start-1 row-end-2 px-4 pb-8 sm:px-6 md:px-8 lg:col-start-2 lg:col-end-4 lg:px-0 lg:pb-11 xl:col-end-3 xl:row-end-3 xl:pb-0">
          {header}
        </div>
      )}
      {left && right ? (
        <>
          <div
            className={`relative col-start-2 col-end-3 row-start-2 row-end-3 self-center lg:col-end-3 lg:row-start-3 lg:row-end-4 ${
              pin === 'left' ? 'pr-8' : 'pl-8'
            } pt-6 sm:px-6 md:px-8 md:pt-8 lg:px-0 lg:pt-0`}
          >
            {left}
          </div>
          <div className="relative col-start-1 col-end-4 row-start-3 row-end-4 w-full self-center pb-8 md:px-8 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:w-auto lg:px-0 lg:pb-0">
            {right}
          </div>
        </>
      ) : (
        <div className="relative col-start-1 col-end-4 row-start-2 row-end-5 w-full py-8 md:px-8 lg:col-start-2 lg:p-0">
          {left || right}
        </div>
      )}
    </div>
  )
}
