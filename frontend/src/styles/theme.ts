/* Button Component */
export type ButtonVariants = 'transparent' | 'primary' | 'secondary' | 'basic' | 'danger'
export type ButtonSizes = 'sm' | 'md' | 'lg'

export const ButtonVariant = {
  transparent: 'transition-all duration-300 ease-in-out',
  primary:
    'bg-primary hover:bg-[#3755f6] text-white font-normal disabled:cursor-not-allowed disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  secondary:
    'bg-secondary hover:bg-[#302f2f] text-white font-normal disabled:cursor-not-allowed disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  basic:
    'bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal disabled:cursor-not-allowed disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  danger:
    'bg-red-300 hover:bg-red-500 text-white font-normal disabled:cursor-not-allowed disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out'
}

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg'
}
/* Button Component */

/* Heading Component */
export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const HeadingType = {
  h1: 'text-5xl font-extrabold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold'
}
/* Heading Component */

/* Input Component */

export type InputVariants = 'basic' | 'success' | 'error' | 'disabled'
export type InputSizes = 'sm' | 'md' | 'lg'

export const InputVariant = {
  basic:
    'block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500',
  success:
    'block w-full bg-green-50 border border-green-500 text-green-900 placeholder-green-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500',
  error:
    'block w-full bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500',
  disabled:
    'block w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed'
}

export const InputSize = {
  sm: 'p-2 text-sm',
  md: 'p-4 text-base',
  lg: 'p-6 text-lg'
}
/* Input Component */

/* Spinner Component */
export type SpinnerVariants = 'primary' | 'secondary' | 'basic'
export type SpinnerSizes = 'sm' | 'md' | 'lg'

export const SpinnerVariant = {
  primary: 'text-gray-200 animate-spin fill-blue-600',
  secondary: 'text-gray-200 animate-spin fill-slate-600',
  basic: 'text-gray-200 animate-spin fill-gray-400'
}

export const SpinnerSize = {
  sm: 'w-4 h-4 text-xs',
  md: 'w-6 h-6 text-base',
  lg: 'w-8 h-8 text-lg'
}
/* Spinner Component */
