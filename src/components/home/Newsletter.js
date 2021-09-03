import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { BigText, IconContainer, Paragraph, Widont } from '@/components/home/common'
import { ReactComponent as Icon } from '@/img/icons/home/newsletter.svg'
import { gradients } from '@/utils/gradients'

export function Newsletter() {
  const [state, handleSubmit] = useForm('moqyyjvo', {
    data: {
      _subject: 'Someone joined the newsletter',
      pageTitle: function () {
        // This function will be evaluated at submission time
        return document.title
      },
    },
  })
  if (state.succeeded) {
    return (
      <div className="p-5 m-5 flex flex-wrap font-semibold hover:shadow-lg rounded-lg border border-green-400 bg-green-300 text-green-900 ">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </span>
        Congratulations!
        <p className="font-normal pl-2">You have successfully subscribed to our newsletter.</p>
      </div>
    )
  }
  return (
    <section id="newsletter">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.blue[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <BigText className="mb-8">
          <Widont>Want product news and updates?</Widont>
        </BigText>
        <Paragraph className="mb-6">Sign Up for our weekly newsletter.</Paragraph>
      </div>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} class="mt-2">
          <div className="flex flex-center flex-wrap p-5 space-y-4 sm:space-y-4 sm:space-x-0 text-center mt-12">
            <input
              id="email"
              type="email"
              name="email"
              className="flex-none w-full px-4 py-4 font-medium text-lg bg-gray-100 hover:shadow-lg rounded-lg border border-gray-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="p-5 rounded-lg w-full flex-none hover:shadow-lg font-semibold border border-red-400 bg-red-300 text-red-900"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-4 sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md hover:shadow-lg leading-6 font-semibold border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200"
            >
              Sign Up
            </button>
            <p className="pt-2 text-base flex-center">
              We care about the protection of your data. Read our{' '}
              <a className="text-blue-500 font-medium underline" href="/">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
