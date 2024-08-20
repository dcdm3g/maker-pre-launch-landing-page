'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from '@/lib/framer-motion'

const getNotifiedFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Oops! Please add your email')
    .email('Oops! That doesn’t look like an email address'),
})

type GetNotifiedFormData = z.infer<typeof getNotifiedFormSchema>

export function GetNotifiedForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<GetNotifiedFormData>({
    resolver: zodResolver(getNotifiedFormSchema),
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: '' }, { keepIsSubmitted: false })
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form
      className="flex w-full flex-col gap-6 tablet:flex-row tablet:gap-4 desktop:w-[calc(100%_-_16rem)] desktop:min-w-[29.75rem]"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSubmit={handleSubmit(() => {})}
    >
      <motion.div
        className="flex flex-1 flex-col gap-1"
        initial={{ x: -25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <input
          className={`rounded-3xl border-2 border-midnight-navy bg-midnight-navy px-4 py-2 text-base font-extrabold text-pure-white placeholder-opacity-40 transition-colors focus:border-aqua-splash focus:outline-none ${
            errors.email ? 'focus:border-raspberry-pink' : ''
          }`}
          type="email"
          placeholder="Email address"
          autoComplete="email"
          {...register('email')}
        />

        {errors.email && (
          <p className="ml-4 text-[0.75rem] font-medium leading-[1.5625rem] text-raspberry-pink">
            {errors.email.message}
          </p>
        )}
      </motion.div>

      <motion.button
        className="h-min min-w-max rounded-3xl border-2 border-aqua-splash bg-aqua-splash px-10 py-2 text-center text-base font-extrabold text-midnight-navy transition-colors hover:bg-transparent hover:text-pure-white focus:bg-transparent focus:text-pure-white focus:outline-none tablet:px-4"
        type="submit"
        initial={{ x: 25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Get notified
      </motion.button>
    </form>
  )
}
