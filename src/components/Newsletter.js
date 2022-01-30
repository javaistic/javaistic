import { IconContainer } from '@/components/home/common'
import { ReactComponent as Icon } from '@/img/icons/home/newsletter.svg'
import { gradients } from '@/utils/gradients'
import React from 'react'

export function Newsletter() {
  return (
    <section id="newsletter">
      <div className="mb-10 flex flex-col items-center justify-center px-4 sm:mb-8 sm:px-6 md:mb-20 md:px-8">
        <IconContainer className={`${gradients.blue[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <p className="mb-8 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Want product news and updates?
        </p>
        <p className="max-w-4xl space-y-6 text-center text-lg font-medium sm:text-2xl sm:leading-10">
          Subscribe to our newsletter.
        </p>
      </div>
      <div className="mx-auto max-w-xl">
        <div id="revue-embed">
          <form
            action="https://www.getrevue.co/profile/javaistic/add_subscriber"
            double_opt_in="false"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <div className="flex-center mt-1 flex flex-wrap space-y-4 p-5 pb-1 text-center sm:space-y-4 sm:space-x-0">
              <label htmlFor="member_email">Email address</label>
              <input
                className="focus:outline-none w-full flex-none rounded-lg border border-gray-400 bg-gray-100 px-4 py-4 text-lg font-medium hover:shadow-lg"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>
            <div className="flex-center flex flex-wrap space-y-4 p-5 pb-1 text-center sm:space-y-4 sm:space-x-0">
              <label htmlFor="member_first_name">
                First name <span className="optional">(Optional)</span>
              </label>
              <input
                className="focus:outline-none w-full flex-none rounded-lg border border-gray-400 bg-gray-100 px-4 py-4 text-lg font-medium hover:shadow-lg"
                placeholder="First name... (Optional)"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
            </div>
            <div className="flex-center flex flex-wrap space-y-4 p-5 pb-1 text-center sm:space-y-4 sm:space-x-0">
              <label htmlFor="member_last_name">
                Last name <span className="optional">(Optional)</span>
              </label>
              <input
                className="focus:outline-none w-full flex-none rounded-lg border border-gray-400 bg-gray-100 px-4 py-4 text-lg font-medium hover:shadow-lg"
                placeholder="Last name... (Optional)"
                type="text"
                name="member[last_name]"
                id="member_last_name"
              />
            </div>
            <div className="flex-center flex flex-wrap space-y-4 p-5 pb-1 text-center sm:space-y-4 sm:space-x-0">
              <input
                className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-blue-700 px-6 py-4 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-blue-600 hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            <div className="flex-center p-5 text-base sm:p-5 lg:p-0 lg:pt-3">
              By subscribing, you agree with Revue’s{' '}
              <a
                target="_blank"
                className="font-medium text-blue-500 underline"
                href="https://www.getrevue.co/terms"
                rel="noreferrer"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                target="_blank"
                className="font-medium text-blue-500 underline"
                href="https://www.getrevue.co/privacy"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
