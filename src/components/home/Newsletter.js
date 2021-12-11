import { IconContainer } from '@/components/home/common'
import { ReactComponent as Icon } from '@/img/icons/home/newsletter.svg'
import { gradients } from '@/utils/gradients'
import React from 'react'

export function Newsletter() {
  return (
    <section id="newsletter">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 mb-10 sm:mb-8 md:mb-20">
        <IconContainer className={`${gradients.blue[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <p className="text-3xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold text-gray-900 tracking-tight mb-8">Want product news and updates?</p>
        <p className="max-w-4xl text-lg sm:text-2xl text-center font-medium sm:leading-10 space-y-6">Subscribe to our newsletter.</p>
      </div>
      <div className="max-w-xl mx-auto">
        <div id="revue-embed">
          <form action="https://www.getrevue.co/profile/javaistic/add_subscriber" double_opt_in="false" method="post" id="revue-form" name="revue-form" target="_blank">
            <div className="flex flex-center flex-wrap p-5 pb-1 space-y-4 sm:space-y-4 sm:space-x-0 text-center mt-1">
              <label htmlFor="member_email">Email address</label>
              <input className="flex-none w-full px-4 py-4 font-medium text-lg bg-gray-100 hover:shadow-lg rounded-lg border border-gray-400 focus:outline-none" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
            </div>
            <div className="flex flex-center flex-wrap p-5 pb-1 space-y-4 sm:space-y-4 sm:space-x-0 text-center">
              <label htmlFor="member_first_name">First name <span className="optional">(Optional)</span></label>
              <input className="flex-none w-full px-4 py-4 font-medium text-lg bg-gray-100 hover:shadow-lg rounded-lg border border-gray-400 focus:outline-none" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name" />
            </div>
            <div className="flex flex-center flex-wrap p-5 pb-1 space-y-4 sm:space-y-4 sm:space-x-0 text-center">
              <label htmlFor="member_last_name">Last name <span className="optional">(Optional)</span></label>
              <input className="flex-none w-full px-4 py-4 font-medium text-lg bg-gray-100 hover:shadow-lg rounded-lg border border-gray-400 focus:outline-none" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name" />
            </div>
            <div className="flex flex-center flex-wrap p-5 pb-1 space-y-4 sm:space-y-4 sm:space-x-0 text-center">
              <input className="w-full px-6 py-4 sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md hover:shadow-lg leading-6 font-semibold border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
            </div>
            <div className="p-5 lg:p-0 lg:pt-3 sm:p-5 text-base flex-center">By subscribing, you agree with Revue’s <a target="_blank" className="text-blue-500 font-medium underline" href="https://www.getrevue.co/terms" rel="noreferrer">Terms of Service</a> and <a target="_blank" className="text-blue-500 font-medium underline" href="https://www.getrevue.co/privacy" rel="noreferrer">Privacy Policy</a>.</div>
          </form>
        </div>
      </div>
    </section>
  )
}
